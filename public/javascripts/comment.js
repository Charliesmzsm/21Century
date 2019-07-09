$(function () {
    var novel_id=sessionStorage.getItem("novel-id");
    var user_id=sessionStorage.getItem('userid');
    //获取评论
    var bookUrl='getcomment?content='+novel_id;
    $.get(
        bookUrl,
        '',
        function (data) {
            var contentList=JSON.parse(data);
            // 清空区域
            if(contentList===null){
                $('.talk-none').css("display","flex");
                $('.talk-block').css("display","none");
            }else {
                $('.talk-none').css("display", "none");
                $('.talk-block').css("display", "flex");

                $('.talk-block').empty();

                //    动态创建元素
                for (var i = 0; i < contentList.length; i++) {
                    if(contentList[i].head.length===0)
                    {
                        contentList[i].head="img/30.jpg";
                    }
                    var list = $('.talk-block');
                    var talk = $("<div class='talk-blank'></div>");
                    talk.appendTo(list);
                    var picture = $("<a href='#' class='talk-blank-p' style='background-image: url(" + contentList[i].head + ")'></a>");
                    picture.appendTo(talk);
                    var word_all = $("<div class='talk-blank-word'></div>");
                    word_all.appendTo(talk);
                    var word_top = $("<div class='blank-word-top'></div>");
                    word_top.appendTo(word_all);
                    var word_user = $("<a href='#' class='users'>" + contentList[i].username + "</a>");
                    word_user.appendTo(word_top);
                    var word_normal = $("<span class='normal'>发表帖子</span>");
                    word_normal.appendTo(word_top);
                    var word_content = $("<div class='blank-word-bottom'>" + contentList[i].con + "</div>");
                    word_content.appendTo(word_all);
                }

            }


        }
    );




    //发布评论
    $('#comment-input').click(function () {

        var content=$('#comment').val();
        //使用FormData用来上传文件及其他信息
        var formData = new FormData();
        formData.append('userid', user_id);
        formData.append('novelid', novel_id);
        formData.append('content', content);
        $.ajax({
            url: "put_comment",
            type: "POST",
            data: formData,
            processData: false,  // 不处理数据
            contentType: false,   // 不设置内容类型
            success: function (data) {
                //data代表的是register.js里的res.send函数参数的字符串内容
                alert(data);
                window.location.reload();

            }
        });


    });
});