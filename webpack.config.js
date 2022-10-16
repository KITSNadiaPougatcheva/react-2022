const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
  const isProduction = process.env.NODE_ENV === "production";
  const conf = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "nosources-source-map" : "source-map",
    watch: !isProduction,
    devServer: {
      compress: false,
      port: 9000,
      open: true,
    },

    entry: "./src/script.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "main.js",
    },
    resolve: {
      modules: [path.resolve(__dirname, "./src"), "node_modules"],
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: {
            loader: "file-loader?name=fonts/[name].[ext]",
          },
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "./img/",
                publicPath: "img/",
              },
            },
            "image-webpack-loader",
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "HW2",
        template: "index.html",
        filename: "index.html",
      }),
    ],
  };
  return conf;
};
