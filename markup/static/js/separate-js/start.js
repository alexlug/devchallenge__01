/**
 * Created by alexlug on 02.05.2017.
 */

$(function() {
    // TOUCH LISTENER:
    if (!('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) {
        $('body').addClass('no-touch');
    }

    // EVENTS:
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
    $('.programs__tabs li').on ('click', function () {
        var $this = $(this);
        if ($this.hasClass('active')) {
            return false;
        } else {
            $('.programs__tabs li').removeClass('active');
            $('.programs__tab-wrap .programs__tab').removeClass('active').eq($this.index()).addClass('active');
            $this.addClass('active');
        }
    });
    $(".main__scroll-btn").on("click", function () {
        var id  = $(this).attr('target'),
            top = $(id).offset().top;
        $('body').animate({scrollTop: top}, 800);
    });
    $("nav a").on("click", function () {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body').animate({scrollTop: top}, 1000);
    });

    // SLICK INIT:
    $('.gallery__count').text($('.gallery__slider-item:not(".slick-cloned")').length);
    $('.gallery__slider').slick({
        speed: 300,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="slick-next_new"></div>',
        prevArrow: '<div class="slick-prev_new"></div>',
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.gallery__current').text(nextSlide + 1);
    });
    $('.testimonials__slider').slick({
        dots: true,
        fade: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="slick-next_new"></div>',
        prevArrow: '<div class="slick-prev_new"></div>',
    });
    $('.partners__slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<div class="slick-next_new"></div>',
        prevArrow: '<div class="slick-prev_new"></div>',
    });

    // CONNECT PARALLAX (source - http://codepen.io/hendrysadrak/pen/ctgaz)
    parallaxIt();
});

// makes the parallax elements
function parallaxIt() {
    // create variables
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var $contents = [];
    var $backgrounds = [];

    // for each of content parallax element
    $('[data-type="content"]').each(function(index, e) {
        var $contentObj = $(this);

        $contentObj.__speed = ($contentObj.data('speed') || 1);
        $contentObj.__fgOffset = $contentObj.offset().top;
        $contents.push($contentObj);
    });

    // for each of background parallax element
    $('[data-type="background"]').each(function() {
        var $backgroundObj = $(this);

        $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
        $backgroundObj.__fgOffset = $backgroundObj.offset().top;
        $backgrounds.push($backgroundObj);
    });

    // update positions
    $fwindow.on('scroll resize', function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        $contents.forEach(function($contentObj) {
            var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

            $contentObj.css('top', yPos);
        })

        $backgrounds.forEach(function($backgroundObj) {
            var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

            $backgroundObj.css({
                backgroundPosition: '50% ' + yPos + 'px'
            });
        });
    });
    $fwindow.trigger('scroll');
};
