$(document).ready(function () {
    $( "#contactdv" ).toggle(function() {
        $(this).css("left", "-85%");
        $('h1').addClass('h1Hor');
    }, function() {
       $(this).css("left", "-95%");
        $('h1').removeClass('h1Hor');
    });
})