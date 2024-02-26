const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

console.log(mode + ' mode');

module.exports = {
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname, './dist'),
        // filename: 'main.js'
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    devtool: 'source-map',
    mode: mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            filename: 'index.html',
        })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader", "postcss-loader", "sass-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
        ],
    },
}