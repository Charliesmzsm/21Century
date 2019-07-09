
var mysql = require('mysql2');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //创建数据库连接
    var dbConnection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'charlie52678',
        database: 'html'
    });
    dbConnection.query("SELECT DISTINCT novel.novelid,novel.novelname,novel.noveltype,novel.introduction FROM novel,bookstore WHERE novel.novelid = bookstore.novelid AND bookstore.userid= ? ",
        [req.query.content],
        function(err, rows, fields) {
            console.log(req.query.content);
            if (err) throw err;
            //如果查询无结果
            if (rows.length===0)
                res.send("<h1>not found</h1>");
            else {
                //将用户表里的信息转换成JSON字符串返回给前端
                var string_res = JSON.stringify(rows);
                console.log(string_res);
                res.send(string_res);
            }
            dbConnection.end();
        });
});

module.exports = router;

