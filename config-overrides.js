const path = require('path')
const fs = require('fs')
const { getLoader, loaderNameMatches } = require('react-app-rewired')

const rewireBabelLoader = require('react-app-rewire-babel-loader')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = function override(config, env) {
  const posed = resolveApp('node_modules/react-native-pose')
  const poseCore = resolveApp('node_modules/pose-core')
  const reactPoseCore = resolveApp('node_modules/react-pose-core')

  // transpile libraries
  config = rewireBabelLoader.include(config, posed, poseCore, reactPoseCore)

  return config
}
