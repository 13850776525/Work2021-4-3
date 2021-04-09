//------日历 start
function signCalendar(data){
	var dhtml = '';
		dhtml += '<body style="background:#000;">';
		dhtml += '	<div class="signIn_layer">';
		dhtml += '		<div class="calendar">';
		dhtml += '			<div class="bt">';
		dhtml += '				<a id="close_box_" href="javascript:void(0);" class="close">关闭</a>';
		dhtml += '			    <div id="ym"><a href="javascript:void(0);" onclick="prevMonth('+data.year+','+data.month+')" class="prev">上月</a><span>'+data.year+'年'+data.month+'月</span><a href="javascript:void(0);" onclick="nextMonth('+data.year+','+data.month+')" class="next">下月</a></div>';
		dhtml += '			</div>';
							              
		dhtml += '			<ul class="grayBt">';
		dhtml += '			     <li>周日</li>';
		dhtml += '			     <li>周一</li>';
		dhtml += '			     <li>周二</li>';
		dhtml += '			     <li>周三</li>';
		dhtml += '			     <li>周四</li>';
		dhtml += '			     <li>周五</li>';
    	dhtml += '		         <li>周六</li>';
    	dhtml += '		    </ul>';
							      
    	dhtml += '			<ul id="calendar">';
    							for(var i=0;i<data.week;i++){
    	dhtml += '					<li></li>';
    							}
    							for(var day=1;day<=data.allDay['DayOfMonth'];day++){
    								if(day == data.day){
    									if(data.isSign == 1){
    	dhtml += '							<li class="current">'+day+'</li>';
    									}else{
    	dhtml += '							<li class="current">'+day+'<div class="prompt"><span>签到成功</span><br /><strong>+5</strong>花瓣</div></li>';	
    									}
    								}else{
    									if(data.allDay['signInfo'][day] == 1){
    	dhtml += '							<li class="default">'+day+'</li>';
    									}else{
    	dhtml += '							<li>'+day+'</li>';
    									}
    								}
    							
    							}
    							for(day--;(day+data.week)%7!=0;day++){
		dhtml += '					<li></li>';
    							}
		dhtml += '		    </ul>';
		dhtml += '	   	</div>';
					    
						    
		dhtml += '		<div class="signCont">';
		dhtml += '			<div class="signLeft">';
								if(data.userType == 1){
		dhtml += '					<p>本周已签到<span>'+data.signTotal+'</span>天，签到天数越多，<span>获得额外花瓣越多，</span>';
								}else{
		dhtml += '					<p>本月已签到<span>'+data.signTotal+'</span>天，签到天数越多，<span>获得额外花瓣越多，</span>';
								}
								if(data.userType == 1){
		dhtml += '					<a href="http://bhtg.baihe.com/stat.html?ggCode=dlqd_2#http://club.baihe.com/" target="_blank">查看花瓣数量</a></p>';
								}else{
		dhtml += '					<a href="http://bhtg.baihe.com/stat.html?ggCode=dlqd_3#http://club.baihe.com/" target="_blank">查看花瓣数量</a></p>';

								}
								if(data.userType == 1){
									if(data.signTotal == 1){
		dhtml += '					    <div class="day01">本周签到1天</div>';
									}else if(data.signTotal == 2){
		dhtml += '					    <div class="day02">本周签到2天</div>';
									}else if(data.signTotal == 3){
		dhtml += '					    <div class="day03">本周签到3天</div>';
						            }else if(data.signTotal == 4){
		dhtml += '				        <div class="day04">本周签到4天</div>';
						            }else{
		dhtml += '						<div class="day04">本周签到4天</div>';
									}
					            }else{
					            	if(data.signTotal < 5){
	    dhtml += '				        <div class="day05_No">本月签到不到5天</div>';
						            }else if(data.signTotal >= 5 && data.signTotal < 8){
		dhtml += '				        <div class="day05">本月签到5天</div>';
						            }else if(data.signTotal >= 8 && data.signTotal < 15){
	    dhtml += '			            <div class="day06">本月签到8天</div>';
						            }else if(data.signTotal >= 15 && data.signTotal < 25){
		dhtml += '				        <div class="day07">本月签到15天</div>';
						            }else if(data.signTotal >= 25){
		dhtml += '				        <div class="day08">本月签到25天</div>';
						            }
								}
		dhtml += '			</div>';
		dhtml += '			<div class="signRight">';
		dhtml += '			    <a href="http://bhtg.baihe.com/stat.html?ggCode=dlqd_3#http://club.baihe.com/index/today" target="_blank">花瓣抽奖</a>';
		dhtml += '			</div>';
		dhtml += '      </div>';
		dhtml += '	    <div class="signInfo">';
						if(data.userType == 1){
		dhtml += '			 说明：本周为注册之日起的后7天时间，如2014年7月7日注册，本周指2014年7月7日-7月13日。';
						}else{
		dhtml += '			 说明：本月为每年每月的自然月，如2014年7月1日-7月31日。';
						}
		dhtml += '	    </div>';
		dhtml += '	</div>';
		dhtml += '</body>';
		
		$.blockUI({
	        message:dhtml
	    });

	    $("[id^=close_box_]").click(function(){
	        $.unblockUI();
	    });	
}

function prevMonth(Year,Month){
	var year = Year;
	var month = Month - 1;
	if(month == 0){
		year = year - 1;
		month = 12;
	}
	
	$.ajax({
		async: false,
		url:'http://xapp.baihe.com/sign/calendar?rand='+Math.random()*500,
		type:'get',
		dataType:'jsonp',
		jsonp: 'jsoncallback',
		data: 'year='+year+'&month='+month, 
		contentType: "application/json;utf-8",
		success:function(data){
			calendarHtml = calendar(data);
			ymHtml = ym(year,month);
			if(calendarHtml && ymHtml){
				$("#ym").html(ymHtml);
				$("#calendar").html(calendarHtml);
			}
		}
	});
}

function nextMonth(Year,Month){
	var year = Year;
	var month = Month + 1;
	if(month == 13){
		year = year + 1;
		month = 1;
	}
	
	$.ajax({
		async: false,
		url:'http://xapp.baihe.com/sign/calendar?rand='+Math.random()*500,
		type:'get',
		dataType:'jsonp',
		jsonp: 'jsoncallback',
		data: 'year='+year+'&month='+month, 
		contentType: "application/json;utf-8",
		success:function(data){
			calendarHtml = calendar(data);
			ymHtml = ym(year,month);
			if(calendarHtml && ymHtml){
				$("#ym").html(ymHtml);
				$("#calendar").html(calendarHtml);
			}
		}
	});
}

function ym(year,month){
	var dhtml = '';
    	dhtml += '<a href="javascript:void(0);" onclick="prevMonth('+year+','+month+')" class="prev">上月</a>';
    	dhtml += '<span>'+year+'年'+month+'月</span><a href="javascript:void(0);" onclick="nextMonth('+year+','+month+')" class="next">下月</a>';
	return dhtml;
}

function calendar(data){
	var dhtml = "";
	for(var i=0;i<data.calendar.week;i++){
		dhtml += "<li></li>";
	}
	for(var day=1;day<=data.calendar.allDay.DayOfMonth;day++){
		if(data.calendar.allDay.signInfo[day] == 1){
			if(day == data.calendar.day){
				dhtml += "<li class='current'>"+day+"</li>";
			}else{
				dhtml += "<li class='default'>"+day+"</li>";	
			}
		}else{
			dhtml += "<li>"+day+"</li>";
		}
	}
	for(day--;(day+data.calendar.week)%7!=0;day++){
		dhtml +="<li></li>";
	}
	return dhtml;
}
//-------日历end

// 今日签到
function sign(){
	new Image().src="http://bhtg.baihe.com/stat.html?ggCode=dlqd_1";
	$.ajax({
		async: false,
		url:'http://xapp.baihe.com/sign/index?rand='+Math.random()*500,
		type:'get',
		dataType:'jsonp',
		jsonp: 'jsoncallback',
		data: null, 
		contentType: "application/json;utf-8",
		success:function(json_data){
			//$('.signBtn').html('<a style="color:#FFF;" href="http://bhtg.baihe.com/stat.html?ggCode= dlqd_4#http://club.baihe.com/index/index" target="_blank">成长俱乐部>></a>');
			$('#signIn').html('<a href="http://bhtg.baihe.com/stat.html?ggCode=chzhjlb_18#http://club.baihe.com/lottery/" class="red icon" target="_blank">花瓣抽好礼</a>');
            //弹出签到
            signCalendar(json_data);
		}
	});
}