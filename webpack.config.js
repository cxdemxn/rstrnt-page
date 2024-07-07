const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Thee RESTuarant',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
    devtool: 'inline-source-map',
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
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    performance: {
        hints: false,
        maxAssetSize: 400000,
        maxEntrypointSize: 400000,
    },
};