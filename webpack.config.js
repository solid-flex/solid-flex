require('dotenv').config();
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.MODE==="production" ? true : false;

module.exports = {
    mode: process.env.MODE,
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isProduction ? 'solid-flex.min.css' : 'solid-flex.css',
            chunkFilename: '[id].css',
        }),
    ],
};