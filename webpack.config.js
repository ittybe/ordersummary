const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ["style-loader", "css-loader", "postcss-loader"]
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource'
          }
      ]
  },
  mode: "development"
};

module.exports = config;