const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin =require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
	   },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({}),new OptimizeCSSAssetsPlugin({})],
      },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader,'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                  name: 'public/[name].[ext]',
                },
            } 
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              { from: 'src/client/media/images', to: 'src/client/media/images' }]}),
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({ 
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
    ]

}