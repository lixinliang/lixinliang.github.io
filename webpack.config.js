'use strict';

let fs = require('fs');
let path = require('path');
let fse = require('fs-extra');
let moment = require('moment');
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const entry = {
    index : path.join(__dirname, 'entry/index.js'),
};
const packageJson = require('./package.json');

const alias = {};
const imageSize = 10240;
const constants = {
    NODE_ENV : 'production',
    NAME : packageJson.name,
    VERSION : packageJson.version,
};

const banner =
`@ProjectName ${ packageJson.name }
@Version ${ packageJson.version }
@Author ${ packageJson.author.name }(${ packageJson.author.url })
@Update ${ moment().format('YYYY-MM-DD h:mm:ss a') }`;

module.exports = {
    entry,
    output : {
        path : './',
        filename : 'js/[name].js',
        publicPath : '',
    },
    extensions : ['.js', '.json', '.scss'],
    resolve : {
        alias,
    },
    module : {
        loaders : [
            {
                test : /\.(png|jpg|gif|svg)$/,
                loader : `url?limit=${ imageSize }&name=img/[name].[ext]?[hash]`,
            },
            {
                test : /\.css$/,
                loader : ExtractTextWebpackPlugin.extract('style', 'css!postcss'),
            },
            {
                test : /\.scss$/,
                loader : ExtractTextWebpackPlugin.extract('style', 'css!postcss!sass'),
            },
            {
                test : /\.js$/,
                exclude : path.join(__dirname, '../node_modules/'),
                loader : 'babel',
                query : {
                    presets : ['es2015', 'stage-0'],
                    // plugins : ['transform-remove-strict-mode'],
                    // plugins: ['transform-runtime'],
                },
            },
        ],
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress : {
                warnings : false,
            },
            output : {
                comments : false,
            },
        }),
        new webpack.DefinePlugin({ 'process.env' : (Object.keys(constants).forEach(( key ) => constants[key] = JSON.stringify(constants[key])), constants) }),
        new webpack.BannerPlugin(banner),
        new ExtractTextWebpackPlugin('css/[name].css'),
    ],
    postcss () {
        return [autoprefixer({ browsers : ['last 2 versions'] })];
    },
};
