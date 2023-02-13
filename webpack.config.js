const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");
module.exports = (env) => {
  /*
  webpack 命令行 环境配置 的 --env 参数，可以允许你传入任意数量的环境变量。
  而在 webpack.config.js 中可以访问到这些环境变量。
  例如，--env production 或 --env goal=local。
  */

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


    //webpack-dev-server v4.0.0,热模块替换是自动开启的
    devServer: {
      // static: './dist',
      //   //开启热模块
      //   hot: true,
      open: true,
    },


    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      //每次构建都会去清除dist文件夹
      clean: true,

      //输出结果不携带路径信息，大型项目会造成垃圾回收压力
      pathinfo: false,
    },
    //多入口需要设置这个属性
    optimization: {
      //该配置会生成一个runtime.js的文件
      //将 runtime 代码拆分为一个单独的 chunk。将其设置为 single 来为所有 chunk 创建一个 runtime bundle
      runtimeChunk: 'single',
      //针对hash值修改，每一次build，hash值让它不变
      moduleIds: 'deterministic',
      //splitchunks将模块分离到单独的 bundle 中，或生成一个新的chunk
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      //避免额外的优化步骤,webpack执行额外的算法来输出优化体积和性能，大型的库耗费性能
      /*
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
      */
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
        },
        {
          test: /\.js$/,
          //通过使用 include 字段，仅将 loader 应用在实际需要将其转换的模块
          //小即是快(smaller = faster)
          include: path.resolve(__dirname, 'src'),
          use: [
            {
              loader: "babel-loader",
            }
          ]
        },
      ]
    },
    plugins: [
      //在目标文件（dist）生成html模板文件
      new HtmlWebpackPlugin({
        title: "webpack",
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    //缓存
    /*通过必要的配置，以确保 webpack 编译生成的文件能够被客户端缓存，而在文件内容变化后，能够请求到新的文件。*/
  }
};