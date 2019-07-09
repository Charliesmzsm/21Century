var mysql = require('mysql2');
var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
    util = require('util');
router.post('/', function(req, res, next) {
    const form = new formidable.IncomingForm();
    //form.encoding = 'utf-8';
    form.uploadDir = "public/upload"; //上传文件存储的路径
    form.keepExtensions = true; //保留上传文件的文件后缀
    //form.maxFileSize = 200 * 1024 * 1024;
    form.parse(req, function(err, fields, files) {
        console.log(util.inspect({fields: fields, files: files}));

        var user_id=fields['userid'];
        var novel_id=fields['novelid'];

        // var picture_path=files['picture'].path; //服务器端的存储文件的路径地址
        // //需要移除public/前缀后，再存入数据库
        // picture_path=picture_path.replace('public/','');
        // //创建数据库连接
        var dbConnection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'charlie52678',
            database: 'html'
        });

        dbConnection.execute(
            'DELETE FROM bookstore where userid= ? and novelid= ?',
            [user_id,novel_id],
            function(err, results, fields) {
                if (err) {
                    res.send("insert failed");
                    dbConnection.end();
                    return;
                }
                res.send('删除成功');
                dbConnection.end();

            }
        );
    });

});

module.exports = router;
