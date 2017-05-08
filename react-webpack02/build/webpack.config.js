var path = require('path') ;
var rootPath = path.resolve(__dirname,'../') ;
//console.info(`rootPath : ${rootPath}`) ;
module.exports = {
    entry: path.resolve(rootPath,"./src/index.tsx") ,
    output: {
        filename: "bundle.js",
        path: path.resolve(rootPath,"./public/dist"),
        publicPath:"/public/dist"
        //这里写成什么都无所谓，不一定要与path保持一致，这里写成什么，
        //生成的bundle.js的地址就会指向什么，eg:'public'，html引入src改为'/public/bundle.js即可'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};