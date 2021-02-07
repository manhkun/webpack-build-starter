const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "./src/app.ts"),
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: "babel-loader",
      },
      {
        test: /\.ts?$/,
        exclude: /node_module/,
        loader: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          'postcss-loader',
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: 'styles/kunstyle.css',
      }),
      new CleanWebpackPlugin()
  ]
};
