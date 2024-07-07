const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        watchFiles: {
            paths: [
                './src/template.html'
            ],
        },
    },
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
});