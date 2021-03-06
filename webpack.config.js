const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const SriPlugin = require("webpack-subresource-integrity");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const ImageminPlugin = require("imagemin-webpack-plugin").default;

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development",
});

module.exports = {
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "index.js",
    crossOriginLoading: "anonymous",
  },
  devServer: {
    contentBase: path.join(__dirname, "assets"),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
            {
              loader: "csscomb-loader",
            },
          ],
          fallback: "style-loader",
        }),
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new Dotenv({
      path: "./.env",
      safe: true,
    }),
    extractSass,
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new ExtractTextPlugin("index.scss"),
    new StyleLintPlugin({
      configFile: "stylelintrc.json",
      context: "src",
      files: "**/*.scss",
      failOnError: false,
      quiet: false,
    }),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== "production", // Disable during development
      pngquant: {
        quality: "95-100",
      },
    }),
  ],
  node: {
    fs: "empty",
  },
};
