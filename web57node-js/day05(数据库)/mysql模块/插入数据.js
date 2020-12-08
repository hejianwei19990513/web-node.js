const mysql = require('mysql')
const express = require("express")
const app = express()
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址6
    user: 'root',//登录数据库的账号
    password: 'root',//登录数据库的密码
    database: 'roles'//指定要操作哪个数据库
})
const dataStr = {tvname:"新白娘子传奇",role:"白素贞"}
const sqlStr = 'insert into roles set ?'
db.query(sqlStr,dataStr,(err,result)=>{
    if(err) return console.log(err.message);
    if(result.affectedRows == 1) {
        console.log('插入数据成功');
    }
})

