import path from 'path';

export default {
    debug: true, // Show debug info
    devtool: 'inline-source-map', // Source map settings - does not impact production as source maps are only downloaded when a user opens dev tools
    noInfo: false, // It will not show a list of all files bundled
    entry: [
        path.resolve(__dirname, 'src/index') // This is the first file loaded
    ],
    target: 'web', // You can use "node" or "electron" here
    output: {
        path: path.resolve(__dirname, 'src'), // This is the local path
        publicPath: '/', // This is where it is going to be served on the server
        filename: 'bundle.js' // This simulates the existance of bundle.js in the src directory, which is how we can include it in index.html
    },
    plugins: [],
    module: {
        loaders: [ // This means we can import any of these files with the import keyword
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
}
