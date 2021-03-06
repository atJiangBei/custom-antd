/**
 * gaojingwei 2020/01/15
 */
const shell = require('shelljs')
const signale = require('signale')

const { Signale } = signale
const tasks = [
  'node build/build.start.js',
  'webpack --config build/webpack.build.lib.js',
  'node build/build.style.js'
]

tasks.forEach(task => {
  signale.start(task)

  const interactive = new Signale({ interactive: true })
  interactive.pending(task)
  const result = shell.exec(`${task} --silent`)
  if (result.code !== 0) {
    interactive.error(task)
  } else {
    interactive.success(task)
  }
})
