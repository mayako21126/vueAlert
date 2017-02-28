/**
 * Created by mayako on 2017/2/28.
 */
var package = require("../package.json")
var webpack = require("webpack")

module.exports = {
  context: __dirname + "/../src/plugin",
  entry: "./index.js",
  output: {
    path: __dirname + "/../dist",
    filename: "vue-loading.js",
    library: "vueLoading",
    libraryTarget: "umd"
  }
}
