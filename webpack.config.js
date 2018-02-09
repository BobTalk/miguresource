let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    // 映射源，调试时定位到编译前的代码位置
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: "url-loader",
            }
        ]
    },

    //如何合理处理模块问题
    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json', '.coffee']
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            title: "react-demo",
            filename: './index.html',
            template: "./index.html",
            favicon: 'favicon.ico'
        })
    ]
}