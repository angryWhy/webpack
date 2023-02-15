const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    return {
        target: 'web',
        entry: {
            //此次引入中，main.js和another.js都引入了lodash库，包含了重复的代码
            // main:'./src/main.js',
            // another:'./src/another.js'

            //设置入口依赖
            main: {
                import: "./src/main.js",
                //dependOn: "shared"
            },
            another: {
                import: "./src/another.js",
                //dependOn: "shared"
            },
            //设置共享的库
            // shared: 'lodash',
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            //每次构建都会去清除dist文件夹
            clean: true,

            //输出结果不携带路径信息，大型项目会造成垃圾回收压力
            pathinfo: false,
        },
        module: {
            rulse: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env'],
                        //cacheDirectory：默认值为 false。当有设置时，指定的目录将用来缓存 loader 的执行结果。
                        //之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗
                        cacheDirectory:true
                      }
                    }
                  }
            ]
        },
        plugins: [
            //在目标文件（dist）生成html模板文件
            new HtmlWebpackPlugin({
                title: "webpack",
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
    }
};