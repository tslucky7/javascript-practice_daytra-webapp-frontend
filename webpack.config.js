const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./TODO-App/js/script.js",
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  module: {
    rules: [
      {
        //拡張子cssのファイル（正規表現）
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        //拡張子jsのファイル（正規表現）
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./TODO-App/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  target: ["web", "es5"],
};