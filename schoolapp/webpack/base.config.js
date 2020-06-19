
const path = require("path");
const webpack = require("webpack");

 
process.noDeprecation = true;

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      // Compile into js/build.js
      path: path.resolve(process.cwd(), "./dist"),
      publicPath: "/",
    },
    options.output,
  ),
  optimization: options.optimization,
  devServer:options.devServer,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: options.babelQuery,
        },
      },
      {
			  // Preprocess our own .css files
			  test: /\.css$/,
			  exclude: /node_modules/,
			  use: ["style-loader", "css-loader"],
      },
      {
			  // Preprocess 3rd party .css files located in node_modules
			  test: /\.css$/,
			  include: /node_modules/,
			  use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: "file-loader",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          }
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })
  ]),
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx"],
    mainFields: ["browser", "jsnext:main", "main"],
  },
  devtool: options.devtool,
  performance: options.performance || {},
});
