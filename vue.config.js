const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/myProject/',
  configureWebpack: {
    devtool:'source-map'
  }
})
