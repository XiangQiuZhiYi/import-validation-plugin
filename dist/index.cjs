var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  importValidationForVite: () => importValidationForVite,
  importValidationForWebpack: () => importValidationForWebpack
});
module.exports = __toCommonJS(src_exports);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_parser = require("@babel/parser");
var import_traverse = __toESM(require("@babel/traverse"), 1);
var t = __toESM(require("@babel/types"), 1);
var import_compiler_sfc = require("@vue/compiler-sfc");
var exportedAllList = /* @__PURE__ */ new Map();
var errorList = /* @__PURE__ */ new Set();
var aliases = null;
function getExportedMethods(code, fullPath, importPath) {
  if (exportedAllList.has(fullPath)) {
    return;
  }
  const ast = (0, import_parser.parse)(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
    allowUndeclaredExports: true
  });
  const exportedMethods = /* @__PURE__ */ new Set();
  import_traverse.default.default(ast, {
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
  const extensions = [".js", ".ts", ".tsx", ".jsx", "/index.js", "/index.ts"];
  let basePath = "";
  if (import_path.default.isAbsolute(importPath)) {
    basePath = importPath;
  } else {
    if (importPath.startsWith(".")) {
      basePath = import_path.default.resolve(import_path.default.dirname(sourceFile), importPath);
    } else if (aliases) {
      for (const [alias, aliasPath] of Object.entries(aliases)) {
        if (importPath.startsWith(alias)) {
          const remainingPath = importPath.slice(alias.length + 1);
          basePath = import_path.default.resolve(aliasPath, remainingPath);
          break;
        }
      }
    }
  }
  if (import_fs.default.existsSync(basePath)) {
    return basePath;
  }
  for (const ext of extensions) {
    const fullPath = basePath + ext;
    if (import_fs.default.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return "";
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
  const ext = import_path.default.extname(filePath);
  let ast;
  if (ext === ".vue") {
    try {
      const { descriptor } = (0, import_compiler_sfc.parse)(code);
      if (!descriptor.script && !descriptor.scriptSetup)
        return false;
      const scriptContent = descriptor.script?.content || descriptor.scriptSetup?.content || "";
      ast = (0, import_parser.parse)(scriptContent, {
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
      ast = (0, import_parser.parse)(code, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
        allowUndeclaredExports: true
      });
    } catch (e) {
      console.error(`Failed to parse ${filePath}:`, e);
      return false;
    }
  }
  import_traverse.default.default(ast, {
    // 静态导入: import ... from 'xxx'
    ImportDeclaration(path2) {
      const importPath = path2.node.source.value;
      if (API_PATH_PATTERN.test(importPath)) {
        const resolvedPath = resolveImportPath(importPath, filePath);
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
          const code2 = import_fs.default.readFileSync(resolvedPath, "utf-8");
          getExportedMethods(code2, resolvedPath, importPath);
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
      const ext = import_path.default.extname(id);
      if ([".js", ".jsx", ".ts", ".mjs", ".cjs", ".vue"].includes(ext)) {
        const API_PATH_PATTERN = new RegExp(
          `^@/(${options.specify.join("|")})/|/(${options.specify.join("|")})/`
        );
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
    aliases = webpackConfig.resolve.alias || {};
    compiler.hooks.compilation.tap(
      "WebpackImportValidationPlugin",
      (compilation) => {
        compilation.hooks.normalModuleLoader.tap(
          "WebpackImportValidationPlugin",
          (loaderContext, module2) => {
            if (this.options.exclude && this.options.exclude.test(module2.resource)) {
              return;
            }
            console.log(111);
            const ext = import_path.default.extname(module2.resource);
            console.log(222);
            if ([".js", ".jsx", ".ts", ".mjs", ".cjs", ".vue"].includes(ext)) {
              const API_PATH_PATTERN = new RegExp(
                `^@/(${this.options.specify.join(
                  "|"
                )})/|/(${this.options.specify.join("|")})/`
              );
              const source = module2.originalSource();
              if (!source)
                return;
              const code = source.source().toString();
              hasApiImport(module2.resource, code, API_PATH_PATTERN);
              if (errorList.size > 0) {
                Array.from(errorList).forEach((error) => {
                  console.error(
                    "\n \u53D1\u73B0\u5BFC\u5165\u9A8C\u8BC1\u9519\u8BEF \n"
                  );
                  console.error(error);
                });
                console.error(
                  "\n \u8BF7\u4FEE\u590D\u4EE5\u4E0A\u9519\u8BEF\u540E\u91CD\u8BD5 \n"
                );
                process.exit();
              }
            }
          }
        );
      }
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  importValidationForVite,
  importValidationForWebpack
});
