const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    node: {
        __dirname: false
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "./node_modules/swagger-ui-dist/swagger-ui.css", to: "." },
                { from: "./node_modules/swagger-ui-dist/swagger-ui-bundle.js", to: "." },
                { from: "./node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js", to: "." },
                { from: "./node_modules/swagger-ui-dist/favicon-16x16.png", to: "." },
                { from: "./node_modules/swagger-ui-dist/favicon-32x32.png", to: "." }
            ]
        })
    ]
};