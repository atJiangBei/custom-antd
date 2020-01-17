/**
 * gaojingwei 2020/01/15
 */
'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const resolve = url => path.resolve(__dirname, url)
const NODE_ENV = process.env.NODE_ENV
const idDev = NODE_ENV === 'development'
const devtool = idDev ? 'source-map' : 'none'
const loader =
  NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'
module.exports = {
  entry: {
    app: resolve('../src/main.js')
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: idDev ? '/' : './'
  },
  mode: NODE_ENV,
  devtool: devtool,
  resolve: {
    alias: {
      '@': resolve('../src'),
      components: resolve('../components'),
      lib: resolve('../lib')
    },
    extensions: ['.js', 'jsx']
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css/,
        use: [
          loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: idDev
            }
          }
        ]
      },
      {
        test: /\.less/,
        use: [
          loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: idDev
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('', 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('', 'media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 150000,
          name: path.posix.join('', 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html'),
      filename: 'index.html',
      chunks: ['app'],
      inject: true,
      minify: false,
      title: 'custom-antd'
    })
  ]
}
