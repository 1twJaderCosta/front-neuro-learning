module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
    }]

}
