const express = require("express")
const app = express()
const session = require('express-session')
app.use(session({
    secret:'jjy',
    resave:false,
    saveUninitialized:false
}))