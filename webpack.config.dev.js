import path from 'path';

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
        publicPath: '/', // This is where it is going to be served on the server
        filename: 'bundle.js' // This simulates the existance of bundle.js in the src directory, which is how we can include it in index.html
    },
    plugins: [],
    module: {
        loaders: [ // This means we can import any of these files with the import keyword
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
        ]
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
