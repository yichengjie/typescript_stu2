module.exports = {
    entry:"./src/index.tsx",
    output: {
        filename: 'index.js',
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ],
    module: {
        loaders: [
           // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
            {test: /\.js$/, loader: "babel"}
        ]
    },
    
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};