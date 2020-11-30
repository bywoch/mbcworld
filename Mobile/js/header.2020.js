$(document).ready(function () {
    
    var headerHtml = '';

    headerHtml += '<div class="header_bx">';
    headerHtml += '    <div class="op_btn">';
    headerHtml += '        <img src="http://mbcworld.imbc.com/m/images/common2020/m_btn_op.png" alt="메뉴 오픈 버튼">';
    headerHtml += '    </div>';
    headerHtml += '    <div class="logo">';
    headerHtml += '        <a href="http://mbcworld.imbc.com/m/">';
    headerHtml += '        </a>';
    headerHtml += '    </div>';
    headerHtml += '    <div class="hd_r_bx">';
    headerHtml += '        <div class="h_tk">';
    headerHtml += '            <a href="http://ticket.interpark.com/Ticket/Goods/TPBridge.asp?GoodsCode=18004373" class="ticket_btn" target="_blank">';
    headerHtml += '                <img src="http://mbcworld.imbc.com/m/images/common2020/ticket_btn.png" alt="예매 티켓 이미지">';
    headerHtml += '            </a>';
    headerHtml += '        </div>';
    headerHtml += '        <div class="lgg">';
    headerHtml += '            <div class="lgg_ko">';
    headerHtml += '                <img src="http://mbcworld.imbc.com/m/images/common2020/Language_btn_001.png" alt="">';
    headerHtml += '            </div>';
    headerHtml += '            <div class="lgg_oth_bx">';
    headerHtml += '                <ul>';
    headerHtml += '                    <li><a href="https://reurl.cc/QxYxp" target="_blank">ENG</a></li>';
    headerHtml += '                    <li><a href="https://reurl.cc/VlYQA" target="_blank">CHN</a></li>';
    headerHtml += '                    <li><a href="https://reurl.cc/eAM7j" target="_blank">JPN</a></li>';
    headerHtml += '                </ul>';
    headerHtml += '            </div>';
    headerHtml += '        </div>';
    headerHtml += '    </div>';
    headerHtml += '    <div class="nav">';
    headerHtml += '        <div class="nav_hd">';
    headerHtml += '            <div class="nav_logo">';
    headerHtml += '                <img src="http://mbcworld.imbc.com/m/images/common2020/menu_on_logo.png" alt="오픈 메뉴 로고 이미지">';
    headerHtml += '            </div>';
    headerHtml += '            <div class="cls_btn">';
    headerHtml += '                <img src="http://mbcworld.imbc.com/m/images/common2020/m_btn_cls.png" alt="오픈 메뉴 닫기 이미지">';
    headerHtml += '            </div>';
    headerHtml += '        </div>';
    headerHtml += '        <div class="n_gnb">';
    headerHtml += '            <ul>';
    headerHtml += '                <li><a href="http://mbcworld.imbc.com/m/introduce/index.html">MBC WORLD 소개</a></li>';
    headerHtml += '                <li><a href="http://mbcworld.imbc.com/m/guide/index.html">이용안내</a></li>';
    headerHtml += '                <li><a href="http://mbcworld.imbc.com/m/mzone/index.html">체험소개</a></li>';
    headerHtml += '                <li><a href="http://mbcworld.imbc.com/m/news/index.html">공지사항</a></li>';
    headerHtml += '            </ul>';
    headerHtml += '            <div class="edu_lk">';
    headerHtml += '                <a href="http://mbcworld.imbc.com/m/mzone/edu.html">';
    headerHtml += '                    <img src="http://mbcworld.imbc.com/m/images/common2020/edu_lk_img.png" alt="미디어직업교육 링크 이미지">';
    headerHtml += '                </a>';
    headerHtml += '            </div>';
    headerHtml += '        </div>';
    headerHtml += '    </div>';
    headerHtml += '</div>';

    document.getElementById('header').innerHTML = headerHtml;

    $('.op_btn').click(function () {
        $('#header .header_bx .nav').show();
    });
    $('.cls_btn').click(function () {
        $('#header .header_bx .nav').hide();
    });
    
    $('.lgg_ko').click(function () {
        $('.lgg_oth_bx').slideToggle(5);
    });

});