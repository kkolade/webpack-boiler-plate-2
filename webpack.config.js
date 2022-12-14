const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  // entry: { index: path.resolve(__dirname, "index.js")
  mode: 'development',
  entry: { index: path.resolve(__dirname, "src", "index.js")},
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        // use: ["style-loader", "css-loader"]
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
          "test": /\.(png|jpe?g|gif|svg)$/i,
          "type": "asset/resource",
        },
        {
          "test": /\.js$/,
          "exclude": /node_modules/,
          "use": {
          "loader": "babel-loader",
         },
        },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
   plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      }),
      new MiniCssExtractPlugin()
    ]
  
};
