const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          "vue-style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          "css-loader",
          "vue-style-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.sass$/,
        sideEffects: true,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/skeleton.html",
      title: "Some title"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    port: 9000
  }
};
