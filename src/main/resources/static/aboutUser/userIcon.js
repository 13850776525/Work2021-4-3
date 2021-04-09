
//////////////////////////////////////认证 图标 /////////////////////////////////////////////////////////
var htmlArr_Auth_star_Old = [
                            {
                                "typeInfo":"isCreditedByAuth",
                                "url":"//credit.baihe.com/autonym",
                                "validIcon":"//images.baihe.com/images/baihe_new/images/icon/list_icon_01.gif' title='已进行身份通认证",
                                "invalidIcon":"//images.baihe.com/images/baihe_new/images/icon/list_icon_gray_01.gif' title='未进行身份通认证"
                            },
                            {
                                "typeInfo":"isCreditedBySesame",
                                "url":"//credit.baihe.com/zhima",
                                "validIcon":"//images1.baihe.com/images/baihe_new/images/icon/list_icon_12.gif' title='已通过芝麻信用认证",
                                "invalidIcon":"//images1.baihe.com/images/baihe_new/images/icon/list_icon_gray_09.gif' title='未进行芝麻信用认证"
                            },
                            {
                                "typeInfo":"isCreditedByMobile",
                                "url":"//credit.baihe.com/mobile",
                                "validIcon":"//images.baihe.com/images/baihe_new/images/icon/list_icon_06.gif' title='已进行手机认证",
                                "invalidIcon":"//images.baihe.com/images/baihe_new/images/icon/list_icon_gray_06.gif' title='未进行手机认证"
                            }
];
var htmlArr_Auth_star = [
                     	{
                     		"typeInfo":"isCreditedByAuth",
                     		"url":"//credit.baihe.com/autonym",
                     		"validIcon":"//images6.baihe.com/icon/icon_09.gif' title='已进行身份通认证",
                     		"invalidIcon":"//images6.baihe.com/icon/icon_09g.gif' title='未进行身份通认证"
                     	},
                     	{
                            "typeInfo":"isCreditedBySesame",
                            "url":"//credit.baihe.com/zhima",
                            "validIcon":"//images6.baihe.com/icon/icon_00.gif' title='已通过芝麻信用认证",
                            "invalidIcon":"//images6.baihe.com/icon/icon_00g.gif' title='未进行芝麻信用认证"
                        },
                        {
                            "typeInfo":"isCreditedByMobile",
                            "url":"//credit.baihe.com/mobile",
                            "validIcon":"//images6.baihe.com/icon/icon_08.gif' title='已进行手机认证",
                            "invalidIcon":"//images6.baihe.com/icon/icon_08g.gif' title='未进行手机认证"
                        }
                     ];
/**
 * 显示 认证图标  
 * @param userID        用户id
 * @param showType   old 显示老版图标
 * @param scene    应用场景， profile 个人资料页，
 */
function showUserAttestationIcon(userID,showType,scene){
  	var icon = "";
 	var iconGray = "";
 	var allIcon = "";
	var url="//usericon.baihe.com/index/getUserAttestation?jsonCallBack=?&userID="+userID;
	$.ajax({
        type : "get",
        url : url,// 后台处理程序
        async: false,  //跨域调用 async参数不起作用，默认异步
        dataType : 'jsonp',// 返回数据格式
       // timeout : 1000,
        beforeSend : function(XMLHttpRequest) {
            // waitRequest();
        },// 传入之前等待
        success : function(data, textStatus) {
        	var userAttestation=data.data;
        	var nickName=userAttestation.nickName
        	var genderChn=userAttestation.genderChn;
        
        	if(userAttestation.isCreditedByIncome>0 || userAttestation.isCreditedByHousing>0){
        		userAttestation.isCreditedByIncome=1;
        	}
        	if(showType=="old"){
        		htmlArr_Auth_star=htmlArr_Auth_star_Old;
        	}        	
        	for(var i = 0 ; i < htmlArr_Auth_star.length ; i++){  
        		if( scene=="profile"){
        	       if(userAttestation[htmlArr_Auth_star[i].typeInfo]>0){
             			if(htmlArr_Auth_star[i].typeInfo=="isCreditedBySesame"){             			    	
             			  icon += "<span style=\"position:relative;\"><a href='javascript:void(0);'  onclick='sesameShow("+userID+")'><img src='"+htmlArr_Auth_star[i].validIcon+"' border='0px'/></a>";
             			  icon+="<div id=\"zhima1\" class=\"zmrz\" style=\"display:none\">";
             			  icon+="<a href=\"javascript:closeDiv('zhima1');\" class=\"closeA\">关闭</a>";
             			  icon+="<div class=\"txt\">";
             			  icon+="<img style=\"position:absolute; top:-8px; right:0px;\" src=\"//images6.baihe.com/icon/search_arrow06.gif\" width=\"13\" height=\"8\" />";
             			  icon+="<strong style=\"font-size:18px;\">想知道"+genderChn+"的芝麻分：<span class=\"orangeT\">？？？</strong><br />";
             			  icon+="<a href=\"javascript:showScore("+userID+");\" class=\"orangeT\">点击查看</a>（查看后对方也能看到您的分数）<br />";
             			  icon+="芝麻分由芝麻信用提供";
             			  icon+="</div>";
             			  icon+="<div class=\"link\">";
             			  icon+="<a  target='_blank'  href=\"https://xy.alipay.com/auth/whatszhima.htm\" class=\"blue\">什么是芝麻信用？</a>";
             			  icon+="</div>";
             			  icon+="</div>";
             			  icon+="<div id=\"zhima2\" class=\"zmrz\" style=\"display:none\" >";
             			  icon+="<a href=\"javascript:closeDiv('zhima2');\" class=\"closeA\">关闭</a>";
             			 icon+="<div class=\"txt\">";
             			icon+="<img style=\"position:absolute; top:-8px; right:0px;\" src=\"//images6.baihe.com/icon/search_arrow06.gif\" width=\"13\" height=\"8\" />";
             			icon+="<strong style=\"font-size:18px;\">"+genderChn+"的芝麻分：<span id=\"zhimafen\" class=\"orangeT\">00</span></strong><br />";
             			icon+="<br />";
             			icon+="芝麻分由芝麻信用提供";
             			icon+="</div>";
             			icon+="<div class=\"link\">";
             			icon+="<a target='_blank'  href=\"https://xy.alipay.com/auth/whatszhima.htm\" class=\"blue\">什么是芝麻信用？</a>";
             			icon+="</div>";
             			icon+="</div>"; 
             			icon+="<div id=\"zhima3\" class=\"zmrz\" style=\"display:none\" >";
             			icon+="<a href=\"javascript:closeDiv('zhima3');\" class=\"closeA\">关闭</a>";
             			icon+="<div class=\"txt\">";
             			icon+="<img style=\"position:absolute; top:-8px; right:0px;\" src=\"//images6.baihe.com/icon/search_arrow06.gif\" width=\"13\" height=\"8\" />";
             			icon+="您还未通过芝麻信用授权不能查看TA的芝麻分哦！<br />";
             			icon+="<a  target='_blank'  href=\"//credit.baihe.com/zhima\">现在就去进行芝麻信用授权</a>";
             			icon+="</div>";
             			icon+="<div class=\"link\">";
             			icon+="<a  target='_blank'  href=\"https://xy.alipay.com/auth/whatszhima.htm\" class=\"blue\">什么是芝麻信用？</a>";
             			icon+="</div>";
             			icon+="</div>";
             			icon+="<div id=\"zhima4\" class=\"zmrz\" style=\"display:none\">";
             			icon+="<a href=\"javascript:closeDiv('zhima4');showUserAttestationIcon("+userID+",'old','profile');\" class=\"closeA\">关闭</a>";
             			icon+="<div class=\"txt\">";
             			icon+="<img style=\"position:absolute; top:-8px; right:0px;\" src=\"//images6.baihe.com/icon/search_arrow06.gif\" width=\"13\" height=\"8\" />";
             			icon+="对方的芝麻信用授权已失效，不能查看芝麻分，您的芝麻分也不会被对方看到。<br />";
             			icon+="<a href=\"javascript:closeDiv('zhima4');showUserAttestationIcon("+userID+",'old','profile');\" class=\"orangeIcon\">确定</a>";
             			icon+="</div>";
             			icon+="<div class=\"link\">";
             			icon+="芝麻分由<a target='_blank'  href=\"https://xy.alipay.com/auth/whatszhima.htm\" >芝麻信用</a>提供，如有疑问请拨打芝麻信用客服热线：0571-88158055";
             			icon+="</div>";
             			icon+="</div>";
             			  icon +=   "</span>";
             			    
             			}else{             			
             				icon += "<span><img src='"+htmlArr_Auth_star[i].validIcon+"' border='0px'/></span>";
             			}		             			
             		}else{
         			    iconGray += "<span><img src='"+htmlArr_Auth_star[i].invalidIcon+"' border='0px'/></span>";
             		}     
        		}else{
        		if(userAttestation[htmlArr_Auth_star[i].typeInfo]>0){        			
        				 icon += "<img src='"+htmlArr_Auth_star[i].validIcon+"' border='0px'/>";     	        			
        		}else{
    				iconGray += "<img src='"+htmlArr_Auth_star[i].invalidIcon+"' border='0px'/>";
        		}     
        		}	
        	}
        	var star=Number(userAttestation.creditedNum);
        	//allIcon = "<img src='//images6.baihe.com/icon/star_level"+star+".gif' title='认证等级："+star+"级' />"+icon+iconGray;
        	allIcon = icon+iconGray;
        	$("#authIcon").html(allIcon);       

        },// 成功数据后处理
        complete : function(XMLHttpRequest, textStatus) {
        },// 完成数据处理后
        error : function() {
         
            // 请求出错处理
        }
    });
}
//用户列表 显示认证图标
function showUserListAttestationIcon(showType){
	var urlToCall = "//usericon.baihe.com/index/getUserListAttestation";
	var users = new Array();
	var starArr=$(".pic");

	if(starArr.length==0)return;

	starArr.each(function(i){ 
		var usreId = $(this).attr("uId:authIcon");
        if (usreId) users[users.length] = usreId;
	});
	
	$.ajax({
        type : "get",
        url : urlToCall+"?jsonCallBack=?&ids="+users.join(","),// 后台处理程序
        // async: false,跨域调用 async参数不起作用，默认异步
        dataType : 'jsonp',// 返回数据格式
       // timeout : 1000,
        beforeSend : function(XMLHttpRequest) {
            // waitRequest();
        },// 传入之前等待
        success : function(data, textStatus) {
        	var data=data.data;
        	if(showType=="old"){
        		htmlArr_Auth_star=htmlArr_Auth_star_Old;
        	}  
        
        	starArr.each(function(i){ 
				var usreId = $(this).attr("uId:authIcon");
				if(usreId && data[usreId]!=undefined && data[usreId]!=""){
					var userAttestation=data[usreId];
					if(userAttestation.isCreditedByIncome>0 || userAttestation.isCreditedByHousing>0){
		        		userAttestation.isCreditedByIncome=1;
		        	}
					var icon="";
					var iconGray="";
					var allIcon="";
		        	for(var i = 0 ; i < htmlArr_Auth_star.length ; i++){  
					
								if(userAttestation[htmlArr_Auth_star[i].typeInfo]>0){        			
			       				 icon += "<img src='"+htmlArr_Auth_star[i].validIcon+"' border='0px'/>";    
			       				
			       		   }else{
			   				iconGray += "<a target='_blank' href='"+htmlArr_Auth_star[i].url+"'><img src='"+htmlArr_Auth_star[i].invalidIcon+"' border='0px'/></a>";
			       	 	}     
					
		        	}
		        	var star=Number(userAttestation.creditedNum);
		        	allIcon = "<img src='//images6.baihe.com/icon/star_level"+star+".gif' title='认证等级："+star+"级' />"+icon+iconGray;
		        	 $(this).html(allIcon);
				
				}				
			});
        },
        complete : function(XMLHttpRequest, textStatus) {
        },// 完成数据处理后
        error : function() {
         
            // 请求出错处理
        }
    });
	
	
}

//////////////////////////////////////认证 图标 /////////////////////////////////////////////////////////

///////////////////////////////////// 身份  图标 ///////////////////////////////////////////////////////
function showUserTypeIcon(oldIcon){
	var urlToCall = "//usericon.baihe.com/index/getUserIdentityInfo";
	var users = new Array();
	var starArr=$(".typeIcon");

	if(starArr.length==0)return;

	starArr.each(function(i){ 
		var usreId = $(this).attr("uId:typeIcon");
        if (usreId) users[users.length] = usreId;
	});
	$.ajax({
        type : "get",
        url : urlToCall+"?jsonCallBack=?&ids="+users.join(","),// 后台处理程序
        // async: false,跨域调用 async参数不起作用，默认异步
        dataType : 'jsonp',// 返回数据格式
       // timeout : 1000,
        beforeSend : function(XMLHttpRequest) {
            // waitRequest();
        },// 传入之前等待
        success : function(data, textStatus) {
        	var data=data.data;
        	starArr.each(function(i){ 
				var usreId = $(this).attr("uId:typeIcon");
				if(usreId && data[usreId]!=undefined && data[usreId]!=""){
					var _html="";
					var blankUrl=data[usreId]["url"];
					var blankStr="";
					if(blankUrl.indexOf("http://")>0){
						 blankStr="target='_blank'";
					}
					if(oldIcon=="old"){
					  _html+="<a href='"+data[usreId]["url"]+"' "+blankStr+" ><img src='"+data[usreId]["imgOld"]+"' border='0' style='margin-bottom:-3px' /></a>";
					      
					}else{
						  _html+="<a href='"+data[usreId]["url"]+"' "+blankStr+" ><img src='"+data[usreId]["img"]+"' border='0' style='margin-bottom:-3px' /></a>";

					}
					  $(this).html(_html);
				}				
			});
        },
        complete : function(XMLHttpRequest, textStatus) {
        },// 完成数据处理后
        error : function() {
         
            // 请求出错处理
        }
    });

}
///////////////////////////////////// 身份  图标 ///////////////////////////////////////////////////////


////////////////芝麻认证////////////////////////////////////
var showSesameDivType=true;
var showSesameScoreType=true;
var active_user_info=false;
var passive_user_info=false;
function sesameShow(userID){
	if(showSesameDivType){
		showSesameDivType=false;
	var urlToCall="//credit.baihe.com/zhima/getAlipayTrustGrantInfo";
	$.ajax({
        type : "get",
        url : urlToCall+"?jsonCallBack=?&passive_user_id="+userID,// 后台处理程序
        // async: false,跨域调用 async参数不起作用，默认异步
        dataType : 'jsonp',// 返回数据格式
       // timeout : 1000,
        beforeSend : function(XMLHttpRequest) {
            // waitRequest();
        },// 传入之前等待
        success : function(data, textStatus) {
        	showSesameDivType=true;
            if(!data.active_user_is_login){
        		confirmPop("信息提示","您还未登录，马上去登录！",gotoLogin,"","确定","取消");
        		return false;
        	} 
            if(!data.is_different_gender){
            	confirmPop("信息提示","您好！只能查看异性的认证信息！","","","确定","取消");
        		return false;
            }
        	if(!data.active_user_through_zhima_grant){
        		$("#zhima3").show();
        		return false;
        	}
        	if(!data.passive_user_through_zhima_grant){        		
        		$("#zhima4").show();        		
        		return false;
        	}
        	active_user_info=data.active_user_info;
        	passive_user_info=data.passive_user_info;
        	$("#zhima1").show();
    		return false;
        	
        },
        complete : function(XMLHttpRequest, textStatus) {
        },// 完成数据处理后
        error : function() {
         
            // 请求出错处理
        }
    });
	}
}
function showScore(userID){
	if(showSesameScoreType){
		showSesameScoreType=false;
	var urlToCall="//credit.baihe.com/zhima/getAlipayTrustUserZmInfoOwnerScore";
	$.ajax({
        type : "get",
        url : urlToCall+"?jsonCallBack=?&passive_user_id="+userID,// 后台处理程序
        // async: false,跨域调用 async参数不起作用，默认异步
        dataType : 'jsonp',// 返回数据格式
        //timeout : 1000,
        beforeSend : function(XMLHttpRequest) {
            // waitRequest();
        },// 传入之前等待
        success : function(data, textStatus) {
        	showSesameScoreType=true;        	
        	$("#zhimafen").html(data.score);
        	$("#zhima2").show();
        	$("#zhima1").hide();
    		return false;
        	
        },
        complete : function(XMLHttpRequest, textStatus) {
        },// 完成数据处理后
        error : function() {
         
            // 请求出错处理
        }
    });
	}
}

function closeDiv(id){
	$('#'+id).hide();
}
function gotoLogin(){
	window.location.href="//my.baihe.com/";
}
/////////////////////////////////////////////////////

/////////////////////////////// 实名 V标 显示/////////////////////////////
function showUserID5Icon(isNew){
	var urlToCall = "//usericon.baihe.com/index/getUserID5";
	var users = new Array();
	var starArr=$(".ra_icon");
    var imgUrl = "//images6.baihe.com/icon/icon_01.gif";
    if ( 0 == arguments.length || !arguments[0] ) {
        imgUrl = "//images.baihe.com/images/baihe_new/images/icon/name_icon.gif";
    } 

	if(starArr.length==0)return;

	starArr.each(function(i){ 
		var usreId = $(this).attr("ra:userId");
        if (usreId) users[users.length] = usreId;
	});
	$.ajax({
        type : "get",
        url : urlToCall+"?jsonCallBack=?&ids="+users.join(","),// 后台处理程序
        // async: false,跨域调用 async参数不起作用，默认异步
        dataType : 'jsonp',// 返回数据格式
       // timeout : 1000,
        beforeSend : function(XMLHttpRequest) {
            // waitRequest();
        },// 传入之前等待
        success : function(data, textStatus) {
        	var data=data.data;
        	starArr.each(function(i){ 
				var usreId = $(this).attr("ra:userId");
				if(usreId && data[usreId]!=undefined && data[usreId]!=""){
					
					var _html="";
				     _html="<img alt=\"实名认证\" src=\""+imgUrl+"\" >";					
					  $(this).html(_html);
					
				}				
			});
        },
        complete : function(XMLHttpRequest, textStatus) {
        },// 完成数据处理后
        error : function() {
         
            // 请求出错处理
        }
    });

}


//////////////////////////////////////////

/////////////公用 函数///////////////////////////////
var confirmPopCallTime=1;
function confirmPop(title,msg,okCallBack,okCallBackPars,txtOk,txtCancel){

	var msgTitle=strLen(title)?title:"信息提示";
	var msgTxtOK=strLen(txtOk)?txtOk:"确 定";
	var msgTxtCancel=strLen(txtCancel)?txtCancel:"取 消";
	
	var _html="<div class=\"pop_layer often\">";
		_html += "	<a href=\"javascript:;\" id=\"closeBtn_1\" class=\"popClose\">关闭</a>";
		_html += "	<div class=\"popTit\">"+msgTitle+"</div>";
		_html += "	<div class=\"oftenCont\">"+msg+"</div>";
		_html += "	<div class=\"oftenIcon\">";
		_html += "		<a href=\"javascript:;\" class=\"orange\" id=\"submitBtn_"+(confirmPopCallTime++)+"\" >"+msgTxtOK+"</a>";
		_html += "		<a href=\"javascript:;\" class=\"grey\" id=\"closeBtn_2\" >"+msgTxtCancel+"</a>";
		_html += "	</div>";
		_html += "</div>";
					
	$.blockUI(_html);
	$("[id^=closeBtn_]").click(function(){$.unblockUI();});
	if(isFun(okCallBack)){		
		$("[id^=submitBtn_]").click(function(){$.unblockUI();okCallBack(okCallBackPars);});
	}else{
		$("[id^=submitBtn_]").click(function(){$.unblockUI();});
	}

}
function strLen(str){var returnVal=0;if(typeof(str)=="string")returnVal=str.length;return returnVal;}
function isFun(fun){ return typeof(fun)=="function";}



        
