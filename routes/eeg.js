/**
 * Created by cuckoo on 2018-12-26.
 */
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

        var fileName=fields['fileName'];
        var md5Code=fields['md5Code'];
        var resultUID=fields['resultUID'];
        var pdfFilePath=files['file'].path; //服务器端的存储文件的路径地址
        //需要移除public/前缀后，再存入数据库
        pdfFilePath=pdfFilePath.replace('public/','');
        //创建数据库连接
        var dbConnection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'charlie52678',
            database: 'zsm'
        });
        dbConnection.query('INSERT INTO eeg_info SET ?', {
            fileName: fileName,
            md5Code: md5Code,
            resultUID: resultUID,
            pdfFilePath:pdfFilePath
        }, function (err, result) {
            //插入成功后调用执行这个函数体
            if (err) {
                res.send("插入失败");
                dbConnection.end();
            }
            res.send("插入成功"); //转换成字符串发出
            dbConnection.end(); //关闭数据库连接
        });
    });

});

module.exports = router;
