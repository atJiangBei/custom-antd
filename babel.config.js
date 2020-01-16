module.exports = function(api) {
  const { NODE_ENV } = process.env
  api.cache(true)
  return {
    presets: [
      ['@babel/env'],
      '@babel/react'
      //"@babel/preset-stage-0",
    ],
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      '@babel/plugin-proposal-class-properties'
    ]
  }
}
