var mysql = require('mysql2');
var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
    util = require('util');
router.post('/', function(req, res, next) {
    const form = new formidable.IncomingForm();
    form.uploadDir = "public/upload"; //上传文件存储的路径
    form.keepExtensions = true; //保1留上传文件的文件后缀
    form.parse(req, function(err, fields, files) {
        var userid=fields['userid'];
        var number=fields['number'];
        var introduction=fields['introduction'];
        var email=fields['email'];

        //服务器端的存储文件的路径地址
        //需要移除public/前缀后，再存入数据库
        //创建数据库连接
        //创建数据库连接
        var dbConnection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'charlie52678',
            database: 'html'
        });
        console.log(fields);
        dbConnection.query(
            'UPDATE reader SET email=? , number= ? , introduction = ? WHERE userid= ? ',
            [email,number,introduction,userid],
            function(err, results, fields) {
                if (err) {
                    res.send(0);
                    console.log(err.message);
                    dbConnection.end();
                }else{
                    res.send(results);
                    dbConnection.end();
                }
            }
        );

    });
});
module.exports = router;
