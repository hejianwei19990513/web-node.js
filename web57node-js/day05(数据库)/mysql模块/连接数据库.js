const mysql = require('mysql')
const express = require("express")
const app = express()
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址6
    user: 'root',//登录数据库的账号
    password: 'root',//登录数据库的密码
    database: 'roles'//指定要操作哪个数据库
})
db.query('select 1',(err,result)=>{
    if(err) return console.log(err.message);

    //只要能打印出[RowDataPacket { '1':1 }]的结果，就证明数据库连接正常
    console.log(result);
})

