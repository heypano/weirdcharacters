import path from 'path';
import webpack from 'webpack';
import {getPlugins, getEntryPoints, getOutputData} from './webpackHelper';
import ExtractTextPlugin from "extract-text-webpack-plugin";
const environment = "DEV";

let config = {
    devtool: 'source-map', // Source map settings - does not impact production as source maps are only downloaded when a user opens dev tools
    entry: getEntryPoints(environment),
    target: 'web', // You can use "node" or "electron" here
    output: getOutputData(environment),
    plugins: getPlugins(environment),
    module: {
        // This means we can import any of these files with the import keyword
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            })
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'    // where the fonts will go
                    // publicPath: '../'       // override the default path
                }
            }]
        }]
    }
};

export default config;
