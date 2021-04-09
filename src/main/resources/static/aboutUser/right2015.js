/**
 * Created by zhangzhao on 15-1-28.
 */

$(function(){
    /*try{
        signAward();
    }catch(e){};*/
    try{
        superMe();
    }catch(e){};
    /*try{
        threeTask();
    }catch(e){};*/
    try{
        happiness();
    }catch(e){};
    try{
        getPVNum();
    }catch(e){};
    try{
        getUnReadCount();
    }catch(e){};
});

//未读消息
function getUnReadCount(){
    $.ajax({
        async: true,
        url:'//msg.baihe.com/owner/api/getUnReadCount',
        type:'get',
        dataType:'jsonp',
        jsonp: 'jsonCallBack',
        data: null,
        contentType: "application/json;utf-8",
        success:function(data){
            if(data.code==200){
                if(data.data.unReadCount>998){
                    $('#getUnReadCount').html('999+');
                }else{
                    $('#getUnReadCount').html(data.data.unReadCount);
                    /*var unReadCount = data.data.unReadCount;
                    var msgHasBC = data.data.msgHasBC;
                    if(unReadCount < 1){
                        if( !msgHasBC ){
                            $('#getUnReadCount').html(0);
                            return false;
                        }
                        var photoUrl ='';
                        photoUrl = getHasUnReadUid();
                        if(photoUrl.headPhotoUrl != ''){
                            var html = '<span class="unread-dot"></span><img src="'+photoUrl.headPhotoUrl+'">';
                            $('#getUnReadCount').attr('class','unread-avatar').html(html);
                        }else {
                            $('#getUnReadCount').html(0);
                        }
                    }else{
                        $('#getUnReadCount').html(data.data.unReadCount);
                    }*/
                }
            }
        }
    });
}

//获取用户头像
function getHasUnReadUid(){
    var photoUrl = '';
    $.ajax({
        async: false,
        url:'//u.baihe.com/index/getHasUnReadUid',
        type:'get',
        dataType:'json',
        contentType: "application/json;utf-8",
        success:function(hasRes){
            if(hasRes.state == 200){
                photoUrl = hasRes.data;
            }
        }
    });
    return photoUrl;
}

//得到最近访问
function getPVNum(){
    $.ajax({
        async: true,
        url:'//u.baihe.com/index/getTraffic?uid='+userInfoJson.uid,
        type:'get',
        dataType:'json',
        data: null,
        contentType: "application/json;utf-8",
        success:function(data){
            if(data && data.ViewMePv>998){
                $('#noReadMsg').html('999+');
            }else{
                $('#noReadMsg').html(data.ViewMePv);
            }
        }
    });
}

//签到有奖
/*function signAward(){
    $.ajax({
        async: true,
        url:'//xapp.baihe.com/sign/isSign',
        type:'get',
        dataType:'jsonp',
        jsonp: 'jsoncallback',
        data: null,
        contentType: "application/json;utf-8",
        success:function(data){
            if(data.sign == 0){
                $('#signIn').html('<a href="javascript:sign();" class="icon" onclick="baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.470.1392\'});">签到有奖</a>');
            }else{
                $('#signIn').html('<a href="//club.baihe.com/lottery" spm="4.2.2.769.2048" event="3" class="red icon" target="_blank">花瓣抽好礼</a>');
            }
        }
    });
}*/

//至尊和金至尊爱情速递领取
function superMe(){
    $.getJSON('//u.baihe.com/index/ifDraw?uid='+userInfoJson.uid,function(data){
        if(data.state==1&&data.data=="ok"){
            $('#superVip').html('<a id="superMeBtn" class="orangeT" href="javascript:;" style="text-align:center;">立即领取 爱情速递</a>');
            $('#superMeBtn').click(function(){
                $.getJSON('//u.baihe.com/index/bhSudi?uid='+userInfoJson.uid);
                $('#superVip').html('<a class="orangeT" style="cursor:default;text-align:center;">今日已领取爱情速递</a>');
            });
        }else{
            $('#superVip').html('<a class="orangeT" style="cursor:default;text-align:center;">今日已领取爱情速递</a>');
        }
    });
}

//爱情银行
function showLoveBank(){
    var url = "//xact.baihe.com/lovebank/hasOpened?jsoncallback=?";
    $.ajax({
        type : "get",// 只有get方式可以实现跨域 post不可以
        url : url,// 后台处理程序
        async : false, // 跨域调用 async参数不起作用，默认异步
        dataType:'jsonp',
        jsonp: 'jsoncallback',
        timeout : 1000,
        data : null, // 传入参数
        beforeSend : function(XMLHttpRequest) {
        },// 传入之前等待
        success : function(data) {
            if (data.state == 1) {
                var html = '';
                html += '爱情银行帮你实现爱情梦想<br /><a href="http://xact.baihe.com/lovebank" class="orangeT" onmousedown="baihe.bhtongji.tongji({\'event\':\'3\',\'spm\':\'4.2.2.835.2241\'});" target="_blank">去充值</a>';
                $("#loveBank").html(html);
            }else{
                var html = '';
                html += '爱情银行帮你实现爱情梦想<br /><a href="http://xact.baihe.com/lovebank" class="orangeT" onmousedown="baihe.bhtongji.tongji({\'event\':\'3\',\'spm\':\'4.2.2.471.1393\'});" target="_blank">马上去实现</a>';
                $("#loveBank").html(html);
            }
        },// 成功数据后处理
        complete : function(XMLHttpRequest, textStatus) {
        },// 完成数据处理后
        error : function() {
            // 请求出错处理
        }
    });
}

//统计spm码
function spmCount(code){
    new Image().src="//spm.baihe.com?spm="+code;
    return true;
}

//成长俱乐部三个任务
/*function threeTask(){
    var czjlbSpm = ['spm="4.2.2.485.1407" event="3"','spm="4.2.2.486.1408" event="3"','spm="4.2.2.487.1409" event="3"'];
    $.ajax({       	
        url:'//club.baihe.com/outer/getTodayTask',
        type:'get',
        dataType:'jsonp',   
        jsonp: 'jsonCallBack', 
        success:function(data){       
        	var hrefUrl="//club.baihe.com/index/today";
            var html = '';
            $.each(data,function(key,val){            	
                html +='<li><a href="'+hrefUrl+'" '+czjlbSpm[key]+' target="_blank"><p class="'+val.icon+'">'+val.taskName+'</p>'+val.taskName+'</a></li>';
            });          
            $('#myTask').html(html);
        }
    });
}*/

//他们收获幸福
function happiness(){
    $.ajax({
        async: false,
        url:'//u.baihe.com/index/happiness',
        type:'get',
        dataType:'json',
        contentType: "application/json;utf-8",
        success:function(data){
            var html = '';
            html += '<ul>';
            $.each(data,function(key,val){
                html += '<li><span class="orangeT">'+val.nickname+'</span>'+val.loveStateChn+'</li>';
            });
            html += '</ul>';
            $('#scrollDiv2').html(html);
            happround();
        }
    });
}
