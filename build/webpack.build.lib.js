/**
 * gaojingwei 2020/01/15
 */
var path = require('path')

const { externalsComponents, components } = require('./components')

module.exports = {
  entry: components,
  output: {
    path: path.resolve(__dirname, './../lib'),
    filename: '[name]/index.js',
    library: 'CustomAntd',
    libraryTarget: 'umd'
  },
  devtool: 'none',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../components')
    },
    extensions: ['.js', 'jsx']
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  mode: 'production',
  performance: {
    hints: false
  },
  externals: {
    ...externalsComponents,
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: []
}
