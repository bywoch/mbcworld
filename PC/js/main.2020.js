$(document).ready(function () {
    /*-- ※ main_top Area Strat ※ --*/
    $('.mt_slider').bxSlider({
        mode: 'horizontal',
        autoControls: true,
        auto: true,
        pause: 5000,
        touchEnabled: (navigator.maxTouchPoints > 0),
        pager: true,
        hideControlOnEnd: true,
        pagerType: 'short'
    });
    /*-- ※ main_top Area End ※ --*/

    /*-- ※ guide_map Area Strat ※ --*/
    $('.gbt-01').click(function () {
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-01').css('background', 'url(http://mbcworld.imbc.com/images/main2020/nvz_on-001.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-02').css('background', 'url(http://mbcworld.imbc.com/images/main2020/nvz_off-002.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-03').css('background', 'url(http://mbcworld.imbc.com/images/main2020/nvz_off-003.png) 0 0 no-repeat');
    });
    $('.gbt-02').click(function () {
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-02').css('background', 'url(http://mbcworld.imbc.com/images/main2020/nvz_on-002.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-01').css('background', 'url(http://mbcworld.imbc.com/images/main2020/nvz_off-001.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-03').css('background', 'url(http://mbcworld.imbc.com/images/main2020/nvz_off-003.png) 0 0 no-repeat');
    });
    $('.gbt-03').click(function () {
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-03').css('background', 'url(http://mbcworld.imbc.com/images/main2020/nvz_on-003.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-01').css('background', 'url(http://mbcworld.imbc.com/images/main2020/nvz_off-001.png) 0 0 no-repeat');
        $('.guide_map .gm_wrap .gm_btn_bx ul .gbt-02').css('background', 'url(http://mbcworld.imbc.com/images/main2020/nvz_off-002.png) 0 0 no-repeat');
    });
    $('.guide_map .gm_wrap .gm_btn_bx ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.gm_bx').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    var gs_01 = $('.gs_01').bxSlider({
        auto: false,
        controls: true,
        hideControlOnEnd: true,
        moveSlides: 1,
        pagerCustom: '#gm_slt_01'
    });
    var gs_02 = $('.gs_02').bxSlider({
        auto: false,
        controls: true,
        hideControlOnEnd: true,
        moveSlides: 1,
        pagerCustom: '#gm_slt_02'
    });
    var gs_03 = $('.gs_03').bxSlider({
        auto: false,
        controls: true,
        hideControlOnEnd: true,
        moveSlides: 1,
        pagerCustom: '#gm_slt_03'
    });

});
function PcTopBanner(){
    var sHtml = '';
    var idx = 0;
    GetTopBanner(function (jsonData) {
        for (var i = 0; i < jsonData.PC.length; i++) {
            sHtml += "<li>";
            if(jsonData.PC[i].Link == ""){
            	sHtml += "	<a>";
            }
            else{
            	sHtml += "	<a href='" + jsonData.PC[i].Link + "'  target='_self'>";
            }
            sHtml += "  	<img src='" + jsonData.PC[i].Image + "' alt='" + jsonData.PC[i].Title + "'>";
						sHtml += "	</a>";
						sHtml += "</li>";
        }
    });
    $("#top_bn").html(sHtml);
}
function MobileTopBanner(){
    var sHtml = '';
    var idx = 0;
    GetTopBanner(function (jsonData) {
        for (var i = 0; i < jsonData.Mobile.length; i++) {
            sHtml += "<li>";
            if(jsonData.Mobile[i].Link == ""){
            	sHtml += "	<a>";
            }
            else{
            	sHtml += "	<a href='" + jsonData.Mobile[i].Link + "'  target='_self'>";
            }
            sHtml += "  	<img src='" + jsonData.Mobile[i].Image + "' alt='" + jsonData.Mobile[i].Title + "'>";
						sHtml += "	</a>";
						sHtml += "</li>";
        }
    });
    $("#top_bn").html(sHtml);
}
function GetTopBanner(callback){
    return this.GetJsonRequest("/js/maintop.js", callback);
}
function GetJsonRequest(apiLink, callback){
    $.ajax({
        type: "GET",
        contentType: "text/html;charset=utf-8",
        dataType: 'json',
        url: apiLink + "?" + MakeCallbackTime(),
        cache: true,
        async: false,
        success: function (result) {
            if (result == undefined) {
                ImDataLink.GetJsonpRequest(apiLink, callback);
            }
            else {
                return callback(result);
            }
        },
        error: function (request, status, error) {
            //console.log("GetJsonRequest:" + apiLink + ", code:" + request.status + ",error:" + error + ", message:");
            //ImDataLink.GetLoadFile(apiLink, callback);
            //alert("code:" + request.status + "\n" + "error:" + error + "\n" + "message:" + request.responseText);
        }
    });
}
function MakeCallbackTime(){
        var d = new Date();
        var t =
            d.getFullYear() +
            pad2(d.getMonth() + 1) +
            pad2(d.getDate()) +
            pad2(d.getHours()) +
            pad2(d.getMinutes());
        return t;
}
function pad2(n){
    return (n < 10 ? '0' : '') + n;
}