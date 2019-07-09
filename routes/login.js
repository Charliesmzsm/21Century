var mysql = require('mysql2');
var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
    util = require('util');
router.post('/', function(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {

        var user_name=fields['username'];
        var password=fields['password'];
        //创建数据库连接
        var dbConnection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'charlie52678',
            database: 'html'
        });
        console.log(user_name+''+password);
        dbConnection.query(
            'SELECT * FROM reader WHERE username = ? and password = ?',
            [user_name,password],
            function(err, results, fields) {
                if (err) {
                    dbConnection.end();
                    return;
                }
                if (results.length===0){
                    res.send("0"); // "0"代表登录错误
                }else{
                   // res.send('1'); // "1"代表登录成功
//将用户表里的信息转换成JSON字符串返回给前端
                    var string_res = JSON.stringify(results[0]);
                    res.send(string_res);
                }
                dbConnection.end();
            }
        );
    });

});

module.exports = router;
