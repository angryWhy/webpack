const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //loader的主要特性
    /*
        1.链式调用，每个 loader 会将转换应用在已处理过的资源上，相反的顺序执行，从右到左执行，从下到上执行
        2.loader 可以是同步的，也可以是异步的。
        3.loader 可以通过 options 对象配置
    */
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
        ]
    }
}