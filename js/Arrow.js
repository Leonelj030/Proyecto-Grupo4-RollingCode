$(document).ready(function(){


    $('.iconArrowUp').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 500);
    })

    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('.iconArrowUp').slideDown(200);
        } else {
            $('.iconArrowUp').slideUp(200);
        }
    });

   



});