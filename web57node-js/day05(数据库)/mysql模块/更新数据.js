const mysql = require('mysql')
const express = require("express")
const app = express()
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址6
    user: 'root',//登录数据库的账号
    password: 'root',//登录数据库的密码
    database: 'roles'//指定要操作哪个数据库
})
const dataStr = {id:2,tvname:"如意芳霏（更新数据）",role:"傅容"}
const sqlStr = 'UPDATE roles SET ? where id=?'

db.query(sqlStr, [dataStr,dataStr.id], (err, results) => {
    if (err) return console.log(err.message)//失败
    if (results.affectedRows === 1) { console.log('更新数据成功! ') }//成功 
})

