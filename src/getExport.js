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
        }
      }
    },

    ExportDefaultDeclaration(path) {
      exportsObject["export default"] = {};
      const declaration = path.node.declaration;

      if (t.isIdentifier(declaration)) {
        // 如果是标识符引用 (export default MyClass)
        // 需要查找对应的类声明
        const binding = path.scope.getBinding(declaration.name);
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
              exportsObject["export default"][property.key.name] =
                property.value.type;
            });
          } else {
            exportsObject["export default"] = bindingNode.type;
          }
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
