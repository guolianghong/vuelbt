 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   entry:{
       index:path.join(__dirname,'./App/app.js')
   },
    output:{
        path:path.join(__dirname,'/public'),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader"
            },
            {
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test:/\.html$/,
                loader:"html-withimg-loader"
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:"url-loader?limit=8192"
            },
            {
                test:/\.(eot|svg|woff|woff2|ttf)$/,
                use:[
                    {
                        loader:"url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,'/'),
        host:"localhost",
        port:"8080",
        inline:true,
        watchContentBase:true
    },
    plugins:[
        new ExtractTextWebpackPlugin('[name].css'),
        //提取公共代码
        new webpack.optimize.CommonsChunkPlugin('common'),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:path.join(__dirname,'./index.html')
        })
    ]
};