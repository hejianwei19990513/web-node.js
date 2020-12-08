const mysql = require('mysql')
const express = require("express")
const app = express()
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址6
    user: 'root',//登录数据库的账号
    password: 'root',//登录数据库的密码
    database: 'roles'//指定要操作哪个数据库
})
const sqlStr = 'DELETE FROM roles wHERE id=?'
//调用db.query()执行QL语句的同时，为占位符指定具体的值
//注意:如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//如果SQL语句中只有一个占位符，则可以省略数组
db.query(sqlStr, 8, (err, results) => {
    if (err) return console.log(err.message)//失败
    if (results.affectedRows === 1) {console.log('删除数据成功!')}//成功9 
})

