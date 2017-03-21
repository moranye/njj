var webpack = require('webpack');
var path = require('path');
module.exports = {
    //页面入口文件配置
    entry: {
        index : './dev/js/index.js'
    },
    //入口文件输出配置
    output: {
        path: './dev/dist/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    // devtool: 'source-map',
    //其它解决方案配置
    resolve: {
        root: path.resolve('./dev/js/modules/'), //绝对路径
        alias: {
            jquery:'jquery'
        }
    }
};