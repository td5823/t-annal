// webpack.dev.js
const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const ESLintPlugin = require('eslint-webpack-plugin');

// const paths = require('./path');

// 合并公共配置,并添加开发环境配置
module.exports = merge(baseConfig, {
  mode: "development", // 开发模式,打包更加快速,省了代码优化步骤
  devtool: "eval-cheap-module-source-map", // 源码调试模式,后面会讲
  devServer: {
    port: 1000, // 服务端口号
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true, // 开启热更新，后面会讲react模块热替换具体配置
    historyApiFallback: true, // 解决history路由404问题
    proxy: {
      '/api': {
        target: 'https://cloud.region1.qince.com/', // 目标后端服务
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // Optionally, you can rewrite the path if needed
        },
        onProxyRes: function (proxyRes, req, res) {
          if (req.method === 'OPTIONS') {
            proxyRes.headers['Access-Control-Allow-Origin'] = req.headers.origin || '*'
            proxyRes.headers['Access-Control-Allow-Credentials'] = true
            proxyRes.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS,PUT,DELETE,FETCH'
            proxyRes.headers['Access-Control-Allow-Headers'] = 'DNT,User-Agent,X-Requested-With,h5-requested-with,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization,token,source'
            proxyRes.statusCode = 204
          } else {
            proxyRes.headers['Access-Control-Allow-Origin'] = req.headers.origin || '*'
            proxyRes.headers['Access-Control-Allow-Credentials'] = true
          }
        },
        router: function (req) {
          // return app.get('route-target') || target
        }
      },
    },
    static: {
      directory: path.join(__dirname, "../public"), //托管静态资源public文件夹
    },
  },
  plugins: [
    // ...其它插件...
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
});
