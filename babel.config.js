module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    useBuiltIns: "entry",
                    corejs: 3,
                    debug: false,
                    targets: {
                        edge: "17",
                        firefox: "60",
                        chrome: "67",
                        safari: "11.1",
                        ie: "11"
                    }
                }
            ],
            "@babel/preset-react"
        ],
        // Include modules that need to be transpiled here
        ignore: [
            filename => {
                const modulesToTranspile = [];
                if (!/\/node_modules\//.test(filename)) {
                    return false; // if not in node_modules, we want to compile it
                } else {
                    for (let module of modulesToTranspile) {
                        const regex = new RegExp(`node_modules/${module}`);
                        if (regex.test(filename)) {
                            console.log(
                                `=^._.^= ∫ Module not excluded from transpilation: ${filename}`
                            );
                            return false;
                        }
                    }
                }
                // it's in node modules and NOT our source code
                return true;
            }
        ],
        plugins: [
            "@babel/plugin-proposal-object-rest-spread",
            [
                "@babel/plugin-proposal-class-properties",
                {
                    loose: true
                }
            ]
        ]
    };
};
