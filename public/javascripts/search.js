
$(function () {
    $('.nav-search-button').click(function () {
        var searchUrl='search?content='+$('#search').val();
        $.get(
            searchUrl,
            '',
            function (data) {

                var bookList=JSON.parse(data);

                sessionStorage.setItem("novel-p",bookList[0].picture);
                sessionStorage.setItem("novel-author",bookList[0].authorname);
                sessionStorage.setItem("novel-intro",bookList[0].intro);
                sessionStorage.setItem("novel-id",bookList[0].novelid);
                sessionStorage.setItem("novel-name",bookList[0].novelname);
                sessionStorage.setItem("novel-type",bookList[0].noveltype);
                sessionStorage.setItem('novel_background',bookList[0].background);

                if(bookList[0].isfinished===1)
                {
                    sessionStorage.setItem("novel-state","完本");
                }else{
                    sessionStorage.setItem("novel-state","连载");
                }
                window.location.href="book-information.html";



            }

        )
    })


});