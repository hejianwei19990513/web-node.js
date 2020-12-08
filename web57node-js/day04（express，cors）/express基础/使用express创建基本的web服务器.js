// 1．导入express
const express = require('express')

//2．创建web服务器
const app = express()


app.get('/user', (req, res) => {
    // 向客户端发送JSON对象
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
    // 向客户端发送文本内容
    res.send('请求成功')
})
app.get('/', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})
// 这里的id是动态参数，如果改成ids就返回的是{ids=1}如果改成:/id/:name则返回的是{id=1,name=zs}
app.get('/user/:id', (req, res) => {
    // req.params默认是一个空对象
    // 里面存放着通过: 动态匹配到的参数值
    console.log(req.params)
    res.send(req.params)
})
//3．调用app.listen(端口号，启动成功后的回调函数），启动服务器 
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})