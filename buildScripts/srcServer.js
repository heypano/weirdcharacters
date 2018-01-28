import express from 'express';
import path from 'path';
import open from 'open';
import pckg from '../package.json';

const config = pckg.config;
const port = config.server.port;
const server = express();
const srcDir = "../src/";
const entryFile = "index.html";
const domain = "http://localhost";
const siteAddress = domain + ":" + port;


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
