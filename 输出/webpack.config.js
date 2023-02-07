const path = require('path')
module.exports = {
    //只能指定一个 output 配置。
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}