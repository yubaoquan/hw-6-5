const { createProxyMiddleware  } = require('http-proxy-middleware');

module.exports = function setupProxy(app) {
  app.use(
    '/news',
    createProxyMiddleware({
      target: 'https://v.juhe.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/news': '/toutiao/index'
      }
    })
  )
}
