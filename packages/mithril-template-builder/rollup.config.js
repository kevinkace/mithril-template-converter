import commonJs from "rollup-plugin-commonjs";

export default {
  input  : "./index.js",
  output : {
    file   : "./dst/templateBuilder.js",
    format : "cjs",
    name   : "templateBuilder"
  },
  plugins : [
    commonJs()
  ],
  watch : {
    include : "./src/index.js",
    clearScreen : false
  }
};