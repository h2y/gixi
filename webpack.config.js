/* global __dirname */

var path = require('path');

var webpack = require('webpack');

var dir_js = path.resolve(__dirname, 'lib');
var dir_build = path.resolve(__dirname, 'dist');



module.exports = [{
    entry: path.resolve(dir_js, 'index.js'),
    output: {
        path: dir_build,
        filename: 'gixi-module.js',
	library : 'GIXI',
	libraryTarget : 'commonjs2'
    },
    devServer: {
        contentBase: dir_build,
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dir_js,
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
  //  devtool: 'source-map',
},

{
    entry: path.resolve(dir_js, 'index.js'),
    output: {
        path: dir_build,
        filename: 'gixi-min.js',
    },
    devServer: {
        contentBase: dir_build,
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dir_js,
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
  //  devtool: 'source-map',
}
]
