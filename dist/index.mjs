// src/index.js
import path from "path";
import fs from "fs";
import { parse as parse2 } from "@babel/parser";
import traverse3 from "@babel/traverse";
import * as t3 from "@babel/types";
import { parse as parseVue } from "@vue/compiler-sfc";

// src/getExport.js
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
function getExport(originalCode) {
  const ast = parse(originalCode, {
    sourceType: "module",
    plugins: ["jsx", "typescript"]
  });
  const exportsObject = {};
  traverse.default(ast, {
    ExportNamedDeclaration(path2) {
      if (path2.node.declaration) {
        const declaration = path2.node.declaration;
        if (t.isVariableDeclaration(declaration)) {
          declaration.declarations.forEach((declarator) => {
            if (t.isObjectExpression(declarator.init)) {
              exportsObject[declarator.id.name] = {};
              declarator.init.properties.forEach((property) => {
                exportsObject[declarator.id.name][property.key.name] = property.value.value;
              });
            } else {
              exportsObject[declarator.id.name] = declarator.init.value;
            }
          });
        } else if (t.isClassDeclaration(declaration)) {
          exportsObject[declaration.id.name] = {};
          if (t.isClassBody(declaration.body)) {
            declaration.body.body.forEach((member) => {
              if (t.isClassMethod(member) || t.isClassProperty(member)) {
                exportsObject[declaration.id.name][member.key.name] = member.type;
              }
            });
          }
        } else if (t.isFunctionDeclaration(declaration)) {
          exportsObject[declaration.id.name] = declaration.type;
        }
      }
    },
    ExportDefaultDeclaration(path2) {
      exportsObject["export default"] = {};
      const declaration = path2.node.declaration;
      if (t.isIdentifier(declaration)) {
        const binding = path2.scope.getBinding(declaration.name);
        const bindingNode = binding.path.node;
        if (binding) {
          if (t.isClassDeclaration(bindingNode)) {
            bindingNode.body.body.forEach((member) => {
              if (t.isClassMethod(member) || t.isClassProperty(member)) {
                exportsObject["export default"][member.key.name] = member.type;
              }
            });
          } else if (t.isObjectExpression(bindingNode)) {
            bindingNode.properties.forEach((property) => {
              exportsObject["export default"][property.key.name] = property.value.type;
            });
          } else {
            exportsObject["export default"] = bindingNode.type;
          }
        }
      } else if (t.isObjectExpression(declaration)) {
        declaration.properties.forEach((property) => {
          exportsObject["export default"][property.key.name] = property.value.type;
        });
      }
    }
  });
  return exportsObject;
}

// src/getCitation.js
import traverse2 from "@babel/traverse";
import * as t2 from "@babel/types";
function getCitation(filePath, ast, targetVar) {
  function isReference(path2) {
    return !(t2.isVariableDeclarator(path2.parent) || t2.isFunctionDeclaration(path2.parent));
  }
  function getContext(path2) {
    const parent = path2.parentPath;
    if (parent.isMemberExpression()) {
      return `${path2.node.name}${parent.node.property.name ? "." + parent.node.property.name : ""}`;
    }
    return path2.node.name;
  }
  const references = [];
  try {
    traverse2.default(ast, {
      Identifier(path2) {
        if (path2.node.name === targetVar && isReference(path2)) {
          references.push({
            filePath,
            line: path2.node.loc?.start.line,
            column: path2.node.loc?.start.column,
            context: getContext(path2)
          });
        }
      }
    });
  } catch (error) {
    console.error("\u89E3\u6790\u4EE3\u7801\u51FA\u9519:", error);
  }
  return references;
}

// src/index.js
var exportedAllList = {};
var errorList = /* @__PURE__ */ new Set();
var aliases = null;
function getExportedMethods(code, fullPath) {
  exportedAllList[fullPath] = getExport(code);
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
function checkExists(resolvedPath, citations, defaultBol = false) {
  const obj = exportedAllList[resolvedPath];
  if (defaultBol && !("export default" in obj)) {
    errorList.add(
      `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u9ED8\u8BA4\u5BFC\u51FA: "${item.context}" at ${item.filePath}:${item.line}:${item.column}`
    );
  }
  citations.forEach((item2) => {
    if (defaultBol) {
      const value = item2.context.split(".")[1];
      if (value && value in obj["export default"] === false) {
        errorList.add(
          `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u53EF\u4F7F\u7528\u7684\u5C5E\u6027: "${item2.context}" at ${item2.filePath}:${item2.line}:${item2.column}`
        );
      }
    } else {
      const key = item2.context.split(".")[0];
      const value = item2.context.split(".")[1];
      if (key in obj === false) {
        errorList.add(
          `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u7684\u5BFC\u51FA: "${item2.context}" at ${item2.filePath}:${item2.line}:${item2.column}`
        );
      } else if (value && value in obj[key] === false) {
        errorList.add(
          `\u{1F534} ERROR: \u672A\u627E\u5230\u5BF9\u5E94\u53EF\u4F7F\u7528\u7684\u5C5E\u6027: "${item2.context}" at ${item2.filePath}:${item2.line}:${item2.column}`
        );
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
      ast = parse2(scriptContent, {
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
      ast = parse2(code, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
        allowUndeclaredExports: true
      });
    } catch (e) {
      console.error(`Failed to parse ${filePath}:`, e);
      return false;
    }
  }
  traverse3.default(ast, {
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
          path2.node.specifiers.forEach((spec) => {
            if (t3.isImportDefaultSpecifier(spec)) {
              const citations = getCitation(filePath, ast, spec.local.name);
              checkExists(resolvedPath, citations, true);
            }
            if (t3.isImportSpecifier(spec)) {
              const citations = getCitation(filePath, ast, spec.imported.name);
              checkExists(resolvedPath, citations);
            }
          });
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
        const newSpecify = options.specify.map((item2) => {
          return path.join(process.cwd(), item2);
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
            if ([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(
              ext
            )) {
              const newSpecify = this.options.specify.map((item2) => {
                return path.join(process.cwd(), item2);
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
                console.error("\n \u53D1\u73B0\u5BFC\u5165\u9A8C\u8BC1\u9519\u8BEF \n");
                Array.from(errorList).forEach((error) => {
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
