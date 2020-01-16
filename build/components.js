/**
 * gaojingwei 2020/01/15
 */
const path = require('path')
const fs = require('fs')
const resolve = function(RelativePath) {
  return path.resolve(__dirname, RelativePath)
}
const excludes = [
  'index.js',
  'index.less',
  'style',
  'mixins',
  'utils',
  'directives'
]
const fileFolder = 'components'
const componentNames = fs
  .readdirSync(resolve(`../${fileFolder}`))
  .filter(dirName => !excludes.includes(dirName))
const components = {}
componentNames.forEach(
  name =>
    (components[name] = path.join(
      __dirname,
      `./../${fileFolder}/${name}/index.js`
    ))
)

/**
 * gaojingwei 2020/01/15
 * 处理组件按需加载存在的重复引用问题
 */
const pname = '@components' //别名
const externalsExcludes = ['index.js', 'index.less', 'style']

const externalsComponents = {}
const externalsComponentNames = fs
  .readdirSync(resolve(`../${fileFolder}`))
  .filter(dirName => !externalsExcludes.includes(dirName))
externalsComponentNames.forEach(
  name => (externalsComponents[`${pname}/${name}`] = `./../${name}`)
)
const externalsExcludesDir = ['utils']
//处理组件文件夹内部互相引用js打包问题，就是内部引用不在打包，运行时引入
//
for (let i = 0; i < externalsExcludesDir.length; i++) {
  const filesName = externalsExcludesDir[i]
  fs.readdirSync(resolve(`../${fileFolder}/${filesName}`)).forEach(
    name =>
      (externalsComponents[
        `${pname}/${filesName}/${name}`
      ] = `./../${filesName}/${name}`)
  )
}

console.log({
  components,
  externalsComponents
})
module.exports = {
  components,
  externalsComponents
}
