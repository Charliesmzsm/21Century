$(".nav-information").mouseenter(function () {
    $('.back').slideDown();
});

$('.back').click(function () {
    sessionStorage.clear();
    window.location.href="index.html";
});