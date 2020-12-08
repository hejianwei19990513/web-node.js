const express = require("express")

const app = express()

const jwt = require('jsonwebtoken')

app.post('/api/login', function (req, res) {
    // ...省略登录失败情况下的代码
    //用户登录成功之后，生成JWT字符串，通过token属性响应给客户端
    res.send({
        status: 200,
        message: '登录成功! ',
        //调用 jwt.sign(）生成JwT字符串，三个参数分别是:用户信息对象、加密密钥、配置对象(有效期时间)
        token: jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s ' })
    })
})