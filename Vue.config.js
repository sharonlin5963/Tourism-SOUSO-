const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  chainWebpack: config => {
    config.module // 修改svg預設處理
      .rule('svg')
      .exclude
      .add(resolve('src/assets/icon')) // .svg檔的路徑
      .end()

    config.module // 新增 svg-sprite-loader 設定
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/icon')) // .svg檔的路徑
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]' // 設定svg中symbol中id的值
      })
  }
}
