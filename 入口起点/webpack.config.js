const path = require('path')
module.exports = {
    //单文件入口
    entry:'./src/main.js',

    //全写形式
    entry:{
        main:'./src/main.js'
    },

    //数组形式,一次注入多个依赖文件
    entry:['./src/main.js','./src/main-2.js'],



    //对象写法
    entry:{
        app:'./src/app.js',
        mian:'./src/main.js'
    },


    //描述入口的对象
    /*
        dependOn: 当前入口所依赖的入口。它们必须在该入口被加载前被加载。(-----当前入口需要依赖的入口必须提前加载)
        filename：输出的文件名字
        import:启动时需加载的模块(-----引入入口文件)
        library:为当前入口创建一个library
        runtime:运行时的chunk名字，设置了就会创建一个新的运行时的chunk
        publicPath:制定一个公共的url地址
    */
   entry:{
        main:'./src/main.js',
        app:{
            //依赖于main文件，所以先执行main入口，然后app入口
            //dependOn 不能是循环引用的,不能a依赖于b，b依赖于a
            dependOn:'main',
            import:'./src/app.js'
        }
   },




   //官方举例的应用场景
   entry:{
        pageOne:'./src/pageOne.js',
        pageTwo:'./src/pageTwo.js',
        pageThree:'./src/pageThree.js'
   }
}