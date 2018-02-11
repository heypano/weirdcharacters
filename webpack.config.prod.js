import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    devtool: 'source-map', // Source map settings - does not impact production as source maps are only downloaded when a user opens dev tools
    entry: [
        "babel-polyfill",
        "whatwg-fetch",
        ppath('src/index')
    ],
    target: 'web', // You can use "node" or "electron" here
    output: {
        path: ppath('dist'), // Actual output for production build
        publicPath: './', // This is where it is going to be served on the server
        filename: 'bundle.js' // Bundle name
    },
    plugins: [
        // Create index.html with automatically injected bundle
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
            minify: { // Lots of options for minifying here
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true // Change/Remove this if you do not want a production source map
        }) // Minify JS
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
 * Return the absolute path
 * @param location
 * @returns {*|string}
 */
function ppath(location) {
    return path.resolve(__dirname, location);
}
