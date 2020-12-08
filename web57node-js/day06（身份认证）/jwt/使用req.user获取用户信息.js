const express = require('express')

const app = express()

const jwt = require('jsonwebtoken')

const expressJwt = require('express-jwt')

const secretKey = 'jjy is my girlgod'

const cors = require('cors')
const { UnauthorizedError } = require('express-jwt')

app.use(cors())

app.use(expressJwt({secret:secretKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))

app.use(express.urlencoded({ extended: false }))

app.post('/api/post',(req,res)=>{
    var userinfo = req.body
    res.send({
        status:200,
        message:"发送成功",
        token:jwt.sign({username:userinfo.username},secretKey,{expiresIn:'300s'})
    })
})

app.get('/admin/get',(req,res)=>{
    res.send({
        status:200,
        message:"获取用户信息成功",
        data:req.user
    })
})
app.use((err,req,res,next)=>{
    if(error.name == 'UnauthorizedError') {
        return res.send({
            status:1,
            message:"无效的token"
        })
    }
    res.send({
        status:500,
        message:"未知错误"
    })
})
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})