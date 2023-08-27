const { createProxyMiddleware } = require("http-proxy-middleware");
console.log(
  "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
);
module.exports = function (app: any) {
  // 创建一个代理中间件，将所有以 '/api' 开头的请求转发到目标服务器
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://cloud.qince.com",
      changeOrigin: true,
    })
  );
};
