//main-nav fixd
var jbOffeset = $('.sticky').offset();
$( window ).scroll(function() {
    if ( $( document ).scrollTop() > jbOffeset.top ) {
        $('.sticky').addClass('jbFixed');

    } else {
        $('.sticky').removeClass('jbFixed');
    }
});

//main-nav slideup, slidedown
$('.main-nav > ul > li').mouseenter(function() {
    $(this).find('.sub-nav').stop().slideDown(200);
});

$('.main-nav > ul > li').mouseleave(function() {
    $(this).find('.sub-nav').stop().slideUp(200);
});

//메인 네비 fade-in, fade-out
$('.banner-cont:nth-child(2)').hide();

$('.banner-circle2').click(function() {
    $('.banner-circle2').css({
        background: '#101010'
    })
    $('.banner-circle1').css({
        background: '#fff',
        border: '1px solid #999'
    })
    $('.banner-cont:nth-child(1)').fadeOut();
    $('.banner-cont:nth-child(2)').fadeIn();

    $('.small-square').css({
        background: '#9981B5'
    })
    $('.big-square').css({
        background: '#9981B5'
    })
})

$('.banner-circle1').click(function() {
    $('.banner-circle1').css({
        background: '#101010'
    })
    $('.banner-circle2').css({
        background: '#fff',
        border: '1px solid #999'
    })
    $('.banner-cont:nth-child(2)').fadeOut();
    $('.banner-cont:nth-child(1)').fadeIn();

    $('.small-square').css({
        background: '#FFE553'
    })
    $('.big-square').css({
        background: '#FFE553'
    })
})

/*
setInterval(function() {
    $('.banner-cont:nth-child(1)').fadeOut();
    $('.banner-cont:nth-child(2)').fadeIn();

    $('.banner-cont:nth-child(2)').delay(2000).fadeOut();
    $('.banner-cont:nth-child(1)').delay(2000).fadeIn();
},4000)
*/

/*curation-btn*/ 
$('.curation-btn').stop().mouseenter(function() {
    $('.curation-btn').stop().animate({
        width: 108,
        height: 30,
        borderRadius: '30px'
    })
    $('.curation-btn-inner span').removeClass('hide')
})

$('.curation-btn').stop().mouseleave(function() {
    $('.curation-btn').stop().animate({
        width: 30,
        height: 30
    })
    $('.curation-btn-inner span').addClass('hide')
})

$('.curation-circle2').click(function() {
    $('.curation-circle2').css({
        background: '#101010'
    })
    $('.curation-circle1').css({
        background: '#fff',
        border: '1px solid #999'
    })
    $('.curation-right-cont1').animate({marginLeft: -980})
})

$('.curation-circle1').click(function() {
    $('.curation-circle1').css({
        background: '#101010'
    })
    $('.curation-circle2').css({
        background: '#fff',
        border: '1px solid #999'
    })
    $('.curation-right-cont1').animate({marginLeft: 0})
})


/*weekly-btn*/
$('.weekly-btn').stop().mouseenter(function() {
    $('.weekly-btn').stop().animate({
        width: 108,
        height: 30,
        borderRadius: '30px'
    })
    $('.weekly-btn-inner span').removeClass('hide')
})

$('.weekly-btn').stop().mouseleave(function() {
    $('.weekly-btn').stop().animate({
        width: 30,
        height: 30
    })
    $('.weekly-btn-inner span').addClass('hide')
})

$('.weekly-circle2').click(function() {
    $('.weekly-circle2').css({
        background: '#101010'
    })
    $('.weekly-circle1').css({
        background: '#fff',
        border: '1px solid #999'
    })
    $('.weekly-left-cont1').animate({marginLeft: -980})
})

$('.weekly-circle1').click(function() {
    $('.weekly-circle1').css({
        background: '#101010'
    })
    $('.weekly-circle2').css({
        background: '#fff',
        border: '1px solid #999'
    })
    $('.weekly-left-cont1').animate({marginLeft: 0})
})

/* mdpick-btn */
$('.mdpick-btn').stop().mouseenter(function() {
    $('.mdpick-btn').stop().animate({
        width: 108,
        height: 30,
        borderRadius: '30px'
    })
    $('.mdpick-btn-inner span').removeClass('hide')
})

$('.mdpick-btn').stop().mouseleave(function() {
    $('.mdpick-btn').stop().animate({
        width: 30,
        height: 30
    })
    $('.mdpick-btn-inner span').addClass('hide')
})

/*news-btn1*/
$('.news-btn1').stop().mouseenter(function() {
    $('.news-btn1').stop().animate({
        width: 108,
        height: 30,
        borderRadius: '30px'
    })
    $('.news-btn-inner1 span').removeClass('hide')
})

$('.news-btn1').stop().mouseleave(function() {
    $('.news-btn1').stop().animate({
        width: 30,
        height: 30
    })
    $('.news-btn-inner1 span').addClass('hide')
})

/*news-btn2*/
$('.news-btn2').stop().mouseenter(function() {
    $('.news-btn2').stop().animate({
        width: 108,
        height: 30,
        borderRadius: '30px'
    })
    $('.news-btn-inner2 span').removeClass('hide')
})

$('.news-btn2').stop().mouseleave(function() {
    $('.news-btn2').stop().animate({
        width: 30,
        height: 30
    })
    $('.news-btn-inner2 span').addClass('hide')
})

/*news-btn3*/
$('.news-btn3').stop().mouseenter(function() {
    $('.news-btn3').stop().animate({
        width: 108,
        height: 30,
        borderRadius: '30px'
    })
    $('.news-btn-inner3 span').removeClass('hide')
})

$('.news-btn3').stop().mouseleave(function() {
    $('.news-btn3').stop().animate({
        width: 30,
        height: 30
    })
    $('.news-btn-inner3 span').addClass('hide')
})

/*news-btn4*/
$('.news-btn4').stop().mouseenter(function() {
    $('.news-btn4').stop().animate({
        width: 108,
        height: 30,
        borderRadius: '30px'
    })
    $('.news-btn-inner4 span').removeClass('hide')
})

$('.news-btn4').stop().mouseleave(function() {
    $('.news-btn4').stop().animate({
        width: 30,
        height: 30
    })
    $('.news-btn-inner4 span').addClass('hide')
})

/*.mdpick-01*/ 
$('.mdpick-boxwrap .mdpick-box1').mouseenter(function() {
    $('.mdpick-boxwrap .mdpick-box1 .hidebox1').stop().animate({
        marginTop: -564
    })

    $('.mdpick-boxwrap .mdpick-box1 .showbox1').css({
        opacity: 0
    })
})

$('.mdpick-boxwrap .mdpick-box1').mouseleave(function() {
    $('.mdpick-boxwrap .mdpick-box1 .hidebox1').stop().animate({
        marginTop: 0
    })

    $('.mdpick-boxwrap .mdpick-box1 .showbox1').delay(100).animate({
        opacity: 1
    })
})

/*.mdpick-02*/ 
$('.mdpick-boxwrap .mdpick-box2').mouseenter(function() {
    $('.mdpick-boxwrap .mdpick-box2 .hidebox2').stop().animate({
        marginTop: -564
    })

    $('.mdpick-boxwrap .mdpick-box2 .showbox2').css({
        opacity: 0
    })
})

$('.mdpick-boxwrap .mdpick-box2').mouseleave(function() {
    $('.mdpick-boxwrap .mdpick-box2 .hidebox2').stop().animate({
        marginTop: 0
    })

    $('.mdpick-boxwrap .mdpick-box2 .showbox2').delay(100).animate({
        opacity: 1
    })
})

/*.mdpick-03*/ 
$('.mdpick-boxwrap .mdpick-box3').mouseenter(function() {
    $('.mdpick-boxwrap .mdpick-box3 .hidebox3').stop().animate({
        marginTop: -564
    })

    $('.mdpick-boxwrap .mdpick-box3 .showbox3').css({
        opacity: 0
    })
})

$('.mdpick-boxwrap .mdpick-box3').mouseleave(function() {
    $('.mdpick-boxwrap .mdpick-box3 .hidebox3').stop().animate({
        marginTop: 0
    })

    $('.mdpick-boxwrap .mdpick-box3 .showbox3').delay(100).animate({
        opacity: 1
    })
})

/*.mdpick-03*/ 
$('.mdpick-boxwrap .mdpick-box4').mouseenter(function() {
    $('.mdpick-boxwrap .mdpick-box4 .hidebox4').stop().animate({
        marginTop: -564
    })

    $('.mdpick-boxwrap .mdpick-box4 .showbox4').css({
        opacity: 0
    })
})

$('.mdpick-boxwrap .mdpick-box4').mouseleave(function() {
    $('.mdpick-boxwrap .mdpick-box4 .hidebox4').stop().animate({
        marginTop: 0
    })

    $('.mdpick-boxwrap .mdpick-box4 .showbox4').delay(100).animate({
        opacity: 1
    })
})
