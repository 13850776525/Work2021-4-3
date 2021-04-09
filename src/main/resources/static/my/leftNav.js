(function() {
    var leftNav = function(){
        var leftNav_temp = '',
            topinfo_temp = '',
            svrlist_temp = '';
        topinfo_temp += '<div class = "pic bor js_topinfo"> ';
        topinfo_temp += '        <dl>';
        topinfo_temp += '            <dt>';
        topinfo_temp += '                {photo}';
        topinfo_temp += '                <a href="//my.baihe.com/myphoto/index" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.459.1379\'});" class="icon">上传照片</a><a href="//my.baihe.com/userinfo/index" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.460.1380\'});" class="icon">编辑资料</a>';
        topinfo_temp += '            </dt>';
        topinfo_temp += '            <dd>';
        topinfo_temp += '                <div class="orangeT"><span>●</span>&nbsp;<a href="//product.baihe.com/vipcrystal">我的等级：{serviceName}</a><div class="layer" style="display:none;"><em></em><a href="//product.baihe.com/vipcrystal" class="prompt">马上升级</a></div></div>';
        topinfo_temp += '               <div class="blueT"><span>●</span>&nbsp;<a href="//credit.baihe.com/">认证等级：{creditedNum}</a><div class="layer" style="display:none;"><em></em><a href="//credit.baihe.com/" class="prompt">提升等级</a></div></div>';
        topinfo_temp += '            </dd>';
        topinfo_temp += '         </dl>';
        topinfo_temp += '        <div class="icon">';
        topinfo_temp += '            <a href="//msg.baihe.com/" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'2.15.43.148.224\'});"><strong>{msNum}</strong><br />消息<span></span></a>';
        // topinfo_temp += '            <a href="//product.baihe.com/coin" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'2.15.43.186.289\'});"><strong>{redBeanNum}</strong><br />百合豆<span></span></a>';
//        topinfo_temp += '            <a href="//club.baihe.com/index/index" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'2.15.43.150.226\'});"><strong>{petalNum}</strong><br />花瓣</a>';
        topinfo_temp += '			<a href="//trade.baihe.com/myOrder?orderStatus=0" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'2.15.43.150.226\'});"><strong id="persDataPetalNum"></strong><br />订单</a>';
		topinfo_temp += '        </div>';
        topinfo_temp += '    </div>';

        leftNav_temp += '<div id="leftCont">';
        leftNav_temp += '    <div class="service bor js_nav_svr">';
        leftNav_temp += '        <h3>推荐服务</h3>';
        leftNav_temp += '        <div class="js_nav_show">';
        leftNav_temp += '        </div>';
        leftNav_temp += '        <div class="leftShow js_nav_hide" style="display:block;">';
        leftNav_temp += '        </div>';
        leftNav_temp += '        <a href="javascript:;" class="upIcon js_more"><p>收起</p></a>';
        leftNav_temp += '    </div>';
        leftNav_temp += '    <div class="box bor">';
        leftNav_temp += '       <h3>百合应用</h3>';
//        leftNav_temp += '        <a href="//app.baihe.com/help/index.php" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.509.1433\'});" target="_blank"><em class="icon_bbm">恋爱帮帮忙</em><div class="line"></div></a>';
//        leftNav_temp += '        <a href="//club.baihe.com" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.510.1434\'});" target="_blank"><em class="icon_club">成长俱乐部</em><div class="line"></div></a>';
        leftNav_temp += '        <a href="//ad.baihe.com/cupidarrow/index" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.511.1435\'});" target="_blank"><em class="icon_cupid">丘比特之箭</em><div class="line"></div></a>';
		// leftNav_temp += '		 <a href="//psymatch.baihe.com/goLoveDuoTest.do" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.558.1628\'});" target="_blank"><em class="icon_love">Love双重奏</em></a>';
//        leftNav_temp += '        <a href="//coin.baihe.com/Factory/taskList.html" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.512.1436\'});" target="_blank"><em class="icon_hd">百合豆工厂</em><div class="line"></div></a>';
//        leftNav_temp += '        <a href="//club.baihe.com/lottery/" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.513.1437\'});" target="_blank"><em class="icon_hb">花瓣抽奖</em><div class="line"></div></a>';
//        leftNav_temp += '        <a href="//app.baihe.com/xybz/index.php" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.514.1438\'});" target="_blank"><em class="icon_xybz">幸运宝藏</em><div class="line"></div></a>';
//        leftNav_temp += '        <a href="//class.baihe.com/index.php" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.515.1439\'});" target="_blank"><em class="icon_xq">相亲助手</em><div class="line"></div></a>';
//        leftNav_temp += '        <a href="//app.baihe.com/lovemarch/index.php" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.516.1440\'});" target="_blank"><em class="icon_ing">恋爱ing</em><div class="line"></div></a>';
        leftNav_temp += '    </div>';
        leftNav_temp += '    <div class="box bor js_fixedLeft">';
        leftNav_temp += '       <h3>百合账户</h3>';
		leftNav_temp += '       <a href="//product.baihe.com/coupon" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.461.1425.3709\'});" target="_blank"><em class="icon_yhj">我的优惠券</em></a>';
        leftNav_temp += '       <a href="//my.baihe.com/userinfo/index" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.161.1458\'});" target="_blank"><em class="icon_info">我的资料</em><div class="line"></div></a>';
        leftNav_temp += '       <a href="//my.baihe.com/myphoto/index" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.162.1459\'});" target="_blank"><em class="icon_pic">我的照片</em><div class="line"></div></a>';
        leftNav_temp += '       <a href="//credit.baihe.com/" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.163.1460\'});" target="_blank"><em class="icon_wdrz">我的认证</em></a>';
        // leftNav_temp += '       <a href="//credit.baihe.com/autonym" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.164.1461\'});" target="_blank"><em class="icon_smrz">实名认证</em><div class="line"></div></a>';
        leftNav_temp += '       <a href="//credit.baihe.com/mobile" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.165.1462\'});" target="_blank"><em class="icon_sjrz">手机认证</em><div class="line"></div></a>';
        leftNav_temp += '       <a href="//my.baihe.com/matchintention" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.166.1463\'});" target="_blank"><em class="icon_opt">择偶意向</em></a>';
        leftNav_temp += '       <a href="//my.baihe.com/setting/" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.167.1464\'});" target="_blank"><em class="icon_setUp">账号设置</em></a>';
        
        leftNav_temp += '    </div>';
        leftNav_temp += '</div>';


        // var svrlist_atemp = '<a class="cont" target="_blank" href="{url}"><span class="redIcon">{buytype}</span><em class="{icon}">{serviceName}</em>{text}<div class="line"></div></a>';
        var svrlist_atemp = '<a class="cont" target="_blank" href="{url}" onclick="{onclick}"><span class="orange">{buytype}</span><em class="{icon}">{serviceName}</em>{text}</a>';
        var svrListTemp = [
            
            {'serviceSign': 'S_Spring', 'icon': 'icon_dc', 'serviceName': '会员服务', 'text': '谁喜欢我  永久畅聊', 'buytype': '进 入', 'url': '//msg-yunying.baihe.com/owner/Displaypage/preview?id=277','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.1712.4279\'});baihe.cookie.setCookie(\'orderSource\', \'10030401\',\'\',\'\/\',\'.baihe.com\');'},
			
			{'serviceSign': 'S_LovePull', 'icon': 'icon_hn', 'serviceName': '红娘牵线', 'text': '红娘帮忙牵线搭桥寻对象', 'buytype': '开 通', 'url': '//matchmaker.baihe.com/matchmaker/listweb','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.474.1396\'});baihe.cookie.setCookie(\'orderSource\', \'10030404\',\'\',\'\/\',\'.baihe.com\');'},
           	{'serviceSign': 'S_SeniorMember', 'icon': 'icon_gj', 'serviceName': '高级会员', 'text': '尊享全站免费沟通等特权', 'buytype': '开 通', 'url': '//product.baihe.com/Vipsenior','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.44.2409.6050\'});baihe.cookie.setCookie(\'orderSource\', \'10030410\',\'\',\'\/\',\'.baihe.com\');'},
			{'serviceSign': 'S_CrystalMember', 'icon': 'icon_sj', 'serviceName': '水晶会员', 'text': '享受11项尊贵特权', 'buytype': '开 通', 'url': '//product.baihe.com/vipcrystal','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.473.1395\'});baihe.cookie.setCookie(\'orderSource\', \'10030405\',\'\',\'\/\',\'.baihe.com\');'},
//            {'serviceSign': 'S_SupremeMember', 'icon': 'icon_zz', 'serviceName': '至尊会员', 'text': '更多展示机会，提高成功', 'buytype': '开 通', 'url': '//product.baihe.com/Vipsuper','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.475.1397\'});baihe.cookie.setCookie(\'orderSource\', \'10030403\',\'\',\'\/\',\'.baihe.com\');'},
			{'serviceSign': 'S_Vip', 'icon': 'icon_vip', 'serviceName': '红娘服务', 'text': '人工红娘一对一服务', 'buytype': '体 验', 'url': '//vip.baihe.com/?from=baihe&site=tuijian','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.916.2392\'});'},
            //{'serviceSign': 'S_LoveExpress', 'icon': 'icon_sd', 'serviceName': '爱情速递', 'text': '霸气表白，提高回应率', 'buytype': '开 通', 'url': '//product.baihe.com/flashmsg','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.478.1400\'});baihe.cookie.setCookie(\'orderSource\', \'10030409\',\'\',\'\/\',\'.baihe.com\');'},
            //{'serviceSign': 'S_LookMsg', 'icon': 'icon_kx', 'serviceName': '看信会员', 'text': '免费查阅所有来信等特权', 'buytype': '开 通', 'url': '//product.baihe.com?source=paytj?spm=2.15.44.135.230'},
            // {'serviceSign': 'S_Coin', 'icon': 'icon_hd', 'serviceName': '我的百合豆', 'text': '百合通用虚拟货币', 'buytype': '开 通', 'url': '//product.baihe.com/coin','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.472.1394\'});baihe.cookie.setCookie(\'orderSource\', \'10030407\',\'\',\'\/\',\'.baihe.com\');'},
            {'serviceSign': 's46', 'icon': 'icon_s46', 'serviceName': '短信情缘', 'text': '让脱单更简单', 'buytype': '开 通', 'url': '//product.baihe.com/index/affection?source_str=35.122.568&source_sign=2','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'35.122.568\'});baihe.cookie.setCookie(\'orderSource\', \'35.122.568\',\'\',\'\/\',\'.baihe.com\');COMM_STAT.click(\'4.2.44.5081.14781\', \'\', \'数据中心-web.我的百合.推荐服务.短信情缘.帧1\');'},
            {'serviceSign': 'S_TopPriority', 'icon': 'icon_pm', 'serviceName': '今日明星', 'text': '获得关注的最快途径', 'buytype': '开 通', 'url': '//product.baihe.com/Viptodaystar','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.476.1398\'});baihe.cookie.setCookie(\'orderSource\', \'10030408\',\'\',\'\/\',\'.baihe.com\');'},
            //{'serviceSign': 'S_FocusStar', 'icon': 'icon_mx', 'serviceName': '焦点明星', 'text': '高效曝光，幸福加速', 'buytype': '开 通', 'url': '//lovebox.baihe.com/focusstar.action','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.477.1399\'});baihe.cookie.setCookie(\'orderSource\', \'10030406\',\'\',\'\/\',\'.baihe.com\');'},
            //{'serviceSign': 'S_LoveSMS', 'icon': 'icon_zh', 'serviceName': '爱情直呼', 'text': '传送情意，短信通知', 'buytype': '开 通', 'url': '//payment.baihe.com/product/lovecall/index.jsp','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.479.1401\'});'}
//			{'serviceSign': 'S_GoldMember', 'icon': 'icon_jzz', 'serviceName': '金至尊会员', 'text': '尊享27项优质特权', 'buytype': '开 通', 'url': '//product.baihe.com/Vipjsuper','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.1682.4192\'});baihe.cookie.setCookie(\'orderSource\', \'10030402\',\'\',\'\/\',\'.baihe.com\');'},
			{'serviceSign': 'S_ASuperMember', 'icon': 'icon_jzzqx', 'serviceName': '相亲牵线', 'text': '专享人工牵线特权', 'buytype': '开 通', 'url': '//product.baihe.com/xq','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.44.4170.11323\'});baihe.cookie.setCookie(\'orderSource\', \'10030410\',\'\',\'\/\',\'.baihe.com\');'},
			//{'serviceSign': 'S_Spring', 'icon': 'icon_cj', 'serviceName': '春节活动', 'text': '抢红包 赢笔记本电脑', 'buytype': '进 入', 'url': '//ad.baihe.com/xinnian','onclick':'baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.1712.4279\'});'}
			
			
        ];
        return {
            leadInto: $('#leftNav'),
            hasInfoBox: $('#leftNav').attr('hasinfo'),
            dataPosition: $('#leftNav').attr('data-position'),
            init: function() {
                var _this = this;
                $.getJSON('//my.baihe.com/getinterlogin/baiHeIndex?jsonCallBack=?', function(data) {
                    if (typeof(data) != 'undefined' && data != null && data != '') {
                        _this.leadInto.before($.format(leftNav_temp, data.data));
                        $.ajax({
                            type : "get",
                            url : '//product.baihe.com/paytemplate/getOrder?jsonCallBack=&orderStatus=0',
                            dataType:'jsonp',
                            jsonp: 'jsonCallBack',
                            success : function(msg) {
                                var state = msg.state;
                                if(state==200){
                                   var html = '<a href="//product.baihe.com/paytemplate/orderList" target="_blank"><em class="icon_myorder">我的订单</em></a>'; 
                                   $('.js_fixedLeft').append(html);
                                }
                            }
                      });
                        //未读消息
                        $.ajax({
                             async: true,
                             // url:'//msg.baihe.com/owner/msgapi/getUnReadCount?&jsonCallBack=?',
                             url:'//msg.baihe.com/owner/api/getUnReadCount?&jsonCallBack=?',
                             type:'get',
                             dataType:'json',
                             data: null,
                             success:function(data){
                                 if(data.code==200){
                                     var data = data.data;
                                    if (data['unReadCount'] == 0) {
                                        $('#leftCont .icon a').eq(0).find('strong').html(data['unReadCount']);
                                    } else if (0 < data['unReadCount'] && data['unReadCount'] < 999) {
                                        $('#leftCont .icon a').eq(0).find('strong').html(data['unReadCount']);
                                    } else if (data['unReadCount'] > 999) {
                                        $('#leftCont .icon a').eq(0).find('strong').html('999+');
                                    }
                                 }
                             }
                        });
                        // 模版是否有头像部分
                        _this.topInfo(data.data);
                        // 推荐服务列表排序
                        var userType = 1;
                        var hasCrystal = false,
                            hasPull = false,
                            hasCuoHe = false,
                            hasSuper = false,
							hasVip=false;

                        for (var i = 0; i < data.data.allService.length; i++) {
                            var buildSign = data.data.allService[i].serviceSign;
//                            if (buildSign == 'S_SupremeMember' || buildSign == 'S_SupremeMemberJin') { //至尊 金至尊
//                                hasSuper = true;
//                            }
                            if (buildSign == 'S_CrystalMember' || buildSign == 'S_SeniorMember') { //水晶  高级
                                hasCrystal = true;
                            }
                            if (buildSign == 'S_LovePull') {	//红娘牵线
                                hasPull = true; 
                            }
							if (buildSign == 'S_Vip') {		//红娘服务
                                hasVip = true;
                            }
                            // if (buildSign == 'S_YL_CuoHe') {
                            //  hasCuoHe = true;
                            // }
                        }

                        if (!hasSuper && !hasCrystal && !hasPull && !hasCuoHe) {
                            userType = 1;
                        } else {
                            if (hasSuper && hasCrystal) {
                                userType = 1;
                            } else {
                                if (hasSuper) {
                                    userType = 5;
                                } else if (hasCrystal) {
                                    userType = 2;
                                    if (hasPull && hasCuoHe) {
                                        userType = 7;
                                    } else if (hasPull) {
                                        userType = 3;
                                    } else if (hasCuoHe) {
                                        userType = 4;
                                    }else if (hasVip) {
                                        userType = 6;
                                    }
                                } else {
                                    userType = 1;
                                }
                            }
                        }
                        // console.log(userType);
                        _this.svrShow(userType, data.data.allService);
                        // 点击更多
                        _this.moreFn();
                        // 百合账户
                        _this.dataPosition == 'fixed' ? _this.fixedLeft() : '';
                    }
                });
            },
            // 头像区域处理
            topInfo: function (getData) {
                if (this.hasInfoBox != 'no') {
                    getData.creditedNum = this.userStar(getData.creditedNum);
                    //getData.serviceName = this.userSvrType(getData.allService);
                    getData.serviceName=this.newUserSvrType(getData.userIdentity);
                    getData.photo = this.userPhoto(getData);
                    getData.pvNum = getData.pvNum;
                    getData.msNum = getData.msNum;
                    getData.petalNum = getData.petalNum;
					
                    $('#leftCont').prepend($.format(topinfo_temp, getData));
                    $('#leftCont .js_topinfo .orangeT, #leftCont .js_topinfo .blueT').hover(function() {
                        $(this).find('.layer').show();
                    }, function() {
                        $(this).find('.layer').hide();
                    });
                }
            },
            // 认证等级
            userStar: function (val) {
                return (val === '' || val === null) ? '无等级' : val + '级';
            },
            // 会员等级
            // userSvrType: function (arr) {
            //     var levelList = {
            //         'S_SupremeMemberJin': '0',
            //         'S_SupremeMember': '1',
            //         'S_CrystalMember': '2',
            //         'S_SeniorMember': '3',
            //         'S_LovePull': '4',
            //         // 'S_YL_CuoHe': 5,
            //         'S_LookMsg': '5'
            //     };
            //     if (arr.length <= 0) {
            //         return '普通会员';
            //     } 
            //     var sort = arr.sort(function(a, b) {
            //         if(levelList[a.serviceSign] && levelList[b.serviceSign]){
            //             return levelList[a.serviceSign] < levelList[b.serviceSign] ? -1 : 1;
            //         }else if(levelList[a.serviceSign] && !levelList[b.serviceSign]){
            //             return -1;
            //         }else if(!levelList[a.serviceSign] && levelList[b.serviceSign]){
            //             return 1;
            //         }
            //     });
            //     if(sort[0].serviceSign == 'S_LookMsg' || sort[0].serviceSign == 'S_LovePull' || sort[0].serviceSign == 'S_SeniorMember' || sort[0].serviceSign == 'S_CrystalMember' || sort[0].serviceSign == 'S_SupremeMember' || sort[0].serviceSign == 'S_SupremeMemberJin'){
            //         if(sort[0].serviceSign=='S_SupremeMemberJin'){
            //             return '金至尊';
            //         }
            //         return sort[0].serviceName;
            //     }else{
            //         return '普通会员';
            //     }
            // },
            //新的用户等级
            newUserSvrType:function(arr){ 
                var levelList={
                    'VIP_CLY':'水晶百合',
//                    'VIP_SUPER':'至尊会员',
//					'VIP_JSUPER':'金至尊',
                    'VIP_ADV':'高级会员',
                    
                    'VIP_LMG':'看信会员',
                    'VIP_SLY':'银百合',
                    'VIP_GLD':'金百合',
                    'VIP_PT':'铂金百合',
                    'VIP_FC':'翡翠百合',
                    'VIP_MN':'玛瑙百合',
                    'VIP_DMD':'钻石百合',
                    'VIP_AQXZ':'管理员',
                    'VIP_ADMIN':'管理员',
                    'VIP_THN':'电话红娘',
                    'VIP_LC':'爱情顾问',
					'VIP_JSUPER_LovePull':'金尊牵线',
                };
                if (arr.length <= 0) {
									
                    return '普通会员';
                }else{
					
                    return levelList[arr[0]]?levelList[arr[0]]:'普通会员';
					
                }
            },

            // 头像处理
            userPhoto: function(dataval) {
                    if (dataval['headPhotoUrl']&&(dataval['headPhotoUrl'].indexOf("nopic_male.gif") < 0||dataval['headPhotoUrl'].indexOf("nopic_female.gif") < 0)) {
                        //  var _headPhoto="";
                        // if (dataval['headPhotoUrl'].indexOf("havepic_male.gif") >= 0 || dataval['headPhotoUrl'].indexOf("nopic_female.gif") >= 0) {
                        //     _headPhoto = "//images7.baihe.com/pic/upload_pic.jpg";
                        // } else {
                        //     _headPhoto = dataval['headPhotoUrl'].replace("120_150", "100_100");
                        // }
                    return '<a href="//profile1.baihe.com/?oppID='+ dataval.userID +'"><img src="//'+ dataval['headPhotoUrl'].split('//')[1].replace("120_150", "100_100") +'" alt="" /></a>';
                }else{
                    return '<a href="//my.baihe.com/myphoto/index?spm=2.15.43.20.221"><img src="//images7.baihe.com/pic/upload_pic.jpg" alt="" /></a>';
                }
            },
            maxNum: function (num) {
                return num > 99 ? '99+' : num;
            },
            // 服务列表分类显示
            svrShow: function (showId, dataval) {
                var newArr, levelList;

                levelList = {
                    'S_Spring': 1,
                    'S_CrystalMember': 2,
                    'S_SeniorMember': 3,
                    's46': 4,
                    'S_TopPriority': 5,
                    'S_LovePull': 6,
                    'S_ASuperMember': 7,
                    'S_Vip': 8
                };
                this.arrSort(svrListTemp, dataval, levelList);
       //          switch (showId) {
       //              case 1:
       //                  levelList = {
							// 'S_Spring': 1,
       //                      'S_CrystalMember': 2,
       //                      'S_SeniorMember': 3,
       //                      's46':4,
       //                      'S_TopPriority': 4,
       //                      'S_LovePull': 5,
       //                      'S_ASuperMember': 6,
							// 'S_Vip': 7,
       //                      'S_Coin': 8,
       //                      'S_FocusStar': 10
       //                  };
       //                  this.arrSort(svrListTemp, dataval, levelList);
       //                  break;
       //              case 2:
       //                  levelList = {
       //                      'S_Spring': 1,
       //                      'S_TopPriority': 2,
       //                      'S_LovePull': 3,
       //                      's46':4,
       //                      'S_ASuperMember': 4,
       //                      'S_ASuperMember': 5,
       //                      'S_SupremeMember': 6,
       //                      'S_Vip': 7
       //                  };
       //                  this.arrSort(svrListTemp, dataval, levelList);
       //                  break;
       //              case 3:
       //                  levelList = {
       //                      'S_Spring': 1,
       //                      'S_CrystalMember': 2,
       //                      'S_SeniorMember': 3,
       //                      's46':4,
       //                      'S_TopPriority': 4,
       //                      'S_LovePull': 5,
       //                      'S_ASuperMember': 6,
       //                      'S_FocusStar': 7
       //                  };
       //                  this.arrSort(svrListTemp, dataval, levelList);
       //                  break;
       //              case 4:
       //                  levelList = {
							// 'S_Spring': 1,
       //                      'S_CrystalMember': 2,
       //                      'S_SeniorMember': 3,
       //                      's46':4,
       //                      'S_TopPriority': 4,
       //                      'S_LovePull': 5,
       //                      'S_ASuperMember': 6,
       //                      'S_FocusStar': 7
       //                  };
       //                  this.arrSort(svrListTemp, dataval, levelList);
       //                  break;
       //              case 5:
       //                  levelList = {
							// 'S_Spring': 1,
       //                      'S_CrystalMember': 2,
       //                      'S_SeniorMember': 3,
       //                      's46':4,
       //                      'S_TopPriority': 4,
       //                      'S_LovePull': 5,
       //                      'S_ASuperMember': 6,
       //                      'S_FocusStar': 7,   //焦点明星
       //                      'S_Coin': 9,        //我的百合豆
       //                      'S_Vip': 11
       //                  };
       //                  this.arrSort(svrListTemp, dataval, levelList);
       //                  break;
       //              case 6:
       //                  levelList = {
							// 'S_Spring': 1,
       //                      'S_CrystalMember': 2,
       //                      'S_SeniorMember': 3,
       //                      'S_TopPriority': 4,
       //                      'S_LovePull': 5,
       //                      'S_ASuperMember': 6,
       //                      'S_FocusStar': 7
       //                  };
       //                  this.arrSort(svrListTemp, dataval, levelList);
       //                  break;
       //          }
            },
            // 服务结束小于15天置顶显示
            arrSort: function (arr, dataArr, sortRule) {
                var aTop;
                var sort = arr.sort(function(a, b) {
                    if(sortRule[a.serviceSign] && sortRule[b.serviceSign]){
                        return sortRule[a.serviceSign] < sortRule[b.serviceSign] ? -1 : 1;
                    }
                });

                for (var i = 0; i < dataArr.length; i++) {
                    var stopArr = dataArr[i].userServiceEndDateTime.split(' ')[0].split('-');
                    var ts = (new Date(stopArr[0], stopArr[1]-1, stopArr[2])) - (new Date()); //计算剩余的毫秒数  
                    var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
                    for (var j = 0; j < arr.length; j++) {
                        if (arr[j].serviceSign == dataArr[i].serviceSign) {
                            if(dd >= 0 && dd < 15){
                                arr[j].buytype = '续 费';
                                aTop = arr.splice(j, 1);
                                arr.unshift(aTop[0]);
                            }
                        }
                    }
                }
                $('#leftCont .js_nav_svr .js_nav_show').html($.format(svrlist_atemp, svrListTemp.slice(0, 4)));
                $('#leftCont .js_nav_svr .js_nav_hide').html($.format(svrlist_atemp, svrListTemp.slice(4)));
            },
            moreFn: function() {
                $('#leftCont .js_nav_svr .js_more').on('click', function() {
                    if ($(this).siblings('.leftShow').is(':hidden')) {
                        $(this).siblings('.leftShow').slideDown();
                        $(this).addClass('upIcon').find('p').text('收起');
                        $(this).removeClass('downIcon');
                        baihe.statistics({
                            spm: '2.15.44.153.237',
                            ggCode: 'newversion_28'
                        });
                    } else {
                        $(this).siblings('.leftShow').slideUp();
                        $(this).addClass('downIcon').find('p').text('更多');
                        $(this).removeClass('upIcon');

                    }
                });
				$('#persDataPetalNum').text($('#BAIHE').attr('numm'));
            },
            fixedLeft: function () {
                var _this = this;
                var oFix = $('#leftCont .js_fixedLeft');
                var vWidth = oFix.width();
                var vLeft = oFix.position().left;
                var vTop = $('body').outerHeight() - oFix.outerHeight() - 430;
                var maxTop = oFix.offset().top;
                
                $(window).scroll(function() {
                    _this.scrollFn(oFix, vWidth, vLeft, vTop, maxTop);
                });
                $(window).load(function() {
                    _this.scrollFn(oFix, vWidth, vLeft, vTop, maxTop);
                });
            },
            scrollFn: function (obj, w, l, t, topVal) {
                if ($(window).scrollTop() > topVal) {
                    if ($(window).scrollTop() >= t) {
                        obj.css({
                            'position': 'absolute',
                            'top': t
                        });
                    } else {
                        obj.css({
                            'background': '#fff',
                            'position': 'fixed',
                            'top': '25px',
                            'left': l,
                            'width':  w
                        });
                    }    
                }else{
                    obj.css({
                        'background': '#fff',
                        'position': '',
                        'top': '',
                        'left': '',
                        'width': ''
                    });
                }
            }
        };
    };
    
    var newNav = new leftNav();
    newNav.init();


})();





