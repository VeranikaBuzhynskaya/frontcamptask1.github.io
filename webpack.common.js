var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer')();


module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
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
