// import chalk from "chalk";
import path from "path";
import fs from "fs";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import { parse as parseVue } from "@vue/compiler-sfc";

const exportedAllList = new Map();
const errorList = new Set();
let aliases = null;

// 获取文件中导出的方法名
function getExportedMethods(code, fullPath, importPath) {
  if (exportedAllList.has(fullPath)) {
    return;
  }
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
    allowUndeclaredExports: true,
  });
  const exportedMethods = new Set();
  traverse.default(ast, {
    noScope: true,
    // CommonJS exports
    AssignmentExpression(path) {
      // module.exports = { ... }
      if (
        t.isMemberExpression(path.node.left) &&
        t.isIdentifier(path.node.left.object, { name: "module" }) &&
        t.isIdentifier(path.node.left.property, { name: "exports" }) &&
        t.isObjectExpression(path.node.right)
      ) {
        path.node.right.properties.forEach((prop) => {
          if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
            exportedMethods.add(prop.key.name);
          }
        });
      }
      // exports.func = ...
      else if (
        t.isMemberExpression(path.node.left) &&
        t.isIdentifier(path.node.left.object, { name: "exports" }) &&
        t.isIdentifier(path.node.left.property)
      ) {
        exportedMethods.add(path.node.left.property.name);
      }
    },

    // ES Module exports
    ExportNamedDeclaration(path) {
      // export function/const
      if (path.node.declaration) {
        if (t.isVariableDeclaration(path.node.declaration)) {
          path.node.declaration.declarations.forEach((decl) => {
            if (t.isIdentifier(decl.id)) {
              exportedMethods.add(decl.id.name);
            }
          });
        } else {
          if (path.node.declaration?.id) {
            exportedMethods.add(path.node.declaration.id.name);
          }
        }
      }
      // export { func }
      else if (path.node.specifiers) {
        path.node.specifiers.forEach((spec) => {
          if (t.isIdentifier(spec.exported)) {
            exportedMethods.add(spec.exported.name);
          }
        });
      }
    },

    ExportDefaultDeclaration(path) {
      // 将默认导出标记为 'default'
      exportedMethods.add("default");

      // 如果默认导出是对象，收集其方法
      if (t.isObjectExpression(path.node.declaration)) {
        path.node.declaration.properties.forEach((prop) => {
          if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
            exportedMethods.add(`default.${prop.key.name}`);
          }
        });
      }
    },
  });
  exportedAllList.set(fullPath, [...exportedMethods]);
}

/**
 * 将被处理文件中的引用路径转换成绝对路径
 * @param {string} importPath - 引用的路径（如 `@/api`、`./style.css`、`../utils`）
 * @param {string} sourceFile - 被处理的文件路径（如 `src/test/index.js`）
 * @param {Object} aliases - 别名映射（如 `{ "@": "src" }`）
 * @returns {string} 绝对路径
 */
function resolveImportPath(importPath, sourceFile) {
  const extensions = [".js", ".ts", ".tsx", ".jsx", "/index.js", "/index.ts"];
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
  if (fs.existsSync(basePath)) {
    return basePath;
  }
  // 4. 尝试补全扩展名
  for (const ext of extensions) {
    const fullPath = basePath + ext;
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return "";
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

// 2. 检查文件是否包含 api 引用
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
      if (API_PATH_PATTERN.test(importPath)) {
        const resolvedPath = resolveImportPath(importPath, filePath);
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
          getExportedMethods(code, resolvedPath, importPath);

          checkImport(path.node, resolvedPath, filePath);
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
      if ([".js", ".jsx", ".ts", ".mjs", ".cjs", ".vue"].includes(ext)) {
        const API_PATH_PATTERN = new RegExp(
          `^@/(${options.specify.join("|")})/|/(${options.specify.join("|")})/`
        );
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
    aliases = webpackConfig.resolve.alias || {};

    compiler.hooks.compilation.tap(
      "WebpackImportValidationPlugin",
      (compilation) => {
        compilation.hooks.normalModuleLoader.tap(
          "WebpackImportValidationPlugin",
          (loaderContext, module) => {
            if (
              this.options.exclude &&
              this.options.exclude.test(module.resource)
            ) {
              return;
            }
            const ext = path.extname(module.resource);
            if ([".js", ".jsx", ".ts", ".mjs", ".cjs", ".vue"].includes(ext)) {
              const API_PATH_PATTERN = new RegExp(
                `^@/(${this.options.specify.join(
                  "|"
                )})/|/(${this.options.specify.join("|")})/`
              );
              const source = module.originalSource();
              if (!source) return;
              const code = source.source().toString();
              hasApiImport(module.resource, code, API_PATH_PATTERN);

              if (errorList.size > 0) {
                Array.from(errorList).forEach((error) => {
                  console.error(
                    "\n 发现导入验证错误 \n"
                  );
                  console.error(error);
                });
                console.error(
                  "\n 请修复以上错误后重试 \n"
                );
                process.exit();
              }
            }
          }
        );
      }
    );
  }
}
