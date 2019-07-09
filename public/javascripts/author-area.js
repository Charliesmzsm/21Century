var  author=sessionStorage.getItem('author-id');
$('#author-area').click(function () {
    if(author.length===0)
    {
        $('#author-area').attr('href','writer-login.html');
    }
});

if(author===null)
{
    $('.writer').text('成为作家');
    $('.writer').attr('href','register-writer.html');
}else{
    $('.writer').text('作家专区');
    $('.writer').attr('href','writer-area.html');
}



