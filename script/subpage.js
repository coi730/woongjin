var jbOffeset = $('.sticky').offset();
$( window ).scroll(function() {
    if ( $( document ).scrollTop() > jbOffeset.top ) {
        $('.sticky').addClass('jbFixed');

    } else {
        $('.sticky').removeClass('jbFixed');
    }
});

$('.main-nav > ul > li').mouseenter(function() {
    $(this).find('.sub-nav').stop().slideDown(200);
});

$('.main-nav > ul > li').mouseleave(function() {
    $(this).find('.sub-nav').stop().slideUp(200);
});

/*

$('#title .button').click(function() {
    $('#tenstep').css({
        display: 'block'
    },500) 
    $('#title .button').css({
        display: 'none'
    })
})*/