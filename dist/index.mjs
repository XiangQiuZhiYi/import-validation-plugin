// src/index.js
import path from "path";
import fs from "fs";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import { parse as parseVue } from "@vue/compiler-sfc";
var exportedAllList = /* @__PURE__ */ new Map();
var errorList = /* @__PURE__ */ new Set();
var aliases = null;
function getExportedMethods(code, fullPath) {
  if (exportedAllList.has(fullPath)) {
    return;
  }
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
    allowUndeclaredExports: true
  });
  const exportedMethods = /* @__PURE__ */ new Set();
  traverse.default(ast, {
    noScope: true,
    // CommonJS exports
    AssignmentExpression(path2) {
      if (t.isMemberExpression(path2.node.left) && t.isIdentifier(path2.node.left.object, { name: "module" }) && t.isIdentifier(path2.node.left.property, { name: "exports" }) && t.isObjectExpression(path2.node.right)) {
        path2.node.right.properties.forEach((prop) => {
          if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
            exportedMethods.add(prop.key.name);
          }
        });
      } else if (t.isMemberExpression(path2.node.left) && t.isIdentifier(path2.node.left.object, { name: "exports" }) && t.isIdentifier(path2.node.left.property)) {
        exportedMethods.add(path2.node.left.property.name);
      }
    },
    // ES Module exports
    ExportNamedDeclaration(path2) {
      if (path2.node.declaration) {
        if (t.isVariableDeclaration(path2.node.declaration)) {
          path2.node.declaration.declarations.forEach((decl) => {
            if (t.isIdentifier(decl.id)) {
              exportedMethods.add(decl.id.name);
            }
          });
        } else {
          if (path2.node.declaration?.id) {
            exportedMethods.add(path2.node.declaration.id.name);
          }
        }
      } else if (path2.node.specifiers) {
        path2.node.specifiers.forEach((spec) => {
          if (t.isIdentifier(spec.exported)) {
            exportedMethods.add(spec.exported.name);
          }
        });
      }
    },
    ExportDefaultDeclaration(path2) {
      exportedMethods.add("default");
      if (t.isObjectExpression(path2.node.declaration)) {
        path2.node.declaration.properties.forEach((prop) => {
          if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
            exportedMethods.add(`default.${prop.key.name}`);
          }
        });
      }
    }
  });
  exportedAllList.set(fullPath, [...exportedMethods]);
}
function resolveImportPath(importPath, sourceFile) {
  let basePath = "";
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
function checkImport(path2, fullPath, filePath) {
  path2.specifiers.forEach((spec) => {
    if (t.isImportDefaultSpecifier(spec)) {
      if (!exportedAllList.has(fullPath) || !exportedAllList.get(fullPath).includes("default")) {
        if (spec.loc) {
          const { line, column } = spec.loc.start;
          errorList.add(
            `\u{1F534} ERROR: \u672A\u627E\u5230\u9ED8\u8BA4\u5BFC\u51FA: "${spec.local.name}" at ${filePath}:${line}:${column}`
          );
        } else {
          errorList.add(`\u{1F534} ERROR: \u672A\u627E\u5230\u9ED8\u8BA4\u5BFC\u51FA: "${spec.local.name}"`);
        }
      }
    }
    if (t.isImportSpecifier(spec)) {
      const importedName = t.isIdentifier(spec.imported) ? spec.imported.name : spec.imported.value;
      if (!exportedAllList.has(fullPath) || !exportedAllList.get(fullPath).includes(importedName)) {
        if (spec.loc) {
          const { line, column } = spec.loc.start;
          errorList.add(
            `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u5BFC\u51FA: "${importedName}" at ${filePath}:${line}:${column}`
          );
        } else {
          errorList.add(`\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u5BFC\u51FA: "${importedName}"`);
        }
      }
    }
  });
}
function hasApiImport(filePath, code, API_PATH_PATTERN) {
  const ext = path.extname(filePath);
  let ast;
  if (ext === ".vue") {
    try {
      const { descriptor } = parseVue(code);
      if (!descriptor.script && !descriptor.scriptSetup)
        return false;
      const scriptContent = descriptor.script?.content || descriptor.scriptSetup?.content || "";
      ast = parse(scriptContent, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
        allowUndeclaredExports: true
      });
    } catch (e) {
      console.error(`Failed to parse ${filePath}:`, e);
      return false;
    }
  } else {
    try {
      ast = parse(code, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
        allowUndeclaredExports: true
      });
    } catch (e) {
      console.error(`Failed to parse ${filePath}:`, e);
      return false;
    }
  }
  traverse.default(ast, {
    // 静态导入: import ... from 'xxx'
    ImportDeclaration(path2) {
      const importPath = path2.node.source.value;
      let resolvedPath = "";
      const basePath = resolveImportPath(importPath, filePath);
      if (API_PATH_PATTERN.test(basePath)) {
        const extensions = [
          ".js",
          ".ts",
          ".tsx",
          ".jsx",
          "/index.js",
          "/index.ts"
        ];
        if (fs.existsSync(basePath)) {
          resolvedPath = basePath;
        }
        for (const ext2 of extensions) {
          const fullPath = basePath + ext2;
          if (fs.existsSync(fullPath)) {
            resolvedPath = fullPath;
          }
        }
        if (resolvedPath === "") {
          if (path2.node.loc) {
            const { line, column } = path2.node.loc.start;
            errorList.add(
              `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u5BFC\u51FA: "${importPath}" at ${filePath}:${line}:${column}`
            );
          } else {
            errorList.add(`\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u5BFC\u51FA: "${importPath}"`);
          }
        } else {
          const code2 = fs.readFileSync(resolvedPath, "utf-8");
          getExportedMethods(code2, resolvedPath);
          checkImport(path2.node, resolvedPath, filePath);
        }
      }
    }
  });
}
function importValidationForVite(options) {
  return {
    name: "vite-plugin-import-validation",
    enforce: "pre",
    config(config) {
      aliases = config.resolve.alias;
    },
    async transform(code, id) {
      if (options.exclude && options.exclude.test(id)) {
        return null;
      }
      const ext = path.extname(id);
      if ([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(ext)) {
        const newSpecify = options.specify.map((item) => {
          return path.join(process.cwd(), item);
        });
        const API_PATH_PATTERN = new RegExp(`^(${newSpecify.join("|")})/`);
        hasApiImport(id, code, API_PATH_PATTERN);
        if (errorList.size > 0) {
          Array.from(errorList).forEach((error) => {
            console.error("\n \u53D1\u73B0\u5BFC\u5165\u9A8C\u8BC1\u9519\u8BEF \n");
            console.error(error);
          });
          process.exit();
        }
      }
      return null;
    }
  };
}
var importValidationForWebpack = class {
  constructor(options = {}) {
    this.options = {
      specify: ["api", "enum"],
      skipDefault: false,
      exclude: /node_modules/,
      ...options
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
            if (this.options.exclude && this.options.exclude.test(module.resource)) {
              return;
            }
            const ext = path.extname(module.resource);
            if ([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(ext)) {
              const newSpecify = this.options.specify.map((item) => {
                return path.join(process.cwd(), item);
              });
              const API_PATH_PATTERN = new RegExp(
                `^(${newSpecify.join("|")})/`
              );
              const source = module.originalSource();
              if (!source)
                return;
              const code = source.source().toString();
              hasApiImport(module.resource, code, API_PATH_PATTERN);
              if (errorList.size > 0) {
                Array.from(errorList).forEach((error) => {
                  console.error("\n \u53D1\u73B0\u5BFC\u5165\u9A8C\u8BC1\u9519\u8BEF \n");
                  console.error(error);
                });
                console.error("\n \u8BF7\u4FEE\u590D\u4EE5\u4E0A\u9519\u8BEF\u540E\u91CD\u8BD5 \n");
                process.exit();
              }
            }
          }
        );
      }
    );
  }
};
export {
  importValidationForVite,
  importValidationForWebpack
};
