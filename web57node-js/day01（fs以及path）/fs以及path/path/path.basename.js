const path = require("path")
const fpath = "/a/b/c/index.html"


const a = path.basename(fpath)
console.log(a);//输出为index.html

const b = path.basename(fpath,".html")
console.log(b);//输出为index