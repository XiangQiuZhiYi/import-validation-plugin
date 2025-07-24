import traverse from "@babel/traverse";
import * as t from "@babel/types";

export default function getCitation(filePath, ast, targetVar) {
  // 判断是否是真正的引用而非声明
  function isReference(path) {
    return !(
      t.isVariableDeclarator(path.parent) ||
      t.isFunctionDeclaration(path.parent)
    );
  }

  // 获取引用上下文
  function getContext(path) {
    const parent = path.parentPath;
    if (parent.isMemberExpression()) {
      return `${path.node.name}${
        parent.node.property.name ? "." + parent.node.property.name : ""
      }`;
    }
    return path.node.name;
  }

  const references = [];

  try {
    // 遍历AST查找引用
    traverse.default(ast, {
      Identifier(path) {
        if (path.node.name === targetVar && isReference(path)) {
          const parentNode = path.parentPath.node;
          if (!parentNode.computed) {
            references.push({
              filePath,
              line: path.node.loc?.start.line,
              column: path.node.loc?.start.column,
              context: getContext(path),
            });
          }
        }
      },
    });
  } catch (error) {
    console.error("解析代码出错:", error);
  }

  return references;
}
