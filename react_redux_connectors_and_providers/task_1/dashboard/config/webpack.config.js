const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "../dist"),
        },
        hot: true,
        compress: true,
        open: true,
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                    }
                ]
            },
        ],
    },
};
