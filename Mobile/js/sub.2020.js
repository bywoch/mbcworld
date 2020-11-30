$(document).ready(function () {

    /* ↓ click 이벤트를 touch로 돌리는 스크립트. ↓ */
    
    var isTouch = false;
    var simulated_flag = 'handler_simulated';
    var touch_click_array = {};
    const clickMoveThreshold = 20; //Pixels

    function mouseHandler(event) {
        if (isTouch) {
            if (!event.hasOwnProperty(simulated_flag)) {
                //Unreliable mouse commands - In my opinion
                var fixed = new jQuery.Event(event);
                fixed.preventDefault();
                fixed.stopPropagation();
            }
        } else {
            //Mouse commands are consistent
            //TODO: generate corresponding touches
        }
    }

    function mouseFromTouch(type, touch) {
        var event = document.createEvent("MouseEvent");
        event.initMouseEvent(type, true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
        event[simulated_flag] = true;

        touch.target.dispatchEvent(event);
    };

    function touchHandler(event) {
        var touches = event.changedTouches,
            first = touches[0],
            type = ""

        if (!event.hasOwnProperty(simulated_flag)) {
            isTouch = true;

            //Simulate mouse commands
            switch (event.type) {
                case "touchstart":
                    for (var i = 0; i < touches.length; i++) {
                        var touch = touches[i];
                        touch_click_array[touch.identifier] = {
                            x: touch.screenX,
                            y: touch.screenY
                        };
                    }
                    mouseFromTouch("mousedown", first);
                    break;
                case "touchmove":
                    for (var i = 0; i < touches.length; i++) {
                        var touch = touches[i];
                        var id = touch.identifier;
                        var data = touch_click_array[id];
                        if (data !== undefined) {
                            if (Math.abs(data.x - touch.screenX) + Math.abs(data.y - touch.screenY) > clickMoveThreshold) {
                                delete touch_click_array[id];
                            }
                        }
                    }
                    mouseFromTouch("mousemove", first);
                    break;
                case "touchcancel":
                    //Not sure what should happen here . . .
                    break;
                case "touchend":
                    mouseFromTouch("mouseup", first);
                    for (var i = 0; i < touches.length; i++) {
                        var touch = touches[i];
                        if (touch_click_array.hasOwnProperty(touch.identifier)) {
                            mouseFromTouch("click", touch);
                            delete touch_click_array[touch.identifier];
                        }
                    }
                    break;
            }
        }
    }

    document.addEventListener("mousedown", mouseHandler, true);
    document.addEventListener("mousemove", mouseHandler, true);
    document.addEventListener("mouseup", mouseHandler, true);
    document.addEventListener("click", mouseHandler, true);

    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    
    
    /* ↑ click 이벤트를 touch로 돌리는 스크립트. ↑ */
    
    
    var slider1 =$('.sld-01').bxSlider({
        auto: false,
        controls: true,
        infiniteLoop: false,
        hideControlOnEnd: true,
        moveSlides: 1,
        pagerCustom: '#s-01'
    });

    var slider2 =$('.sld-02').bxSlider({
        auto: false,
        controls: true,
        infiniteLoop: false,
        hideControlOnEnd: true,
        moveSlides: 1,
        pagerCustom: '#s-02'
    });

    var slider3 =$('.sld-03').bxSlider({
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
    $('.bf_bx').hide();

    $('.gdm_pop_op').click(function () {
        $('.gdm_popup').show();
    });

    $('.gdm_popup_cls').click(function () {
        $('.gdm_popup').hide();
    });

    $('#s-01 li.l_01').click(function () {
        $('.gdm_phtbx_01').show();
        $('.gdm_ba').show();
        $('.bf_bx').show();
        $('.gdm_phtbx_02').hide();
        $('.gdm_phtbx_03').hide();
        slider1.reloadSlider();
        $( 'html, body' ).stop().animate( { scrollTop : 0} )
    });

    $('#s-02 li').click(function () {
        $('.gdm_phtbx_02').show();
        $('.gdm_ba').show();
        $('.bf_bx').show();
        $('.gdm_phtbx_01').hide();
        $('.gdm_phtbx_03').hide();
        slider2.reloadSlider();
        $( 'html, body' ).stop().animate( { scrollTop : 0} )
    });

    $('#s-03 li.l_03').click(function () {
        $('.gdm_phtbx_03').show();
        $('.gdm_ba').show();
        $('.bf_bx').show();
        $('.gdm_phtbx_01').hide();
        $('.gdm_phtbx_02').hide();
        slider3.reloadSlider();
        $( 'html, body' ).stop().animate( { scrollTop : 0} )
    });

    $('.phtbx_clbttn').click(function () {
        $('.gdm_img_bx').hide();
        $('.gdm_ba').hide();
        $('.bf_bx').hide();
        $('.guidemap .gdm_wrap .gdm_bx .gdm_slt_bx .gdm_slt_p2 ul li a').removeClass('active');
    });

});