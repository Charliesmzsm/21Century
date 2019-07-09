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
    dbConnection.query("SELECT * FROM novel WHERE authorid = ?", [req.query.content],
        function(err, rows, fields) {
        if (err) throw err;
        //如果查询无结果
        if (rows.length==0)
            res.send("<h1>not found</h1>");
        else {
            //将用户表里的信息转换成JSON字符串返回给前端
            var string_res = JSON.stringify(rows);
            res.send(string_res);
        }
        dbConnection.end();
    });
});

module.exports = router;

