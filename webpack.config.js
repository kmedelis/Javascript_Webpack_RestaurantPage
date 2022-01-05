const path = require('path');

module.exports = {
    entry: {
    index: './src/index.js',
    print: './src/subpages/print.js',
    menu: './src/subpages/Menu.js',
    contact: './src/subpages/Contant.js',
    about: './src/subpages/About.js'
    },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        },
        {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        },
    ],
    },
};