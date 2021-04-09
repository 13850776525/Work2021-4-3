$.fn.foursFn = function(opt) {
    opt = $.extend({
        isTab: true, //是否有tab
        isTabNum: false, //tab里是否显示数字
        tabClassName: 'on', //当前tab的样式
        isState: true, //是否有图片说明
        stateClassName: '.icon', //图片说明的样式
        isPage: true, //是否有上下页
        oPrev: '.prev', //上一页
        oNext: '.next', //下一页
        timer: 2000, //图片切换时间
        isBg: false,
        bgClassName: ''
    }, opt);

    return this.each(function() {
        var $this = $(this);
        var iFousId = 0;
        var oS_con = $this.find('ul li');
        var oS_prev = $this.find(opt.oPrev);
        var oS_next = $this.find(opt.oNext);
        var oS_nav = $this.find('ol');
        var oS_state = $this.find(opt.stateClassName);
        var bg_list = opt.bgClassName ? $(opt.bgClassName).find('li') : '';
        var os_timer = 1000;        
        var moonTime = setInterval(InterTime, opt.timer);

        if (opt.isTab && oS_nav.size() > 0) {
            oS_nav.empty();
            for (var i = 0; i < oS_con.size(); i++) {
                opt.isTabNum ? oS_nav.append('<li>' + (i + 1) + '</li>') : oS_nav.append('<li></li>');
            };

            oS_nav.find('li').removeClass('active').eq(iFousId).addClass('active');
            oS_nav.live('click', function(ev) {
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if (target.nodeName.toLowerCase() == "li") {
                    iFousId = oS_nav.find('li').index(target);
                    os_timer = 0;
                    InterTab(iFousId);
                }
            });
        };

        InterTime();
        $this.bind('mouseenter', function(ev) {
             os_timer = 0;
            clearInterval(moonTime);
            oS_prev.show();
            oS_next.show();            
        }).bind('mouseleave', function(ev) {
            os_timer = 1000;
            oS_prev.hide();
            oS_next.hide();   
            moonTime = setInterval(InterTime, opt.timer);
        });
        if (opt.isBg && bg_list) {
            bg_list.bind('mouseenter', function(ev) {
                clearInterval(moonTime);
            }).bind('mouseleave', function(ev) {
                os_timer = 1000;
                moonTime = setInterval(InterTime, opt.timer);
            });
        }

        if (opt.isPage && oS_prev.size() > 0 && oS_next.size() > 0) {
            oS_prev.bind('click', function() {                
                    iFousId=oS_nav.find('.active').index()-1;
                    if (iFousId < 0) {
                        iFousId = oS_con.size() - 1;
                    }
                     InterTime();
            });
            oS_prev.bind('mouseover', function() {
            });
            oS_prev.bind('mouseout', function() {
            });

            oS_next.bind('click', function() {              
                     iFousId=oS_nav.find('.active').index()+1;
                    if (iFousId >= oS_con.size()) {
                        iFousId = 0;
                    }
                    os_timer = 0;
                    InterTime();
                             
            });
            oS_next.bind('mouseover', function() {
            });
            oS_next.bind('mouseout', function() {
            });
        }

        function InterTab(iFousId) {
            opt.isTab ? oS_nav.find('li').removeClass('active').eq(iFousId).addClass('active') : '';
            if (opt.isBg && bg_list) {
                oS_con.eq(iFousId).css({
                    "z-index": "1"
                }).animate({
                    'opacity': '1'
                }, os_timer).siblings(':not(.focusCont)').animate({
                    'opacity': '0'
                }, os_timer).css({
                    "z-index": "0"
                });
                bg_list.eq(iFousId).css({
                    "z-index": "1"
                }).animate({
                    'opacity': '1'
                }, os_timer).siblings(':not(.focusCont)').animate({
                    'opacity': '0'
                }, os_timer).css({
                    "z-index": "0"
                });
            } else {
                oS_con.eq(iFousId).css({
                    "z-index": "1"
                }).animate({
                    'opacity': '1'
                }, os_timer).siblings().animate({
                    'opacity': '0'
                }, os_timer).css({
                    "z-index": "0"
                });
            }
            opt.isState ? oS_state.children('p').eq(iFousId).css({
                "z-index": "1"
            }).animate({
                'opacity': '1'
            }, os_timer).siblings().animate({
                'opacity': '0'
            }, os_timer).css({
                "z-index": "0"
            }) : '';
           
        }

        function InterTime() {
            InterTab(iFousId);
            iFousId++;
            if (iFousId >= oS_con.size()) {
                iFousId = 0;
            }
        }
    });
};