const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const webpackConfig = {
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    noInfo: true,
    clientLogLevel: "error",
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      hash: true
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    })
  ]
};

if (process.env.NODE_ENV !== "production") {
  webpackConfig.devtool = "source-map";
}

module.exports = webpackConfig;
