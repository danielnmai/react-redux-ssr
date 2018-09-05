const path = require('path')

module.exports = {
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

    //Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', 'stage-0',
                        ['env', { target: {
                            browsers: ['last 2 versions']
                        }}]
                    ]
                }
            }
        ]
    }
}