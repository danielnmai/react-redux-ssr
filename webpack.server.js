const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternal = require('webpack-node-externals')
const config  = {
    // Inform webpack that we're building a bundle 
    //for Nodejs, rather than for the browser
    target: 'node',

    //the root file of our server app
    entry: './src/index.js',

    //Where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternal()]
}

module.exports = merge(baseConfig, config)