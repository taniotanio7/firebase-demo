const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "postcss-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              dimensions: false,
              svgo: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
};
