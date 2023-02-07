const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
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
    }
};