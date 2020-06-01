const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
