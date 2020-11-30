$(document).ready(function () {
    $('.mt_slider').bxSlider({
        mode: 'horizontal',
        auto: true,
        autoControls: true,
        controls: false,
        pause: 10000,
        pager: true,
        pagerType: 'short'
    });

    $('.gs_01').bxSlider({
        mode: 'horizontal',
        autoControls: false,
        controls: false,
        pager: false,
        captions: true,
        slideMargin: 16
        //startSlide: 1,
        //auto: true
    });

    $('.gs_02').bxSlider({
        mode: 'horizontal',
        autoControls: false,
        controls: false,
        pager: false,
        captions: true,
        slideMargin: 16
        //startSlide: 1,
        //auto: true
    });

    $('.gs_03').bxSlider({
        mode: 'horizontal',
        autoControls: false,
        controls: false,
        pager: false,
        captions: true,
        slideMargin: 16
        //startSlide: 1,
        //auto: true
    });



    /*$(sample).onchange = function () {
        myFunction()
    };
    function myFunction() {
    }*/

    /*-------------------------------------------------*/

    /*var sample = $('셀렉터').attr('속성값')
    $(sample).change = function () {
        myFunction()
    };

    function myFunction() {
        if (sample == true) {

        } else {

        }
    }*/

    /*-------------------------------------------------*/

    $('.gm_nvz_off').click(function () {
        $('.gm_nvz_on').show();
    });
    $('.nvz_cl').click(function () {
        $('.gm_nvz_on').hide();
    });
    $('.m_z').click(function () {
        $('.gb_01').show();
        $('.gb_02').hide();
        $('.gb_03').hide();
        $('.gm_nvz_on').hide();
    });
    $('.b_z').click(function () {
        $('.gb_02').show();
        $('.gb_01').hide();
        $('.gb_03').hide();
        $('.gm_nvz_on').hide();
    });
    $('.c_z').click(function () {
        $('.gb_03').show();
        $('.gb_01').hide();
        $('.gb_02').hide();
        $('.gm_nvz_on').hide();
    });

});