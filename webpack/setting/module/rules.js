const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {isProduction, isDevelopment, fileRegExp} = require('./../../config');

const styleLoader = {
    loader: 'style-loader',
    options: {attributes: {'class': 'my-css-module'}},
};

const postCssLoader = {
    loader: 'postcss-loader',
    options: {sourceMap: true},
};

const cssLoader = isProduction ? MiniCssExtractPlugin.loader : styleLoader;

module.exports.rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    },
    {
        test: fileRegExp,
        use: [
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        quality: 80, // 0..100
                        progressive: true,
                    },
                    // optipng: {
                    //     optimizationLevel: 7 // 0..7
                    // },
                    // pngquant: {
                    //     quality: '60-80', // 0..100
                    //     speed: 1 // 1..10
                    // },
                    svgo: {}, // no set up needed
                    gifsicle: {
                        optimizationLevel: 3, // 1..3
                    },
                    // webp brake MS Edge
                    // webp: {
                    //     quality: 75,
                    //     method: 6
                    // }
                },
            },
            {
                loader: 'base64-inline-loader',
                query: {
                    limit: isProduction ? 1e3 : 1, // 1k bytes for production
                    name: 'asset/[name]-[md5:hash:hex:7].[ext]',
                },
            },
        ],
    },
    {
        test: /\.scss$/,
        use: [
            cssLoader,
            'css-modules-flow-types-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDevelopment,
                    modules: {
                        localIdentName: isDevelopment ? '[local]----[hash:6]' : '[hash:6]', // '[local]----[path]--[name]--[hash:6]'
                    },
                },
            },
            postCssLoader,
            {loader: 'sass-loader', options: {sourceMap: isDevelopment}},
        ],
    },
    {
        test: /\.css$/,
        use: [
            cssLoader,
            'css-modules-flow-types-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDevelopment,
                    modules: {
                        localIdentName: '[local]', // '[local]----[path]--[name]--[hash:6]'
                    },
                },
            },
            postCssLoader,
        ],
    },
];
