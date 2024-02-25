const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}
console.log(mode + ' mode');


module.exports = {
    mode: mode,//настраиваем режим сборки, код выше
    entry: './src/index.js',
    output: { //точка выхода , аналог bandle.js из browserify
        // path: path.resolve(__dirname, 'dist'),// всегда должен быть абсолютный путь (от корневой папки) в нашем случае npm_webpack - название папки в которой лежит проект path: './dist/' - нет. сейчас вызываем методо path.resolve и передаем ему два параметра __dirname - ссылка на текущую папку, так и пишется и dist - относительный путь до папки в которую будем все сохранять
        // filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
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

        ]
    }
}