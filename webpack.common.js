const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

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
        new HtmlWebpackInlineSVGPlugin({
            runPreEmit: true,
            inlineAll: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/source',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
        
            },
        ],
    },
};