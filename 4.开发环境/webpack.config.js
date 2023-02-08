const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main:'./src/main.js',
        print:'./src/print.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        //每次构建都回去清除dist文件夹
        clean: true,
    },

    //每次更新后手动打包，webpack代码变化后自动打包

    //1.watch mode（观察者模式）
      /*在package.json文件，script添加  "watch":"webpack --watch"*/
    
    //2.npm install --save-dev webpack-dev-server,安装dev-server
    devserver:{
    //static属性，告诉要从哪查找文件
        static:'./dist'
    },
    optimization: {
        //因为有多个入口文件，所以添加了这个属性
        runtimeChunk: 'single',
    },
    //将环境设置为development
    mode: 'development',

    //设置sourcemap
    devtool: 'inline-source-map',

    module: {
        /*
        模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。链会逆序执行。
        第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推。
        最后，webpack 期望链中的最后的 loader 返回 JavaScript。
        */
        rules: [
            //处理css资源文件
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            //处理image
            {
                test:/\.(png|svg|jpg|jpeg)$/i,
                type:"asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type:"asset/resource"
            }
        ]
    },
    plugins:[
        //在目标文件（dist）生成html模板文件
        new HtmlWebpackPlugin({
            title:"webpack",
        })
    ]
};