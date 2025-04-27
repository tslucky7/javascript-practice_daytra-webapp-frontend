const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./typescript-practice/js/index.ts",
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
        //拡張子tsの場合
        test: /\.ts$/,
        //TypeScriptをコンパイルするためのts-loaderを使用
        use: "ts-loader",
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./typescript-practice/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    //import文で.tsファイルを指定できるようにする 書き方：拡張子を配列で指定する
    extensions: [".ts", ".js"],
  },
};