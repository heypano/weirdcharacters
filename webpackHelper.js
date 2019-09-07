/**
 * The point of this file is to automate some of the repetitive webpack definitions, especially as it relates to prod vs dev
 */

import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import webpack from 'webpack';

const pageList = [
    {
        template: "src/index.html", // What is the source for this
        chunks: ['index'], // What bundle should be loaded here?
        filename: "index.html" // Where does the output go?
    }
];

/**
 * Return the entry points for webpack
 * @param {"DEV" | "PROD"} environment
 * @returns {Object}
 */
export function getEntryPoints(environment){
    return {
        index: [
            "whatwg-fetch",
            ppath('src/index')
        ]
    };
}

/**
 * Return the output data for webpack
 * @param environment
 * @returns {{path: *|string, filename: string}}
 */
export function getOutputData(environment){
    const outputPath = (environment === "PROD") ? ppath('dist') : ppath('src');
    return {
        path: outputPath,
        publicPath: '/',
        filename: 'bundle.[name].[chunkhash].js'
    }
}

/**
 * Is the app served at / or at /?
 * @param environment
 * @returns {string}
 */
export function getSubdirectory(environment){
    if(environment === "DEV"){
        return "";
    } else {
        return ""
    }
}

/**
 *
 * Return the array of CopyPlugin configurations used by webpack
 * @param {"DEV" | "PROD"} environment
 * @returns {Array}
 */
export function getCopyPlugins(environment){
    return [
        new CopyWebpackPlugin([
            // Put files here that need to be directly copied
            //  { from: 'src/sampleNonCrisisConfig.json', to: 'sampleNonCrisisConfig.json' },
        ])
    ]
}

/**
 * Get CSS related plugins
 * @param environment
 * @returns {*[]}
 */
export function getCSSPlugins(environment){
    return [
        new MiniCSSExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        })
    ]
}

/**
 * Return the array of HTMLWebpackPlugin configurations used by webpack
 * @param {"DEV" | "PROD"} environment
 * @returns {Array}
 */
export function getHTMLPlugins(environment){
    const prodParams = {
        inject: true,
        thisEnvironmentType: "PROD", // This is a custom property available in our html via ejs
        thisSubdirectory: getSubdirectory("PROD"),
        buildTimestamp: new Date(),
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
    };
    const devParams = {
        inject: true,
        thisSubdirectory: getSubdirectory("DEV"),
        thisEnvironmentType: "DEV", // This is a custom property available in our html via ejs
        buildTimestamp: new Date()
    };

    const baseParams = (environment === "PROD") ? prodParams: devParams;
    const pluginArray = [];

    pageList.forEach(page => {
        const pageConfig = Object.assign({}, page, baseParams); // Combine page data and baseParams
        if(Object.keys(pageConfig)){
            const plugin = new HtmlWebpackPlugin(pageConfig);
            pluginArray.push(plugin);
        }
    });

    return pluginArray;
}

/**
 * Return all the plugins for webpack
 * @param environment
 */
export function getPlugins(environment){
    const plugins =  [
        ...getCopyPlugins(environment),
        ...getHTMLPlugins(environment),
        ...getCSSPlugins(environment)
    ];

    return plugins;
}


/**
 * Return all the rules for webpack
 * @param environment
 */
export function getRules(environment){
    return [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
    }, {
        test: /\.s?css$/,
        use: [
            {
                loader: MiniCSSExtractPlugin.loader
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    importLoaders: 1
                }
            },
            {
                loader: 'postcss-loader'
            },
            {
                loader: 'sass-loader'
            }
        ]
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

/**
 * Retrun the absolute path
 * @param location
 * @returns {*|string}
 */
function ppath(location) {
    return path.resolve(__dirname, location);
}
