const path = require('path');

module.exports = {
    entry: './out/App.js',
    output: {
        path: path.resolve(__dirname, 'www/js'),
        filename: 'app.js'
    },
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM'
    },
};