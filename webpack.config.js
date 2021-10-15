var webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./index.js",
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),

    filename: "main.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
