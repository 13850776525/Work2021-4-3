/**
 * Created by zhangzhao on 15-5-13.
 * 看过我，关注我
 * 我关注的
 */

$(function(){
	myfocus();
});

//看过我的
function lookMe(){
    baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.24.1416'});
    var kgwdSmp = ['spm="4.2.2.495.1419" event="3"','spm="4.2.2.496.1420" event="3"','spm="4.2.2.497.1421" event="3"','spm="4.2.2.498.1422" event="3"','spm="4.2.2.499.1423" event="3"','spm="4.2.2.500.1424" event="3"'];
    $("#userListMore").attr("href", "//u.baihe.com/viewme/index");
    $("#userListMore").attr("spm", "4.2.2.494.1418");
    $("#userListMore").attr("event", "3");
    baihe.bhtongji.autoTongJi('userListMore');
    $('#usrTab3').removeClass('active');
    $('#usrTab2').removeClass('active');
    $('#usrTab1').addClass('active');
    $.ajax({
        async: true,
        url:'//u.baihe.com/Viewme/getList?type=1&nowPage=1',
        type:'get',
        dataType:'json',
        //dataType:'jsonp',
        //jsonp: 'jsoncallback',
        data: null,
        contentType: "application/json;utf-8",
        success:function(datas){
            var data = datas.data.listArr.list;
            if(data.length>0){
                var html = '';
                html += '<ul>';
                for(var i=0;i<6;i++){
                    if (typeof data[i] == 'undefined'  || data[i] == null) {
                        continue;
                    }
                    if(data[i] && typeof(data[i].userID) !== 'undefined'){
                        html += '<li><a href="//profile1.baihe.com?oppID='+data[i].userID+'" '+kgwdSmp[i]+' target="_blank" class="c333"><img src="'+data[i].headPhotoUrl+'" alt="" />'+data[i].age+'岁 '+data[i].countryChn+'</a></li>';
                    }else{
                        html += '<li><a href="//u.baihe.com/viewme/index" '+kgwdSmp[i]+' target="_blank" class="c333"><img src="'+data[i].headPhotoUrl+'" alt="" />'+data[i].age+'岁 '+data[i].countryChn+'</a></li>';
                    }
                }
                html += '</ul>';
                $("#look").html('').html(html);
                baihe.bhtongji.autoTongJi("look");
            }else{
                $("#look").html('').html('<div class="look"><p>呜呜，还没有人看过你　<a target="_blank" href="//search.baihe.com" class="orangeT">去看看你喜欢的人呗！></a></p></div>');
            }
        }
    });

}

// 金至尊牵线
function pull(targetUserID){
	baihe.block({
	    text: '你是否请求红娘与Ta进行牵线？',
	    callback: function(){
			$.ajax({
				url: "//product.baihe.com/Vipjsupermatch/pull?jsonCallBack=?",
				type: "post",
				data: {"targetUserID": targetUserID},
				dataType:"jsonp",
				success: function (msg) {
					if(msg.state == 3){
						window.open('//product.baihe.com/Vipjsupermatch/');
					}
					baihe.block({
						text: msg.data
                    });
				}
			});
		}
	});
}

// 相亲牵线
var connectNum = 0;
function xqpull(targetUserID){
    baihe.block({
        text: '你是否请求红娘与Ta进行牵线？',
        callback: function(){
            blindPull(targetUserID);
        }
    });
}

function blindPull(targetUserID){
    var p = '{"userID":"' + userId + '","targetUserID":"'+targetUserID+'","type":"11"}';
    var _tstr = getEncrypt(p);
    $.ajax({
        type: 'GET',
        url: '//cpi.baihe.com/lovepull/blindpull?stk='+stk+'&_t=' + _tstr.timestamp + '_' + _tstr._tstr + '&p=' + p + '&vrt={"lang":"cn","brand":"DZB","appver":"","channel":"bw_amdps_asdga","platform":"api","phoneModel":"api-com","phoneOSVersion":"1.0.0","deviceid":"asdg-12431j-sas-12-adg-3w22","iosuuid":"","plusChannel":"xdsat_xdgas_sad__23","plusCode":"ag223423","port":"12341","mac":15121,"imsi":"","info":""}',
        traditional: true,
        async: true,
        dataType: "json",
        contentType: 'text/plain',
        success: function (msg) {
            if(msg.data.confirmCode){
                connectNum = 0;
                if(msg.data.confirmCode == '7'){
                    setTan();
                }else if(msg.data.confirmCode == '44'){
                    baihe.block({
                        text: msg.data.message,
                        callback: function(){
                            window.open('//product.baihe.com/xq');
                        }
                    });
                }else{
                    baihe.block({
                        text: msg.data.message,
                        callback: function(){}
                    });
                }
            }else if(msg.retCode = '100001'){
                getToken(function (){
                    if(connectNum < 2){
                        blindPull(targetUserID);
                        connectNum++;
                    }
                });
            }else{
                baihe.block({
                    text: msg.msg,
                    callback: function(){}
                });
            }
        }
    });
}


function getToken(fn){
    $.ajax({
        type: 'GET',
        url: "//product.baihe.com/Xqpull/getToken?jsonCallBack=?",
        traditional: true,
        async: true,
        dataType: "json",
        contentType: 'text/plain',
        success: function (msg) {
            if(msg.state == 1){
                stk = msg.data;
                if(fn){
                    fn();
                }
            }else{
                getToken(fn);
            }
        }
    });
}

// 王晨新加金至尊牵线需求，暂时没有打点
//我关注的
function myfocus(){
    $("#userListMore").attr("href", "//u.baihe.com/viewme/careme");
    $('#usrTab3').removeClass('active');
    $('#usrTab1').removeClass('active');
    $('#usrTab2').addClass('active');
    $.ajax({
        async: true,
        url:'//u.baihe.com/Viewme/getList?&jsonCallBack=?&type=4&nowPage=1',
        type:'get',
        dataType:'json',
        data: null,
        contentType: "application/json;utf-8",
        success:function(datas){
            var data = datas.data.listArr.list;
            if(data.length>0){
                var html = '';
                html += '<ul>';
                for(var i=0;i<6;i++){
                	if (typeof data[i] != "object" || data[i] == null) {
                        continue;
                    }
                    if(data[i].userID != "undefined"){
                        html += '<li><a href="//profile1.baihe.com?oppID='+data[i].userID+'" target="_blank" class="c333"><img src="'+data[i].headPhotoUrl+'" alt="" />'+data[i].age+'岁 '+data[i].countryChn+'</a>';
                    }
                    if(userService == 1){
                        html += '<a href="javascript:;" onclick="pull(\''+data[i].userID+'\')" class="qq">求牵</a></li>';
                    }else{
                        html += '<a href="javascript:;" onclick="xqpull(\''+data[i].userID+'\')" class="qq">求牵</a></li>';
                    }
                }
                html += '</ul>';
                $("#look").html('').html(html);
            }else{
            	$("#look").html('').html('<div class="look"><p>呜呜，你还没有关注过任何人　<a target="_blank" href="//search.baihe.com" class="orangeT">去看看你喜欢的人呗！></a></p></div>');
            }
        }
    });
}

//关注我的
function careMe(){
    baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.25.1417'});
    var gzwdSmp = ['spm="4.2.2.501.1425" event="3"','spm="4.2.2.502.1426" event="3"','spm="4.2.2.503.1427" event="3"','spm="4.2.2.504.1428" event="3"','spm="4.2.2.505.1429" event="3"','spm="4.2.2.506.1430" event="3"'];
    $("#userListMore").attr("href", "//u.baihe.com/viewme/careme");
    $("#userListMore").attr("spm", "4.2.2.494.1418");
    $("#userListMore").attr("event", "3");
    baihe.bhtongji.autoTongJi('userListMore');
    $('#usrTab1').removeClass('active');
    $('#usrTab2').removeClass('active');
    $('#usrTab3').addClass('active');
    $.ajax({
        async: true,
        url:'//u.baihe.com/Viewme/getList?type=3&nowPage=1',
        type:'get',
        dataType:'json',
        //dataType:'jsonp',
        //jsonp: 'jsoncallback',
        data: null,
        contentType: "application/json;utf-8",
        success:function(datas){
            var data = datas.data.listArr.list;
            if(data.length>0){
                var html = '';
                html += '<ul>';
                for(var i=0;i<6;i++){
                    if (typeof data[i] == 'undefined'  || data[i] == null) {
                        continue;
                    }

                    if(typeof(data[i].userID) !== 'undefined'){
                        html += '<li><a href="//profile1.baihe.com?oppID='+data[i].userID+'" '+gzwdSmp[i]+' target="_blank" class="c333"><img src="'+data[i].headPhotoUrl+'" alt="" />'+data[i].age+'岁 '+data[i].countryChn+'</a></li>';
                    }else{
                        html += '<li><a href="//u.baihe.com/viewme/careme" '+gzwdSmp[i]+' target="_blank" class="c333"><img src="'+data[i].headPhotoUrl+'" alt="" />'+data[i].age+'岁 '+data[i].countryChn+'</a></li>';
                    }
                }
                html += '</ul>';
                $("#look").html('').html(html);
                baihe.bhtongji.autoTongJi("look");
            }else{
                $("#look").html('').html('<div class="look"><p>不是你不优秀，而是还没遇到缘分　<a target="_blank" href="//search.baihe.com" class="orangeT">立即结缘！></a></p></div>');
            }
        }
    });
}


function setTan(){
    var addHtml = '';
    addHtml += '<div id="layer4" style="margin-top: -200px;">\n' +
        '        <div class="blind-layer3">\n' +
        '            <a href="javascript:;" class="blind-layerClose layerClose"></a>\n' +
        '            <div class="blind-layerMain">\n' +
        '                <div class="blind-layerTitle3"></div>\n' +
        '                <div class="blind-layerTxt3">\n' +
        '                    您的专属红娘会通过电话为您牵线，为了不让您错过<bt/>缘分，请您使用常用的手机号码进行验证\n' +
        '                </div>\n' +
        '                <div class="blind-layerRel mt15">\n' +
        '                    <input type="text" placeholder="请输入手机号"  class="blind-layerInput" id="mobile" />\n' +
        '                </div>\n' +
        '                <div class="blind-layerRel fn-clear mb30">\n' +
        '                    <input type="text" placeholder="请输入验证码"  class="blind-layerInput blind-layerInput2" id="yzm" />\n' +
        '                    <a href="javascript:;" class="blind-layerVerify">获取验证码</a>\n' +
        '                </div>\n' +
        '                <a href="javascript:;" class="blind-layerBtn blind-layerBtnDis" id="blind-layerBtnDis">确认</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';

    $.blockUI({
        message: addHtml
    });

    $('.layerClose').click(function() {
        $.unblockUI();
    });


    $('#blind-layerBtnDis').click(function() {
        var mobile = $("#mobile").val();
        var yzm = $("#yzm").val();
        var re_mobile = /^(1)\d{10}$/;
        if(mobile==""){
            alert("手机号不能为空");
            return false;
        }
        if(yzm==""){
            alert("手机号验证码不能为空");
            return false;
        }
        if(!re_mobile.test(mobile)){
            alert("号码输入错误");
            return false;
        }
        var p = '{"userID":"' + userId + '","phone":"'+mobile+'","code":"'+yzm +'"}';
        var _tstr = getEncrypt(p);
        $.ajax({
            type: 'GET',
            url: '//cpi.baihe.com/lovepull/blindpullconfirm?stk='+stk+'&_t=' + _tstr.timestamp + '_' + _tstr._tstr + '&p=' + p + '&vrt={"lang":"cn","brand":"DZB","appver":"","channel":"bw_amdps_asdga","platform":"api","phoneModel":"api-com","phoneOSVersion":"1.0.0","deviceid":"asdg-12431j-sas-12-adg-3w22","iosuuid":"","plusChannel":"xdsat_xdgas_sad__23","plusCode":"ag223423","port":"12341","mac":15121,"imsi":"","info":""}',
            dataType: "json",
            contentType: 'text/plain',
            success: function (msg) {
                if(msg.retCode == 1) {
                    $.unblockUI();
                    baihe.block({
                        text: msg.msg,
                        callback: function () {
                        }
                    });
                }else{
                    baihe.block({
                        text: msg.msg,
                        callback: function () {
                        }
                    });
                }
            }
        });

    });

    $('.blind-layerVerify').click(function(){
        var $this = $(this);
        if( $this.is('.layerVerify') ){
            return false;
        }else{
            var mobile = $("#mobile").val();
            var re_mobile = /^(1)\d{10}$/;
            if(mobile==""){
                alert("手机号不能为空");
                return false;
            }
            if(!re_mobile.test(mobile)){
                alert("号码输入错误");
                return false;
            }
            var p = '{"mobile":"' + mobile + '"}';
            var _tstr = getEncrypt(p);
            $.ajax({
                type: 'GET',
                url: '//cpi.baihe.com/code/sendcode?stk='+stk+'&_t=' + _tstr.timestamp + '_' + _tstr._tstr + '&p=' + p + '&vrt={"lang":"cn","brand":"DZB","appver":"","channel":"bw_amdps_asdga","platform":"api","phoneModel":"api-com","phoneOSVersion":"1.0.0","deviceid":"asdg-12431j-sas-12-adg-3w22","iosuuid":"","plusChannel":"xdsat_xdgas_sad__23","plusCode":"ag223423","port":"12341","mac":15121,"imsi":"","info":""}',
                dataType: "json",
                contentType: 'text/plain',
                success: function (msg) {
                    if(msg.retCode == 1){
                        var time = null;
                        var num = 60;
                        $this.html(num);
                        $this.addClass('layerVerify');
                        time = setInterval(function(){
                            num--;
                            $this.html(num);
                            if(num < 0){
                                $this.removeClass('layerVerify');
                                $this.html('获取验证码');
                                clearInterval(time);
                            }
                        },1000);
                    }else{
                        baihe.block({
                            text: msg.msg,
                            callback: function () {
                            }
                        });
                    }
                }
            });

        }

    });
}

