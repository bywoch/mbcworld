var headerHtml = '';

headerHtml += '<div id="gnb">';
headerHtml += '    <div class="gnb">';
headerHtml += '    	<h1><a href="http://with.mbc.co.kr/" class="sp_com bn_imbc" target="_blank"><strong class="blind">MBC와 함께</strong></a></h1>';
headerHtml += '    	<div class="oth_lk">';
headerHtml += '    	 <a href="http://mbcworld.imbc.com/index.html">MBC 체험관</a>';
headerHtml += '    	 <a href="http://mbcworld.imbc.com/edu/" class="mz_lk">미디어직업교육</a>';
headerHtml += '    	</div>';
headerHtml += '    	<ul class="gnb_menu">';

var domainString = document.domain

if (domainString.toLowerCase().indexOf("imbc.com") > 0) {
    if (escape(getCookie("IMBCMAIN")) == "") {
        headerHtml += '		<li><a href="#none" onclick="iMbc_login();" class="sp_com bn_login"><span class="blind">로그인</span></a></li>';
    } else {
        headerHtml += '		<li><a href="#none" onclick="iMbc_logout();" class="sp_com bn_logout"><span class="blind">로그아웃</span></a></li>';
    }
}

headerHtml += '     	<li><a href="http://www.imbc.com/" class="sp_com bn_mbc"><span class="blind">MBC</span></a></li>';
headerHtml += '     	<li><a href="http://imnews.imbc.com/" class="sp_com bn_news"><span class="blind">뉴스</span></a></li>';
headerHtml += '     	<li><a href="http://www.imbc.com/broad/tv/drama/" class="sp_com bn_tv"><span class="blind">드라마</span></a></li>';
headerHtml += '     	<li><a href="http://www.imbc.com/broad/radio/index.html" class="sp_com bn_radio"><span class="blind">라디오</span></a></li>';
headerHtml += '     	</ul>';
headerHtml += '     </div>';
headerHtml += ' </div>';
headerHtml += '	<div class="edu_lk">';
headerHtml += '	    <a href="http://mbcworld.imbc.com/edu/">';
headerHtml += '	        <img src="http://mbcworld.imbc.com/images/main2020/edu_lk_img.png" alt="미디어 직업 교육 링크 이미지">';
headerHtml += '	    </a>';
headerHtml += '	</div>';
headerHtml += '	<div class="header_bx" style="display: none;">';
headerHtml += '	    <div class="logo">';
headerHtml += '	        <a href="http://mbcworld.imbc.com/index.html">';
headerHtml += '	            <img src="http://mbcworld.imbc.com/images/common2020/main_logo.png" alt="MBC WORLD LOGO">';
headerHtml += '	        </a>';
headerHtml += '	    </div>';
headerHtml += '	    <div id="site_gnb" class="nav">';
headerHtml += '	        <div class="n_gnb">';
headerHtml += '	            <ul>';
headerHtml += '	                <li><a href="http://mbcworld.imbc.com/introduce/index.html">MBC WORLD 소개</a></li>';
headerHtml += '	                <li><a href="http://mbcworld.imbc.com/guide/index.html">이용안내</a></li>';
headerHtml += '	                <li><a href="http://mbcworld.imbc.com/guidemap/">체험소개</a></li>';
headerHtml += '	                <li><a href="http://mbcworld.imbc.com/news/index.html">공지사항</a></li>';
headerHtml += '	            </ul>';
headerHtml += '	        </div>';
headerHtml += '	        <div class="lgg">';
headerHtml += '	            <ul>';
headerHtml += '	                <li><a href="http://ticket.interpark.com/Ticket/Goods/TPBridge.asp?GoodsCode=18004373" class="ticket_btn" target="_blank"></a></li>';
headerHtml += '	                <li><a href="https://reurl.cc/QxYxp" target="_blank">ENG</a></li>';
headerHtml += '	                <li><a href="https://reurl.cc/VlYQA" target="_blank">繁?</a></li>';
headerHtml += '	                <li><a href="https://reurl.cc/eAM7j" target="_blank">??</a></li>';
headerHtml += '	            </ul>';
headerHtml += '	        </div>';
headerHtml += '	    </div>';
headerHtml += '	</div>';

document.getElementById('header').innerHTML = headerHtml;

// 쿠키셋팅
function setCookie(strName, strValue, dateExpires, strPath, strDomain, isSecure) {
    var strCookie;
    if (strName == "") return;

    strCookie = strName + "=" + escape(strValue) +
        ((dateExpires) ? "; expires=" + dateExpires.toGMTString() : "") +
        ((strPath) ? "; path=" + strPath : "") +
        ((strDomain) ? "; domain=" + strDomain : "") +
        ((isSecure) ? "; secure" : "");

    document.cookie = strCookie;
}

// 쿠키정보 가져오기
function getCookie(strName) {
    var strArg = new String(strName + "=");
    var nArgLen, nCookieLen, nEnd;
    var i = 0,
        j;

    nArgLen = strArg.length;
    nCookieLen = document.cookie.length;

    if (nCookieLen > 0) {
        while (i < nCookieLen) {
            j = i + nArgLen;
            if (document.cookie.substring(i, j) == strArg) {
                nEnd = document.cookie.indexOf(";", j);
                if (nEnd == -1) nEnd = document.cookie.length;
                return unescape(document.cookie.substring(j, nEnd));
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0) break;
        }
    }
    return ("");
}

// 로그인 
function iMbc_login() {

    if (escape(getCookie("IMBCMAIN")) == "") {
        SetUrl();
        window.location.href = "http://member.imbc.com/Login/Login.aspx";
    } else {
        window.location.reload();
    }
}

// 로그아웃
function iMbc_logout() {
    SetUrl();
    window.location.href = "http://member.imbc.com/Login/Logout.aspx";
}

// RETURN PAGE를 위해 현재 페이지 정보를 쿠키로 저장
function SetUrl() {
    setCookie("IMBCURL", document.location, null, "/", "imbc.com")
}