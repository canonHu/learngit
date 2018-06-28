const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// PWAs
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    devtool: 'source-map',

    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new BundleAnalyzerPlugin(),
        // new WorkboxPlugin.GenerateSW({
        //     // these options encourage the ServiceWorkers to get in there fast 
        //     // and not allow any straggling "old" SWs to hang around
        //     clientsClaim: true,
        //     skipWaiting: true
        // })
    ],

    // optimization: {
    //     runtimeChunk: 'single',
    // }
});