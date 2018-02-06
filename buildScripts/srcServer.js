import express from 'express';
import path from 'path';
import open from 'open';
import pckg from '../package.json';
import webpack from 'webpack';
import webpackConfig from "../webpack.config.dev";
import middleWare from 'webpack-dev-middleware';

const config = pckg.config;
const compiler = webpack(webpackConfig);
const port = config.server.port;
const server = express();
const srcDir = "../src/";
const entryFile = "index.html";
const domain = "http://localhost";
const siteAddress = domain + ":" + port;
const middleWareSettings = {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
};


server.use(middleWare(compiler,middleWareSettings));

server.get('/', function(req,res) {
    var file = getPath(srcDir + entryFile);
    res.sendFile(file);
});

server.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        open(siteAddress)
    }
});


function getPath (location) {
    return path.join(__dirname, location);
}
