const path = require('path')
const webpack= require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry:'./src/client/index.js',
    output:{
      libraryTarget:'var',
      librart:'Client'

    },
    mode:'development',
    devtool:'source-map',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    module:{
        rules:[
            {
                test:'/\.js$',
                exculde: /node_modules/,
                loader:"babel-loader"
            },
            {
            test: /\.scss$/,
            use:[ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
        ]
    },
    plugins:[
      new BundleAnalyzerPlugin({
        analyzerMode:'server',
    }),
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    }),
    new CleanWebpackPlugin({
        // Simulate the removal of files
        dry: true,
        // Write Logs to Console
        verbose: true,
        // Automatically remove all unused webpack assets on rebuild
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
  }), 
    ]

  };