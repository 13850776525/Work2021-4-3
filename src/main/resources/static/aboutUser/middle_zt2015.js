/**
 * Created by zhangzhao on 15-2-28.
 * 中通广告
 */
$(function(){
    //弹层
	if(!regSecurityPrompt){
		prevention();
	}else{
		popMainWin(userInfoJson);
	}
    /*popMainWin(userInfoJson);
    if(userInfoJson.usertype!=='VIP_SUPER' && userInfoJson.usertype!=='VIP_JSUPER'){
        至尊金至尊才显示
        popMainWin(userInfoJson);
    }*/
    //中通
    //zhongT(userInfoJson);//取消老的中通显示逻辑，function ZhongT()请查看本文件的svn log
    //底通
    //diTong(userInfoJson);
});


//---------------------------弹出层-------------------------------------
var specialPop=[
        
    {
        id:'promoteletter',
        cond:function(userInfoJson){
            var  flag= false;
            if( new Date().getTime()>1479866103000 && getCookieForPop('userapp_'+this.id+'_status'+userInfoJson.uid)<1){
                flag=true;
            }
            return flag;
        },
        preCallFun:function(){
        	sayHiAmount.init();
        },
        afterCallFun:function(){
            addCookieValForPop('userapp_'+this.id+'_status'+userInfoJson.uid);
        }
    },
    //特惠版
    {
        id:'precisionmarketing',
        cond:function(userInfoJson){
            var  flag= false;
            if( isShow==1 && getCookieForPop('userapp_'+this.id+'_status'+userInfoJson.uid)<1){
                flag=true;
            }
            return flag;
        },
        preCallFun:function(){
        	tehuiDiv();
        },
        afterCallFun:function(){
            addCookieValForPop('userapp_'+this.id+'_status'+userInfoJson.uid);
        }
    },
]
var commPop=[//-----这些广告暂时都停掉
    {//国美以后自动上线
        id:'shangwufc5',
        cond:function(userInfoJson){
            var flag = false;
            if((new Date().getTime()<1433728801000	 || new Date().getTime()>1434337202000) &&getCookieForPop('userapp_'+this.id+'_status'+userInfoJson.uid)<1){
                flag=false;
            }
            return flag;
        },
        htmlContent:'<div style="position:absolute; top:50%; left:50%; width:500px; height:485px; margin:-243px 0 0 -250px; text-align:left; background:url(//images1.baihe.com/images/baihe_new/images/pop_img/usrPopBg285.jpg) no-repeat;"><a style="position:absolute; top:8px; right:22px; display:block; width:38px; height:38px; text-indent:-999em; overflow:hidden;z-index:10;" href="javascript:$.unblockUI();">关闭</a><a style="display:block; width:500px; height:485px; text-indent:-999em; overflow:hidden; zoom:1;" href="//xact.baihe.com/html/201504/guomeijia/" target="_blank">“忠于感觉，爱不妥协”</a></div>',
        preCallFun:undefined,
        afterCallFun:function(){
            addCookieValForPop('userapp_'+this.id+'_status'+userInfoJson.uid);
        }
    },
    {//大圣归来6.1.10:00-6.15日11:00
        id:'shangwufc5',
        cond:function(userInfo){
            var flag = false;
            if((new Date().getTime()>1433728801000	 && new Date().getTime()<1434337202000)  &&getCookieForPop('userapp_'+this.id+'_status'+userInfoJson.uid)<1){
                flag=false;
            }
            return flag;
        },
        htmlContent:'<div style="position:absolute; top:50%; left:50%; width:550px; height:500px; margin:-250px 0 0 -275px; text-align:left; background:url(//images1.baihe.com/images/baihe_new/images/pop_img/usrPopBg292.jpg) no-repeat;"><a style="position:absolute; top:0px; right:0px; display:block; width:29px; height:29px; text-indent:-999em; overflow:hidden;z-index:10;" href="javascript:$.unblockUI();">关闭</a><a style="display:block; width:550px; height:500px; text-indent:-999em; overflow:hidden; zoom:1;" href="//xact.baihe.com/dsgl" target="_blank">大圣归来</a></div>',
        preCallFun:undefined,
        afterCallFun:function(){
            addCookieValForPop('userapp_'+this.id+'_status'+userInfoJson.uid);
        }
    },
    {//丘比特之箭弹层
        id:'shangwufc6',
        cond:function(userInfo){
            var flag = false;
            if(/*(new Date().getTime()>1433728801000   && new Date().getTime()<1434337202000)  &&*/getCookieForPop('userapp_'+this.id+'_status'+userInfoJson.uid)<1){
                flag=true;
            }
            return flag;
        },
        htmlContent:'<div style="position:absolute; top:50%; left:50%; width:436px; height:400px; margin:-200px 0 0 -218px; padding:0px; background:url(//static6.baihe.com/mybaihe/cupid.png) no-repeat;"><a style="position:absolute; top:8px; right:34px; display:block; width:34px; height:34px; text-indent:-999em; overflow:hidden;z-index:10;" href="javascript:baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.491.2573.6634\'});$.unblockUI()">关闭</a><a href="//ad.baihe.com/cupidarrow/index" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.491.2572.6633\'});$.unblockUI();" target="_blank" style="display:block; width:436px; height:400px; text-indent:-9999px; overflow:hidden;">丘比特</a>',
        preCallFun:undefined,
        afterCallFun:function(){
            addCookieValForPop('userapp_'+this.id+'_status'+userInfoJson.uid);
        }
    },
    {//红娘牵线弹层
        id:'shangwufc5',
        cond:function(userInfo){
            var flag = false;
            if(/*(new Date().getTime()>1433728801000   && new Date().getTime()<1434337202000)  &&*/getCookieForPop('userapp_'+this.id+'_status'+userInfoJson.uid)<1){
                flag=true;
            }
            return flag;
        },
        htmlContent:'<div style="position:absolute; top:50%; left:50%; width:604px; height:420px; margin:-210px 0 0 -302px; text-align:left; background:url(//images1.baihe.com/images/baihe_new/images/pop_img/usrPopBg85.png) no-repeat;"><a style=" position:absolute; top:10px; right:10px; display:block; width:36px; height:36px; text-indent:-999em; overflow:hidden;" href="javascript:baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.491.1673.4183\'});$.unblockUI()">关闭</a><a style="display:block; width:604px; height:420px; text-indent:-999em; overflow:hidden; zoom:1;" target="_blank" href="//matchmaker.baihe.com/service/web" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.491.1672.4182\'});baihe.cookie.setCookie(\'orderSource\', \'10010201\',\'\',\'\',\'.baihe.com\');$.unblockUI();">红娘牵线</a></div>',
        preCallFun:undefined,
        afterCallFun:function(){
            addCookieValForPop('userapp_'+this.id+'_status'+userInfoJson.uid);
        }
    }
    
];
//---------------------------弹层结束-------------------------------------

//---------------------------中通-------------------------------------

//---------------------------中通结束-------------------------------------

//---------------------------底通-------------------------------------
/*function diTong(userInfoJson){
 if(getCookieForPop('userApp_diT'+userInfoJson.uid)==null){
 //1线上红豆广告
 var html='<a href="javascript:;"><img src="//images3.baihe.com/images/baihe_new/images/mybaihe_v1/cry20150207.jpg" alt="" /></a>';
 $('.adv90').html(html);
 newCookieForPop('userApp_diT'+userInfoJson.uid,1);
 }else if(getCookieForPop('userApp_diT'+userInfoJson.uid)=='1'){
 //2爱情顾问招聘
 var html='<a href="javascript:;"><img src="//images3.baihe.com/images/baihe_new/images/mybaihe_v1/cry20140228_8.jpg" alt="" /></a>';
 $('.adv90').html(html);
 newCookieForPop('userApp_diT'+userInfoJson.uid,2);
 }else if(getCookieForPop('userApp_diT'+userInfoJson.uid)=='2'){
 //3百合相亲广告
 var html='<a href="javascript:;"><img src="//images3.baihe.com/images/baihe_new/images/mybaihe_v1/cry20150207.jpg" alt="" /></a>';
 $('.adv90').html(html);
 newCookieForPop('userApp_diT'+userInfoJson.uid,3);
 }else if(getCookieForPop('userApp_diT'+userInfoJson.uid)=='3'){
 //4商务广告-押镖
 var html='<a href="javascript:;"><img src="//images3.baihe.com/images/baihe_new/images/mybaihe_v1/cry20140228_8.jpg" alt="" /></a>';
 $('.adv90').html(html);
 newCookieForPop('userApp_diT'+userInfoJson.uid,4);
 }else if(getCookieForPop('userApp_diT'+userInfoJson.uid)=='4'){
 //5商务广告-为爱投资
 var html='<a href="javascript:;"><img src="//images3.baihe.com/images/baihe_new/images/mybaihe_v1/cry20150207.jpg" alt="" /></a>';
 $('.adv90').html(html);
 newCookieForPop('userApp_diT'+userInfoJson.uid,5);
 }else if(getCookieForPop('userApp_diT'+userInfoJson.uid)=='5'){
 //6看信会员广告
 var html='<a href="javascript:;"><img src="//images3.baihe.com/images/baihe_new/images/mybaihe_v1/cry20140228_8.jpg" alt="" /></a>';
 $('.adv90').html(html);
 newCookieForPop('userApp_diT'+userInfoJson.uid,null);
 }else{
 //1线上红豆广告
 var html='<a href="javascript:;"><img src="//images3.baihe.com/images/baihe_new/images/mybaihe_v1/cry20150207.jpg" alt="" /></a>';
 $('.adv90').html(html);
 newCookieForPop('userApp_diT'+userInfoJson.uid,1);
 }
 }*/
//---------------------------底通end-------------------------------------

//弹出
function popMainWin(userInfoJson){
    var popContent = getPopContent(specialPop.concat(commPop),userInfoJson);
    if(popContent){
        popContent.preCallFun&&popContent.preCallFun();
        popContent.htmlContent && $.blockUI(popContent.htmlContent);
        popContent.afterCallFun && popContent.afterCallFun();
    }
}

function getPopContent(targetList,userInfoJson){
    for(var i=0;i<targetList.length;i++){
        if(typeof(targetList[i]['cond'])=='function'){
            if(targetList[i]['cond'](userInfoJson))return targetList[i];
        }
    }
}

function prevention(){
	var dhtml = '';
	dhtml +='<div class="prevention">';
	dhtml +='	<a href="javascript:;" class="close" id="close_box_fp">关闭</a>';
	dhtml +='	<a href="//safe.baihe.com/html/1/n-1.html" target="_blank" class="txt">查看骗子骗人全过程</a>';
	dhtml +='	<a href="javascript:;" class="icon" id="close_box_fp1">我知道了</a>';
	dhtml +='</div>';
				
	$.blockUI({
		message:dhtml
	});
			
	$("[id^=close_box_]").click(function(){
		$.unblockUI();
		popMainWin(userInfoJson);
	});
}

function newCookieForPop(id,value){
    var exp = new Date();
    exp.setTime(exp.getTime() + 15*60*60*1000);
    document.cookie = id + "=" + value + ";expires=" + exp.toGMTString();
}

function getCookieForPop(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    return arr != null ? unescape(arr[2]) : null;
}

function addCookieValForPop(name){
    var cookieval=getCookieForPop(name);
    if(cookieval==null){
        newCookieForPop(name,1);
    }else{
        newCookieForPop(name,parseInt(cookieval)+1);
    }
}

//特惠版 2016.12.5

var interval = 1000; 
var now = new Date(); 
var nowMon=now.getMonth()+1;
var nowData=now.getDate()+1;

function ShowCountDown(year,month,day) 
{
	var endDate = parseInt(expiration)*1000; 
	var newd =  new Date(); 
	var leftTime=endDate-newd.getTime(); 
	var leftsecond = parseInt(leftTime/1000); 
	var day1=Math.floor(leftsecond/(60*60*24)); 
	var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
	if(hour<10){
		hour = "0"+hour;
	}
	var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
	
	if(minute<10){
		minute = "0"+minute;
	}
	
	var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
	if(second<10){
		second = "0"+second;
	}
	$("#showtime .hour").html(hour);
	$("#showtime .minute").html(minute);
	$("#showtime .second").html(second);
} 

function tehuiDiv(){
	var dHtml = '';
	dHtml+= '<div style="position: absolute; top:50%; left:50%; width:475px; height:454px; margin:-232px 0 0 -317px; text-align:center; background:url(//images8.baihe.com/pop/discount.png) no-repeat; overflow:hidden; zoom:1; ">';
		dHtml+= '<a id="close_box_1" href="javascript:;" style=" position:absolute; top:40px; right:43px; display:block; width:20px; height:20px; text-indent:-9999px; overflow:hidden;">关闭</a>';
			dHtml+= '<div style="height:144px; padding:133px 0 0 0; font:14px/24px \'Microsoft Yahei\'; color:#fff; overflow:hidden;">';
			dHtml+= '<div id="showtime" style="width:295px; height:60px; margin:0 auto;  text-align:center; font:45px/48px Verdana; color:#000;">';
				dHtml+= '<div class="hour" style="float:left; width:86px;"></div>';
					dHtml+= '<div class="minute" style="float:left; width:86px; margin-left:18px;"></div>';
						dHtml+= '<div class="second" style="float:left; width:86px; margin-left:18px;"></div>';
							dHtml+= '</div>';
								dHtml+= '<div style="margin:0px; padding:10px 0;">哇哦，恭喜你获得<span style="color:#fcff00">超低价购脱单神器</span>机会！</div>';
									dHtml+= '<div style="margin:0px; font-size:20px;">买到就赚到！错过不再有！</div>';
										dHtml+= '</div>';
											dHtml+= '<div style="height:91px;">';
		if(showM==18){
	dHtml+= '<img src="//images8.baihe.com/pop/discount_18.jpg" alt="" />';
		}else if(showM==30){
		dHtml+= '<img src="//images8.baihe.com/pop/discount_30.jpg" alt="" />';
		}else if(showM==69){		
		dHtml+= '<img src="//images8.baihe.com/pop/discount_69.jpg" alt="" />';
		}
			dHtml+= '</div>';
				dHtml+= '<a id="open_box_1" target="_blank" href="//product.baihe.com/Precisionmarketing/placeOrder" style="display:block; width:215px; height:52px; margin:0 auto; text-indent:-9999px; overflow:hidden; ">立即开通</a>';
					dHtml+= '</div>';
	
	$.blockUI({
		message:dHtml
	});
	baihe.bhtongji.tongji({
		'event': '3',
		'spm': spmArr.showU
	});
	$("#open_box_1").click(function(){
		var exp = new Date();
	    exp.setTime(exp.getTime() + 15*60*60*1000);
	    document.cookie = "orderSource" + "=" + "10150102" + ";expires=" + exp.toGMTString()+";path=/;domain=.baihe.com";
		
		baihe.bhtongji.tongji({
			'event': '3',
			'spm': spmArr.open
		});
		$.unblockUI();
	});
	$("[id^=close_box_]").click(function(){
		baihe.bhtongji.tongji({
			'event': '3',
			'spm': spmArr.close
		});
		$.unblockUI();
	});
	
	window.setInterval(function(){ShowCountDown((new Date).getFullYear(),nowMon,nowData);}, interval); 

}


