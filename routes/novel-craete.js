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

        var author_name=fields['author_name'];
        var novel_type=fields['novel_type'];
        var novel_introduction=fields['novel_chapter'];
        var author_id=fields['author_id'];
        var novel_name=fields['novel_name'];

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
            'INSERT INTO novel (authorid,novelname,authorname,noveltype,introduction) VALUES (?,?,?,?,?)',
            [author_id,novel_name,author_name,novel_type,novel_introduction],
            function(err, results, fields) {
                if (err) {
                    res.send(fields);
                    dbConnection.end();
                    return;
                }else{
                    console.log("success");
                    res.send('创建成功');
                    dbConnection.end();

                }
            }
        );
    });

});

module.exports = router;
