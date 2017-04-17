module.exports = {
    entry: {
        index:"./src/index.tsx",
    },
    output: {
        filename: '[name].js',
        path: './dist'
    },

    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.js|tsx?$/, loader: "ts-loader" }
        ]
    }
};