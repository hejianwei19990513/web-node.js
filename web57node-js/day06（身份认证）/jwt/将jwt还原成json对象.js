const express = require("express")

const app = express()

const expressjwt = require('express-jwt')

const secretKey = 'jjy is my girlgod'

// unless({path:[/^\/api\//]})用来指定哪些接口不需要访问权限
app.use(expressjwt({secret:secretKey}).unless({path:[/^\/api\//]}))