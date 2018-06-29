const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

module.exports = {
    entry: {
        // polyfills: './src/js/polyfills.js',
        index: './src/js/index.js'
    },

    plugins: [
        extractCSS,
        extractLESS,
        new HtmlWebpackPlugin({
            title: 'Progressive Web Application',
            template: 'index.ejs'
        })

        // 整个应用程序中全局提供lodash方法
        // new webpack.ProvidePlugin({
        //     _: 'lodash'
            // 只提供join从lodash哪里调用的方法
            // join: ['lodash', 'join']
        // })
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'less': ExtractTextPlugin.extract({
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: false,
                                        minimize: true //css压缩
                                    }
                                },
                                {
                                    loader: 'less-loader',
                                    options: {
                                        sourceMap: false
                                    }
                                }
                            ]
                        })
                    },
                }
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract(['css-loader', 'postcss-loader'])
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract(['css-loader', 'less-loader'])
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}