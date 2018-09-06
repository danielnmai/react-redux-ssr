const path = require('path')

module.exports = {
    //the root file of client code
    entry: './src/client/client.js',

    //Where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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