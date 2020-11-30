$(document).ready(function () {

    var slider1 = $('.sld-01').bxSlider({
        auto: false,
        controls: true,
        infiniteLoop: false,
        hideControlOnEnd: true,
        moveSlides: 1,
        pagerCustom: '#s-01'
    });

    var slider2 = $('.sld-02').bxSlider({
        auto: false,
        controls: true,
        infiniteLoop: false,
        hideControlOnEnd: true,
        moveSlides: 1,
        pagerCustom: '#s-02'
    });

    var slider3 = $('.sld-03').bxSlider({
        auto: false,
        controls: true,
        infiniteLoop: false,
        hideControlOnEnd: true,
        moveSlides: 1,
        pagerCustom: '#s-03'
    });

    $('.gdm_img_bx').hide();
    $('.gdm_ba').hide();
    $('.gdm_popup').hide();

    $('.gdm_pop_op').click(function () {
        $('.gdm_popup').show();
    });

    $('.gdm_popup_cls').click(function () {
        $('.gdm_popup').hide();
    });

    /*$('#s-01 li.l_01').click(function () {
        $('.gdm_phtbx_01').show();
        $('.gdm_ba').show();
        $('.gdm_phtbx_02').hide();
        $('.gdm_phtbx_03').hide();
        slider1.reloadSlider();
        $('html, body').stop().animate({
            scrollTop: 2290
        })
    });*/

    /*$('#s-02 li').click(function () {
        $('.gdm_phtbx_02').show();
        $('.gdm_ba').show();
        $('.gdm_phtbx_01').hide();
        $('.gdm_phtbx_03').hide();
        slider2.reloadSlider();
        $('html, body').stop().animate({
            scrollTop: 2290
        })
    });*/

    $('#s-03 li.l_03').click(function () {
        $('.gdm_phtbx_03').show();
        $('.gdm_ba').show();
        $('.gdm_phtbx_01').hide();
        $('.gdm_phtbx_02').hide();
        slider3.reloadSlider();
        $('html, body').stop().animate({
            scrollTop: 1200
        })
    });

    $('.phtbx_clbttn').click(function () {
        $('.gdm_img_bx').hide();
        $('.gdm_ba').hide();
        $('.guidemap .gdm_wrap .gdm_bx .gdm_slt_bx .gdm_slt_p2 ul li a').removeClass('active');
    });

    // edu Scroll Event
    $(window).scroll(function () {
        var scr = $(window).scrollTop();

        if (scr > 100) {
            $('.edu_01').css('background-attachment', 'fixed').css('background-position', 'center -64px').css('background-size', '1920px 766px');
        } else {
            $('.edu_01').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 1287) {
            $('.edu_02').css('background-attachment', 'fixed').css('background-position', 'center -520px').css('background-size', '1920px 1408px');
        } else {
            $('.edu_02').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 2545) {
            $('.edu_03').css('background-attachment', 'fixed').css('background-position', 'center -363px').css('background-size', '1920px 1259px');
        } else {
            $('.edu_03').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 4032) {
            $('.edu_04').css('background-attachment', 'fixed').css('background-position', 'center -600px').css('background-size', '1920px 1487px');
        } else {
            $('.edu_04').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 5376) {
            $('.edu_05').css('background-attachment', 'fixed').css('background-position', 'center -442px').css('background-size', '1920px 1343px');
        } else {
            $('.edu_05').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 7305) {
            $('.edu_06').css('background-attachment', 'fixed').css('background-position', 'center -1043px').css('background-size', '1920px 1929px');
        } else {
            $('.edu_06').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

        if (scr > 8282) {
            $('.edu_07').css('background-attachment', 'fixed').css('background-position', 'center -92px').css('background-size', '1920px 978px');
        } else {
            $('.edu_07').css('background-attachment', 'inherit').css('background-position', 'center').css('background-size', 'cover');;
        }

    });
    $(window).load(function () {
        /*-- ※ main_top Area Strat ※ --*/
        $('.edu_09_slider').bxSlider({
            mode: 'horizontal',
            autoControls: true,
            auto: true,
            pause: 36000000,
            pager: true,
            hideControlOnEnd: true,
            pagerType: 'short'
        });
        /*-- ※ main_top Area End ※ --*/
    });
});