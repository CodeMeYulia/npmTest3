let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}
console.log(mode + ' mode');
const path = require('path');

module.exports = {
    mode: mode,//настраиваем режим сборки, код выше
    entry: './src/index.js',
    output: { //точка выхода , аналог bandle.js из browserify
        // path: path.resolve(__dirname, 'dist'),// всегда должен быть абсолютный путь (от корневой папки) в нашем случае npm_webpack - название папки в которой лежит проект path: './dist/' - нет. сейчас вызываем методо path.resolve и передаем ему два параметра __dirname - ссылка на текущую папку, так и пишется и dist - относительный путь до папки в которую будем все сохранять
        // filename: 'main.js'
    },
    plugins: [],
    module: {
        rules: []
    }
}