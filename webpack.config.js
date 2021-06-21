const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: __dirname + '/client/src/Index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // query: {
          //   presets: ['es2015']
          // },
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          },
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  plugins: [new ESLintPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 2
      })
    ]
  }
};
