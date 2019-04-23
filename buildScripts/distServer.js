import express from 'express';
import path from 'path';
import open from 'open';
import pckg from '../package.json';
import compression from 'compression';

const config = pckg.config;
const port = config.server.port;
const server = express();
const distDir = "../dist/";
const entryFile = "index.html";
const domain = "http://localhost";
const siteAddress = domain + ":" + port;

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

// Pretend API
server.get('/cats', function(req,res) {
    res.json({
        cats: [{
            name: "Dexter",
            description: "Chill Cat"
        }, {
            name: "Manoli",
            description: "Hilarious Cat"
        }]
    })
});

function getPath (location) {
    return path.join(__dirname, location);
}
