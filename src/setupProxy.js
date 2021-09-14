const { createProxyMiddleware  } = require('http-proxy-middleware');

module.exports = function setupProxy(app) {
  app.use(
    '/toutiao/index',
    createProxyMiddleware({
      target: 'https://v.juhe.cn',
      changeOrigin: true,
      pathrewrite: {

      }
    })
  )
}
