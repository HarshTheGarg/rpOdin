const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path"); 


module.exports = {
    entry: {
        index: './src/index.js',
        init: './src/init.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restraunt Page",
        }),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
}