import express from "express";
import path from "path";
import open from "open";
import pckg from "../package.json";
import webpack from "webpack";
import webpackConfig from "../webpack.config.dev";
import devMiddleWare from "webpack-dev-middleware";
import connectHistory from "connect-history-api-fallback";
import setupMockDataPaths from "./expressmockdata";

process.env.NODE_ENV = "development";
process.traceDeprecation = true;

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

setupMockDataPaths(server);

server.use(connectHistory());
server.use(devMiddleWare(compiler, middleWareSettings));
server.use("/images", express.static("images"));

server.get("*", function(req, res) {
    var file = getPath(srcDir + entryFile);
    res.sendFile(file);
});

server.listen(port, function(err) {
    if (err) {
        console.error(err);
    } else {
        open(siteAddress);
    }
});

function getPath(location) {
    return path.join(__dirname, location);
}
