var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer')();


module.exports = {
    entry: {
      // index: './js/app.js',
      another: './js/load-button.js'
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|load-button)/,
            use: {
              loader: 'babel-loader',
              options: {
                "presets": ["es2015", "env"]
              }
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use:[ 'css-loader',
              {
                loader: 'postcss-loader',
                options:{
                  plugins: () => [autoprefixer]
                }
              }]
            })
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          },
          {
            test: /\.json$/,
            use: [
              {
                loader: path.resolve('./js/loader.js')
              }
            ]
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'FrontCamp Webpack',
            template: 'index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
      ],

}
