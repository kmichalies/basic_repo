$(document).ready(function(){

    $('img').click(function() {
        var imgSrc = $(this).attr('data-alt-src');
        var Src = $(this).attr('src');
        $(this).attr('src', imgSrc);
        $(this).attr('data-alt-src', Src);
    });

});