'use strict';

let fs = require('fs');
let path = require('path');
let fse = require('fs-extra');
let moment = require('moment');
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

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

const empty = () => {};
const jquery = path.resolve('node_modules', 'jquery', 'dist');
const bootstrap = path.resolve('node_modules', 'bootstrap', 'dist');
const fontawesome = path.resolve('node_modules', 'font-awesome');

function entry () {
    fs.readdirSync(path.resolve('entry')).forEach(( filename ) => {
        if (path.extname(filename) == '.js') {
            this[`${ path.basename(filename, '.js') }.min`] = path.resolve('entry', filename);
        }
    });
    return this;
}

module.exports = {
    entry : entry.call({}),
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
                exclude : path.resolve('node_modules'),
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
        process.argv.indexOf('--clean') == -1 ? empty : new CleanWebpackPlugin(['css', 'js'], { root : __dirname }),
        process.argv.indexOf('--copy') == -1 ? empty : new CopyWebpackPlugin([
            {
                from : path.join(bootstrap, 'css', 'bootstrap.min.css'),
                to : 'css/bootstrap.min.css',
            },
            {
                from : path.join(bootstrap, 'css', 'bootstrap.min.css.map'),
                to : 'css/bootstrap.min.css.map',
            },
            {
                from : path.join(bootstrap, 'js', 'bootstrap.min.js'),
                to : 'js/bootstrap.min.js',
            },
            {
                from : path.join(bootstrap, 'fonts'),
                to : 'fonts',
            },
            {
                from : path.join(fontawesome, 'css', 'font-awesome.min.css'),
                to : 'css/font-awesome.min.css',
            },
            {
                from : path.join(fontawesome, 'fonts'),
                to : 'fonts',
            },
            {
                from : path.join(jquery, 'jquery.min.js'),
                to : 'js/jquery.min.js',
            },
        ]),
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
