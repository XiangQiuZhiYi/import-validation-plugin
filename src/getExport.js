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

  // 遍历 AST 收集所有导出
  traverse.default(ast, {
    ExportNamedDeclaration(path) {
      if (path.node.declaration) {
        const declaration = path.node.declaration;
        if (t.isVariableDeclaration(declaration)) {
          declaration.declarations.forEach((declarator) => {
            if (t.isObjectExpression(declarator.init)) {
              exportsObject[declarator.id.name] = {};
              declarator.init.properties.forEach((property) => {
                exportsObject[declarator.id.name][property.key.name] =
                  property.value.value;
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
                exportsObject[declaration.id.name][member.key.name] =
                  member.type;
              }
            });
          }
        } else if (t.isFunctionDeclaration(declaration)) {
          exportsObject[declaration.id.name] = declaration.type;
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
            exportsObject[declaration.id.name] =
              declaration.typeAnnotation.type;
          }
        }
      }
    },

    ExportDefaultDeclaration(path) {
      exportsObject["export default"] = {};
      const declaration = path.node.declaration;

      if (t.isIdentifier(declaration)) {
        const binding = path.scope.getBinding(declaration.name);
        const bindingNode = binding?.path?.node;
        if (binding) {
          if (t.isClassDeclaration(bindingNode)) {
            bindingNode.body.body.forEach((member) => {
              if (t.isClassMethod(member) || t.isClassProperty(member)) {
                exportsObject["export default"][member.key.name] = member.type;
              }
            });
          } else if (t.isObjectExpression(bindingNode)) {
            bindingNode.properties.forEach((property) => {
              exportsObject["export default"][property.key.name] =
                property.value.type;
            });
          } else {
            exportsObject["export default"] = bindingNode.type;
          }
        } else {
          const parent = path.scope.getBlockParent();
          parent?.path?.node?.body.forEach((node) => {
            if (node?.id?.name === declaration.name) {
              if (t.isTSInterfaceDeclaration(node)) {
                node.body.body.forEach((member) => {
                  if (t.isTSPropertySignature(member)) {
                    exportsObject["export default"][member.key.name] =
                      member.typeAnnotation.type;
                  }
                });
              } else if (t.isTSTypeAliasDeclaration(node)) {
                if (node.typeAnnotation.members) {
                  node.typeAnnotation.members.forEach((member) => {
                    exportsObject["export default"][member.key.name] =
                      member.typeAnnotation.type;
                  });
                } else {
                  exportsObject["export default"] = node.typeAnnotation.type;
                }
              }
            }
          });
        }
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
