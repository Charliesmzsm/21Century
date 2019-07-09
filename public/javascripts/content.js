$(function () {
    var head=sessionStorage.getItem('head');
    var username=sessionStorage.getItem('username');
    var number=sessionStorage.getItem('number');
    var email=sessionStorage.getItem('email');
    var userid=sessionStorage.getItem('userid');
    var introduction=sessionStorage.getItem('introduction');

    $('.nav-information').css('background-image',"url("+head+")");
});