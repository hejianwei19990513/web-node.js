const express = require("express")
const app = express()

app.use('/file1',express.static('file1'))//因为这里加了file1前缀，所以在用到file1里面的文件时，必须在前面加上/file才浏览器显示

app.use(express.static('./clock'))
app.use(express.static('./file'))//因为这里clock在前面执行，所以当输入网址index.html(两个文件夹都有的情况)，会优先查找clock文件夹里面

app.listen(8080,()=>{
    console.log('express server running at http://127.0.0.1:8080');
})