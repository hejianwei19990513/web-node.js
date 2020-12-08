// 导入处理querystring的Node.js内置模块
const qs = require('querystring')

const bodyParse = function(req, res, next) {
    // 监听req的data事件
    let str = ""
    req.on("data",(chunk)=>{
        str += chunk
    })

    // 监听req的end事件
    req.on("end",()=>{
        // 调用qs.parse()方法，把查询字符串解析为对象
        const body = qs.parse(str)
        req.body = body
        next()
    })
}
module.exports = {
    bodyParse
}