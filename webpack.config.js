const path = require("node:path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".js", '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/index.css", to: "index.css"},
                {from: "./src/assets", to: "assets"},
            ]
        })
    ]
};