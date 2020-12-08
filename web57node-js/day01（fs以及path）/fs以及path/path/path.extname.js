const path = require("path")
const fpath = "/a/b/c/index.html"

const a = path.extname(fpath)
console.log(a);//输出为.html