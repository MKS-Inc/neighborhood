/* eslint-disable no-console */
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 5001;


app.use('/api/houses/:houseId', createProxyMiddleware({ target: 'http://3.22.234.91:3001/', changeOrigin: true }));



app.listen(port, () => {
  console.log(`Proxy is listening on ${port}`);
});

app.use(express.static('./dist'));
