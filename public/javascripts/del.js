$(function () {
    $('.del').click(function () {
        alert('2');
        var formData = new FormData();
        formData.append('novelid', id);
        formData.append('userid',userid);
        $.ajax({
            url: "delete_book",
            type: "POST",
            data: formData,
            processData: false,  // 不处理数据
            contentType: false,   // 不设置内容类型
            success: function (data) {
                //data代表的是register.js里的res.send函数参数的字符串内容
                alert("删除成功");
                window.location.reload();

            }
        });
    });
});