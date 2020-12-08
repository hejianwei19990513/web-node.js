const mysql = require('mysql')
const express = require("express")
const app = express()
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'roles'
})
db.query('select * from roles',(err,result)=>{
    if(err) return console.log(err.message);

    console.log(result);
})
