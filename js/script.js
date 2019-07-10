$(window).ready(function () {

    // menu hover + dropdown
    $("ul").hover(function() {
        $(this).find(".nav-active").slideToggle();
        $(this).siblings().find('.nav-active').slideUp();
        }
    );
});