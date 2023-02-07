const path = require('path')
module.exports = {
    main: './src/main.js',
    app: {
        //依赖于main文件，所以先执行main入口，然后app入口
        //dependOn 不能是循环引用的,不能a依赖于b，b依赖于a
        dependOn: 'main',
        import: './src/app.js'
    },
    //只能指定一个 output 配置。
    output: {
        path: path.resolve(__dirname, 'dist'),
        //多个入口文件，需要配置一下
        filename: '[name].js'
    }
}