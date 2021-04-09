/**
 * Created by zhangzhao on 15-5-21.
 * 焦点明星/魅力会员
 */

$(function(){
     /*if(userInfoJson.usertype=='VIP_SUPER' || userInfoJson.usertype=='VIP_JSUPER'|| userInfoJson.usertype=='VIP_JSUPER_LovePull'){
        charmLeaguer();//魅力会员
    }
    else{
        focusStar();//焦点明星
    }*/
	todaystar();//今日明星
});
//焦点明星
function focusStar(){
    var jdmxSpm = ['spm="4.2.2.490.1412" event="3"','spm="4.2.2.491.1413" event="3"','spm="4.2.2.492.1414" event="3"','spm="4.2.2.493.1415" event="3"'];
    var title = '<a href="//lovebox.baihe.com/focusstar.action" onclick="baihe.cookie.setCookie(\'orderSource\', \'10030901\',\'\',\'\',\'.baihe.com\');" spm="4.2.2.489.1411" event="3" target="_blank" class="cbd">立即提升></a>焦点明星<span class="orangeT">曝光度迅速提升！ </span>';
    $('#startTitle').html(title);
    $.ajax({
        async: true,
        url:'//u.baihe.com/index/focusStar',
        type:'get',
        dataType:'json',
        data: null,
        contentType: "application/json;utf-8",
        success:function(data){
            var val = data;
            if(val.length == 0 || !val){
                $("#starts").html('').html('<div class="look"><p>还没有符合您的焦点明星用户哦，　<a href="//my.baihe.com/matchintention" class="orangeT">放宽择偶条件 ></a> 爱来的更高效！</p></div>');
            }else{
                var startHtml = '';
                var count = 0;
                $.each(val,function(i,onePerson){
                    count++;
                    if(count>4){
                        return false;
                    }else{
                        startHtml += '<li>';
                        startHtml += '<a target="_blank" href="//profile1.baihe.com?oppID='+onePerson.userID+'" '+jdmxSpm[i]+'><img src="'+onePerson.headPhotoUrl+'" alt="" /><div class="cont"><div class="txt">'+onePerson.age+'岁 ';
                        if(onePerson.education != null){
                            startHtml += onePerson.education;
                        }
                        startHtml += '</div><div class="black"></div></div></a>';
                        startHtml += '<a href="javascript:;" class="orange jdmxorg" oppId="'+onePerson.userID+'">打招呼</a>';
                        startHtml += '</li>';
                    }
                });
                $('#starts').html('').html(startHtml);

                $(".jdmxorg").live('click',function(){
                    var _parent=$(this).parent();
                    $(this).removeClass('orange').addClass('grey').text('已打招呼');
                    greet2($(this).attr('oppId'),'02.00.10215');//焦点明星打招呼
                    baihe.bhtongji.clickTongJi({'event':'3','spm':'4.28.2.463.1383'});//打招呼的打点
                });
            }
        }
    });
}


// 获取今日明星
function todaystar(){
    var title = '<a href="//product.baihe.com/Viptodaystar" onclick="baihe.cookie.setCookie(\'orderSource\', \'10030901\',\'\',\'\',\'.baihe.com\');" target="_blank" class="cbd">立即提升></a>今日明星<span class="orangeT">曝光度迅速提升！ </span>';
    $('#startTitle').html(title);
    $.ajax({
        async: true,
        url:'//search.baihe.com/Search/todayStarList?pageRows=4&jsonCallBack=?', 
        type:'get',
        dataType:'jsonp',
        jsonp: 'jsonCallBack',
        success:function(data){
        	if(data.state!=-1){
				var total=data.data;
				if(total.length == 0 || !total){
					$("#starts").html('').html('<div class="look"><p>还没有符合您的今日明星用户哦，　<a href="//my.baihe.com/matchintention" class="orangeT">放宽择偶条件 ></a> 爱来的更高效！</p></div>');
				}else{
					//根据userID 取用户资料
		            getInfo(total);
		        }
			}else{
				window.location.href='//my.baihe.com/login/?ReturnUrl=https://u.baihe.com/';
			}
        }
    });
}


// 今日明星
function getInfo(total){
	$.ajax({
		url:'//search.baihe.com/search/getUserList?userIDs='+total+'&jsonCallBack=?', 
		type:'get',
		dataType:'jsonp',
		async : true,
		jsonp: 'jsonCallBack',
		success:function(data){
			if(data.state!=-1){
				if(data.data.length>0){
					var startHtml = '';
					$(data.data).each(function(i,elem){
					    if (i < 4){
                            var info=data.data[i];
                            startHtml += '<li>';
                            startHtml += '<a target="_blank" href="//profile1.baihe.com?oppID='+info.userID+'"><img width="120px" height="150px" src="'+info.headPhotoUrl1+'" alt="" /><div class="cont"><div class="txt">'+info.age+'岁 ';
                            if(info.education != null){
                                startHtml += info.educationChn;
                            }
                            startHtml += '</div><div class="black"></div></div></a>';
                            startHtml += '<a href="javascript:;" class="orange jdmxorg" oppId="'+info.userID+'">打招呼</a>';
                            startHtml += '</li>';
                        }
					});
					
					$('#starts').html('').html(startHtml);

	                $(".jdmxorg").live('click',function(){
	                    var _parent=$(this).parent();
	                    $(this).removeClass('orange').addClass('grey').text('已打招呼');
	                    greet2($(this).attr('oppId'),'02.00.10215');//焦点明星打招呼
	                    baihe.bhtongji.clickTongJi({'event':'3','spm':'4.28.2.463.1383'});//打招呼的打点
	                });
				}else{
					$("#starts").html('').html('<div class="look"><p>还没有符合您的今日明星用户哦，　<a href="//my.baihe.com/matchintention" class="orangeT">放宽择偶条件 ></a> 爱来的更高效！</p></div>');
				}
			}else{
				window.location.href='//my.baihe.com/login/?ReturnUrl=https://u.baihe.com/';
			}
		}
	});
}

//魅力会员
function charmLeaguer(){
    var title = '<a href="//u.baihe.com/mlhy" target="_blank" class="cbd">更多></a>魅力会员<span class="orangeT">曝光度迅速提升！ </span>';
    $('#startTitle').html(title);
    $.ajax({
        async: true,
        url:'//u.baihe.com/index/charmMember',
        type:'get',
        dataType:'json',
        data: null,
        contentType: "application/json;utf-8",
        success:function(data){
            var startHtml = '';
            var val = data;
            if(val.length == 0 || !val){
                $("#starts").html('').html('<div class="look"><p>还没有符合您的魅力会员用户哦，　<a href="//my.baihe.com/matchintention" class="orangeT">放宽择偶条件 ></a> 爱来的更高效！</p></div>');
            }else{
                var count = 0;
                $.each(val,function(i,onePerson){
                    count++;
                    if(count>4){
                        return false;
                    }else{
                        startHtml += '<li>';
                        startHtml += '<a target="_blank" href="//profile1.baihe.com?oppID='+onePerson.userID+'"><img src="'+onePerson.headPhotoUrl+'" alt="" /><div class="cont"><div class="txt">'+onePerson.age+'岁 ';
                        if(onePerson.education != null){
                            startHtml += onePerson.education;
                        }
                        startHtml += '</div><div class="black"></div></div></a>';
                        startHtml += '<a href="javascript:;" class="orange mlhyorg" oppId="'+onePerson.userID+'">心动问候</a>';
                        startHtml += '</li>';
                    }
                });
                $('#starts').html('').html(startHtml);
                //心动问候
                $(".mlhyorg").live('click',function(){
                    var _parent=$(this).parent();
                    $(this).removeClass('orange').addClass('grey').text('问候已送达');
                    greet2($(this).attr('oppId'),'02.00.10201');//魅力会员打招呼
                    baihe.bhtongji.clickTongJi({'event':'3','spm':'4.28.2.463.1383'});//问候的打点
                });
            }
        }
    });
}
