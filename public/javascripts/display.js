$(window).scroll(
    {previousTop:0},//定义一个匿名JavaScript对象单个成员存储值
    function () {
        var currentTop=$(window).scrollTop();//当窗口滚动时，获取窗口滚动条的当前顶部位置，然后将其与上一个值进行比较，然后显示
        if(currentTop<this.previousTop){
            $(".nav").show();
        }else{
            $(".nav").hide();
        }
        this.previousTop=currentTop;
    }
);
