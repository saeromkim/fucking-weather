const webpack = require('webpack','app.css');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: '',
    },
    output:{
        path: '/dist',
        filename:'[name].js',
        publicPath:'/',
    },
    module: {
        rules: [{

        },{
            test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader',
            options: {
            name: '[hash].[ext]',
            limit: 10000,
            },
        }],
    },
    plugins:[
        new ExtractTextPlugin({
            filename: 'app.css',
        })
    ],
    optivization:{},
    resolve:{
        modules: ['node_modules'],
        extensions:['.js','.json','.jsx','.css'],
    },
};