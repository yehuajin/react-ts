const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    assetModuleFilename: 'images/[name][ext]', // 对应rules中图片文件资源中的type: 'asset'
    filename: 'scripts/[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true, // 刷新页面会响应到index页面，避免出现404
    contentBase: join(__dirname, '../dist'), // 资源文件目录
    inline: true, // 模式 iframe，监听文件变化，自动刷新页面
    port: 8082,
    // node-notifier, webpack-build-notifier
    // quiet: true, // 配合friendly-error-webpack-plugin
    watchContentBase: true,
    stats: {
      errorDetails: true,
    },
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-ts-demo',
      filename: 'index.html',
      template: resolve(__dirname, '../template/dev.html'),
    }),
  ],
};
