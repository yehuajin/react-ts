const merge = require('webpack-merge');
const { join, resolve } = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _modeFlag = _mode === 'production';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaders = [
  // post-css-preset-env和@babel/preset-env一样解析最新的css语法
  // { loader: 'style-loader' }, // 是将样式插入到html页面的style中，提取出来就不用这么做了
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1, // 0 => 无loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader; 用于配置css-loader作用于@import 的资源之前有多少个loader
    },
  },
  { loader: 'postcss-loader' },
];

const webpackBaseConfig = {
  entry: {
    app: resolve('src/index.tsx'),
  },
  output: {
    path: join(__dirname, './dist/assets'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)/,
        use: cssLoaders,
      },
      {
        test: /\.(png|jpeg|git|eot|woff|woff2|ttf|svg|otf|webp)$/,
        type: 'asset', // 不需要file-loader,webpack内置了
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: _modeFlag
        ? 'styles/[name].[contenthash:5].css'
        : 'styles/[name].css',
      chunkFilename: _modeFlag
        ? 'styles/[id].[contenthash:5].css'
        : 'styles/[id].css',
      ignoreOrder: true, // 忽略css文件引入的顺序，如果不设置在不能的js中引入css顺序不同就会产生警告
    }),
  ],
};

module.exports = merge.default(webpackBaseConfig, _mergeConfig);
