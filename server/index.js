const express = require('express');
const webpack = require('webpack');
const http = require('http');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.common.js');
const compiler = webpack(config);

http.get('http://www.baidu.com', (res) => {
    console.log(res)
    // Do stuff with response
});

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});