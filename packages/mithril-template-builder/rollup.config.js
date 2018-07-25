import commonJs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
  input  : "./index.js",
  output : {
    file   : "./dist/mithril-template-builder.js",
    format : "cjs",
    name   : "mithrilTemplateBuilder"
  },
  plugins : [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonJs({
      include : "node_modules/**"
    })
  ],
  watch : {
    include : "./src/index.js",
    clearScreen : false
  }
};