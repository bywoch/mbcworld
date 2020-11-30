$(window).on("scroll", function () {
    var scrollTop = parseInt($(window).scrollTop());
    var obj = $(".sub");
    var gnbTop = obj.find("#header");
    if (scrollTop <= 400) {
        gnbTop.find("#gnb").show();
        gnbTop.css({
            'top': 0,
            'backgound': 'none',
            'border-bottom': '0',
            'z-index': '900'
        });
        gnbTop.find("#site_gnb").css({
            'border-bottom': '0'
        });
        $('.site_gnblist>li').on('mouseenter', function () {
            $("#header.on").css({
                'min-height': '368px'
            });
            $(gnbTop).css({
                'background': 'rgba(250,250,250,0.5)',
                'border-bottom': '0'
            });
            $("#site_gnb").css({
                'border-bottom': '0'
            });
        })
        $('.site_gnblist>li').on('mouseleave', function () {
            $("#header").css({
                'min-height': '140px'
            });
            $(gnbTop).css({
                'background': 'none',
                'border-bottom': '0'
            });
            $("#site_gnb").css({
                'border-bottom': '0'
            });
        })

    } else {
        gnbTop.find("#gnb").hide();
        gnbTop.css({
            'top': 0,
            'z-index': '900'
        });
        gnbTop.find("#site_gnb").css({
            'border-bottom': '1px solid #E0E0E1'
        });

        $('.site_gnblist>li').on('mouseenter', function () {
            $("#header.on").css({
                'min-height': '330px'
            });
            $(gnbTop).css({
                'background': '#fff',
                'border-bottom': '1px solid #E0E0E1'
            });
            $("#site_gnb").css({
                'border-bottom': '0'
            });
        })
        $('.site_gnblist>li').on('mouseleave', function () {
            $("#header").css({
                'min-height': '140px'
            });
            $(gnbTop).css({
                'background': 'none',
                'border-bottom': '0'
            });
            $("#site_gnb").css({
                'border-bottom': '1px solid #E0E0E1'
            });
        })
    }

});

$(function () {

    //메인
    if ((".main").length) mainSlider();

    //MBC프로그램
    if ($(".roll_wrap").length) subSlider();

    // 더보기
    $('.gnbmenu_total, .commenu_total').hide();
    $('.bn_more').hivetoggle();
    $('.ft_menu li').find('a.bn_select').hivetoggle({
        target_last: 'a:last',
        target_multi: '.ft_menu'
    });
    $('.bn_fd').hivetoggle({
        main: true
    });

});

function mainSlider() {
    var $slideName = $(".roll-area>.slide"),
        $list = $slideName.children('li'),
        $listNum = $list.length,
        $width = $list.width(),
        $dot = $('.roll-area .indicator .btn'),
        slideTime,
        isMoving = true,
        isHold = false,
        n = 0;
    if ($list.length < 2) {
        $(".roll-area .btn-box, .slide-num").hide();
    }
    $slideName.children("li").eq(0).addClass("on");
    $('.slide-num').append('<strong>1</strong> / ' + $listNum);

    function change() {
        $list.eq(n).addClass('on').siblings('li').removeClass('on');
    };

    function next() {
        n++;
        if (n == $listNum) {
            n = 0;
        };
        change();
        paging(n);
    };

    function prev() {
        if (n == 0) {
            n = $listNum;
        };
        n--;
        change();
        paging(n);
    };

    //slideTime = setInterval(next, 4000);

    function play() {
        slideTime = setInterval(next, 3000);
        isMoving = true;
    }

    function stop() {
        clearInterval(slideTime);
        isMoving = false;
    }

    $(".roll-area .btn-box .prev").bind({
        mouseenter: function () {
            stop();
        },
        mouseleave: function () {
            if (!isHold) {
                //play();
            }
        },
        click: function () {
            prev();
        }
    });
    $(".roll-area .btn-box .next").bind({
        mouseenter: function () {
            stop();
        },
        mouseleave: function () {
            if (!isHold) {
                //play();
            }
        },
        click: function () {
            next();
        }
    });


    function paging(i) {
        $('.slide-num strong').text(i + 1);
    }

}

function subSlider() {
    var $slideName = $(".roll_wrap .slide"),
        $list = $slideName.children('li'),
        $listNum = $list.length,
        $width = $list.width(),
        $dot = $('.roll_wrap .indicator .btn'),
        $playBtn = $('.ico-playstop'),
        slideTime,
        isMoving = true,
        isHold = false,
        n = 0;

    creatDot();
    $list.eq(0).addClass("on");

    function change() {
        $list.eq(n).addClass('on').siblings('li').removeClass('on');
        $('.indicator .btn').eq(n).addClass('on').siblings('.btn').removeClass('on');
    };

    function next() {
        n++;
        if (n == $listNum) {
            n = 0;
        };
        change();
        //paging(n);
    };

    function prev() {
        if (n == 0) {
            n = $listNum;
        };
        n--;
        change();
        //paging(n);
    };

    slideTime = setInterval(next, 4000);

    $playBtn.click(function () {
        $(this).toggleClass('ico-play');
        if (isMoving) {
            stop();
            isHold = true;
        } else {
            play();
            isHold = false;
        }
    });

    function play() {
        slideTime = setInterval(next, 3000);
        isMoving = true;
    }

    function stop() {
        clearInterval(slideTime);
        isMoving = false;
    }

    $(".roll_wrap .btn_box .prev").bind({
        mouseenter: function () {
            stop();
        },
        mouseleave: function () {
            if (!isHold) {
                play();
            }
        },
        click: function () {
            prev();
        }
    });
    $(".roll_wrap .btn_box .next").bind({
        mouseenter: function () {
            stop();
        },
        mouseleave: function () {
            if (!isHold) {
                play();
            }
        },
        click: function () {
            next();
        }
    });
    $('.indicator .btn').bind({
        'click': function () {
            var onNum = $(this).parent().index();
            change();
            n = onNum;
        },
        'focusin': function () {
            stop();
            var onNum = $(this).parent().index();
            change();
            n = onNum;
        },
        'mouseenter': function () {
            stop();
        },
        'mouseleave': function () {
            if (!isHold) {
                play();
            }
        }
    });

    function creatDot() {
        for (var i = 1; i <= $listNum + 1; i++) {
            var $item;
            $('.indicator').append($item);
            if (i == 1) {
                $item = '<input type="button" class="btn on" title="' + i + '번째 포스터">';
            } else {
                $item = '<input type="button" class="btn" title="' + i + '번째 포스터">';
            }
        }
    }

    function paging(i) {
        $('.slide-num strong').text(i + 1);
    }

}

/* [s] 더보기 플러그인 */
(function ($) {
    $.fn.hivetoggle = function (options) {
        return this.each(function () {
            $.hivetoggle(this, options);
        });
    };
    $.hivetoggle = function (container, options) {
        var settings = {
            main: false,
            type: 'slide', // 배너타입 : default(기본) / slide(슬라이드)
            speed: 100, // 슬라이드스피드
            obj: $(container),
            shift: false,
            target: $(container).next(),
            close: '.bn_close',
            target_first: 'a:first',
            target_last: 'button:last'
        };
        if (options) {
            $.extend(settings, options);
        };

        settings.obj.on('click', function (e) {
            e.preventDefault();
            if (settings.type == 'slide') {
                if (settings.target_multi) {
                    $(settings.target_multi).children().find('a:first').next().not(settings.target).parent().removeClass('selected');
                    $(settings.target_multi).children().find('a:first').next().not(settings.target).slideUp(settings.speed);
                    settings.target.parent().toggleClass('selected');
                    settings.target.slideToggle(settings.speed);
                } else {
                    settings.target.slideToggle(settings.speed);
                };
            } else {
                settings.target.toggle();
            };
        });
        settings.target.find(settings.close).on('click', function () {
            settings.obj.trigger('click');
            return false;
        });
        $('body').on('keydown', function (e) {
            if (e.which == 16) {
                settings.shift = true;
            };
        });
        $('body').on('keyup', function (e) {
            if (e.which == 16) {
                settings.shift = false;
            };
        });
        settings.target.find(settings.target_last).on('keydown', function (e) {
            if (e.which == 16) {
                settings.shift = true;
            };
            if (!settings.shift) {
                if (e.which == 9) {
                    settings.target.css({
                        opacity: 0
                    }).delay(1).queue(function () {
                        $(this).css({
                            opacity: 1,
                            display: 'none'
                        });
                        $(this).dequeue();
                    });
                };
                if (settings.target_multi) {
                    settings.target.parent().removeClass('selected');
                };
            };
        });
        settings.target.find(settings.target_last).on('keyup', function (e) {
            settings.shift = false;
        });
        settings.target.find('*').on('keydown', function (e) {
            if (e.which == 16) {
                settings.shift = true;
            };
        });
        settings.target.find('*').on('keyup', function (e) {
            if (e.which == 16) {
                settings.shift = false;
            };
        });
        settings.target.find(settings.target_first).on('focusout keydown', function () {
            if (settings.shift) {
                settings.target.css({
                    opacity: 0
                }).delay(1).queue(function () {
                    $(this).css({
                        opacity: 1,
                        display: 'none'
                    });
                    $(this).dequeue();
                });
                if (settings.target_multi) {
                    settings.target.parent().removeClass('selected');
                };
            };
        });

    };
})(jQuery);

/* 스킵 메뉴 포커스 이동 */
(function ($, e, b) {
    var c = "hashchange",
        h = document,
        f, g = $.event.special,
        i = h.documentMode,
        d = "on" + c in e && (i === b || i > 7);

    function a(j) {
        j = j || location.href;
        return "#" + j.replace(/^[^#]*#?(.*)$/, "$1")
    }
    $.fn[c] = function (j) {
        return j ? this.bind(c, j) : this.trigger(c)
    };
    $.fn[c].delay = 50;
    g[c] = $.extend(g[c], {
        setup: function () {
            if (d) {
                return false
            }
            $(f.start)
        },
        teardown: function () {
            if (d) {
                return false
            }
            $(f.stop)
        }
    });
    f = (function () {
        var j = {},
            p, m = a(),
            k = function (q) {
                return q
            },
            l = k,
            o = k;
        j.start = function () {
            p || n()
        };
        j.stop = function () {
            p && clearTimeout(p);
            p = b
        };

        function n() {
            var r = a(),
                q = o(m);
            if (r !== m) {
                l(m = r, q);
                $(e).trigger(c)
            } else {
                if (q !== m) {
                    location.href = location.href.replace(/#.*/, "") + q
                }
            }
            p = setTimeout(n, $.fn[c].delay)
        }
        $.browser.msie && !d && (function () {
            var q, r;
            j.start = function () {
                if (!q) {
                    r = $.fn[c].src;
                    r = r && r + a();
                    q = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        r || l(a());
                        n()
                    }).attr("src", r || "javascript:0").insertAfter("body")[0].contentWindow;
                    h.onpropertychange = function () {
                        try {
                            if (event.propertyName === "title") {
                                q.document.title = h.title
                            }
                        } catch (s) {}
                    }
                }
            };
            j.stop = k;
            o = function () {
                return a(q.location.href)
            };
            l = function (v, s) {
                var u = q.document,
                    t = $.fn[c].domain;
                if (v !== s) {
                    u.title = h.title;
                    u.open();
                    t && u.write('<script>document.domain="' + t + '"<\/script>');
                    u.close();
                    q.location.hash = v
                }
            }
        })();
        return j
    })()
})(jQuery, this);
$(function () {
    $(window).hashchange(function () {
        var element = document.getElementById(location.hash.substring(1));
        if (element) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                element.tabIndex = -1;
            }
            element.focus();
        }
    }).hashchange();
});