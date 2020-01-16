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
const Artifact = require('./../plugins/Artifact')
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
    //new Artifact()
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [
          `You application is running here http://127.0.0.1:${config.port}`
        ],
        notes: [
          'Some additionnal notes to be displayed unpon successful compilation'
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
