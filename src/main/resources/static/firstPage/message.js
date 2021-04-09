/*
*
*	页面一加载调用css
*
*/
var oLink_1=$('<link/>');
oLink_1.attr({
  href: '//static3.baihe.com/pop/msgLayer.css',
  rel: 'stylesheet',
  type: 'text/css'});

var oLink_2=$('<link/>');
oLink_2.attr({
  href: '//static3.baihe.com/mCustomScrollbar.css',
  rel: 'stylesheet',
  type: 'text/css'});

$('head').append(oLink_2);	
$('head').append(oLink_1);

var oLink_3=$('<link/>');
oLink_3.attr({
  href: '//static3.baihe.com/pop/pop_search.css',
  rel: 'stylesheet',
  type: 'text/css'});
$('head').append(oLink_3);
	
var head= document.getElementsByTagName('head')[0]; 
var script1= document.createElement('script'); 
script1.type= 'text/javascript'; 
script1.src= '//static4.baihe.com/msg/jquery.mCustomScrollbar.concat.min.js'; 
head.appendChild(script1);

var script2= document.createElement('script'); 
script2.type= 'text/javascript'; 
script2.src= '//static4.baihe.com/3rd-lib/jquery.select-1.3.6.js'; 
head.appendChild(script2);

var script3= document.createElement('script'); 
script3.type= 'text/javascript'; 
script3.src= '//static4.baihe.com/3rd-lib/district.js'; 
head.appendChild(script3);
var oS_3=$('<link/>');
oS_3.attr({
  href: '//static3.baihe.com/formStyle.css',
  rel: 'stylesheet',
  type: 'text/css'});
$('head').append(oS_3);
var zhihu_timer=null;
var iZhiHu=false;
var hasLogin = document.cookie.search('AuthCookie') >= 0;
var $timer=null;
function sendMessage($userId,pathID){
	$.getJSON('//msg.baihe.com/owner/api/getIsShowBlocking?jsonCallBack=?',{
		toUserID:$userId},function(data){
			if(data.code==-802){
				msgBlock();
				return;
			}else if(data.code==-804){
				baihe.bhtongji.tongji({
					'event': '3',
					'spm': '4.28.789.419.7121'
				});	
				msgBlock_yidi();				
				return;
			}else{
					head.appendChild(script1);
					if(hasLogin){
						
						//clearInterval($timer);
						var load=$('<div class="load" id="loading" style="display:block;">信息加载中...</div>');
						NoticeContent($userId,pathID);
						$(".content").mCustomScrollbar({
							theme:"minimal-dark",
							callbacks:{ 
								onTotalScrollBack:function(){
									//当达到顶端为0的时候执行回调
									$('.content').prepend(load);
									if(this.mcs.draggerTop==0){

										//获取时间参数，如果是当前时间则加上年份
										var $time=$('.msgLayer .msgCont .time').first().text();
										if($time.length<8){
											$time=new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()+' '+$time+':'+new Date().getSeconds();
										}

										//向上拉取获取历史记录 prepend到页面上
										if($('#mCSB_1_container').attr('session_id')){
											$.ajax({
												type: "post",
												url: "//msg.baihe.com/owner/api/getMessageListByTime?sessionID="+$('#mCSB_1_container').attr('session_id')+"&start="+$time+"&size=10&jsonCallBack=?",
												async: true,
												dataType: "jsonp",
												success: function(data) {
													if(data.code==200){	
														if(data.data.length>0){
															//加载出现loading
															$('#loading').show();
															for(var i=data.data.length;i--;i>0){
																//对方userID $('.manPic dl').find('dt').eq(0).text().substring(3)
																if(data.data[i].userID==baihe.cookie.getCookie('userID')){
																	var my_word='<div class="two"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="my"><img src="'+$('.content').attr('sImg')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_right"></div><span>'+AnalyticEmotion($(data.data).eq(i)[0].content)+'</span></div></div></div></div>';
																	var my_Voice='<div class="two"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="my"><img src="'+$('.content').attr('sImg')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_left"></div><img src="//images9.baihe.com/msg/voice.png" alt="声音" class="voice" />这是一条语音消息</div><div class="exp">请下载<a href="//shouji.baihe.com/" target="_blank" class="org">百合婚恋客户端</a>使用</div><div class="clear"></div></div></div><div class="clear"></div></div>';
												
																	if($(data.data).eq(i)[0].type==1){  //文字
																		$('#mCSB_1_container').prepend(my_word);
																	}else if($(data.data).eq(i)[0].type==2){ //声音
																		$('#mCSB_1_container').prepend(my_Voice);
																	}else if($(data.data).eq(i)[0].type==6){ //礼物
																		var $json = JSON.parse(data.data[i].content);
																		var my_present='<div class="two"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="my"><img src="'+$('.content').attr('sImg')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont" style="width:300px;"><div class="arrow_left"></div>'+$json.gift_name+'<div class="gift"><img src="'+$json.gift_url+'" width="72" align="left"><p>"'+$json.gift_description+'"</p></div></div></div></div><div class="clear"></div></div>';

																		$('#mCSB_1_container').prepend(my_present);	
																	}else if($(data.data).eq(i)[0].type==8){ //下班见
																		var my_afterWork='<div class="two"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="my"><img src="'+$('.content').attr('sImg')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_right"></div><span><a href="'+data.data[i].content+'" target="_blank" class="link">'+data.data[i].content+'</a></span></div></div></div></div>';
																		$('#mCSB_1_container').append(my_afterWork);	
																		
																	}else if($(data.data).eq(i)[0].type==10){ //照片点赞
																		var my_photo='<div class="two"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="my"><img src="'+$('.content').attr('sImg')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_right"></div><span><img class="zan" src='+data.data[i].content+' width="100"/></span></div></div></div></div>';
																		
																		$('#mCSB_1_container').append(my_photo);
																		$('.infoCont .zan').attr('title','我赞了你的照片，快去看看吧！');
																		
																	}
																}else{
																	var ta_word='<div class="one"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="other"><img src="'+$('#mCSB_1_container').attr('imgSrc')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_left"></div><span>'+AnalyticEmotion($(data.data).eq(i)[0].content)+'</span></div></div></div><div class="clear"></div></div>';			
																	var ta_Voice='<div class="one"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="other"><img src="'+$('#mCSB_1_container').attr('imgSrc')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_left"></div><img src="//images9.baihe.com/msg/voice.png" alt="声音" class="voice" />这是一条语音消息</div><div class="exp">请下载<a href="//shouji.baihe.com/" target="_blank" class="org">百合婚恋客户端</a>使用</div><div class="clear"></div></div></div><div class="clear"></div></div>';
																	if($(data.data).eq(i)[0].type==1){  //文字
																		$('#mCSB_1_container').prepend(ta_word);
																	}else if($(data.data).eq(i)[0].type==2){ //声音
																		$('#mCSB_1_container').prepend(ta_Voice);
																	}else if($(data.data).eq(i)[0].type==6){ //礼物
																		var $json = JSON.parse(data.data[i].content);
																		var ta_present='<div class="one"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="other"><img src="'+$('#mCSB_1_container').attr('imgSrc')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont" style="width:300px;"><div class="arrow_left"></div>'+$json.gift_name+'<div class="gift"><img src="'+$json.gift_url+'" width="72" align="left"><p>"'+$json.gift_description+'"</p></div></div></div></div><div class="clear"></div></div>';
													
																		$('#mCSB_1_container').prepend(ta_present);	
																	}else if($(data.data).eq(i)[0].type==8){ //下班见
																		var ta_afterWork='<div class="one"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="other"><img src="'+$('#mCSB_1_container').attr('imgSrc')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_right"></div><span><a href="'+data.data[i].content+'" target="_blank" class="link">'+data.data[i].content+'</a></span></div></div></div></div>';
																		$('#mCSB_1_container').append(ta_afterWork);	
																		
																	}else if($(data.data).eq(i)[0].type==10){ //照片点赞
																		var ta_photo='<div class="one"><div class="time"><span>'+iTime($(data.data).eq(i)[0].createTime)+'</span></div><div class="clear"></div><div class="other"><img src="'+$('#mCSB_1_container').attr('imgSrc')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_right"></div><span><img class="zan" src='+data.data[i].content+' width="100"/></span></div></div></div></div>';
																		$('#mCSB_1_container').append(ta_photo);
																		$('.infoCont .zan').attr('title',$('.msgLayer .red').text()+'赞了你的照片，快去看看吧！');
																		
																	}
																}
																$('#mCSB_1_container').attr('session_id',data.data[0].sessionID);
																$('#loading').hide();
																//加载完之后固定位置
																$('#mCSB_1_container').css('top',-$('#mCSB_1_container').children().eq(0).height()*10);
															}
														}else{
															//加载出现loading
															$('#loading').hide();
														}	
													}
												}
											});
										}
															
									}
								}
								
							}
						});
						

					}else{
						baihe.block({
							title: '提示',
							text: '请先登录！'
						});
						return;
					}
			}
	});
	//5秒自动刷新；
	/*var arrMsg2=[];
	
	$timer=setInterval(function(){
		var $time=new Date();
		var iY=$time.getFullYear();
		var iM=$time.getMonth()+1;
		var iD=$time.getDate();
		var iH=$time.getHours();
		var iM=$time.getMinutes();
		var iS=$time.getSeconds();
		var $time2=iY+'-'+iM+'-'+iD+' '+iH+':'+iM+':'+iS;

		pullNotice('append',$time2);
		
	},5000);*/
		
}
/*
*	阻断内容
*/
//-----发信阻断
function msgBlock(){
	baihe.bhtongji.tongji({
		'event': '3',
		'spm': '4.28.606.262.5552'
	});
	var dHtml = '';
		dHtml += '<div class="msgBlock">';
		dHtml += '	<a href="javascript:;" class="close" id="close_box_6">关闭</a>';
		dHtml += '	<ul>';
		dHtml += '		<li><a href="//product.baihe.com/" target="_blank" id="close_box_2">购买服务</a></li>';
		dHtml += '		<li><a href="//credit.baihe.com/autonym" target="_blank" id="close_box_3">实名认证</a></li>';
		dHtml += '	</ul>';
		dHtml += '</div>';		
		
		$.blockUI({
			message:dHtml
		});
	
		$("[id^=close_box_]").click(function(){
			$.unblockUI();
		});
		$('#close_box_6').click(function(){
			baihe.bhtongji.tongji({
				'event': '3',
				'spm': '4.28.606.420.5553'
			});
		});

		$('#close_box_2').click(function(){
			baihe.bhtongji.tongji({
				'event': '3',
				'spm': '4.28.606.2052.5554'
			});
		});
		$('#close_box_3').click(function(){
			baihe.bhtongji.tongji({
				'event': '3',
				'spm': '4.28.606.2053.5555'
			});
		});
		$('#close_box_4').click(function(){
			baihe.bhtongji.tongji({
				'event': '3',
				'spm': '4.28.606.1820.5556'
			});
		});
}
//-----异地阻断
function msgBlock_yidi(){
	var dHtml = '';
		dHtml += '<div style="position:absolute; top:50%; left:50%; width:463px; height:186px; margin:-190px 0 0 -231px; padding-top:220px; background:url(//images8.baihe.com/pop/pic/zdfcA.png) no-repeat;">';
		dHtml += '	<a style="position:absolute; top:0px; right:4px; display:block; width:34px; height:34px; text-indent:-999em; overflow:hidden;z-index:10;" event="3" spm="4.28.789.420.7123" href="#" id="close_box_5">关闭</a>';
		dHtml += '	<div style="height:100px; font:16px/44px Microsoft Yahei; color:#747474; text-align:center;">';
		dHtml += '		<strong style="color:#fc6e27; font-size:22px;">想给非同城会员发信？</strong><br />对方是非同城会员，需开通水晶会员即可与对方无限畅聊';
		dHtml += '	</div>';
		dHtml += '	<a href="//product.baihe.com" onclick="baihe.cookie.setCookie(\'orderSource\', \'10090208\',\'\',\'\',\'.baihe.com\');" event="3" spm="4.28.789.1232.7122" target="_blank" style="display:block; width:256px; height:46px; margin:0 auto; font:20px/44px Microsoft Yahei; color:#fff; text-decoration:none; text-align:center; background:#fc6e27; border-radius:5px; overflow:hidden;">立即开通</a>';
		dHtml += '</div>';
		
		$.blockUI({
			message:dHtml
		});
	
		$("[id^=close_box_]").click(function(){
			$.unblockUI();
		});
}
/*
*	消息弹框内容
*/
var myMobile=false;
function NoticeContent($userId,pathID){
	
	var dhtml='';
		dhtml+='<div class="msgLayer">';
		dhtml+='	<a href="javascript:;" class="close" id="close_box_1">关闭</a>';
		dhtml+='	<div class="msgLeft">';
		dhtml+='		<div class="arrow-left"></div>';
		dhtml+='		<div class="pic"><img src="" alt="" /><div class="num"></div></div>';
		dhtml+='		<div class="clear"></div>';
		dhtml+='		<h3></h3>';
		dhtml+='		<center>';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_01.gif" title="实名认证" >';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_08.gif" title="已进行手机认证">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_02.gif" title="已通过芝麻信用认证" border="0px">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_21.gif" title="高级会员">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_18.gif" title="水晶会员">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_19.gif" title="金至尊">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_20.gif" title="至尊">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_23.gif" title="金至尊牵线">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_05.gif" title="已进行身份认证">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_04.gif" title="已进行学历认证">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_06.gif" title="已进行财产认证">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_07.gif" title="已进行视频认证">';
		dhtml+='				<img src="//images6.baihe.com/icon/star_level1.gif" title="认证等级">';
		dhtml+='				<img src="//images6.baihe.com/icon/icon_03.gif" title="已进行生育认证">';
		dhtml+='		</center>';
		dhtml+='		<div class="focusing">';
		dhtml+='			<a href="javascript:;" class="add"><em></em>加关注</a>';
		dhtml+='			<a href="javascript:;" style="display:none;" class="cancel"><em></em>取消关注</a>';
		dhtml+='		</div>';
		dhtml+='		<p>共同喜好</p>';
		dhtml+='		<div class="msgLike">';
		dhtml+='			<em class="topA"></em>';
		dhtml+='			<em class="topB"></em>';
		dhtml+='			<em class="topC"></em>';
		dhtml+='			<em class="topD"></em>';
		dhtml+='			<em class="topE"></em>';
		dhtml+='		</div>';
		dhtml+='	</div>';
		dhtml+='	<div class="msgRight " >';		
		dhtml+='		<div class="prompt">提示：对方没通过实名认证，请注意财产安全！</div>';
		dhtml+='		<div class="msgCont content" id="content-m">';
		dhtml+='		</div>';
		dhtml+='		<div class="msgApply">';
		dhtml+='			<textarea name="" cols="" rows="" id="send_input" maxlength="1000">请输入文字</textarea>';
		dhtml+='			<div class="txt">';
		dhtml+='				<div class="txtRight" >';
		dhtml+='					<div class="love" style="float:left;padding-top:4px;position:relative">';
		//dhtml+='						<label class="cbd"><input name="" type="checkbox" value="" />爱情直呼</label>';
		dhtml+='						<div class="explain ex_send" style="display:none;"><em></em>同时发送通知到 用户昵称 手机上</div>';
		dhtml+='						<div class="explain ex_tips" style="display:none;"><em></em><a href="//product.baihe.com/" class="orangeT">发送爱情直呼，快开通水晶会员吧！</a></div>';
		dhtml+='					</div>';
		dhtml+='					<div class="num">您还可输入<span class="word_length">1000</span>字</div>';
		dhtml+='					<a href="javascript:;" id="send">发送</a>';
		dhtml+='				</div>';
		dhtml+='			<div class="expression">';
		dhtml+='				<div class="expCont" style="z-index:9;display:none;">';
		dhtml+='					<a href="javascript:;" class="face01" title="惊恐">惊恐</a>';
		dhtml+='					<a href="javascript:;" class="face02" title="疑问">疑问</a>';
		dhtml+='					<a href="javascript:;" class="face03" title="抓狂">抓狂</a>';
		dhtml+='					<a href="javascript:;" class="face04" title="惊讶">惊讶</a>';
		dhtml+='					<a href="javascript:;" class="face05" title="傲慢">傲慢</a>';
		dhtml+='					<a href="javascript:;" class="face06" title="流口水">流口水</a>';
		dhtml+='					<a href="javascript:;" class="face07" title="偷笑">偷笑</a>';
		dhtml+='					<a href="javascript:;" class="face08" title="耍酷">耍酷</a>';
		dhtml+='					<a href="javascript:;" class="face09" title="糗">糗</a>';
		dhtml+='					<a href="javascript:;" class="face10" title="调皮">调皮</a>';
		dhtml+='					<a href="javascript:;" class="face11" title="害羞">害羞</a>';
		dhtml+='					<a href="javascript:;" class="face12" title="委屈">委屈</a>';
		dhtml+='					<a href="javascript:;" class="face13" title="大笑">大笑</a>';
		dhtml+='					<a href="javascript:;" class="face14" title="心">心</a>';
		dhtml+='					<a href="javascript:;" class="face15" title="微笑">微笑</a>';
		dhtml+='					<a href="javascript:;" class="face16" title="愤怒">愤怒</a>';
		dhtml+='					<a href="javascript:;" class="face17" title="晕">晕</a>';
		dhtml+='					<a href="javascript:;" class="face18" title="No">No</a>';
		dhtml+='					<a href="javascript:;" class="face19" title="无语">无语</a>';
		dhtml+='					<a href="javascript:;" class="face20" title="打招呼">打招呼</a>';
		dhtml+='					<a href="javascript:;" class="face21" title="欲哭">欲哭</a>';
		dhtml+='					<a href="javascript:;" class="face22" title="亲亲">亲亲</a>';
		dhtml+='					<a href="javascript:;" class="face23" title="顶">顶</a>';
		dhtml+='					<a href="javascript:;" class="face24" title="再见">再见</a>';
		dhtml+='					<a href="javascript:;" class="face25" title="坏笑">坏笑</a>';
		dhtml+='					<a href="javascript:;" class="face26" title="房子">房子</a>';
		dhtml+='					<a href="javascript:;" class="face27" title="钻戒">钻戒</a>';
		dhtml+='					<a href="javascript:;" class="face28" title="玫瑰花">玫瑰花</a>';
		dhtml+='					<a href="javascript:;" class="face29" title="手机">手机</a>';
		dhtml+='					<a href="javascript:;" class="face30" title="抱抱">抱抱</a>';
		dhtml+='					<a href="javascript:;" class="face31" title="元宝">元宝</a>';
		dhtml+='					<a href="javascript:;" class="face32" title="嘴">嘴</a>';
		dhtml+='				</div>';
		dhtml+='				<a href="javascript:;" class="icon" id="expression">表情</a><span>按“Ctrl+Enter”快捷发送</span>';
		dhtml+='			</div>';
		dhtml+='		</div>';
		dhtml+='	</div>';
		dhtml+='	</div>';
		dhtml+='<script>$(\'input:checkbox\').jqTransCheckBox();</script>';
		dhtml+='</div>';

		$.blockUI({
			message:dhtml
		});

		$("[id^=close_box_]").click(function(){
			$.unblockUI();
		});
		NewNotice.init($userId,pathID);

		/*
		*	根据userID获取个人信息
		*/
		$.getJSON('//msg.baihe.com/owner/api/getOneUserInfo?jsonCallBack=?',{
			userID:baihe.cookie.getCookie('userID')
		},function(data){ 
			$('.content').attr('sImg',data.data.headPhotoUrl);
			console.log(baihe.cookie.getCookie('userID'));

			//自己手机是否认证
			if(data.data.isCreditedByMobile=='1'){
				myMobile=true;
			}
		});

		/*
		*	爱情直呼
		*/
		$('.txtRight .cbd,.txtRight .ex_tips,.txtRight .ex_send').mouseenter(function(){
			clearTimeout(zhihu_timer);
			if(iZhiHu){ //可发送
				var nickN=$('.msgLeft').find('h3').text();
				$('.txtRight .ex_send').html('<em></em>同时发送通知到 '+nickN+' 手机上');
				$('.txtRight .ex_send').show();
			}else{
				$('.txtRight .ex_tips').show();
			}
			
		});

		$('.txtRight .cbd,.txtRight .ex_tips,.txtRight .ex_send').mouseleave(function(){
			zhihu_timer=setTimeout(function(){
				$('.txtRight .ex_tips').hide();		
				if(iZhiHu && $('.cbd .checkboxWrapper .checkbox').hasClass('checkboxChecked')){
					$('.txtRight .ex_send').show();
				}else{
					$('.txtRight .ex_send').hide();
				}
			},500);
		});

		//点击选中状态出现提示
		$('.txtRight .cbd').click(function(){
			if(iZhiHu){
				if($('.cbd .checkboxWrapper .checkbox').hasClass('checkboxChecked')){
					$('.txtRight .ex_send').show();
					$('.txtRight .cbd').css('color','#000');
					var nickN=$('.msgLeft').find('h3').text();
					$('.txtRight .ex_send').html('<em></em>同时发送通知到 '+nickN+' 手机上');
				}else{
					$('.txtRight .ex_send').hide();
				}
			}else{
				$('.txtRight .ex_send').hide();
			}
			
		});
		
}
/*
var timer=null;
var arrMsg1=[]; //每次循环放入的数组
var arrMsg2=[]; //和arrMsg1比对的数组
var newArr=[];  //1 和 2共同新生成的数组
var arrMsg=[];  //去重之后的数组

function pullNotice($userId,evt,time){	
	if($('#mCSB_1_container').attr('session_id')){
		$.ajax({
			type: "post",
			url: "//msg.baihe.com/owner/api/getMessageListByAnotherUserID?anotherUserID="+$userId+"&start="+time+"&size=10&jsonCallBack=?",
			async: true,
			dataType: "jsonp",
			success: function(data) {
				if(data.code==200){	
					if(data.data[i].userID==baihe.cookie.getCookie('userID'))
					for(var i=data.data.length-1;i>-1;i--){
						console.log(i);
						console.log(data.data[i].msgID);
						if(data.data[i].msgID){
							arrMsg1.push(data.data[i].msgID);
						}
						newArr=arrMsg1.concat(arrMsg2);
						for(var i=0;i<newArr.length;i++){
							toCon(newArr[i]);
						}
						function toCon(num){	
							var bBtn = true;	
							for(var i=0;i<arrMsg.length;i++){
								if(num == arrMsg[i]){
									console.log(num);
									bBtn = false;
									return;
									//console.log(1);
								}
							}	
							if(bBtn){
								arrMsg.push(num);
								//如果有内容才会添加
								console.log(data.data[i].createTime);
								//如果是自己发送的就不添加
								if(data.data[i].userID==baihe.cookie.getCookie('userID')){
									return;
								}else{
									var ta_word='<div class="one"><div class="other"><img src="'+$('#mCSB_1_container').attr('imgSrc')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_left"></div><span>'+data.data[i].content+'</span></div></div></div><div class="clear"></div><div class="time"><span>'+data.data[i].createTime+'</span></div><div class="clear"></div></div>';			
									var ta_Voice='<div class="one"><div class="other"><img src="'+$('#mCSB_1_container').attr('imgSrc')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_left"></div><img src="//images9.baihe.com/msg/voice.png" alt="声音" class="voice" />收到一条语音信息</div><div class="exp">请下载<a href="//shouji.baihe.com/" target="_blank" class="org">百合婚恋客户端</a>使用</div><div class="clear"></div></div></div><div class="clear"></div><div class="time"><span>'+data.data[i].createTime+'</span></div><div class="clear"></div></div>';
									var ta_present='<div class="one"><div class="other"><img src="'+$('#mCSB_1_container').attr('imgSrc')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_left"></div>收到一条语音信息<div class="gift"><img src="//images.baihe.com/images/baihe_new/images/icon/gift_icon/102.JPG" width="72" align="left"><p>"相遇是一种宿命，心灵的交汇让我们有诉不尽的 浪漫情怀"</p></div></div></div></div><div class="clear"></div><div class="time"><span>'+data.data[i].createTime+'</span></div><div class="clear"></div></div>';							
									if($(data.data).eq(i)[0].type==1){  //文字
										$('#mCSB_1_container')[evt](ta_word);
									}else if($(data.data).eq(i)[0].type==2){ //声音
										$('#mCSB_1_container')[evt](ta_Voice);
									}else if($(data.data).eq(i)[0].type==6){ //礼物
										$('#mCSB_1_container')[evt](ta_present);	
									}
									if($('.content')[0].mcs.topPct==100){
										$(".content").mCustomScrollbar("scrollTo","last");
									}else{
										return;
									}
								}
								
							}	
						}
						$('#mCSB_1_container').attr('session_id',data.data[0].sessionID);
						if(i>data.data.length-1){
							return;
						}
					}
					
				}
			}
		});
	}
}*/

document.oncontextmenu=function(){
	return false;
}
var dd = new Date();
var wordL=0;
//是否已被关注

//var $userId='';
NewNotice={
	init:function($userId,pathID){
		var _this = this;
		_this.createL($userId,pathID);
		_this.tabIn();
		_this.expression();
		_this.send($userId,pathID);
	},
	/*
	*	左侧个人用户资料
	*/
	createL:function($userId,pathID){
		var iFous=false;
		var _this = this;
		$.getJSON('//msg.baihe.com/owner/api/getOneUserInfo?jsonCallBack=?',{
				userID:$userId
			},function(data){
			//名字
			$('.msgLeft').find('h3').text(data.data.nickname); 
			//共几张照片
			$('.msgLeft').find('.num').text(data.data.photosNumber);
			if(data.data.photosNumber==0){
				$('.msgLeft').find('.num').hide();
			}else if(data.data.photosNumber>24){
				$('.msgLeft').find('.num').text('24');
			}
			
			//照片
			$('.msgLeft').find('.pic img').attr('src',data.data.headPhotoUrl);
			$('#mCSB_1_container').attr('imgSrc',data.data.headPhotoUrl);
			//水晶和实名认证必须，其他自动选两个，认证图标总共不大于4个；
			if(data.data.isCreditedById5=='1'){
				$('.msgLayer center').find('img[title*="实名认证"]').show();
				$('.msgLayer .prompt').html('提示：请勿在交往中发生经济往来');
			}
			if(data.data.isCreditedByMobile=='1'){
				$('.msgLayer center').find('img[title*="手机认证"]').show();
			}
			if(data.data.isCreditedBySesame=='1'){
				$('.msgLayer center').find('img[title*="芝麻"]').show();
			}
			if(data.data.identitySign=='VIP_ADV'){
				$('.msgLayer center').find('img[title*="高级"]').show();
				$('.msgLayer h3').addClass('red');
			}else if(data.data.identitySign=='VIP_CLY'){
				$('.msgLayer center').find('img[title*="水晶会员"]').show();
				$('.msgLayer h3').addClass('red');
			}else if(data.data.identitySign=='VIP_SUPER'){
				$('.msgLayer center').find('img[title="至尊"]').show();
				$('.msgLayer h3').addClass('red');
			}else if(data.data.identitySign=='VIP_JSUPER'){
				$('.msgLayer center').find('img[title="金至尊"]').show();
				$('.msgLayer h3').addClass('red');
			}else if(data.data.identitySign=='VIP_JSUPER_LovePull'){
				$('.msgLayer center').find('img[title="金至尊牵线"]').show();
				$('.msgLayer h3').addClass('red');
			}else{
				$('.msgLayer h3').removeClass('red');
			}
			
			//关注
			if(data.data.myfocus==0){  //没有加关注
				$('.msgLayer .focusing a.cancel').hide();
				$('.msgLayer .focusing a.add').show();
			}else{
				$('.msgLayer .focusing a.add').hide();
				$('.msgLayer .focusing a.cancel').show();
			}

			//gainNotice($userId,pathID);

			/*	*********** 爱情直呼 ***********
			*	先判断收信人是否手机认证，有认证则显示，没有则不显示
			*	再判断发信人是否有爱情直呼的功能，有则可发送，否则灰色不可发送
			*/
			if(data.data.isCreditedByMobile==1){  // 收信人已手机认证
				
				$('.txtRight .cbd').show(); 
				
				$.ajax({  //判断发信人有没有权限发信
					type: "post",
					url: "//msg.baihe.com/owner/api/getLoveSms?&jsonCallBack=?",
					async: true,
					dataType: "jsonp",
					success: function(data) {	
						if(data.code==200){
							if(data.data.loveSmsNum!=0 || data.data.isSendSms==1){  //条数不为0 或者 包月为1 代表可发送
								$('.txtRight .cbd input').removeAttr('disabled');
								$('.txtRight .cbd a').css('background','');
								$('.txtRight .cbd').css('color','#000');
								iZhiHu=true;
							}else{  //不可发送则出现提示
								$('.txtRight .cbd input').attr('disabled','disabled');//不可点击
								$('.txtRight .cbd a').css('background','#ccc'); //变为灰色
								$('.txtRight .cbd').css('color','#bdbdbd');
								iZhiHu=false;
							}
						}
					},
				});
				
			}else{
				$('.txtRight .cbd').hide();
			}


			if($('.msgLayer center').width()>100){
				$('.msgLayer center').css('overflow','hidden');
				$('.msgLayer center').css('width','100px');
				$('.msgLayer center').css('height','20px');
				$('.msgLayer center').css('margin','0px auto');
			}
		});
		
		/*
		*	加关注
		
		if($('#focussign').text().replace(/(^\s*)|(\s*$)/g, "")=='加关注'){
			$('.msgLayer .focusing a.cancel').hide();
			$('.msgLayer .focusing a.add').show();

		}else{
			$('.msgLayer .focusing a.add').hide();
			$('.msgLayer .focusing a.cancel').show();
		}*/
		
		$('.focusing .add').on('click',function(){
			$.getJSON('//msg.baihe.com/owner/api/addMyFocus?jsonCallBack=?',{
				targetUserID:$userId
			},function(data){
				if(data.code==200){
					$('body').attr('iFous','add');
					//控制profile页
					$('#focussign').removeClass('w01').addClass('w01a');
					$('#focussign').html('<em></em> 取消关注');

					$('.msgLayer .focusing a.add').hide();
					$('.msgLayer .focusing a.cancel').show();
				}else{
					alert(data.msg);
				}
			});	
		});
		/*
		*	取消关注
		*/
		$('.focusing .cancel').on('click',function(){
			$.getJSON('//msg.baihe.com/owner/api/deleteMyFocus?jsonCallBack=?',{
				targetUserID:$userId
			},function(data){
				if(data.code==200){
					$('body').attr('iFous','cencel');
					//控制profile页
					$('#focussign').removeClass('w01a').addClass('w01');
					$('#focussign').html('<em></em> 加关注');

					$('.msgLayer .focusing a.cancel').hide();
					$('.msgLayer .focusing a.add').show();
				}else{
					alert(data.msg);
				}
			});	
		});

		/*
		*	共同喜好  91103545
		*/
		$.getJSON('//msg.baihe.com/owner/api/getCommonPrefer?jsonCallBack=?',{
			userID:$userId
		},function(data){
			if(data.data==''){
				$('.msgLike').find('em').text('');
			}else{

				var i=0;
				if(data.data.length==1){
					$('.msgLike').find('em').eq(0).text(data.data[0]);
					return;
				}
				for(var j in $(data.data).eq(0)[0]){
					
					$('.msgLike').find('em').eq(i).text($(data.data).eq(0)[0][j]);
					i++;										
								
				}
			}
		});
	},
	
	/*
	*	输入框输入文字
	*/
	tabIn:function(){
		var _this = this;
		var ev=ev || window.event;
		$('.msgApply textarea').on('focus',function(){
			if($(this).val()=='请输入文字'){
				$(this).val('');
			}
		});
		$('.msgApply textarea').on('blur',function(){
			if($(this).val()==''){
				$(this).val('请输入文字');
			}
		});
		$('.msgApply textarea').on('keyup',function(){
			if($('.msgApply textarea').val()!='请输入文字' && $('.msgApply textarea').val()!=''){
				if(1000-($(this).val().length)<0){
					alert('发送的内容不能大于1000个字符！');
					$('.word_length').text(0);
					return;
				}
				$('.word_length').text(1000-($(this).val().length));
			}else{
				$('.word_length').text(1000);
			}
		});
		$(document).on('keydown',function(ev){
			var ev=ev || window.event;
			if($('.msgApply textarea').val()!='请输入文字' && $('.msgApply textarea').val()!=''){				
				if(ev.ctrlKey && ev.keyCode==13){
					$('#send').trigger('click');
					$('.word_length').text(1000);
				}else if(ev.keyCode==8){
					if($('.msgApply textarea').val().indexOf('[')>0){
						console.log(1);
					}
					$('.word_length').text(1000-($('.msgApply textarea').val().length));
				}
			}
		});		
	},
	/*
	*	点击表情
	*/
	expression:function(){
		var _this = this;
		$('#expression').on('click',function(event){
			// 绑定表情
			$('#expression').SinaEmotion($('#send_input'));

			$('.expCont').slideToggle();
			event.stopPropagation();
		});
		$('.msgLayer .msgApply .expression .expCont a').on('click',function(event){
			wordL++;
			console.log(wordL);
			$('.expCont').slideUp();
			$('.msgApply textarea').focus();
			if($('.msgApply textarea').val()=='请输入文字'){
				$('.msgApply textarea').val('['+$(this).attr('title')+']');
			}else{
				$('.msgApply textarea').val($('.msgApply textarea').val()+'['+$(this).attr('title')+']');
				$('.word_length').text(1000-($('.msgApply textarea').val().length+wordL));
			}
			event.stopPropagation();
		});
		$(document).click(function(){
			$('.expCont').slideUp();
		});
	},
	/*
	*	点击发送
	*/
	send:function($userId,pathID){
		var _this = this;
			
		$('#send').on('click',function(event){			
			/*
			*	发送前 判断是否有对方的会话
			*	内容为空时pathID直接传
			*/
			if($('#mCSB_1_container').find('.one').length==0){
				$('.content').attr('pathID',pathID);	
			}

			$('.word_length').text(1000);			
			var iH1=$('#content-m').height();	
			if($('.msgApply textarea').val()!='请输入文字'){
				var dd=new Date();
				var iH=fnTwo(dd.getHours());
				var iM=fnTwo(dd.getMinutes());				
				//表情
				/*
				*	如果文本域中有内容则取文本域内容，否则就取属性值；
				*	此做法为了方便发送不成功时获取的内容值；
				*/
				if($('#send_input').val().replace(/(^\s*)|(\s*$)/g, "")!=''){
					var inputText = $('#send_input').val().replace(/(^\s*)|(\s*$)/g, "") || $('#send_input').attr('con');
					/*
					*	手机进行判断，手机端\n  web端<br/>
					*/
					var browserName_ = navigator.userAgent ;
					if(browserName_.indexOf("baidu Transcoder")>0){
						var reg = /<[^>]+>/g;
						$('#send_input').attr('con',$('#send_input').val().split(" ").join(' ').replace(/\n/g,'\n'));
						if(reg.test($('#send_input').attr('con'))){  //代表有html标签
							alert('请输入正确内容');
							return;
						}else{
							var $content=AnalyticEmotion($('#send_input').attr('con'));
						}
						
					}
					//手机判断
					var browser = {
						versions: function () {
							var u = browserName_;
							return {//移动终端浏览器版本信息
								ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
								android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //android终端或者uc浏览器                   
							};
						} ()
					}
					if (browser.versions.ios == true || browser.versions.android == true) {
						var reg = /<[^>]+>/g;
						$('#send_input').attr('con',$('#send_input').val().split(" ").join(' ').replace(/\n/g,'\n'));
						if(reg.test($('#send_input').attr('con'))){  //代表有html标签
							alert('请输入正确内容');
							return;
						}else{
							var $content=AnalyticEmotion($('#send_input').attr('con'));
						}
					}
					//结束
					if(browserName_.indexOf("iPad")<0&&browserName_.indexOf("Windows NT")<0&&browserName_.indexOf("Macintosh")<0){
						if(browserName_.indexOf("Linux")>0){
							if(browserName_.indexOf("Mobile")>0||browserName_.indexOf("U;")>0){
								var reg = /<[^>]+>/g;
								$('#send_input').attr('con',$('#send_input').val().split(" ").join(' ').replace(/\n/g,'\n'));
								if(reg.test($('#send_input').attr('con'))){  //代表有html标签
									alert('请输入正确内容');
									return;
								}else{
									var $content=AnalyticEmotion($('#send_input').attr('con'));
								}
							}
						}else{
							var reg = /<[^>]+>/g;
							$('#send_input').attr('con',$('#send_input').val().split(" ").join(' ').replace(/\n/g,'\n'));
							if(reg.test($('#send_input').attr('con'))){  //代表有html标签
								alert('请输入正确内容');
								return;
							}else{
								var $content=AnalyticEmotion($('#send_input').attr('con'));
							}
						}
					}else{
						if(browserName_.indexOf("baidu Transcoder")>0){
							var reg = /<[^>]+>/g;
							$('#send_input').attr('con',$('#send_input').val().split(" ").join(' ').replace(/\n/g,'\n'));
							if(reg.test($('#send_input').attr('con'))){  //代表有html标签
								alert('请输入正确内容');
								return;
							}else{
								var $content=AnalyticEmotion($('#send_input').attr('con'));
							}
						}else{
							var reg = /<[^>]+>/g;
							$('#send_input').attr('con',$('#send_input').val().split(" ").join(' ').replace(/\n/g,'\n'));
							if(reg.test($('#send_input').attr('con'))){  //代表有html标签
								alert('请输入正确内容');
								return;
							}else{
								var $content=AnalyticEmotion($('#send_input').attr('con'));
							}
						}
					}
				}else{
					alert('请输入内容！');
					return;
				}

				//先插入然后再调接口
				if($content!=''){
					var my_word='<div class="two"><div class="my"><img src="'+$('.content').attr('sImg')+'" alt="会员头像" class="pic" /><div class="info"><div class="infoCont"><div class="arrow_right"></div><a class="no" href="javascript:;" style="display:none;" title="重新发送">红叹号</a><div class="loading">加载</div><span>'+$content+'</span></div></div></div></div>';
					$('#mCSB_1_container').append(my_word);
				}else if($content.length>1000){
					alert('发送的内容不能大于1000个字符！');
					return;
				}

				$.getJSON('//msg.baihe.com/owner/api/sendMessage?jsonCallBack=?',{
					toUserID:$userId,
					content:$('.msgApply textarea').attr('con'),
					type:1, 
					pathID:$('.content').attr('pathID')},function(data){
					
					//发送不成功点击
					$('.msgLayer .msgCont').find('a.no').click(function(){
						var $con=$(this).next().next().text(); //获取文本域内容
						$('#send_input').attr('con',$con);
						_this.no_click($(this));
					});
					//如果这次发送时间超过上次的一分钟 显示时间；如果不超过，则不显示时间
					var iSayTime='<div class="time"><span>'+iH+':'+iM+'</span></div><div class="clear"></div>';		
					if($('.two .time').last()){
						if($('.time').last().text().substring(0,2)-dd.getHours()==0 && $('.time').last().text().substring(3,6)-dd.getMinutes()==0){
							$('.msgLayer .two .my').last().next().remove();
						}else{
							$('.msgLayer .two .my').last().prepend(iSayTime);
						}	
					}else{
						$('.msgLayer .two .my').last().after(iSayTime);
					}

					//每次发送文字都移动到最后一个
					$(".content").mCustomScrollbar("scrollTo","last");

					if(data.code==200){  //发送成功
						//如果已勾选 则调取爱情直呼接口
						if($('.cbd .checkbox').hasClass('checkboxChecked')){  //表示已点击
							//如果自己的手机已认证，则调取爱情直呼接口
							if(myMobile){
								$.ajax({
									type: "post",
									url: "//msg.baihe.com/owner/api/sendLoveSms?toUserID="+$userId+"&jsonCallBack=?",
									async: true,
									dataType: "jsonp",
									success: function(data) {	
										if(data.code==200){	
											baihe.block({
												title: '提示',
												text: '已发到对方的手机上！'
											});
										}else{
											baihe.block({
												title: '提示',
												text: data.msg
											});
										}	
									}
								})}
						}

						$('.two').last().find('.infoCont .loading').hide();
						$.unblockUI();
					}else{  //发送不成功
						alert(data.msg.replace(/^\s+|\s+$/g,""));
						$('.two').last().find('.infoCont .loading').hide();
						$('.two').last().find('.infoCont .no').show();
						return;
					}
					$('#mCSB_1_container').attr('session_id',data.data.sessionID);

					//发送成功取消爱情直呼的勾选
					$('.checkboxWrapper .checkbox').removeClass('checkboxChecked');
					$('.txtRight .ex_send').hide();
				});
				$('.msgApply textarea').val('');
				
			}

		});
			
	},
	//发送不成功点击
	no_click:function($this){
		var _this = this;
		$this.parent().parent().parent().parent().slideUp();
		$('#send').trigger('click');
		$('#send_input').attr('con','');
	}}
function fnTwo(n){
	if(n<10){
		return '0'+n;
	}else{
		return n;
	}
}

function iTime(time1){	

	var dd = new Date(); 
	var d = dd.getDate();
	var Y=dd.getFullYear();
	var M=dd.getMonth()+1;
	//当前时间
	var iToday=time1.substring(11,16);
	if(Number(d)-time1.substring(8,10)==1){ // =1 昨天； =2 前天
	    return '昨天'+' '+iToday;
	}else if(d-time1.substring(8,10)==0){
	    return iToday;
	}else if(d-time1.substring(8,10)>1 && d-time1.substring(8,10)<7){
		var iW_arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
		var iWeek=iW_arr[new Date(time1.substring(0,10)).getDay()]; //得到星期几
		return iWeek+' '+iToday;
	}else{
		return time1;
	}	
}




