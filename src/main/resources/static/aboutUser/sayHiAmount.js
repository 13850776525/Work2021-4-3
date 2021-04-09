
function sayHi_amount(){
	baihe.bhtongji.tongji({
		'event': '3',
		'spm': '4.2.542.262.8117'
	});
	var dHtml = '';
		dHtml += '<div id="sayHello" style=" position:absolute; top:50%; left:50%; width:652px; height:500px; margin:-230px 0 0 -326px; background:url(//images7.baihe.com/pop/sayHello.png) no-repeat; overflow:hidden; ">';
		dHtml += '	<a id="close_box_1" href="javascript:;" style="display:block; position:absolute; top:0px; right:5px; width:33px; height:33px; text-indent:-9999px; overflow:hidden;">关闭</a>';
		dHtml += '	<div style="height:60px; padding-top:60px; font:20px/58px Microsoft Yahei; color:#ff6400; text-align:center;">遇到合你眼缘的会员，就快跟TA们打个招呼吧~</div>';
		dHtml += '	<div style="width:610px;height:280px; padding-left:36px; font:14px/20px Microsoft Yahei; color:#333; overflow-y:auto; overflow-x:hidden;">';
		dHtml += '		<div class="hi_div" style="width:640px; overflow:hidden;position:relative;">';
		dHtml += '		</div>';
		dHtml += '	</div>';
		dHtml += '	<div style=" text-align:right; height:30px; padding-right:30px; overflow:hidden;"><span class="xinyi" style=" font:12px/20px 宋体;text-decoration:none;"></span><span class="yixiang" style=" font:12px/20px 宋体;text-decoration:none;">点这里看更多哟→ </span><a class="next_page" name="#title" href="#title" style="color:#03F; font:12px/20px 宋体;text-decoration:none;">[下一页]</a></div>';
		dHtml +='	<div class="automatic" style="float:left; padding:10px 0 0 30px; font-size:14px;display:none;"><label style="display:block; cursor:pointer;"><input name="" type="checkbox" value="" checked style="float:left; position:relative; top:-2px; margin-right:5px;" />帮我自动搭讪，快速找到感兴趣的TA</label></div>';
		dHtml += '	<a href="javascript:;" class="red_hi" style="display:block; float:right; width:256px; height:44px; margin-right:30px; font:18px/42px Microsoft Yahei; color:#fff; text-decoration:none; text-align:center; background:#ff6400; border-radius:3px; ">全部打招呼</a>';
		dHtml += '	<a href="javascript:;" class="gray_hi" style="display:block; float:right; width:256px; height:44px; margin-right:30px; font:18px/42px Microsoft Yahei; color:#fff; text-decoration:none; text-align:center; background:#bebebe; border-radius:3px;display:none; ">全部打招呼</a>';
		dHtml += '</div>';
		
		$.blockUI({
			message:dHtml
		});
	
		$("[id^=close_box_]").click(function(){
			if($('.automatic').css('display')=='block'){
				if($('.automatic').find('input').hasClass('clickAuto')){ //关闭的时候已经点击
					$.ajax({
						type: "post",
						url: "//u.baihe.com/PromoteLetter/setchatup?&jsonCallBack=&status=2",
						async: true,
						dataType: "jsonp",
						success: function(data) {}
					})
					baihe.bhtongji.tongji({
						'event': '3',
						'spm': '4.2.542.3828.10334'
					});
				}else{
					$.ajax({
						type: "post",
						url: "//u.baihe.com/PromoteLetter/setchatup?&jsonCallBack=&status=3",
						async: true,
						dataType: "jsonp",
						success: function(data) {}
					})
					baihe.bhtongji.tongji({
						'event': '3',
						'spm': '4.2.542.3830.10336'
					});	
				}
			}else{
				baihe.bhtongji.tongji({
					'event': '3',
					'spm': '4.2.542.3826.10332'
				});
			}
			$.unblockUI();
		});		
}

sayHiAmount={
	init:function(){		
		var _this = this;
		_this.doAppear();
		
	},
	doAppear:function(){
		var _this = this;
		var userIdS='';
		var userIdAll=[];
		
		$.ajax({
			type: "post",
			url: "//u.baihe.com/PromoteLetter/getUserIDList?&jsonCallBack=?",
			async: true,
			dataType: "jsonp",
			success: function(data) { 
				if(data.code==200){	
					//获取所有的userID 如果有userID数组就出谭层
					if(data.data.userIDList!=null){
						sayHi_amount();
						$(data.data.userIDList).each(function(i,elem){
							userIdAll.push(data.data.userIDList[i].userID);
							$('.xinyi').text('向'+data.data.userIDList.length+'位心仪对象打招呼～ ');
							
							var sayHtml='';	
							sayHtml += '<div userid="'+data.data.userIDList[i].userID+'" style="position:relative; float:left; width:100px; height:140px;">';
							sayHtml += '	<img src="" width="80" height="100" alt="" style="display:block;border:1px solid #999; margin-bottom:2px;" />';
							sayHtml += '	<div style=" position:absolute; top:81px; left:0px; width:80px; height:20px; font:12px/20px Microsoft Yahei; color:#fff; text-align:center; background:rgba(0,0,0,.4);">岁 cm'+'</div>';
							sayHtml += '	<label class="sel_label" usd="" style="display:block; width:80px; white-space:nowrap; word-break:keep-all; overflow:hidden; text-overflow:ellipsis;"><input class="abc" name="" type="checkbox" value="" checked style="float:left; position:relative; top:1px;" /></label>';
							sayHtml += '</div>';
						});

						$(data.data.userInfoList).each(function(i,elem){
							//获取第一屏的userID
							userIdS+=','+data.data.userIDList[i].userID;
							//console.log('first---'+userIdS);

							var sayHtml='';	
							sayHtml += '<div style="position:relative; float:left; width:100px; height:140px;">';
							sayHtml += '	<img src="'+data.data.userInfoList[i].headPhotoUrl+'" width="80" height="100" alt="" style="display:block;border:1px solid #999; margin-bottom:2px;" />';
							sayHtml += '	<div style=" position:absolute; top:81px; left:0px; width:80px; height:20px; font:12px/20px Microsoft Yahei; color:#fff; text-align:center; background:rgba(0,0,0,.4);">'+data.data.userInfoList[i].age+'岁 '+data.data.userInfoList[i].height+'cm'+'</div>';
							sayHtml += '	<label class="sel_label" usd="'+data.data.userInfoList[i].userID+'" style="display:block; width:80px; white-space:nowrap; word-break:keep-all; overflow:hidden; text-overflow:ellipsis;"><input class="abc" name="" type="checkbox" value="" checked style="float:left; position:relative; top:1px;" />'+data.data.userInfoList[i].nickname+'</label>';
							sayHtml += '</div>';
							$('.hi_div').append(sayHtml);	
						});	
						
						if($('.automatic').css('display')=='block'){ //如果复选框显示 默认勾选
							$('.automatic').find('input').addClass('clickAuto');
						}else{
							$('.automatic').find('input').removeClass('clickAuto');
						}

						//不足12个 下一页去掉
						if(data.data.userIDList.length<=12){
							$('.next_page,.yixiang').hide();
						}
						userIdS=userIdS.substring(1);
						$('.red_hi').attr('usd',userIdAll);

						//点击复选框
						_this.doLabel(userIdAll);

						//批量打招呼
						_this.doSayHi($('.red_hi').attr('usd'));

						//点击下一页 将12个之后的数组传入
						var arr1=userIdAll.slice(12);
						_this.getPageNext(arr1);
						
						//自动打招呼
						_this.hideSendM();

						//获取 判断复选框是否显示
						$.ajax({
							type: "post",
							url: "//u.baihe.com/PromoteLetter/getStatus?&jsonCallBack=?",
							async: true,
							dataType: "jsonp",
							success: function(data) { 
								if(data.state==3){
									if(data.data==1){
										$('.automatic').css('display','block');
										$('.automatic').find('input').addClass('clickAuto');
									}else{
										$('.automatic').css('display','none');;
										$('.automatic').find('input').removeClass('clickAuto');
									}
								}else if(data.state==2){
									$('.automatic').css('display','block');
									$('.automatic').find('input').addClass('clickAuto');
								}else{
									$('.automatic').css('display','none');;
									$('.automatic').find('input').removeClass('clickAuto');
								}
							}
						});
					}	
				}				
			}
		});	
		
	},
	hideSendM:function(){
		var _this = this;
		//根据class名来判断是否选中
		$('.automatic').find('input').click(function(){
			$(this).toggleClass('clickAuto');
		});
	},
	//获取资料
	getAllInfo:function(arr){
		var _this = this;
		$.ajax({
			type: "get",
			url: "//u.baihe.com/PromoteLetter/getUserInfoList?userIDList="+arr+"&jsonCallBack=?",
			async: true,
			dataType: "jsonp",
			success: function(data) { 
				if(data.code==200){
					$(data.data.userInfoList).each(function(i,elem){
						var sayHtml='';	
						sayHtml += '<div style="position:relative; float:left; width:100px; height:140px;">';
						sayHtml += '	<img src="'+data.data.userInfoList[i].headPhotoUrl+'" width="80" height="100" alt="" style="display:block;border:1px solid #999; margin-bottom:2px;" />';
						sayHtml += '	<div style=" position:absolute; top:81px; left:0px; width:80px; height:20px; font:12px/20px Microsoft Yahei; color:#fff; text-align:center; background:rgba(0,0,0,.4);">'+data.data.userInfoList[i].age+'岁 '+data.data.userInfoList[i].height+'cm'+'</div>';
						sayHtml += '	<label class="sel_label aa" usd="'+data.data.userInfoList[i].userID+'" style="display:block; width:80px; white-space:nowrap; word-break:keep-all; overflow:hidden; text-overflow:ellipsis;"><input class="abc" name="" type="checkbox" value="" checked style="float:left; position:relative; top:1px;" />'+data.data.userInfoList[i].nickname+'</label>';
						sayHtml += '</div>';
						$('.hi_div').append(sayHtml);												
					});	
					
				}				
			}
		});		
	},
	//点击下一页
	getPageNext:function(arr){
		var _this = this;
		var num=1;
		
		$('.next_page').click(function(){
			baihe.bhtongji.tongji({
				'event': '3',
				'spm': '4.2.542.3070.8163'
			});
			//全部发送按钮变亮
			$('.gray_hi').hide();
			$('.red_hi').show();
			//剩余的userID数组
			var $yu=arr.slice(12);
			//每次点击获取userID数组
			var $arr=arr.splice(0,12);

			//如果没有剩余的userID，则获取完资料后 下一页 去掉
			if($yu.length==0){
				num++;
				$('.hi_div').height(280*num);
				$('.title').remove();
				//$('.red_hi').attr('usd',$('.red_hi').attr('usd')+','+$arr);
				if($arr.length<12){
					$('.next_page,.yixiang').hide();
				}
				_this.getAllInfo($arr);

				window.location.hash = "#title"; 
				$('.next_page,.yixiang').hide();
			}else if($yu.length>=1){
				num++;
				$('.hi_div').height(280*num);
				$('.title').remove();
				//$('.red_hi').attr('usd',$('.red_hi').attr('usd')+','+$arr);
				if($arr.length<12){
					$('.next_page,.yixiang').hide();
				}
				_this.getAllInfo($arr);				
				window.location.hash = "#title"; 
			}else{
				$('.next_page,.yixiang').hide();
			}
			$('.hi_div').append('<div style="display:inline-block;width:0;clear:both;background:red;float:left;height:0px;overflow:hidden;" id="title" class="title" ></div>');
		});
	},
	//复选框点击事件
	doLabel:function(userIdAll){
		var _this = this;
		userIdAll=userIdAll.join(',');
		$('.hi_div').on('click','.sel_label input',function(){ 
			if($(this).hasClass('abc')){ 
				//如果已经选中则取消 并去掉本身的userID	
				var pattern='';
				$(this).removeClass('abc');
				if(userIdAll.indexOf($(this).parent().attr('usd'))==0 && userIdAll.length!=1){ //userId 在第一个
					pattern=$(this).parent().attr('usd')+',';
				}else if(userIdAll.length==1){	//只有一个userID
					pattern=$(this).parent().attr('usd');
				}else{
					pattern=','+$(this).parent().attr('usd');	
				}
				userIdAll = userIdAll.replace(new RegExp(pattern), "");
				$('.red_hi').attr('usd',userIdAll);
									
			}else{
				//选中并添加
				$(this).addClass('abc');
				if(userIdAll.indexOf($(this).parent().attr('usd'))>-1){
					return;
				}else{
					userIdAll=userIdAll.concat(','+$(this).parent().attr('usd'));
					$('.red_hi').attr('usd',userIdAll);					
				}				
			}
			//如果没有选中 点击无效
			if($('.hi_div').find('input:checked').length==0){
				$('.gray_hi').show();
				$('.red_hi').hide();
			}else{
				$('.gray_hi').hide();
				$('.red_hi').show();
			}
		});
		
	},
	doSayHi:function(userIdS){
		var _this = this;
		var iNum=0;
		$('.red_hi').click(function(){
			iNum++;
			if(iNum==1){
				$.ajax({
					type: "get",
					url: "//u.baihe.com/PromoteLetter/batchGreet?userIDList="+$('.red_hi').attr('usd')+"&jsonCallBack=?",
					async: true,
					dataType: "jsonp",
					success: function(data) { 
						if(data.code==200){	 //发送成功判断搭讪助手发送
							if($('.automatic').css('display')=='block'){ 
								if($('.automatic').find('input').hasClass('clickAuto')){ //打招呼已点击复选框 默认搭讪
									
									baihe.bhtongji.tongji({
										'event': '3',
										'spm': '4.2.542.3829.10335'
									});
									baihe.block({  //弹出二次确认对话框
										type: 1,
										title: '提示',
										text: '您已勾选搭讪助手功能，系统将为您找到感兴趣的TA，帮您自动搭讪。勾选此功能，恋爱成功率会大大提升哦~'
									});
									baihe.bhtongji.tongji({ //二次弹层打点
										'event': '3',
										'spm': '4.2.1080.419.10338'
									});
									$('.js_cancel').click(function(){ //二次弹层 取消
										baihe.bhtongji.tongji({
											'event': '3',
											'spm': '4.2.1080.290.10339'
										});
										//获取 判断复选框是否显示
										$.ajax({
											type: "post",
											url: "//u.baihe.com/PromoteLetter/setchatup?&jsonCallBack=&status=3",
											async: true,
											dataType: "jsonp",
											success: function(data) {}
										})
									}); 
									$('.js_confirm').click(function(){ //二次弹层 确认
										baihe.bhtongji.tongji({
											'event': '3',
											'spm': '4.2.1080.824.10340'
										});
										$.ajax({
											type: "post",
											url: "//u.baihe.com/PromoteLetter/setchatup?&jsonCallBack=&status=1",
											async: true,
											dataType: "jsonp",
											success: function(data) {}
										})
									});
								}else{  //取消自动搭讪
									$.unblockUI();
									baihe.bhtongji.tongji({   //打招呼未勾选搭讪框
										'event': '3',
										'spm': '4.2.542.3831.10337'
									});
									$.ajax({
										type: "post",
										url: "//u.baihe.com/PromoteLetter/setchatup?&jsonCallBack=&status=3",
										async: true,
										dataType: "jsonp",
										success: function(data) {}
									})
								}
							}else{
								$.unblockUI();
								baihe.bhtongji.tongji({   //打招呼无搭讪框
									'event': '3',
									'spm': '4.2.542.3827.10333'
								});
							}
						}else if(data.code==-608){
							
							if($('.automatic').css('display')=='block'){ 
								$.unblockUI();
								if($('.automatic').find('input').hasClass('clickAuto')){ //打招呼已点击复选框
									baihe.bhtongji.tongji({
										'event': '3',
										'spm': '4.2.542.3829.10335'
									});
								}else{
									$('#sayHello').parent().hide();
									baihe.bhtongji.tongji({   //打招呼未勾选搭讪框
										'event': '3',
										'spm': '4.2.542.3831.10337'
									});
								}
							}else{
								$.unblockUI();
								baihe.bhtongji.tongji({   //打招呼无搭讪框
									'event': '3',
									'spm': '4.2.542.3827.10333'
								});
							}
							baihe.block({
								title: '提示',
								text: '请先进行手机认证！'
							});
						}else{
							console.log(data.message);
						}
					}
				});
			}else{
				$(this).attr('disabled','disabled');
				$(this).css('background','#666');
			}
			
		});
		
		
	},
}

