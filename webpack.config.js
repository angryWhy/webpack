const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        //此次引入中，main.js和another.js都引入了lodash库，包含了重复的代码
        // main:'./src/main.js',
        // another:'./src/another.js'

        //设置入口依赖
        main: {
            import: "./src/main.js",
            dependOn: "shared"
        },
        another: {
            import: "./src/another.js",
            dependOn: "shared"
        },
        //设置共享的库
        shared: 'lodash',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //每次构建都会去清除dist文件夹
        clean: true,
    },
    //多入口需要设置这个属性
    optimization: {
        runtimeChunk: 'single',
        //splitchunks可以将以来的模块提取到已有的入口chunk中去，或生成一个新的chunk
        splitChunks: {
            chunks: 'all',
        },
    },
    /*
    代码分离的三种方式
    1.入口起点：使用entry配置手动分离代码。
    2.防止重复： Entry dependencies 或者 SplitChunksPlugin去重和分离chunk
    3.动态导入：模块的内联函数来分离代码
    */
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
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        //在目标文件（dist）生成html模板文件
        new HtmlWebpackPlugin({
            title: "webpack",
        })
    ]
};