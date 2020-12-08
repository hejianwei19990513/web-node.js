const date = require("./dateform")
const strHtml = require("./转义html中的特殊字符")
const htmlStr = require("./还原html的特殊字符")
module.exports = {
    ...date,
    ...strHtml,
    ...htmlStr
}