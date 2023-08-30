const { createProxyMiddleware } = require("http-proxy-middleware");

const target = "https://cloud.region1.qince.com/";

// 自动登录代理中间件
module.exports = function setupAutoLoginProxy(app) {
  // 接口代理
  app.use(
    createProxyMiddleware("/api/", {
      target: target,
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/",
      },
      router: function () {
        return app.get("route-target") || target;
      },
    })
  );
};
