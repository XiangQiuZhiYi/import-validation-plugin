// import chalk from "chalk";
import path from "path";
import fs from "fs";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import { parse as parseVue } from "@vue/compiler-sfc";
import getExport from "./getExport";
import getCitation from "./getCitation";

const exportedAllList = {};
const errorList = new Set();
let aliases = null;

// 获取文件中导出的方法名
function getExportedMethods(code, fullPath) {
  exportedAllList[fullPath] = getExport(code);
}

/**
 * 将被处理文件中的引用路径转换成绝对路径
 * @param {string} importPath - 引用的路径（如 `@/api`、`./style.css`、`../utils`）
 * @param {string} sourceFile - 被处理的文件路径（如 `src/test/index.js`）
 * @param {Object} aliases - 别名映射（如 `{ "@": "src" }`）
 * @returns {string} 绝对路径
 */
function resolveImportPath(importPath, sourceFile) {
  let basePath = "";
  // 1. 如果已经是绝对路径，直接返回
  if (path.isAbsolute(importPath)) {
    basePath = importPath;
  } else {
    if (importPath.startsWith(".")) {
      basePath = path.resolve(path.dirname(sourceFile), importPath);
    } else if (aliases) {
      for (const [alias, aliasPath] of Object.entries(aliases)) {
        if (importPath.startsWith(alias)) {
          const remainingPath = importPath.slice(alias.length + 1);
          basePath = path.resolve(aliasPath, remainingPath);
          break;
        }
      }
    }
  }
  return basePath;
}

// 检查引用文件的语法树是否包含在对应的文件中
function checkImport(path, fullPath, filePath) {
  path.specifiers.forEach((spec) => {
    if (t.isImportDefaultSpecifier(spec)) {
      if (
        !exportedAllList.has(fullPath) ||
        !exportedAllList.get(fullPath).includes("default")
      ) {
        if (spec.loc) {
          const { line, column } = spec.loc.start;
          errorList.add(
            `🔴 ERROR: 未找到默认导出: "${spec.local.name}" at ${filePath}:${line}:${column}`
          );
        } else {
          errorList.add(`🔴 ERROR: 未找到默认导出: "${spec.local.name}"`);
        }
      }
    }
    if (t.isImportSpecifier(spec)) {
      const importedName = t.isIdentifier(spec.imported)
        ? spec.imported.name
        : spec.imported.value;
      if (
        !exportedAllList.has(fullPath) ||
        !exportedAllList.get(fullPath).includes(importedName)
      ) {
        if (spec.loc) {
          const { line, column } = spec.loc.start;
          errorList.add(
            `🔴 ERROR: 未找到对应的导出: "${importedName}" at ${filePath}:${line}:${column}`
          );
        } else {
          errorList.add(`🔴 ERROR: 未找到对应的导出: "${importedName}"`);
        }
      }
    }
  });
}

/**
 * 检查是否存在
 * @param resolvedPath 被引用的文件路径 
 * @param citations 引用数据集
 * @param defaultBol 是否为默认导入
 */
function checkExists(resolvedPath, citations, defaultBol = false){
  const obj = exportedAllList[resolvedPath]
  if(defaultBol && !('export default' in obj)){
    errorList.add(
      `🔴 ERROR: 未找到对应的默认导出: "${item.context}" at ${item.filePath}:${item.line}:${item.column}`
    );
  }

  citations.forEach((item) => {
    if (defaultBol) {
      const value = item.context.split(".")[1]
      if (value && value in obj["export default"] === false) {
        errorList.add(
          `🔴 ERROR: 未找到对应可使用的属性: "${item.context}" at ${item.filePath}:${item.line}:${item.column}`
        );
      }
    } else {
      const key = item.context.split(".")[0]
      const value = item.context.split(".")[1]
      if(key in obj === false){
         errorList.add(
          `🔴 ERROR: 未找到对应的导出: "${item.context}" at ${item.filePath}:${item.line}:${item.column}`
        );
      }else if(value && value in obj[key] === false){
        errorList.add(
          `🔴 ERROR: 未找到对应可使用的属性: "${item.context}" at ${item.filePath}:${item.line}:${item.column}`
        );
      }
    }
  })
} 

/**
 * 检查文件是否包含 api 引用
 * @param filePath 当前文件路径
 * @param code 当前文件code
 * @param API_PATH_PATTERN 要匹配的地址
 * @returns 
 */
function hasApiImport(filePath, code, API_PATH_PATTERN) {
  const ext = path.extname(filePath);
  let ast;

  // 处理 Vue 单文件组件
  if (ext === ".vue") {
    try {
      const { descriptor } = parseVue(code);
      if (!descriptor.script && !descriptor.scriptSetup) return false;
      const scriptContent =
        descriptor.script?.content || descriptor.scriptSetup?.content || "";
      ast = parse(scriptContent, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
        allowUndeclaredExports: true,
      });
    } catch (e) {
      console.error(`Failed to parse ${filePath}:`, e);
      return false;
    }
  }
  // 处理 JS/TS 文件
  else {
    try {
      ast = parse(code, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
        allowUndeclaredExports: true,
      });
    } catch (e) {
      console.error(`Failed to parse ${filePath}:`, e);
      return false;
    }
  }

  // 3. 遍历 AST 查找 import 语句
  traverse.default(ast, {
    // 静态导入: import ... from 'xxx'
    ImportDeclaration(path) {
      const importPath = path.node.source.value;
      let resolvedPath = "";
      const basePath = resolveImportPath(importPath, filePath);
      if (API_PATH_PATTERN.test(basePath)) {
        const extensions = [
          ".js",
          ".ts",
          ".tsx",
          ".jsx",
          "/index.js",
          "/index.ts",
        ];

        if (fs.existsSync(basePath)) {
          resolvedPath = basePath;
        }
        // 4. 尝试补全扩展名
        for (const ext of extensions) {
          const fullPath = basePath + ext;
          if (fs.existsSync(fullPath)) {
            resolvedPath = fullPath;
          }
        }

        if (resolvedPath === "") {
          if (path.node.loc) {
            const { line, column } = path.node.loc.start;
            errorList.add(
              `🔴 ERROR: 未找到对应的导出: "${importPath}" at ${filePath}:${line}:${column}`
            );
          } else {
            errorList.add(`🔴 ERROR: 未找到对应的导出: "${importPath}"`);
          }
        } else {
          const code = fs.readFileSync(resolvedPath, "utf-8");
          getExportedMethods(code, resolvedPath);
          path.node.specifiers.forEach((spec) => {
            if (t.isImportDefaultSpecifier(spec)) {
              const citations = getCitation(filePath, ast, spec.local.name)
              checkExists(resolvedPath, citations, true)
            }
            if (t.isImportSpecifier(spec)) {
              const citations = getCitation(filePath, ast, spec.imported.name)
              checkExists(resolvedPath, citations)
            }
          })
        }
      }
    },
  });
}

export function importValidationForVite(options) {
  return {
    name: "vite-plugin-import-validation",
    enforce: "pre",

    config(config) {
      aliases = config.resolve.alias;
    },

    async transform(code, id) {
      // 跳过排除的文件
      if (options.exclude && options.exclude.test(id)) {
        return null;
      }
      const ext = path.extname(id);
      if (
        [".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(ext)
      ) {
        const newSpecify = options.specify.map((item) => {
          return path.join(process.cwd(), item);
        });
        const API_PATH_PATTERN = new RegExp(`^(${newSpecify.join("|")})/`);
        hasApiImport(id, code, API_PATH_PATTERN);
        if (errorList.size > 0) {
          Array.from(errorList).forEach((error) => {
            console.error("\n 发现导入验证错误 \n");
            console.error(error);
          });
          process.exit();
        }
      }
      return null;
    },
  };
}

export class importValidationForWebpack {
  constructor(options = {}) {
    this.options = {
      specify: ["api", "enum"],
      skipDefault: false,
      exclude: /node_modules/,
      ...options,
    };
  }

  apply(compiler) {
    const webpackConfig = compiler.options;
    aliases = webpackConfig?.resolve?.alias || {};

    compiler.hooks.compilation.tap(
      "WebpackImportValidationPlugin",
      (compilation) => {
        compilation.hooks.succeedModule.tap(
          "WebpackImportValidationPlugin",
          (module) => {
            if (
              this.options.exclude &&
              this.options.exclude.test(module.resource)
            ) {
              return;
            }
            const ext = path.extname(module.resource);
            if (
              [".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(
                ext
              )
            ) {
              const newSpecify = this.options.specify.map((item) => {
                return path.join(process.cwd(), item);
              });
              const API_PATH_PATTERN = new RegExp(
                `^(${newSpecify.join("|")})/`
              );

              const source = module.originalSource();
              if (!source) return;
              const code = source.source().toString();
              hasApiImport(module.resource, code, API_PATH_PATTERN);
              if (errorList.size > 0) {
                console.error("\n 发现导入验证错误 \n");
                Array.from(errorList).forEach((error) => {
                  console.error(error);
                });
                console.error("\n 请修复以上错误后重试 \n");
                process.exit();
              }
            }
          }
        );
      }
    );
  }
}
