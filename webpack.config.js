const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = () => {
  const isProduction = process.env.NODE_ENV === "production";
  const conf = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "nosources-source-map" : "source-map",
    watch: !isProduction,
    devServer: {
      static: {
        directory: path.join(__dirname, 'static'),
        publicPath: '/static',
        //publicPath: '/',
      },
      compress: false,
      port: 9000,
      open: true,
      historyApiFallback: true
      //publicPath: '/'
    },

    entry: "./src/index.tsx",
    //entry: [`${paths.src}/index.tsx`],
    output: {
      path: path.join(__dirname, "dist"),
      filename: "main.js",
    },
    resolve: {
      modules: [path.resolve(__dirname, "./src"), "node_modules"],
      extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
      plugins: [new TsconfigPathsPlugin()]
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js|jsx)?$/u,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
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
        }
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
