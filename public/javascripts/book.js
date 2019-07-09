
$(function () {
    var formData = new FormData();
    formData.append('author_id',author_id);
    $.ajax({
        url: "author-book",
        type: "POST",
        data: formData,
        processData: false,  // 不处理数据
        contentType: false,   // 不设置内容类型
        success: function (data) {
            //data代表的是register.js里的res.send函数参数的字符串内容
            var result=JSON.parse(data);
            var name=result.novelname;
            var introduction=result.introduction;
            sessionStorage.setItem('novel_name',result.novelname);
            sessionStorage.setItem('novel_introduction',result.introduction);
            sessionStorage.setItem('novel_type',result.noveltype);
            sessionStorage.setItem('isFinish',result.isfinished);

            alert(result);
            if(name===undefined)
            {
                $('.book-list').css('display','none');
                $('.creat').css('display','flex');
            }else{

                $('.book-list').css('display','flex');
                $('.creat').css('display','none');
                $('.book-name').text(name);
                $('.book-about').text(introduction);
            }


        }
    })
})