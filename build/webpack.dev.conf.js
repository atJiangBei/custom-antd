/*
gaojingwei 2020/01/15
*/
'use strict'
process.env.NODE_ENV = 'development'
const path = require('path')
const resolve = url => path.resolve(__dirname, url)
const baseWebpackConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const merge = require('webpack-merge')
const config = require('../config')
module.exports = merge(baseWebpackConfig, {
  devServer: {
    port: config.port,
    quiet: true,
    host: '0.0.0.0',
    compress: true,
    overlay: true,
    proxy: config.proxy
  },
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [createStrImg()],
        notes: [
          `You application is running here http://127.0.0.1:${config.port}`
        ]
      },
      onErrors: function(severity, errors) {
        console.log('custom', errors)
      },
      // should the console be cleared between each compilation?
      // default is true
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: []
    })
  ]
})

function createStrImg() {
  return [
    '                                                                  ',
    '       k         k     y               y      zzzzzzzzzzzzzzzzzz',
    '       k        k       y             y                       z',
    '       k       k         y           y                       z',
    '       k      k           y         y                       z',
    '       k     k             y       y                       z',
    '       k    k               y     y                       z',
    '       k   k                 y   y                       z',
    '       k  k                   y y                       z',
    '       k k                     y                       z',
    '       kk                      y                      z',
    '       k k                     y                     z',
    '       k  k                    y                    z',
    '       k   k                   y                   z',
    '       k    k                  y                  z',
    '       k     k                 y                 z',
    '       k      k                y                z',
    '       k       k               y               z',
    '       k        k              y               zzzzzzzzzzzzzzzzz',
    '                                                                   '
  ].join('\n')
}
