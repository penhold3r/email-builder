//
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//
module.exports = {
   entry: './src/entry.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './public/'),
      publicPath: './'
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {}
               },
               {
                  loader: 'css-loader',
                  options: {}
               }
            ]
         },
         {
            test: /\.(png|jpg)$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {}
               }
            ]
         }
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'style.css',
      }),
      new HtmlWebpackPlugin({
         title: 'Awsome Email',
         template: './src/index.html',
         inlineSource: '.css$'
      }),
      new HtmlWebpackInlineSourcePlugin()
   ]
};
