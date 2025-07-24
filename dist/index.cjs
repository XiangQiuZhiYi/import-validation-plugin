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
var import_parser2 = require("@babel/parser");
var import_traverse3 = __toESM(require("@babel/traverse"), 1);
var t3 = __toESM(require("@babel/types"), 1);
var import_compiler_sfc = require("@vue/compiler-sfc");

// src/getExport.js
var import_parser = require("@babel/parser");
var import_traverse = __toESM(require("@babel/traverse"), 1);
var t = __toESM(require("@babel/types"), 1);
function getExport(originalCode) {
  const ast = (0, import_parser.parse)(originalCode, {
    sourceType: "module",
    plugins: ["jsx", "typescript"]
  });
  const exportsObject = {};
  const handleExport = (declaration) => {
    if (t.isVariableDeclaration(declaration)) {
      if ((declaration.declarations || []).length > 0) {
        declaration.declarations?.forEach((declarator2) => {
          if (t.isObjectExpression(declarator2.init)) {
            exportsObject[declarator2.id.name] = {};
            declarator2.init.properties.forEach((property) => {
              exportsObject[declarator2.id.name][property.key.name] = property.value.value;
            });
          } else {
            exportsObject[declarator2.id.name] = declarator2.init.type;
          }
        });
      } else {
        exportsObject[declarator.id.name] = declarator.init.value;
      }
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
    } else if (t.isObjectExpression(declaration)) {
      exportsObject[declaration.id.name] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[declaration.id.name][member.key.name] = member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSInterfaceDeclaration(declaration)) {
      exportsObject[declaration.id.name] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[declaration.id.name][member.key.name] = member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSTypeAliasDeclaration(declaration)) {
      if (declaration.typeAnnotation.members) {
        exportsObject[declaration.id.name] = {};
        declaration.typeAnnotation.members.forEach((member) => {
          exportsObject[declaration.id.name][member.key.name] = member.typeAnnotation.type;
        });
      } else {
        exportsObject[declaration.id.name] = declaration.typeAnnotation.type;
      }
    } else if (t.isTSEnumDeclaration(declaration)) {
      exportsObject[declaration.id.name] = {};
      declaration.members.forEach((member) => {
        exportsObject[declaration.id.name][member.id.name] = member.initializer.value;
      });
    } else if (t.isVariableDeclarator(declaration)) {
      if (t.isObjectExpression(declaration.init)) {
        exportsObject[declaration.id.name] = {};
        declaration.init.properties.forEach((property) => {
          exportsObject[declaration.id.name][property.key.name] = property.value.value;
        });
      } else {
        exportsObject[declaration.id.name] = declaration.init.type;
      }
    }
  };
  const handleExportDefault = (declaration, defaultKey = "export default") => {
    if (t.isVariableDeclaration(declaration)) {
      if ((declaration.declarations || []).length > 0) {
        declaration.declarations?.forEach((declarator2) => {
          if (t.isObjectExpression(declarator2.init)) {
            exportsObject[defaultKey] = {};
            declarator2.init.properties.forEach((property) => {
              exportsObject[defaultKey][property.key.name] = property.value.value;
            });
          } else {
            exportsObject[defaultKey] = declarator2.init.type;
          }
        });
      } else {
        exportsObject[defaultKey] = declarator.init.value;
      }
    } else if (t.isClassDeclaration(declaration)) {
      exportsObject[defaultKey] = {};
      if (t.isClassBody(declaration.body)) {
        declaration.body.body.forEach((member) => {
          if (t.isClassMethod(member) || t.isClassProperty(member)) {
            exportsObject[defaultKey][member.key.name] = member.type;
          }
        });
      }
    } else if (t.isFunctionDeclaration(declaration)) {
      exportsObject[defaultKey] = declaration.type;
    } else if (t.isObjectExpression(declaration)) {
      exportsObject[defaultKey] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[defaultKey][member.key.name] = member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSInterfaceDeclaration(declaration)) {
      exportsObject[defaultKey] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[defaultKey][member.key.name] = member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSTypeAliasDeclaration(declaration)) {
      if (declaration.typeAnnotation.members) {
        exportsObject[defaultKey] = {};
        declaration.typeAnnotation.members.forEach((member) => {
          exportsObject[defaultKey][member.key.name] = member.typeAnnotation.type;
        });
      } else {
        exportsObject[defaultKey] = declaration.typeAnnotation.type;
      }
    } else if (t.isTSEnumDeclaration(declaration)) {
      exportsObject[defaultKey] = {};
      declaration.members.forEach((member) => {
        exportsObject[defaultKey][member.id.name] = member.initializer.value;
      });
    } else if (t.isVariableDeclarator(declaration)) {
      if (t.isObjectExpression(declaration.init)) {
        exportsObject[defaultKey] = {};
        declaration.init.properties.forEach((property) => {
          exportsObject[defaultKey][property.key.name] = property.value.value;
        });
      } else {
        exportsObject[defaultKey] = declaration.init.type;
      }
    }
  };
  import_traverse.default.default(ast, {
    ExportNamedDeclaration(path2) {
      if (path2.node.declaration) {
        const declaration = path2.node.declaration;
        handleExport(declaration);
      } else if (t.isExportNamedDeclaration(path2.node)) {
        const nameList = path2.node.specifiers.map((specifier) => {
          return specifier.exported.name;
        });
        const parent = path2.parentPath.node;
        parent?.body.forEach((node) => {
          if (node.id?.name) {
            if (nameList.includes(node?.id?.name)) {
              handleExport(node);
            }
          } else if (t.isVariableDeclaration(node)) {
            if (node.declarations?.length > 0) {
              node.declarations.forEach((declarator2) => {
                if (nameList.includes(declarator2?.id?.name)) {
                  handleExport(declarator2);
                }
              });
            }
          }
        });
      }
    },
    ExportDefaultDeclaration(path2) {
      exportsObject["export default"] = {};
      const declaration = path2.node.declaration;
      if (t.isIdentifier(declaration)) {
        const parent = path2.parentPath.node;
        parent?.body.forEach((node) => {
          if (node.id?.name) {
            if (declaration.name === node?.id?.name) {
              handleExportDefault(node);
            }
          } else if (t.isVariableDeclaration(node)) {
            if (node.declarations?.length > 0) {
              node.declarations.forEach((declarator2) => {
                if (declaration.name === declarator2?.id?.name) {
                  handleExportDefault(declarator2);
                }
              });
            }
          }
        });
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
var import_traverse2 = __toESM(require("@babel/traverse"), 1);
var t2 = __toESM(require("@babel/types"), 1);
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
    import_traverse2.default.default(ast, {
      Identifier(path2) {
        if (path2.node.name === targetVar && isReference(path2)) {
          const parentNode = path2.parentPath.node;
          if (!parentNode.computed) {
            references.push({
              filePath,
              line: path2.node.loc?.start.line,
              column: path2.node.loc?.start.column,
              context: getContext(path2)
            });
          }
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
  if (fullPath in exportedAllList === false) {
    exportedAllList[fullPath] = getExport(code);
  }
}
function resolveImportPath(importPath, sourceFile) {
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
  const ext = import_path.default.extname(filePath);
  let ast;
  if (ext === ".vue") {
    try {
      const { descriptor } = (0, import_compiler_sfc.parse)(code);
      if (!descriptor.script && !descriptor.scriptSetup)
        return false;
      const scriptContent = descriptor.script?.content || descriptor.scriptSetup?.content || "";
      ast = (0, import_parser2.parse)(scriptContent, {
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
      ast = (0, import_parser2.parse)(code, {
        sourceType: "module",
        plugins: ["jsx", "typescript"],
        allowUndeclaredExports: true
      });
    } catch (e) {
      console.error(`Failed to parse ${filePath}:`, e);
      return false;
    }
  }
  import_traverse3.default.default(ast, {
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
        if (import_fs.default.existsSync(basePath)) {
          resolvedPath = basePath;
        }
        for (const ext2 of extensions) {
          const fullPath = basePath + ext2;
          if (import_fs.default.existsSync(fullPath)) {
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
          const code2 = import_fs.default.readFileSync(resolvedPath, "utf-8");
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
      const ext = import_path.default.extname(id);
      if ([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(ext)) {
        const newSpecify = options.specify.map((item2) => {
          return import_path.default.join(process.cwd(), item2);
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
          (module2) => {
            if (this.options.exclude && this.options.exclude.test(module2.resource)) {
              return;
            }
            const ext = import_path.default.extname(module2.resource);
            if ([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".vue"].includes(
              ext
            )) {
              const newSpecify = this.options.specify.map((item2) => {
                return import_path.default.join(process.cwd(), item2);
              });
              const API_PATH_PATTERN = new RegExp(
                `^(${newSpecify.join("|")})/`
              );
              const source = module2.originalSource();
              if (!source)
                return;
              const code = source.source().toString();
              hasApiImport(module2.resource, code, API_PATH_PATTERN);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  importValidationForVite,
  importValidationForWebpack
});
