const chalk = require('chalk')
const output = require('./output')

class Artifact {
  constructor(options) {
    options = options || {}
    this.clear = options.clear === false ? false : true
    this.compilationSuccessInfo = options.compilationSuccessInfo || {}
    this.previousEndTimes = {}
  }
  apply(compiler) {
    const doneFn = stats => {
      this.clearConsole()

      const hasErrors = stats.hasErrors()
      const hasWarnings = stats.hasWarnings()

      if (!hasErrors && !hasWarnings) {
        this.displaySuccess(stats)
        return
      }

      // if (hasErrors) {
      //   this.displayErrors(extractErrorsFromStats(stats, 'errors'), 'error')
      //   return
      // }

      // if (hasWarnings) {
      //   this.displayErrors(extractErrorsFromStats(stats, 'warnings'), 'warning')
      // }
    }
    const invalidFn = () => {
      this.clearConsole()
      output.title('info', 'WAIT', 'Compiling...')
    }
    const plugin = 'Artifact'
    compiler.hooks.done.tap(plugin, doneFn)
    compiler.hooks.invalid.tap(plugin, invalidFn)
  }
  clearConsole() {
    this.clear && output.clearConsole()
  }
  displaySuccess(stats) {
    const time = isMultiStats(stats)
      ? this.getMultiStatsCompileTime(stats)
      : this.getStatsCompileTime(stats)
    output.title('success', 'DONE', 'Compiled successfully in ' + time + 'ms')
    if (this.compilationSuccessInfo.messages) {
      this.compilationSuccessInfo.messages.forEach(message =>
        output.info(message)
      )
    }
    if (this.compilationSuccessInfo.notes) {
      output.log()
      this.compilationSuccessInfo.notes.forEach(note => output.note(note))
    }
  }
  getStatsCompileTime(stats, statsIndex) {
    if (statsIndex !== undefined) {
      if (this.previousEndTimes[statsIndex] === stats.endTime) {
        return 0
      }

      this.previousEndTimes[statsIndex] = stats.endTime
    }

    return stats.endTime - stats.startTime
  }

  getMultiStatsCompileTime(stats) {
    return stats.stats.reduce(
      (time, stats, index) =>
        Math.max(time, this.getStatsCompileTime(stats, index)),
      0
    )
  }
}

function isMultiStats(stats) {
  return stats.stats
}

module.exports = Artifact
