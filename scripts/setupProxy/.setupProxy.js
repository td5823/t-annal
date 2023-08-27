const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'https://cloud.qince.com', changeOrigin: true }));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
