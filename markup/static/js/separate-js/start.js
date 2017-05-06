/**
 * Created by alexlug on 02.05.2017.
 */

$(function() {
    if (!('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) {
        $('body').addClass('no-touch');
    }

    $('.programs__tabs li').on ('click', function () {
        var $this = $(this);
        if ($this.hasClass('active')) {
            return false;
        } else {
            $('.programs__tabs li').removeClass('active');
            $('.programs__tab-wrap .programs__tab').removeClass('active');
            $('.programs__tab-wrap .programs__tab').eq($this.index()).addClass('active');
            $this.addClass('active');
        }
    });

    // SLICK INIT:
    $('.gallery__slider').slick({
        speed: 300,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.testimonials__slider').slick({
        speed: 300,
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="slick-next_new"></div>',
        prevArrow: '<div class="slick-prev_new"></div>',
    });
    $('.partners__slider').slick({
        speed: 300,
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        nextArrow: '<div class="slick-next_new"></div>',
        prevArrow: '<div class="slick-prev_new"></div>',
    });



});

