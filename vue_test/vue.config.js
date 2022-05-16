const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/api': {
        target: 'https://github.com/',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true
      },
      '/cars': {
        target: 'http://localhost:5001'
      }
    }
  }
})