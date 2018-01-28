import express from 'express';
import path from 'path';
import open from 'open';
import pckg from '../package.json';

var config = pckg.config;

var port = config.server.port;
var server = express();
var srcDir = "../src/";
var entryFile = "index.html";
var domain = "http://localhost";
var siteAddress = domain + ":" + port;

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
