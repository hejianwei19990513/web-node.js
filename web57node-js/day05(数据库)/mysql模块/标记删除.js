const mysql = require('mysql')
const express = require("express")
const app = express()
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址6
    user: 'root',//登录数据库的账号
    password: 'root',//登录数据库的密码
    database: 'roles'//指定要操作哪个数据库
})
const sqlStr = 'update  roles set status=? where id=?'
//[1,1]第一个参数是status改成1，第二个参数是id值
db.query(sqlStr, [1,1], (err, results) => {
    if (err) return console.log(err.message)//失败
    if (results.affectedRows === 1) {console.log('删除数据成功!')}//成功9 
})

