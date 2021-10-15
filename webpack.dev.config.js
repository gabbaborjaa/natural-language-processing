const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        // name of generated Javascript output file inserted (by the plugin 'HtmlWebPackPlugin') in the 'head' section of index.html
        filename: 'bundle.js',
        // folder where the generated 'bundle.js' file will be placed
        path: path.resolve(__dirname, './dist-dev')
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    // webpack dev server configuration
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist-dev')
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            // CSS loader configuration
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            // SCSS (SASS) loader configuration
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // Javascript loader configuration with transpiler options
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                // babel loader configuration
                use: {
                    loader: "babel-loader",
                    options: {
                        // transpiles Javascript code to cross-browser compatible (ES5) code
                        // presets: [ '@babel/env' ]
                        presets: [ '@babel/preset-env' ]
                    }
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/client/views/index.html",
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