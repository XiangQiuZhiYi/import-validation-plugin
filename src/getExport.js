import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";

export default function getExport(originalCode) {
  // 解析为 AST
  const ast = parse(originalCode, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  // 创建要导出的大对象
  const exportsObject = {};

  const handleExport = (declaration) => {
    if (t.isVariableDeclaration(declaration)) {
      if ((declaration.declarations || []).length > 0) {
        declaration.declarations?.forEach((declarator) => {
          if (t.isObjectExpression(declarator.init)) {
            exportsObject[declarator.id.name] = {};
            declarator.init.properties.forEach((property) => {
              exportsObject[declarator.id.name][property.key.name] =
                property.value.value;
            });
          } else {
            exportsObject[declarator.id.name] = declarator.init.type;
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
          exportsObject[declaration.id.name][member.key.name] =
            member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSInterfaceDeclaration(declaration)) {
      exportsObject[declaration.id.name] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[declaration.id.name][member.key.name] =
            member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSTypeAliasDeclaration(declaration)) {
      if (declaration.typeAnnotation.members) {
        exportsObject[declaration.id.name] = {};
        declaration.typeAnnotation.members.forEach((member) => {
          exportsObject[declaration.id.name][member.key.name] =
            member.typeAnnotation.type;
        });
      } else {
        exportsObject[declaration.id.name] = declaration.typeAnnotation.type;
      }
    } else if (t.isTSEnumDeclaration(declaration)) {
      exportsObject[declaration.id.name] = {};
      declaration.members.forEach((member) => {
        exportsObject[declaration.id.name][member.id.name] =
          member.initializer.value;
      });
    } else if (t.isVariableDeclarator(declaration)) {
      if (t.isObjectExpression(declaration.init)) {
        exportsObject[declaration.id.name] = {};
        declaration.init.properties.forEach((property) => {
          exportsObject[declaration.id.name][property.key.name] =
            property.value.value;
        });
      } else {
        exportsObject[declaration.id.name] = declaration.init.type;
      }
    }
  };

  const handleExportDefault = (declaration, defaultKey = "export default") => {
    if (t.isVariableDeclaration(declaration)) {
      if ((declaration.declarations || []).length > 0) {
        declaration.declarations?.forEach((declarator) => {
          if (t.isObjectExpression(declarator.init)) {
            exportsObject[defaultKey] = {};
            declarator.init.properties.forEach((property) => {
              exportsObject[defaultKey][property.key.name] =
                property.value.value;
            });
          } else {
            exportsObject[defaultKey] = declarator.init.type;
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
          exportsObject[defaultKey][member.key.name] =
            member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSInterfaceDeclaration(declaration)) {
      exportsObject[defaultKey] = {};
      declaration.body.body.forEach((member) => {
        if (t.isTSPropertySignature(member)) {
          exportsObject[defaultKey][member.key.name] =
            member.typeAnnotation.typeAnnotation.type;
        }
      });
    } else if (t.isTSTypeAliasDeclaration(declaration)) {
      if (declaration.typeAnnotation.members) {
        exportsObject[defaultKey] = {};
        declaration.typeAnnotation.members.forEach((member) => {
          exportsObject[defaultKey][member.key.name] =
            member.typeAnnotation.type;
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

  // 遍历 AST 收集所有导出
  traverse.default(ast, {
    ExportNamedDeclaration(path) {
      if (path.node.declaration) {
        const declaration = path.node.declaration;
        handleExport(declaration);
      } else if (t.isExportNamedDeclaration(path.node)) {
        const nameList = path.node.specifiers.map((specifier) => {
          return specifier.exported.name;
        });
        const parent = path.scope.getBlockParent();
        parent?.path?.node?.body.forEach((node) => {
          if (node.id?.name) {
            if (nameList.includes(node?.id?.name)) {
              handleExport(node);
            }
          } else if (t.isVariableDeclaration(node)) {
            if (node.declarations?.length > 0) {
              node.declarations.forEach((declarator) => {
                if (nameList.includes(declarator?.id?.name)) {
                  handleExport(declarator);
                }
              });
            }
          }
        });
      }
    },

    ExportDefaultDeclaration(path) {
      exportsObject["export default"] = {};
      const declaration = path.node.declaration;

      if (t.isIdentifier(declaration)) {
        const parent = path.scope.getBlockParent();
        parent?.path?.node?.body.forEach((node) => {
          if (node.id?.name) {
            if (declaration.name === node?.id?.name) {
              handleExportDefault(node);
            }
          } else if (t.isVariableDeclaration(node)) {
            if (node.declarations?.length > 0) {
              node.declarations.forEach((declarator) => {
                if (declaration.name === declarator?.id?.name) {
                  handleExportDefault(declarator);
                }
              });
            }
          }
        });
      } else if (t.isObjectExpression(declaration)) {
        declaration.properties.forEach((property) => {
          exportsObject["export default"][property.key.name] =
            property.value.type;
        });
      }
    },
  });
  return exportsObject;
}
