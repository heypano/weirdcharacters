import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    devtool: 'inline-source-map', // Source map settings - does not impact production as source maps are only downloaded when a user opens dev tools
    entry: [
        "babel-polyfill",
        "whatwg-fetch",
        ppath('src/index')
    ],
    target: 'web', // You can use "node" or "electron" here
    output: {
        path: ppath('src'), // This is the local path
        filename: 'bundle.js' // This simulates the existance of bundle.js in the src directory, which is how we can include it in index.html
    },
    plugins: [
        // Create index.html with automatically injected bundle
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
            thisEnvironmentType: "DEV" // This is a custom property available in our html via ejs
        })
    ],
    module: {
        // This means we can import any of these files with the import keyword
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }]
        }]
    }
}

/**
 * Retrun the absolute path
 * @param location
 * @returns {*|string}
 */
function ppath(location) {
    return path.resolve(__dirname, location);
}
