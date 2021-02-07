const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: './dist',
        hot: false,
        watchContentBase: true,
    },
    watch: true,
    stats: {
        modules: false
    }
})