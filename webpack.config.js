const webpack = require('webpack')
const path = require('path')
const LodashPlugin = require('lodash-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config()

module.exports = function(env) {
  const isDev  = env.NODE_ENV !== 'production'
  const isProd = !isDev

  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      publicPath: isDev ? '/' : './'
    },
    devtool: isDev ? 'eval' : 'cheap-module-source-map',
    mode: process.env.NODE_ENV || 'development',
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: isDev ? /node_modules/ : undefined
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'image-webpack-loader!file-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(ttf|eot|woff2?)$/,
        loader: isDev ? 'file-loader' : 'file-loader?name=/[name].[ext]'
      }]
    },
    devServer: {
      contentBase: './',
      host: '0.0.0.0',
      port: 3000,
      historyApiFallback: true,
      hot: isDev,
      inline: isDev
    },
    resolve: {
      symlinks: false,
      cacheWithContext: false
    },
    resolveLoader: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx'],
      mainFields: ['loader', 'main'],
      mainFiles: ['index']
    },
    plugins: [
      new LodashPlugin,
      // new UglifyJsPlugin,
      new webpack.HotModuleReplacementPlugin,
      new webpack.optimize.AggressiveMergingPlugin,
      new webpack.optimize.OccurrenceOrderPlugin,
      new HtmlWebpackPlugin({
        title: 'Anything',
        template: 'src/template/mount.html',
        inject: 'body',
        minify: isProd,
        meta: {
          charset: "utf-8"
        }
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV || 'development')
        }
      })
    ],
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}