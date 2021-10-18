const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client',

    },
    mode: 'production',
    module: {
        rules: [
            // CSS loader configuration; use 'MiniCssExtractPlugin' plugin to extract CSS into separate files
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            // SCSS (SASS) loader configuration
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            // Javascript loader configuration with transpiler options
            // NOTE: in production build mode, webpack automatically minimizes JS files when 
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                // babel loader configuration
                use: {
                    loader: "babel-loader",
                    options: {
                        // transpiles Javascript code to cross-browser compatible (ES5) code
                        // presets: [ '@babel/env' ]
                        presets: ['@babel/preset-env']
                    }
                },
            }
        ]
    },
    optimization: {
        // minimize/compress/optimize the generated CSS code
        minimizer: [
            new CssMinimizerPlugin()
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebPackPlugin({
            template: "src/client/views/index.html",
            // filename: "./index.html"
            filename: "index.html"
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}