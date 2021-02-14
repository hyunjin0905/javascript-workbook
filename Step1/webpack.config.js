var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ],
    },
    devServer: {
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
            template: 'index.html',
        }),
    ],
};