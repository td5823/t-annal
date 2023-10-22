// webpack.dev.js
const path = require("path");
const fs = require("fs");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const ESLintPlugin = require("eslint-webpack-plugin");
// const webpack = require('webpack');

const paths = require("./paths.js");

// 合并公共配置,并添加开发环境配置
module.exports = merge(baseConfig, {
  mode: "development", // 开发模式,打包更加快速,省了代码优化步骤
  devtool: "eval-cheap-module-source-map", // 源码调试模式,后面会讲
  // performance: {
  //   // 控制是否显示性能提示
  //   hints: 'warning', // 将警告级别设置为 'warning'
  // },
  devServer: {
    port: 1000, // 服务端口号
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true, // 开启热更新
    client: {
      overlay: false,  // 禁用覆盖层
      progress: true, // 在浏览器中以百分比显示编译进度
    },
    // progress: true, // 启用进度显示
    historyApiFallback: true, // 解决history路由404问题
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }
      if (fs.existsSync(paths.setupProxy)) {
        // This registers user provided middleware for proxy reasons
        require(paths.setupProxy)(devServer.app);
      }
      return middlewares;
    },
    static: {
      directory: path.join(__dirname, "../public"), //托管静态资源public文件夹
    },
  },
  // stats: 'errors-warnings',
  plugins: [
    // ...其它插件...
    // new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      failOnError: true, // 确保不会因 ESLint 警告而中断构建
      overrideConfigFile: path.resolve(`${__dirname}/..`, '.eslintrc.js'), // 指定 ESLint 配置文件的路径
    }),
  ],
});
