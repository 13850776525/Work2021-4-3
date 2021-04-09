var isMember=false;  //判断是否为会员
var link = document.createElement('link');
 link.rel = 'shortcut icon';
 link.href = '//images6.baihe.com/favicon.ico';
 document.getElementsByTagName('head')[0].appendChild(link);
 var hasLogin = document.cookie.search('AuthCookie') >= 0;
//<dt><a href="//product.baihe.com/flashmsg" event="3" spm="4.14.42.864.2277" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020111\',\'\',\'\/\',\'.baihe.com\');">爱情速递</a></dt>
 document.write('\
 <style type="text/css">\
     .adTxtImgUpF{\
        display: block;\
        position: fixed;\
        _position: absolute;\
        width: 30px;\
        height: 18px;\
        background: url(//static6.baihe.com/client/adTxtImgUpF.png) no-repeat center bottom;\
        _background: url(//static6.baihe.com/client/adTxtImgUpF.gif) no-repeat center bottom;\
        text-align: center;\
        bottom: 6px;\
        right: 1.4%;\
        overflow: hidden;\
        zoom: 1;\
        z-index: 101;\
     }\
 </style>\
 <div class="adTxtImgUpF"></div>\
 <div id="bhHeaderH">\
 <div id="bhHeader">\
 <div class="headTop">\
		<div class="navTop">\
			<div class="mobile">\
				<a href="javascript:;" class="app" event="3" spm="4.14.42.867.2280"><em class="">手机版</em></a>\
				<div class="menu" style="display:none">\
					<em>空白</em>\
					<div>\
						<img src="//images9.baihe.com/home/nav_code.gif" alt="扫描二维码下载手机客户端">\
						<a href="#" id="iosDownload" target="_blank"  >IOS版</a><span></span><a href="#" id="androidDownload" target="_blank" >安卓版</a>\
					</div>\
				</div>\
			</div>\
			<div class="right">\
				<!--- 注册登录 --->\
				<dl>\
					<dt id="loginHandle" style="display:none;">\
						<a href="//my.baihe.com/register"  event="3" spm="4.14.42.258.985" >注册</a>　\
						<a href="//my.baihe.com/login" event="3" spm="4.14.42.257.984" >登录</a>\
					</dt>\
					<dt><a href="//help.baihe.com/" event="3" spm="4.14.42.875.2289" target="_blank">帮助中心</a>　　<a href="//safe.baihe.com/html/index.html" event="3" spm="4.14.42.876.2290" target="_blank">安全中心</a></dt>\
					<dd><span>红娘一对一服务：</span>400-1520-559</dd>\
				</dl>\
				<!--- 注册登录后状态 --->\
				<div id="userInfoHandle" class="setUp" style="display:none;">\
					<div class="member">\
						<a href="" class="name" event="3" spm="4.14.42.461.2518"><span>Hi，</span><strong id="nickName2"></strong></a>\
						<div class="pic">\
							<a href="javascript:;" target="_blank" onclick="baihe.cookie.setCookie(\'orderSource\', \'10010101\',\'\',\'\/\',\'.baihe.com\')"><img src="//images9.baihe.com/home/nav_icon.gif" alt="会员状态"  /></a>\
							<div class="info" style="display:none"><em></em><span class="info_info"></span></div>\
						</div>\
					</div>\
					<ul>\
						<li>\
							<a class="message down" href="https://msg.baihe.com" event="3" spm="4.14.42.869.2282"><em class="now">消息<span id="msg_dot2"></span><span id="msg_dot3"></span></em></a>\
						</li>\
						<li>\
							<a class="set" href="javascript:;"><em class="">设置</em></a>\
							<div class="menu" style="display:none">\
								<em >空白</em>\
								<div>\
									<a href="//my.baihe.com/userinfo/" event="3" spm="4.14.42.872.2286" >我的资料</a>\
									<a href="//my.baihe.com/matchintention" event="3" spm="4.14.42.873.2287" >择偶意向</a>\
									<a href="//my.baihe.com/setting/" event="3" spm="4.14.42.874.2288" >账号设置</a>\
									<a href="javascript:;" id="logOut" event="3" spm="4.14.42.877.2291" >退&#12288;&#12288;出</a>\
								</div>\
							</div>\
						</li>\
					</ul>\
				</div>\
			</div>\
		</div>\
	</div>\
   <div class="head">\
        <h1><a href="//www.baihe.com/index.shtml" class="logo" event="3" spm="4.14.42.844.2254">百合网,实名婚恋网开创者</a></h1>\
         <div class="nav">\
            <ul>\
                <li><a href="//www.baihe.com/home.shtml" event="3" spm="4.14.42.131.2255">首页</a></li>');
if(location.href.indexOf("user.baihe.com") >= 0||location.href.indexOf("u.baihe.com") >= 0)
 {document.write('<li><a class="active" href="//u.baihe.com/" event="3" spm="4.14.42.845.2256" >我的百合<em class="special" style="right:-20px;">特惠</em></a></li>');}
else{
     document.write('<li><a href="//u.baihe.com/" event="3" spm="4.14.42.845.2256" >我的百合<em class="special" style="right:-20px;">特惠</em></a></li>')
	 };
     document.write('<li><a href="https://search.baihe.com" style="z-index:10" event="3" spm="4.14.42.684.2258" >搜索</a></li>\
     			<li><a href="//ad.baihe.com/static/html/Baihelive/index.html" style="z-index:10" ><span class="zhiboTxt">视频</span><span class="zhiboBg"></span></a></li>\
                <li>\
                    <a href="javascript:;">服务<em class="popular" style="right:-20px;">热门</em></a>\
                    <div class="navMenu" style="display:none;">\
                        <dl class="live2">\
                            <dt><a href="//msg-yunying.baihe.com/owner/Displaypage/preview?id=277" event="3" spm="4.1.1.1721.4288" style="color:#c70920" target="_blank" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020101\',\'\',\'\/\',\'.baihe.com\');">免费升级<em class="new">新</em></a></dt>\
							<dt class="new_order"><a href="//trade.baihe.com/myOrder?orderStatus=0" event="3" spm="4.14.42.856.2269" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020102\',\'\',\'\/\',\'.baihe.com\');">我的账户<em class="num" style="display:none;">99+</em></a></dt>\
							<dt class="new_order"><a href="//product.baihe.com/xq" event="3" spm="4.192.115.4170.11321" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020111\',\'\',\'\/\',\'.baihe.com\');"><b>相亲牵线</b></a></dt>\
                            <dt><a href="//product.baihe.com/vipcrystal" target="_blank" event="3" spm="4.14.42.858.2271" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020103\',\'\',\'\/\',\'.baihe.com\');"><b>水晶会员</b></a></dt>\
							<dt><a href="//product.baihe.com/Vipsenior" target="_blank" event="3" spm="4.156.691.2408.6049" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020104\',\'\',\'\/\',\'.baihe.com\');"><b>高级会员</b></a></dt>\
							<dt><a href="//msg-yunying.baihe.com/owner/Displaypage/preview?id=135" target="_blank" event="3" spm="4.7.1727.5056.14732" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020112\',\'\',\'\/\',\'.baihe.com\');"><b>水晶人工牵线</b><em class="new">新</em></a></dt>\
							<dt style="display:none;"><a href="//product.baihe.com/Vipjsuper" target="_blank" event="3" spm="4.14.42.899.2337" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020108\',\'\',\'\/\',\'.baihe.com\');">金至尊服务</a></dt>\
							<dt style="display:none;"><a href="//product.baihe.com/Vipsuper" target="_blank" event="3" spm="4.14.42.860.2273" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020107\',\'\',\'\/\',\'.baihe.com\');">至尊服务</a></dt>\
							<dt><a href="//product.baihe.com/paytemplate/orderList" target="_blank" event="3" spm="4.192.115.4303.11807" >我的订单</a></dt>\
							<dt><a href="//product.baihe.com/Viptodaystar" event="3" spm="4.14.42.863.2276" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020110\',\'\',\'\/\',\'.baihe.com\');">今日明星</a></dt>\
                            <dt><a href="//matchmaker.baihe.com/matchmaker/listweb" target="_blank" event="3" spm="4.14.42.859.2272" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020105\',\'\',\'\/\',\'.baihe.com\');">红娘牵线</a></dt>\
							<!--<dt><a href="//product.baihe.com/coin" event="3" spm="4.14.42.857.2270" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020106\',\'\',\'\/\',\'.baihe.com\');">百合豆</a></dt>-->\
							<dt style="display:none;"><a href="//vip.baihe.com/?from=baihe&site=fuwu" target="_blank" event="3" spm="4.2.2.1422.3703" >红娘一对一</a></dt>\
							<dt><a href="//product.baihe.com/baihecard" event="3" spm="4.14.42.866.2279" >产品卡开通</a></dt>\
                            <dt style="display:none;"><a href="javascript:;">至尊服务<em class="arrowRx"></em></a>\
                                <dl class="live3" style="display:none;">\
                                    <dd><a href="//product.baihe.com/Vipsuper" target="_blank" event="3" spm="4.14.42.860.2273" >至尊服务</a></dd>\
                                    <dd><a href="//product.baihe.com/Vipjsuper" target="_blank" event="3" spm="4.14.42.899.2337" >金至尊服务</a></dd>\
                                </dl>\
                            </dt>\
                            <dt><a href="//product.baihe.com/index/affection?source_str=36.120.568&source_sign=2"  id="headDxqy" event="3" spm="36.120.568" >短信情缘<em class="new">新</em></a></dt>\
                         </dl>\
                    </div>\
                </li>\
				<li>\
                    <a href="javascript:;">发现</a>\
                    <div class="navMenu navMenuFaxian" style="display:none;">\
						<a href="//matching.baihe.com/twelve" target="_blank" event="3" spm="4.14.42.851.2264" >心灵匹配</a>\
                        <a href="https://city.baihe.com" target="_blank" event="3" spm="4.14.42.854.2267" >邂　逅</a>\
                        <a href="//class.baihe.com" target="_blank" event="3" spm="4.14.42.853.2266" style="display:none;" >相亲助手</a>\
                        <a href="https://story.baihe.com" target="_blank" event="3" spm="4.14.42.855.2268">秀恩爱</a>\
                    </div>\
                </li>\
                <li><a href="http://date.baihe.com/index.php" event="3" spm="4.14.42.4920.14374" target="_blank" >约会吧</a></li>\
                <li><a href="//vip.baihe.com/?from=baihe&site=daohang" event="3" spm="4.14.42.734.1988" target="_blank">红娘一对一</a></li>\
                <li style="z-index:10"><a href="//product.baihe.com/xqpull" target="_blank" event="3" spm="4.14.42.849.2262" >百合相亲</a></li>');

                //<a href="//product.baihe.com/Vipjsupermatch/myPullRecord" target="_blank" event="3" spm="4.192.115.3971.12500" class="myConnect">我的牵线</a>\

//				if(location.href.indexOf("ad.baihe.com/dfh") >= 0 )
//				 	{document.write('<li><a href="http://ad.baihe.com/dfh/" target="_blank" event="3" spm="4.159.692.2472.6321" class="active">恋爱金<em class="hot" style="right:-22px;">热卖</em></a></li>');}
//				else{
//					 document.write('<li><a href="http://ad.baihe.com/dfh/" target="_blank" event="3" spm="4.159.692.2472.6321">恋爱金<em class="hot" style="right:-22px;">热卖</em></a></li>')
//				};
				
document.write('<li><a href="//qinggan.baihe.com/" target="_blank" event="3" spm="4.14.42.878.2292">情感救助</a></li>\
				<li><a href="//hunli.baihe.com/?utm_source=baihe" target="_blank" event="3" spm="4.14.42.2063.5345">百合婚礼</a></li>');
				//<li><a href="//www.baihejia.com/" target="_blank" event="3" spm="4.14.42.4049.10896">婚房<em class="new" style="right:-20px;">new</em></a></li>
//				if(location.href.indexOf("xact.baihe.com/lovebank") >= 0 )
//				 	{document.write('<li><a href="http://xact.baihe.com/lovebank" target="_blank" event="3" spm="4.14.42.850.2263" class="active">领红包</a></li>');}
//				else{
//					 document.write('<li><a href="http://xact.baihe.com/lovebank" target="_blank" event="3" spm="4.14.42.850.2263" >领红包<em class="hot" style="right:9px;">热卖</em></a></li>')
//				};
				
//				if(location.href.indexOf("shop.baihe.com/htmlweb") >= 0 )
//				 	{document.write('<li><a href="http://shop.baihe.com/htmlweb/" target="_blank" event="3" spm="4.14.42.1417.3694" class="active">礼物攻略</a></li>');}
//				else{
//					 document.write('<li><a href="http://shop.baihe.com/htmlweb/" target="_blank" event="3" spm="4.14.42.1417.3694" >礼物攻略</a></li>')
//				};
				
				document.write('</ul>\
        </div>\
    </div>\
	<div class="salePrice" style="display:none;"><a href=""></a></div>\
	</div>\
</div>\
<script language="javascript" src="//static4.baihe.com/common/COMM_SPM.js" charset="utf-8"></script>');
/*
*	判断特惠版是否显示
*/
$.getJSON("//product.baihe.com/index/getMsgBannerInfo?jsonCallBack=?", function(data) {
	if(data.code==200){
		if(data.data.showFreeBanner==1){
			$("#bhHeaderH").height(110);
			$('.salePrice').show();
			$('.salePrice').find('a').html(data.data.msgBannerTxt);
			$('.salePrice').find('a').attr('href',data.data.msgBannerUrl);
			if(data.data.msgBannerTxt.indexOf('脱单捷径')>-1){ //临期
				baihe.bhtongji.tongji({
					'event': '3',
					'spm': '4.28.1035.2135.9826'
				});
			}else if(data.data.msgBannerTxt.indexOf('续费优惠')>-1){ //到期
				baihe.bhtongji.tongji({
					'event': '3',
					'spm': '4.28.1021.2135.10088'
				});
			}
			
		}else{
			$("#bhHeaderH").height(82);
			$('.salePrice').hide();
		}
	}		
});	
$('.salePrice a').click(function(){
	if($(this).text().indexOf('脱单捷径')>-1){ //临期
		baihe.bhtongji.tongji({
			'event': '3',
			'spm': '4.28.1035.3584.9828'
		});
		baihe.cookie.setCookie('orderSource', '10170102','','/','.baihe.com');
	}else if($(this).text().indexOf('续费优惠')>-1){  //到期
		baihe.bhtongji.tongji({
			'event': '3',
			'spm': '4.28.1021.3584.10090'
		});
		baihe.cookie.setCookie('orderSource', '10170103','','/','.baihe.com');
	}
});
$.getScript('//static5.baihe.com/js/jquery.md5.js',function(){
	//导航链接
    var p = '{"platform":"android,ios"}';
	var paramsP = JSON.parse(p);
	var _tstr = getEncrypt(p);
	$.ajax({
		type: 'GET',
		url: '//cpi.baihe.com/app/download?_t=' + _tstr.timestamp + '_' + _tstr._tstr + '&p=' + p + '&vrt={"lang":"cn","brand":"DZB","appver":"","channel":"bw_amdps_asdga","platform":"api","phoneModel":"api-com","phoneOSVersion":"1.0.0","deviceid":"asdg-12431j-sas-12-adg-3w22","iosuuid":"","plusChannel":"xdsat_xdgas_sad__23","plusCode":"ag223423","port":"12341","mac":15121,"imsi":"","info":""}',
		traditional: true,
		async: true,
		dataType: "json",
		contentType: 'text/plain',
		success: function (data) {
			if(data.retCode == 1){
				var url = data.data;
				var $ios = $('#iosDownload');
				var $android = $('#androidDownload');
				$ios.attr('href',url.ios);
				$android.attr('href',url.android);
				$ios.click(function(){
					baihe.bhtongji.clickTongJi({'event': '3', 'spm': '4.14.42.1006.2516'});
				});
				$android.click(function(){
					baihe.bhtongji.clickTongJi({'event': '3', 'spm': '4.14.42.1007.2517'});
				});
			}
		},
		error: function () {
			console.log('error')
		}
	})
});

function getEncrypt(p) {
	var s = '{"lang":"cn","brand":"DZB","appver":"","channel":"bw_amdps_asdga","platform":"api","phoneModel":"api-com","phoneOSVersion":"1.0.0","deviceid":"asdg-12431j-sas-12-adg-3w22","iosuuid":"","plusChannel":"xdsat_xdgas_sad__23","plusCode":"ag223423","port":"12341","mac":15121,"imsi":"","info":""}';
	var salt = 'x82ls87$!1';
	var p2 = p;
	var t = parseInt(new Date().getTime() / 1000);
	var xx = $.md5(p2);
	var _t = $.md5(s + salt + t + xx.substr(8, 16));
	var _tstr = _t.substr(8, 16);
	return {
		timestamp: t,
		_tstr: _tstr
	};
}

 (function($) {

    //短信情缘的打点
    $('#headDxqy').click(function(){
        baihe.cookie.setCookie('orderSource', '36.120.568','','','.baihe.com');
        COMM_STAT.click('4.192.115.5081.14782', '', '数据中心-web.导航.服务.短信情缘.帧1');
    });
 	//我的牵线;  
 	$.ajax({
         async:false, 
         url:'//product.baihe.com/Vipjsupermatch/checkService?jsonCallBack=?',
         type : "get",  
         dataType : "jsonp",
         jsonp: "jsonpCallback",
         success : function(data){  
         	var code = data.state;
             if(code==200){
             	var html ='<a href="//product.baihe.com/Vipjsupermatch/myPullRecord" target="_blank" event="3" spm="4.192.115.3971.12500" class="myConnect">我的牵线</a>';
             	$('.navMenuFaxian a').eq(1).before(html);
             }
         }
     });

 	 //未读消息
	 $.ajax({
         async: true,
         url:'//msg.baihe.com/owner/api/getUnReadCount?&jsonCallBack=?',
         type:'get',
         dataType:'json',
         data: null,
         success:function(data){
             if(data.code==200){
                 if(data.data.unReadCount > 0){
                 	$('#msg_dot2').show().html(formUnRead(data.data.unReadCount));
                 	//处理99+ 被遮挡问题;
                 	if(data.data.unReadCount>99){
                 		$('#msg_dot2').css('left','28px');
                 	}
                    //$('#msg_dot').addClass("messageDot");
                 }else{
                 	$('#msg_dot2').hide();
                 	//判断BC类是否有未读;
                //  	if( data.data.msgHasBC ){
             			// $('#msg_dot3').show();
                //  	}
                 }
             }

             //处理99+;
            function formUnRead(number){
				if( number>0&&number<99 ){
					return number;
				}else{
					return '99+'
				}
			}
         }
     });
 	 
	/*
	*	新增未支付订单
	*/
	//获取未读数
	//未支付订单
	$.ajax({
		async: true,
		url:'//u.baihe.com/index/getunpayedorderCount?&jsonCallBack=?',
		type:'get',
		dataType:'json',
		data: null,
		success:function(data){
			if(data.code == 200){
				if(data.data>0 && data.data<=99){  //有支付订单 且小于99
					$('.new_order').find('.num').show();
					$('.new_order').find('.num').text(data.data);
					$('#persDataPetalNum').text(data.data);
					$('#BAIHE').attr('numm',data.data);
				}else if(data.data>99){
					$('.new_order').find('.num').show();
					$('.new_order').find('.num').text('99+');
					$('#persDataPetalNum').text('99+');
					$('#BAIHE').attr('numm',data.data);
				}else{
					$('.new_order').find('.num').hide();
					$('#persDataPetalNum').text('0');
					$('#BAIHE').attr('numm',data.data);
				}
		
			}
		}
	});

     $.fn.textSlider = function(settings) {
         settings = jQuery.extend({
             speed: "normal",
             line: 2,
             timer: 3000
         }, settings);
         return this.each(function() {
             $.fn.textSlider.scllor($(this), settings);
         });
     };
     $.fn.textSlider.scllor = function($this, settings) {
         var ol = $("ol:eq(0)", $this);
         var timerID;
         var li = ol.children();
         var liHight = $(li[0]).height();
         var upHeight = 0 - settings.line * liHight; //滚动的高度；
         var scrollUp = function() {
             ol.animate({
                 marginTop: upHeight
             }, settings.speed, function() {
                 for (i = 0; i < settings.line; i++) {
                     ol.find("li:first", $this).appendTo(ol);
                 }
                 ol.css({
                     marginTop: 0
                 });
             });
         };
         var autoPlay = function() {
             timerID = window.setInterval(scrollUp, settings.timer);
         };
         var autoStop = function() {
             window.clearInterval(timerID);
         };
         //事件绑定
         ol.hover(autoStop, autoPlay).mouseout();
     };
 })(jQuery);

 $(document).ready(function() {
     $("#scrollPoint").textSlider({
         line: 1,
         speed: 500,
         timer: 3000
     });


	
 });


//---------鼠标放上去的效果
 //--主导航
 $('#bhHeader li').each(function() {
     $(this).mouseover(function() {
         $(this).children('a').addClass('down').end().find('.navMenu').show();
         $(this).find('dt').mouseover(function(event) {
             $(this).addClass('active').find('dl').show();
         }).mouseout(function(event) {
             $(this).removeClass('active').find('dl').hide();
         });;
     }).mouseout(function() {
         $(this).children('a').removeClass('down').end().find('.navMenu').hide();
     });;
 });
 
 //--手机
 $('.headTop .navTop .mobile').each(function() {
     $(this).mouseover(function() {
         $(this).children('a').addClass('active').end().find('.menu').show();
     }).mouseout(function() {
         $(this).children('a').removeClass('active').end().find('.menu').hide();
     });;
 });
 
 //--设置
 $('#userInfoHandle li').each(function() {
     $(this).mouseover(function() {
		 $(this).children('.set').addClass('active').end().find('.menu').show();
     }).mouseout(function() {
         $(this).children('.set').removeClass('active').end().find('.menu').hide();
     });;
 });
 
$('#userInfoHandle .pic').hover(function(){
	$('#userInfoHandle .info').show();	  
},function(){
	$('#userInfoHandle .info').hide();	
});

 
//---------结束
 if (hasLogin) {
     ! function getLoginInfo() {
         $.ajax({
             type: "get",
             url: "//my.baihe.com/getinterlogin/headInter?rand=" + Math.random() * 500 + "&jsonCallBack=?",
             async: true,
             dataType: "jsonp",
             success: function(msg) {
                 if (typeof msg != "undefined" && msg) {
                     if (msg['state'] == '1') {
                         //获取cookie
                         function getCookie(name){
                            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                            if(arr=document.cookie.match(reg)){
                                return unescape(arr[2]);
                            }else{
                                return null;
                            }
                        }
                        
                        //删除cookie
                        function delCookie(name){
                            var exp = new Date();
                            exp.setTime(exp.getTime() - 1);
                            var cval=getCookie(name);
                            if(cval!=null){
                                document.cookie= name + "="+cval+";expires="+exp.toGMTString();
                            } 
                        }
                         $('#logOut').click(function(event) {
                            var userID =  baihe.cookie.getCookie('userID');
                            
                            baihe.cookie.setCookie("GCUserID", -1, baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                            baihe.cookie.setCookie("AuthCookie", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                            baihe.cookie.setCookie("Token", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                            baihe.cookie.setCookie("GCEmail", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                            location.href = "//www.baihe.com/index.shtml";
                         });
                         $('#loginHandle').hide();
                         $('#userInfoHandle').show();
                         $('.setUp li').mouseover(function(event) {
                             $(this).find('em').addClass('now').end().children('.menu').show().end().siblings().find('.menu').hide();
                         }).mouseout(function(event) {
                             $(this).find('em').removeClass('now').end().children('.menu').hide();
                         });
                         if (typeof msg['data'] != "undefined" && msg['data']) {
                             if (0 < parseInt(msg['data']['msNum']) < 999) {
                                 $('#msNum').html('(' + msg['data']['msNum'] + ')');
                             } else if (parseInt(msg['data']['msNum']) > 999) {
                                 $('#msNum').html('(999+)');
                             }
                             if (0 < parseInt(msg['data']['adminNum']) < 999) {
                                 $('#adminNum').html('(' + msg['data']['adminNum'] + ')');
                             } else if (parseInt(msg['data']['adminNum']) > 999) {
                                 $('#adminNum').html('(999+)');
                             }
                             if (0 < parseInt(msg['data']['noticNum']) < 999) {
                                 $('#noticNum').html('(' + msg['data']['noticNum'] + ')');
                             } else if (parseInt(msg['data']['noticNum']) > 999) {
                                 $('#noticNum').html('(999+)');
                             }
                             /*
                                *注释标准头显示消息浮层
                              */
                             // if (msg['data']['userID']) {
                             //     //弹出消息
                             //     bzt_curUrl = window.location.href;
                             //     bzt_loginUserId = msg['data']['userID'];
                             //     bzt_isMainUser = bzt_loginUserId > 0;
                             //     title_ori = document.title; // 当前域名标题
                             //     bzt_headType = bzt_getHeadType(bzt_curUrl + "");
                             //     isFpage = bzt_headType == 0 ? true : false;
                             //     bzt_lovepull();
                             //     bzt_showMsgInfoNew(isFpage);
                             //     setRealAuthInfo();
                             // }
                         }
                     } else if (msg['state'] == "0" && msg['data'] == 'noRegistAll') {
                         location.href = "//my.baihe.com/register/";
                     } else if (msg['state'] == "0" && msg['data'] == 'noLogin') {
                         $(".signIn").show();
                     }
                 }
             }
         });
     }();
 } else {
     $("#loginHandle").show();
 }







 /*
    *注释标准头显示消息浮层
    */
 /*

 //信息弹层
 var bzt_curUrl;
 var bzt_loginUserId;
 var bzt_isMainUser;
 var loopMsgInfoTask;
 var loopMsgTimes; // 一分钟循环一次
 var title_ori; // 当前域名标题
 var bzt_headType;
 var close_msg_pop_flag = 0;
 var show_msg_flag = 0;
 var newmsg_all_inHead = 0;
 var falg_flash = 0;
 var startScroll = 1;
 var loadM4h = 3;

bzt_curUrl = window.location.href;
if(bzt_curUrl.indexOf(('http://xact.baihe.com/html/201504/guomeijia').toLowerCase())>-1){
    $('.nav li a').first().removeClass('active').end().last().addClass('active').removeAttr('target');    
}
*/
 function start_scroll() {
     if (startScroll != 1) {
         clearInterval(startScroll); // 每次调用时，先删除任务，防止重叠
     }
     startScroll = setInterval(do_scroll, 1300);
 }

 function do_scroll() {
//     if (falg_flash % 2) {
//         document.title = '【新消息】' + title_ori;
//		 $('#userInfoHandle .message').addClass('messageA');
//     } else {
//         document.title = '【　　　】' + title_ori;
//		 $('#userInfoHandle .message').addClass('messageA');
//     }
//     falg_flash = falg_flash + 1;
 }

 function cancel_scroll() {
     clearInterval(startScroll);
	$('#userInfoHandle .message').removeClass('messageA');
     document.title = title_ori;
 }

 function changeStartScroll(msgNum_) {
     var arr_msg = new Array();
     arr_msg[0] = 0;
     arr_msg[1] = msgNum_;
     baihe.cookie.setCookie("newMsg_status" + bzt_loginUserId, arr_msg, baihe.cookie.getExpDate(1, 0, 0), "/", "baihe.com");
     start_scroll();
 }

 function changeEndScroll(msgNum_) {
     var arr_msg = new Array();
     arr_msg[0] = 1;
     arr_msg[1] = msgNum_;
     baihe.cookie.setCookie("newMsg_status" + bzt_loginUserId, arr_msg, baihe.cookie.getExpDate(1, 0, 0), "/", "baihe.com");
     cancel_scroll();
 }

/*
 function bzt_lovepull() {
     if (bzt_curUrl.indexOf("http://lovepull.baihe.com/lovepull.action") > -1) {
         location.href = "http://applove.baihe.com";
     }
 }



 //消息提醒类型
 var todayNewMsgTypeText = {
     '0001|0': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>他给你写信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_1#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0001|1': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>她给你写信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_1#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0002|0': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>他回复了你</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_2#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0002|1': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>她回复了你</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_2#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0003|0': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>他给你发信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_3#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0003|1': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>她给你发信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_3#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0004|0': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>他给你发信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_4#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0004|1': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>她给你发信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_4#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>'
 }
*/
 function bzt_getHeadType(url) { // alert(url+"
//		"+url.indexOf("profile1.baihe.com"));
//		if (url != null) {
//         if (url.indexOf(("baihe.com/home.shtml").toLowerCase()) >= 0) {
//             return -1;
//         }
//         if (url.indexOf("profile1.baihe.com") >= 0 || url.indexOf("product.baihe.com") >= 0 || url.indexOf("product.baihe.com/baihecard") >= 0 || url.indexOf("market.baihe.com/view/product/service.jsp") >= 0 || url.indexOf("product.baihe.com") >= 0) { //白标准头、无搜索条
//             return 1;
//         }
//         if (url.indexOf("user.baihe.com") >= 0 || url.indexOf("u.baihe.com") >= 0 || url.indexOf("credit.baihe.com") >= 0) { // 带搜索条、我的百合高亮
//             return 2;
//         }
//         if (url.indexOf("story.baihe.com/index.php?action=openSpace") >= 0 || url.indexOf("video.baihe.com/user/MyVideo.action") >= 0 || url.indexOf("open.baihe.com/connector/t/OpenStatus.action") >= 0 || url.indexOf("app.baihe.com/test") >= 0) { // 带搜索条
//             // 特殊处理的
//             return 6;
//         }
//         if (url.indexOf("search.baihe.com") >= 0 || url.indexOf("class.baihe.com") >= 0 || url.indexOf("userinfo.baihe.com/UserBasicInfo4Task.action?doneNewTask=0") >= 0 || url.indexOf("photograph.baihe.com/photograph/photoNormalTask.do?taskStatus=0") >= 0 || url.indexOf("product.baihe.com") >= 0 || url.indexOf("userinfo.baihe.com/LovePlanningNomal.action?doneNewTask=0") >= 0) {
//             return 5;
//         }
//
//         if ( url.indexOf("msg.baihe.com") >= 0 || url.indexOf("task.baihe.com") >= 0 || url.indexOf("priv.baihe.com") >= 0 || url.indexOf("open.baihe.com") >= 0 || url.indexOf("coin.baihe.com") >= 0 || url.indexOf("userinfo.baihe.com") >= 0 || url.indexOf("lovemap.baihe.com") >= 0 || url.indexOf("auth.baihe.com") >= 0 || url.indexOf("realswap.baihe.com") >= 0 || url.indexOf("lovepull.baihe.com") >= 0 || url.indexOf("top.baihe.com") >= 0 || url.indexOf("test.baihe.com") >= 0 || url.indexOf("product.baihe.com") >= 0 || url.indexOf("score.baihe.com") >= 0 || url.indexOf("psymatch.baihe.com") >= 0 || url.indexOf("event.baihe.com") >= 0 || url.indexOf("media.baihe.com") >= 0 || url.indexOf("help.baihe.com") >= 0 || url.indexOf("face.baihe.com") >= 0 || url.indexOf("blog.baihe.com") >= 0 || url.indexOf("photograph.baihe.com") >= 0 || url.indexOf("news.baihe.com") >= 0 || url.indexOf("ms.baihe.com") >= 0) { // 带搜索条
//             return 3;
//         }
//         if ( url.indexOf("shouji.baihe.com") >= 0 || url.indexOf("emotion.baihe.com") >= 0 || url.indexOf("video.baihe.com") >= 0 || url.indexOf("story.baihe.com") >= 0) {
//             return 4;
//         }
//     }
     return 9;
 }
//profile 发消息按钮事件
 function recordBhtg(ggcode) {
     if (typeof(ggcode) != 'undefined' && ggcode != null && ggcode != '' && ggcode.indexOf("_") > 0) {
         var img = new Image();
         img.src = "//bhtg.baihe.com/stat.html?ggCode=" + ggcode;
     }
 }
/*

 //是否提示当天有未读消息
 function bzt_todayNewMsgInfo(msgInfo) {
     var todayNoRead = msgInfo.todayNoRead;
     var todayNoRead_c = baihe.cookie.getCookie("ck_msgInfo_bzt_todayNoRead_" + bzt_loginUserId);
     if (typeof(todayNoRead_c) != 'undefined' && todayNoRead_c != null && todayNoRead_c != '') {
         todayNoRead = todayNoRead_c;
     }
     if (typeof(todayNoRead) != 'undefined' && todayNoRead != null && todayNoRead > 0) {
         loopMsgTimes = 60000; //设置循环时间
         baihe.cookie.setCookie("ck_msgInfo_bzt_loopTime_" + bzt_loginUserId, loopMsgTimes, baihe.cookie.getExpDate(0, 0, 2), "/", "baihe.com");
         if (bzt_curUrl.indexOf("ms.baihe.com") > 0) {
             $("#noticeMsg").hide();
             return;
         }
         $("#todayNoRead").html(todayNoRead);
         setTodayNoReadList(msgInfo);
         if (bzt_headType > 0) {
             $(".message em").addClass('now');
             $("#noticeMsg").show();
         }else{
            $('#bhHeader .nav li:first a').addClass('active');
         }

         if (parseInt(todayNoRead) > 1) {
             $("#scrollPoint").textSlider({
                 line: 1,
                 speed: 500,
                 timer: 8000
             });
         }
         recordBhtg("baiheheadhc_1");
     } else {
         var firstTime = baihe.cookie.getCookie("ck_msgInfo_bzt_firstloopTime_" + bzt_loginUserId);
         if (new Date().getTime() - firstTime < 300 * 1000) {
             loopMsgTimes = 10000; //设置循环时间
         } else {
             loopMsgTimes = 60000; //设置循环时间
         }
         baihe.cookie.setCookie("ck_msgInfo_bzt_loopTime_" + bzt_loginUserId, loopMsgTimes, baihe.cookie.getExpDate(0, 0, 2), "/", "baihe.com");
         $("#noticeMsg").hide();
         if (bzt_headType < 0) {
             $('#bhHeader .nav li:first a').addClass('active');
         }
     }
 }

 //设置滚动消息
 function setTodayNoReadList(msgInfo) {
     var todayUsersList = eval('(' + msgInfo.todayUsers + ')');
     var todayUserids = msgInfo.todayUserids;
     var userArr = todayUserids.split(",");
     var userGender = msgInfo.gender == 0 ? "0" : "1";
     var todayuserId; //发信人id
     var todayuser; //发信人详细信息
     var todayusermainphoto; //发信人照片
     var todayuserage; //发信人年龄
     var todayusercity; //发信人所在省
     var todayuserpathid; //发信类型
     var todayNoticeType = ""; //匹配文案类型
     var todayNoReadHtml = '<ol>';
     var tmpHtml;
     for (var i = 0; i < userArr.length; i++) {
         todayuserId = userArr[i];
         if (todayUsersList[todayuserId]) {
             try {
                 todayuser = todayUsersList[todayuserId];
                 todayusermainphoto = todayuser.mainphoto;
                 todayuserage = todayuser.age;
                 todayusercity = todayuser.city;
                 todayuserpathid = todayuser.pathid + "";
                 if (todayuserpathid.endsWith("0001")) {
                     todayuserpathid = "0001";
                 } else if (todayuserpathid.endsWith("0002")) {
                     todayuserpathid = "0002";
                 } else if (todayuserpathid.endsWith("0003")) {
                     todayuserpathid = "0003";
                 } else {
                     todayuserpathid = "0004";
                 }
                 todayNoticeType = todayuserpathid + "|" + userGender;
             } catch (e) {
                 todayNoticeType = "0004|" + userGender;
             }
             tmpHtml = todayNewMsgTypeText[todayNoticeType].replace(new RegExp("\\$user.id", "gm"), todayuserId).replace(new RegExp("\\$user.mainPhoto", "gm"), todayusermainphoto).replace(new RegExp("\\$user.age", "gm"), todayuserage).replace(new RegExp("\\$user.city", "gm"), todayusercity);
             todayNoReadHtml += tmpHtml;
         }
     }
     todayNoReadHtml += '</ol>';
     $("#scrollPoint").html(todayNoReadHtml);
 }
 */
$.getJSON('//my.baihe.com/getinterlogin/baiHeIndex?jsonCallBack=?', function(data) {
	var $aHref=data.data.userID;
	//var $a=$('<a/>');
	//$a.attr('href','//profile1.baihe.com/?oppID='+ $aHref +'');
	//$a.appendTo($('#nickName2'));
	$('#nickName2').parent().attr('href','//profile1.baihe.com/?oppID='+ $aHref +'');
	$('#nickName2').text(data.data.nickname);
});

 function bzt_showMsgInfo(msgInfo, isFirstPage) {
     var _userName = msgInfo.userName;
     var _gender = msgInfo.gender;
     //cityCode = msgInfo.cityCode;
     var age = msgInfo.age;

	 //头部信息取值
	 $('#nickName2').text(_userName);
	 
     if (isFirstPage) {
         _userName = index_split(_userName, 10);
         $("#sy_UserName").html(_userName + "&nbsp;");
         $("#sy_newMsg").html(msgInfo.noReadAllMsg_u);
         $("#sy_CityName").html(msgInfo.cityChn);
         var p = msgInfo.mainPhoto;
         if (typeof(p) != 'undefined' && p != null) {
             p = p.replace("120_150", "36_45");
             var photohtml = "<img src=\"" + p + "\" id=\"sy_photo\" width=\"36\" height=\"45\"   />";
             $("#sy_profile_url").html(photohtml);
         }
         // if (cityCode && cityCode.length >= 2) {
         //     index_yjss_CountryId = cityCode.substring(0, 2);
         // }
         // if (cityCode && cityCode.length >= 3) {
         //     index_yjss_provinceId = cityCode.substring(0, 4);
         //     provinceCode = cityCode.substring(0, 4);
         //     setXiangqinResult();
         // }
     } else {

         if (_userName != null && _userName != "") {
             if (_userName.length > 7) {
                 _userName = _userName.substr(0, 7);
                 _userName += "...";
				 $('#nickName2').text(_userName);

             }
         }
         $("#bzt_userNameA").html(_userName);
         $("#bzt_userNameA").attr("href", "//profile1.baihe.com/?oppID=" + bzt_loginUserId);

         var newmsg_ = msgInfo.noReadAllMsg_u;
         $("#bzt_msgSpan").html(newmsg_); // 显示消息数

         var head_noread_bhtglink = "//bhtg.baihe.com/stat.html?ggCode=head-noread-msg_1#";
         var leftmenu_noread_bhtglink = "//bhtg.baihe.com/stat.html?ggCode=leftmenu-noread-msg_1#";
         if (typeof(newmsg_) != 'undefined' && newmsg_ > 0) {
             head_noread_bhtglink = "//bhtg.baihe.com/stat.html?ggCode=head-noread-msg_2#";
             leftmenu_noread_bhtglink = "//bhtg.baihe.com/stat.html?ggCode=leftmenu-noread-msg_2#";
         }
         $("#msgNum").html(newmsg_);
         if (typeof(newmsg_) != 'undefined' && newmsg_ > 0 && close_msg_pop_flag < 1 && show_msg_flag < 1) {
             var pop_msg = '<div class="userShowPop" id="userShowPop_id"><div class="showBg"></div><a href="//ms.baihe.com/?str=' + new Date().getTime() + '" target="_blank" class="text">你有新的未读消息哦~</a><a style="cursor:pointer;"  id="close_msgpop_id" class="close">关闭</a></div>';
             $("#mbLeft").append(pop_msg);
             show_msg_flag = 1;
             $("#close_msgpop_id").bind("click", function() {
                 $("#userShowPop_id").hide();
                 close_msg_pop_flag = 1;
                 show_msg_flag = 0;
             });
         } else {
             $('#userShowPop_id').remove();
         }
         var noread_link = $("#mymsg_id").attr("href");
         $("#mymsg_id").attr("href", head_noread_bhtglink + noread_link);

         $("#msgNumDetail").html(newmsg_);
         $("#msgNumDetail1").html(newmsg_);
         $("#msgNumTip").html(newmsg_);


         var noread_link1 = $("#msgNumDetail").attr("href");
         $("#msgNumDetail").attr("href", leftmenu_noread_bhtglink + noread_link1);

         var noread_link2 = $("#msgNumDetail1").attr("href");
         $("#msgNumDetail1").attr("href", leftmenu_noread_bhtglink + noread_link2);


         var noread_link3 = $("#msgNum").attr("href");
         $("#msgNum").attr("href", leftmenu_noread_bhtglink + noread_link3);

         if (newmsg_ >= 100) {
             $("#msgNum_new").html("99+");
         } else {
             $("#msgNum_new").html(newmsg_);
         }
         if (!isNaN(newmsg_) && parseInt(newmsg_) > 0) {
             $("#mymsg_id").removeClass("msggrayIcon");
             $("#mymsg_id").addClass("msgIcon");
             newmsg_all_inHead = newmsg_;
         } else {
             $("#mymsg_id").removeClass("msgIcon");
             $("#mymsg_id").addClass("msggrayIcon");
             newmsg_all_inHead = 0;
         }
         $("#bzt_systemMsgSpan").html(msgInfo.noReadSys);

         var bhtg_link = msgInfo.noReadSys > 0 ? "//bhtg.baihe.com/stat.html?ggCode=head-noread-sys_2#" : "//bhtg.baihe.com/stat.html?ggCode=head-noread-sys_1#";


         $("#bzt_systemMsglink").attr("href", bhtg_link + "//ms.baihe.com/notice/list?str=" + new Date().getTime());

         $("#bzt_smjhId").attr("href", "http://bhtg.baihe.com/stat.html?ggCode=htdh_34#http://realswap.baihe.com/index.jsp?str=" + new Date().getTime());

         if (newmsg_ > 0) {
             $('#menu_my_msg').html('我的消息<span class="msgfcwr">' + (newmsg_ > 99 ? '99+' : newmsg_) + '</span>');
         } else {
             $('#menu_my_msg .msgfcwr').remove();
         }

         $("#newNoticeNum").html(msgInfo.noReadSys);
         $("#newNoticeNum1").html(msgInfo.noReadSys);
         $("#newNoticeNumTip").html(msgInfo.noReadSys);

         // showHd();


         $("#_newUserMsgNumId").html(msgInfo.noReadCommMsg);
         var sysmsg_cnum = msgInfo.noReadAllMsg_u - msgInfo.noReadCommMsg;
         if (isNaN(sysmsg_cnum) || parseInt(sysmsg_cnum) < 0) {
             sysmsg_cnum = 0;
         }
         $("#_newGlyNumId").html(sysmsg_cnum);
         $("#_newNoticeNumId").html(msgInfo.noReadSys);
         if ((typeof(msgInfo.noReadAllMsg_u) != 'undefined' && msgInfo.noReadAllMsg_u > 0) || (typeof(msgInfo.noReadSys) != 'undefined' && msgInfo.noReadSys > 0)) {
             // $("#userNewMsgId").addClass("now2");
             showHadMsg = "Y";
         }

         // if(msgInfo.noReadAllMsg_u > 0){
         // $("#isNewMsgId").css("display","block");
         // }

         var msgcount_j = 0;
         if (sysmsg_cnum >= 100) {
             sysmsg_cnum = "99<span></span>";
         }
         if (typeof(msgInfo.noReadCommMsg) != 'undefined' && msgInfo.noReadCommMsg != null && msgInfo.noReadCommMsg != '') {
             msgcount_j = msgInfo.noReadCommMsg;
             if (!isNaN(msgcount_j)) {
                 if (parseInt(msgcount_j) >= 100) {
                     msgcount_j = "99<span></span>";
                 }
             }
         }
         $('.J_msgCount').html(msgcount_j);
         $('.J_sysCount').html(sysmsg_cnum);
         $('.J_msgCount').attr("href", "//ms.baihe.com/?str=" + new Date().getTime());
         $('.J_sysCount').attr("href", "//ms.baihe.com/?boxType=0&msgType=2&str=" + new Date().getTime());
     }
 }

 function bzt_showMsgInfoNew_loop() { // 相当于循环
     var isFpage = bzt_headType == 0 ? true : false;
     bzt_showMsgInfoNew(isFpage);
 }

 function bzt_showMsgInfoNew(isFirstPage) {

     clearInterval(loopMsgInfoTask);

     loopMsgTimes = baihe.cookie.getCookie("ck_msgInfo_bzt_loopTime_" + bzt_loginUserId);
     if (loopMsgTimes == null || loopMsgTimes == '') {
         loopMsgTimes = 10000; //第一次调用
     }
     var lastTime = baihe.cookie.getCookie("ck_msgInfo_bzt_lastloopTime_" + bzt_loginUserId);
     if (lastTime != null && lastTime != '') {
         if (new Date().getTime() - lastTime < loopMsgTimes) {
             msgInfoFromCookie = baihe.cookie.getCookie("ck_msgInfo_bzt_" + bzt_loginUserId);
             if (msgInfoFromCookie != "" && msgInfoFromCookie != null) {
                 msgInfoFromCookie = decodeURI(msgInfoFromCookie);
                 var msginfo_ = new Array();
                 var msgInfoFromCookie_arr = msgInfoFromCookie.split("|");
                 if (msgInfoFromCookie_arr != null && msgInfoFromCookie_arr.length > 0) {
                     for (var i = 0; i < msgInfoFromCookie_arr.length; i++) {
                         var mfc = msgInfoFromCookie_arr[i].split(":#");
                         msginfo_[mfc[0]] = mfc[1];
                     }
                 }
                 //设置搜索


                 var todayUsers = decodeURI(baihe.cookie.getCookie("ck_msgInfo_bzt_todayNoReadList_" + bzt_loginUserId));
                 var todayUserids = decodeURI(baihe.cookie.getCookie("ck_msgInfo_bzt_todayNoReadIdList_" + bzt_loginUserId));
                 if (todayUsers != null && todayUsers != '' && todayUserids != null && todayUserids != '') {
                     msginfo_['todayUsers'] = todayUsers;
                     msginfo_['todayUserids'] = todayUserids;
                 }
                 // var msgInfoFromCookie_arr = msgInfoFromCookie.split("|");
                 // msgInfo_bzt_ck =
                 // {"userName":msgInfoFromCookie_arr[2],"newMsg":msgInfoFromCookie_arr[0],"cityCode":msgInfoFromCookie_arr[1],"groupID":msgInfoFromCookie_arr[3]};
                 // bzt_showMsgInfo(msginfo_,isFirstPage);
                 // loopMsgInfoTask = setInterval(bzt_showMsgInfoNew_loop,loopMsgTimes);

                 // bzt_todayNewMsgInfo(msginfo_); // 是否显示当日未读新消息

                 bzt_showMsgInfo(msginfo_, isFirstPage);

                 loopMsgInfoTask = setInterval(bzt_showMsgInfoNew_loop, loopMsgTimes);
                 return;
             }
         }
     }

     baihe.cookie.getCookie("ck_msgInfo_bzt_lastloopTime_" + bzt_loginUserId, new Date().getTime(), baihe.cookie.getExpDate(0, 0, 1), "/", "baihe.com");
     var todayNoRead = baihe.cookie.getCookie("ck_msgInfo_bzt_todayNoRead_" + bzt_loginUserId);
     var getTodayFlag = 1;
     if (todayNoRead != "" && todayNoRead != null) {
         getTodayFlag = 0;
     }
     //  if(location.href.toString().indexOf("//msg.baihe.com") < 0){
     /*$.getJSON("//msgservice.baihe.com/common/m4h.action?jsoncallback=?&msgtype=4&getTodayFlag=" + getTodayFlag + "&userid=" + bzt_loginUserId + "&time=" + new Date().getTime(), function(msgInfo) {
         if (isFirstPage && baiduuser_boolean && typeof(msgInfo) == 'undefined') {
             location.href = "//u.baihe.com/?str=" + new Date().getTime();
             return;
         }
         if (typeof(msgInfo) == 'undefined' || msgInfo == null) {
             if (loadM4h > 0) {
                 setTimeout(function() {
                     bzt_showMsgInfoNew(isFirstPage);
                 }, 1000);
                 loadM4h--;
                 return;
             }
         }

         msgInfo_bzt_ck = msgInfo;
         cityCode = msgInfo_bzt_ck.cityCode;
         if (typeof(cityCode) != 'undefined' && cityCode != null) {
             provinceCode = cityCode.substring(0, 4);
         }
         // getTopDiffText(cityCode);
         // #########新消息标题提醒#########

         if (bzt_curUrl.indexOf("ms.baihe.com") >= 0) {
             changeEndScroll(msgInfo.noReadAllMsg_u);
         }

         var newMsg_status_ = baihe.cookie.getCookie("newMsg_status" + bzt_loginUserId);
         if (msgInfo.noReadAllMsg_u > 0) {
             if (newMsg_status_ == '') {
                 changeStartScroll(msgInfo.noReadAllMsg_u); // 相当于第一次进来并没有cookie
             } else {
                 var newMsg_status_arr = newMsg_status_.split(",");
                 if (newMsg_status_arr[0] == '1') {
                     if (newMsg_status_arr[1] < msgInfo.noReadAllMsg_u) {
                         changeStartScroll(msgInfo.noReadAllMsg_u);
                     } else {
                         changeEndScroll(msgInfo.noReadAllMsg_u);
                     }
                 } else {
                     changeStartScroll(msgInfo.noReadAllMsg_u);
                 }
             }
         }
         var firstTime = baihe.cookie.getCookie("ck_msgInfo_bzt_firstloopTime_" + bzt_loginUserId);
         if (firstTime == null || firstTime == '') {
             baihe.cookie.setCookie("ck_msgInfo_bzt_firstloopTime_" + bzt_loginUserId, new Date().getTime(), baihe.cookie.getExpDate(0, 0, 30), "/", "baihe.com");
         }
         // bzt_todayNewMsgInfo(msgInfo); // 是否显示当日未读新消息

         bzt_showMsgInfo(msgInfo, isFirstPage);

         loopMsgInfoTask = setInterval(bzt_showMsgInfoNew_loop, loopMsgTimes);

     });*/

 }

// function setRealAuthInfo() {
//
//     $.getJSON("//realauth.baihe.com/getNoSwapNum.action?jsoncallback=?", function(data) {
//         var userNoResultCount = data.noSwapNum; // not swap info
//         if (typeof(userNoResultCount) != 'undefined' && userNoResultCount != '' && !isNaN(userNoResultCount)) {
//             if (userNoResultCount > 99) {
//                 userNoResultCount = "99+";
//             }
//             if (userNoResultCount > 0 || userNoResultCount == '99+') {
//                 $("#leftmenu_smrz").html(userNoResultCount);
//                 $("#leftmenu_smrz").show();
//             }
//         }
//         if (data.noSwapNum == 0) { // 加v标class
//             $("#bzt_smjhId").removeClass();
//             $("#bzt_smjhId").addClass("relNamegrayIcon");
//         } else {
//             $("#bzt_smjhId").removeClass();
//             $("#bzt_smjhId").addClass("relNameIcon");
//         }
//         $("#bzt_smjhSpan").html(data.noSwapNum); // 实名交换d
//         $("#_newSmjhNumId").html(data.noSwapNum);
//         if (typeof(data.noSwapNum) != 'undefined' && data.noSwapNum > 0) {
//             // $("#userNewMsgId").addClass("now2");
//             showHadMsg = "Y";
//         }
//     });
//
// }


//闪信功能
//function readSx() {
//    var bzt_loginUserId=baihe.cookie.getCookie('GCUserID');
//    if (bzt_loginUserId > 0 && (location.href.indexOf("user.baihe.com") >= 0 || location.href.indexOf("u.baihe.com") >= 0)) {
//        $.getJSON("//msgservice.baihe.com/common/getNoReadFlash.action?jsoncallback=?&userid=" + bzt_loginUserId, function(data) {
//            if (data.nums > 0) {
//                location.href = "//ms.baihe.com/flash/flash";
//            }
//        });
//    }
//}
//
//readSx();
var loopMsgInfoTask;
 var close_msg_pop_flag = 0;
  var show_msg_flag = 0;
   var startScroll = 1;
    var falg_flash = 0;
     var loadM4h = 3;
     
      var title_ori = document.title; // 当前域名标题
		var bzt_curUrl = window.location.href;
		var bzt_headType = bzt_getHeadType(bzt_curUrl + "");
		var bzt_loginUserId = baihe.cookie.getCookie("GCUserID");
		var bzt_isMainUser = bzt_loginUserId > 0;
		var isLogonMainUser = bzt_isMainUser;
		$(document).ready(function() {
			 if (bzt_isMainUser) {
				var isFpage = bzt_headType == 0 ? true : false;
				bzt_showMsgInfoNew(isFpage);
//				setRealAuthInfo();
		}



	//头部会员级别显示
	$.getJSON("//my.baihe.com/getinterlogin/uinfoInLeft?jsonCallBack=?", function(data) {
		var $huiyuan=data.data.userIdentity;
		var $src='//images9.baihe.com/home/';
		var $link='//product.baihe.com/vipcrystal/';
		var $obj=$('.info_info').parent().prev().find('img');

//		if($huiyuan=='VIP_SUPER'){
//			$('.info_info').text('至尊会员');
//			$obj.attr('src',$src+'nav_zz.gif');
//			$obj.parent().css('cursor','default');
//			$obj.parent().click(function(event){
//				event.preventDefault();
//				$(this).css('cursor','default');
//			});
//			isMember=true;
//		}else if($huiyuan=='VIP_JSUPER'){
//			$('.info_info').text('金至尊');
//			$obj.attr('src',$src+'nav_jzz.gif');
//			$obj.parent().css('cursor','default');
//			$obj.parent().click(function(event){
//				event.preventDefault();
//				$(this).css('cursor','default');
//			});
//			isMember=true;
//		}

		if($huiyuan=='VIP_JSUPER_LovePull'){
			$('.info_info').text('相亲牵线');
			$obj.attr('src',$src+'nav_jzzqx.gif');
			$obj.parent().css('cursor','default');
			$obj.parent().click(function(event){
				event.preventDefault();
				$(this).css('cursor','default');
			});
			isMember=true;
		}else if($huiyuan=='VIP_CLY'){
			$('.info_info').text('水晶会员');
			$obj.attr('src',$src+'nav_sj.gif');
			$obj.parent().css('cursor','default');
			$obj.parent().click(function(event){
				event.preventDefault();
				$(this).css('cursor','default');
			});
			isMember=true;
		}else if($huiyuan==' '){
			$('.info_info').text('水晶会员'); //普通会员
			$obj.attr('src',$src+'nav_icon.gif');
			$obj.parent().attr('href',$link);
			$obj.parent().attr('event','3');
			$obj.parent().attr('spm','4.14.42.1009.2520');
			isMember=false;
		}else{
			$('.info_info').text('水晶会员'); //普通会员
			$obj.attr('src',$src+'nav_icon.gif');
			$obj.parent().attr('href',$link);
			$obj.parent().attr('event','3');
			$obj.parent().attr('spm','4.14.42.1009.2520');
			isMember=false;
		}
		//如果不是会员，改变 我的牵线 的链接
		if(!isMember){
			$('.myConnect').attr('href','//product.baihe.com/Vipjsupermatch');
		}
		
		
	})	
		
	
})

/*$.getJSON('http://my.baihe.com/getinterlogin/uinfoInLeft?jsonCallBack=?', function(data) {
        if ( data != '') {
			alert(data.userIdentity);
		}
})*/




