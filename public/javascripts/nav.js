$(function () {
    var head=sessionStorage.getItem("head");
    var id=sessionStorage.getItem("userid");
    if(id.length===null)
    {

        $(".nav-row-sign").css("display","flex");
        $(".nav-row-new").css("display","flex");
        $(".nav-information").css("display","none");
        $(".nav-bookstore").css("display","none");
    }
    else{
        $(".nav-row-sign").css("display","none");
        $(".nav-row-new").css("display","none");
        $(".nav-information").css("display","inline-block");
        $(".nav-bookstore").css("display","inline-block");
        if(head.length===0)
        {
            head="img/30.jpg";
            sessionStorage.setItem("head","img/30.jpg")
        }
        // $('.nav-bookstore').html('当前用户名：'+head);
        var img=sessionStorage.getItem('username');
        $('.nav-head').attr("src",head);
    }
});