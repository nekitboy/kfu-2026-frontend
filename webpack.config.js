const path = require("node:path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, loader: "ts-loader" },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.hbs',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/shop.hbs',
            filename: 'shop.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/about.hbs',
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/blog.hbs',
            filename: 'blog.html',
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/index.css", to: "index.css"},
                {from: "./src/assets", to: "assets"},
            ]
        })
    ]
};