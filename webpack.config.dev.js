import path from 'path';
import webpack from 'webpack';
import {getPlugins, getEntryPoints, getOutputData, getRules} from './webpackHelper';

const environment = "DEV";

let config = {
    devtool: 'source-map', // Source map settings - does not impact production as source maps are only downloaded when a user opens dev tools
    mode: 'development',
    entry: getEntryPoints(environment),
    target: 'web', // You can use "node" or "electron" here
    output: getOutputData(environment),
    plugins: getPlugins(environment),
    module: {
        // This means we can import any of these files with the import keyword
        rules: getRules(environment)
    }
};

export default config;
