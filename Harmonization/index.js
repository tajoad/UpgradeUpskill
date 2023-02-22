const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = 3000;
const HOST = "localhost";

const API_URL = "https://ssl.ippisharmonization.com";

app.get("/status", (req, res, next) => {
    res.send('This is a proxy service');
});

app.post("/proxy", (req, res, next) => {

    // const data = BrewMethodsAPI.store( API_URL, res.body );

    console.log(req.body);
});

const proxyOptions = {
    target: API_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/api/master-record-uploads`]: '/api/master-record-uploads',
        [`^/api/master-record-uploads/stagings`]: '/api/master-record-uploads/stagings',
        [`^/api/master-record-uploads/process`]: '/api/master-record-uploads/process',
    },
}

const proxy = createProxyMiddleware(proxyOptions);

app.use('/api/generate-keys', proxy)

app.use('/api/master-record-uploads', proxy)

app.use('/api/master-record-uploads/stagings', proxy)

app.use('/api/master-record-uploads/process', proxy)

app.listen(PORT, HOST, () => {
    console.log(`Proxy Started at ${HOST}:${PORT}`)
});