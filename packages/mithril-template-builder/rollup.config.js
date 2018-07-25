import commonJs from "rollup-plugin-commonjs";

export default {
  input  : "./index.js",
  output : {
    file   : "./dist/mithril-template-builder.js",
    format : "cjs",
    name   : "mithrilTemplateBuilder"
  },
  plugins : [
    commonJs()
  ],
  watch : {
    include : "./src/index.js",
    clearScreen : false
  }
};