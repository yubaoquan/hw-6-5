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
  );

  app.use(
    '/weather',
    createProxyMiddleware({
      target: 'https://devapi.qweather.com',
      changeOrigin: true,
      pathRewrite: {
        '^/weather': '/v7/weather/3d'
      }
    })
  )
}
