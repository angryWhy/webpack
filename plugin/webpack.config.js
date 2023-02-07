const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackConfig = require('../输出/webpack.config')
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    //插件
    /*
        官方解释：
        webpack 插件是一个具有 apply 方法的 JavaScript 对象。
        apply 方法会被 webpack compiler 调用，并且在 整个 编译生命周期都可以访问 compiler 对象。
    */
   plugins:[
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.ProgressPlugin(),
   ]
}