import { emojify } from "npm:node-emoji@2";
import { parse } from "npm:@babel/parser";
import traverse from "npm:@babel/traverse";

console.log(emojify(":t-rex: :heart: NPM"));

const code = "2 + (4 * 10)";

const ast = parse(code);

traverse(ast, {
  NumericLiteral(path) {
    console.log(path.node);
  },
  BinaryExpression(path) {
    console.log(path.node.operator);
  },
});
