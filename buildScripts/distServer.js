import express from 'express';
import path from 'path';
import open from 'open';
import pckg from '../package.json';
import compression from 'compression';
import setupMockDataPaths from "./expressmockdata";

const config = pckg.config;
const port = config.server.port;
const server = express();
const distDir = "../dist/";
const entryFile = "index.html";
const domain = "http://localhost";
const siteAddress = domain + ":" + port;

setupMockDataPaths(server);

server.use(compression());
server.use(express.static('dist'));

server.get('*', function(req,res) {
    var file = getPath(distDir + entryFile);
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
