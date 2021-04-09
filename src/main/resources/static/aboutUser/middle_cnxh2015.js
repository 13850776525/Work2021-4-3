/**
 * Created by zhangzhao on 15-5-14.
 * 猜你喜欢，已喜欢
 */

$(function(){
    baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.518.1442'});
    cnxhGetData();

    //点击喜欢
    $("div#likeCode").delegate('a.likeIcon','click',function(){
        var parents = $(this).parent().parent();
        $(this).removeClass("likeIcon").addClass("grey").text('已喜欢');
        var haveUid = $(this).attr('oppId');
        greet2(haveUid,'02.00.10205');//打招呼
        baihe.bhtongji.clickTongJi({'event':'3','spm':'4.28.2.464.1384'});//打招呼的打点

        //给后台传数据
        $.ajax({
            async: false,
            url:'//u.baihe.com/index/likeOne',
            type:'get',
            dataType:'json',
            data:{uid:haveUid},
            contentType: "application/json;utf-8",
            success:function(res){
                if (res <= 0){
                    $("#guessNextPage").css("display","none");
                    $("#likeCode").html('<div class="look"><p>每天只推荐40位会员哦，　<a target="_blank" href="//search.baihe.com/" class="orangeT">去看看其他优质会员! ></a></p></div>');
                }
            },
            error:function(){
            }
        });
    });
});

//取数据
function cnxhGetData(){
    $.ajaxSetup({ cache: false });
    $.ajax({
        async: true,
        url:'//u.baihe.com/index/webGuessLike',
        type:'get',
        dataType:'json',
        data:null,
        contentType: "application/json;utf-8",
        success:function(res){
                if(res.datas.length <= 0){
                    $("#guessNextPage").css("display","none");
                    $("#likeCode").html('<div class="look"><p>每天只推荐40位会员哦!　<a href="//search.baihe.com/" class="orangeT">去看看其他优质会员! ></a></p></div>');
                }else if(res.endCount<=0){
                    $("#guessNextPage").css("display","none");
                    fourList(res.datas);
                }else{
                    fourList(res.datas);
                }
        },
        error:function(){
        }
    });
}

//显示4个人
function fourList(cnxhDatas){
    var cnxhSpm = ['spm="4.2.2.521.1445" event="3"','spm="4.2.2.522.1446" event="3"','spm="4.2.2.523.1447" event="3"','spm="4.2.2.524.1448" event="3"'];
    var htmlList = '';
    var count = 0;
    $.each(cnxhDatas,function(i,cnxhPerson){
        count++;
        if(count>4){
            return false;
        }else{
            htmlList += '<div class="likeCont">';
            htmlList += '<a target="_blank" href="//profile1.baihe.com?oppID='+cnxhPerson.userID+'" '+cnxhSpm[i]+'><img src="'+ cnxhPerson.headPhotoUrl+'" alt="" /></a>';
            htmlList += '<div class="txt">';
            htmlList += '<p class="f16">'+ cnxhPerson.nickname+'</p>';
            htmlList += '<p class="c333">'+ cnxhPerson.age+'岁 '+ cnxhPerson.height+'cm '+ cnxhPerson.educationChn+'</p>';
            htmlList += '<p class="cbd"></p>';
            htmlList += '</div>';
            htmlList += '<div class="flashIcon">';
            htmlList += '<div id="Matching_'+cnxhPerson.userID+'">';
            htmlList += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="60" height="60" id="'+cnxhPerson.userID+'" align="middle">';
            htmlList += '<param name="movie" value="//u.baihe.com/static/img/percentCircle.swf" />';
            htmlList += '<param name="quality" value="high" />';
            htmlList += '<param name="bgcolor" value="#ffffff" />';
            htmlList += '<param name="play" value="true" />';
            htmlList += '<param name="loop" value="true" />';
            htmlList += '<param name="wmode" value="Transparent" />';
            htmlList += '<param name="scale" value="showall" />';
            htmlList += '<param name="menu" value="true" />';
            htmlList += '<param name="devicefont" value="false" />';
            htmlList += '<param name="salign" value="" />';
            htmlList += '<param name="flashvars" value="percent='+cnxhPerson.percent+'" />';
            htmlList += '<param name="allowScriptAccess" value="sameDomain" />';
            htmlList += '<!--[if !IE]>-->';
            htmlList += '<object type="application/x-shockwave-flash" data="//u.baihe.com/static/img/percentCircle.swf" width="60" height="60">';
            htmlList += '<param name="movie" value="//u.baihe.com/static/img/percentCircle.swf" />';
            htmlList += '<param name="quality" value="high" />';
            htmlList += '<param name="bgcolor" value="#ffffff" />';
            htmlList += '<param name="play" value="true" />';
            htmlList += '<param name="loop" value="true" />';
            htmlList += '<param name="wmode" value="Transparent" />';
            htmlList += '<param name="scale" value="showall" />';
            htmlList += '<param name="menu" value="true" />';
            htmlList += '<param name="devicefont" value="false" />';
            htmlList += '<param name="salign" value="" />';
            htmlList += '<param name="flashvars" value="percent='+cnxhPerson.percent+'" />';
            htmlList += '<param name="allowScriptAccess" value="sameDomain" />';
            htmlList += '<!--<![endif]-->';
            htmlList += '<a href="//www.adobe.com/go/getflash">';
            htmlList += '<img src="//www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获得 Adobe Flash Player" />';
            htmlList += '</a>';
            htmlList += '<!--[if !IE]>-->';
            htmlList += '</object>';
            htmlList += '<!--<![endif]-->';
            htmlList += '</object>';
            htmlList += '</div>';
            htmlList += '<a href="javascript:void(0);" class="likeIcon" oppId='+cnxhPerson.userID+'>喜欢</a>';
            htmlList += '</div>';
            htmlList += '</div>';
        }
    });
    $("#likeCode").html('').html(htmlList);
}

//换一组
function guessYouLike(){
    baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.520.1444'});
    cnxhGetData();
}

//已喜欢分页
function pagination(num){
    $.ajax({
        url:"//u.baihe.com/index/limitList",
        type:"post",
        data:{"num":num},
        dataType:"json",
        success:function(msg){
            if(typeof msg !="undefined" && msg){
                var haveList="";
                for(var i =0; i<msg['result'].length;i++){
                    haveList+= '<li>';
                    haveList+= '<a target="_blank" href="//profile1.baihe.com?oppID='+msg['result'][i].userID+'"><div class="txt"><div></div><p>'+msg['result'][i].age+'岁&nbsp;&nbsp;&nbsp;'+msg['result'][i].education+'</p></div><img src='+msg['result'][i].headPhotoUrl+' width="120" height="150" /></a>';
                    haveList+= '<a style="cursor:pointer" onclick="addfocus('+msg['myUserID']+','+msg['result'][i].userID+');" class="other" id="loveFoucs'+msg['result'][i].userID+'">关注</a>';
                    haveList+= '<a onclick="sendMessage('+msg['result'][i].userID+',\'01.00.10206\');" style="cursor:pointer" class="red">发消息</a>';
                    haveList+= '</li>';
                }
                $("#ulList").html('').html(haveList);

                var page = '';
                if(msg['page']== 1){
                    page += '<div class="num">'+msg['page']+'/'+msg['pages']+'</div>';
                    page += '<a class="nextOver" style="cursor:pointer" onclick="pagination('+msg.xpage+')">后</a>';
                }else if(msg['page']==msg['pages']){
                    page += '<a class="prevOver" style="cursor:pointer" onclick="pagination('+msg.spage+')">前</a>';
                    page += '<div class="num">'+msg['page']+'/'+msg['pages']+'</div>';
                }else {
                    page += '<a class="prevOver" style="cursor:pointer"  onclick="pagination('+msg.spage+')">前</a>';
                    page += '<div class="num">'+msg['page']+'/'+msg['pages']+'</div>';
                    page += '<a class="nextOver" style="cursor:pointer" onclick="pagination('+msg.xpage+')">后</a>';
                }
                $("#pageList").html('').html(page);
            }
        }
    });
}

//关注
function addfocus(userID,targetUserID){
    $.ajax({
        url:"//u.baihe.com/index/addFocus",
        type:"post",
        data:{"userID":userID,"targetUserID":targetUserID},
        dataType:"json",
        success:function(result){
            if(result== true){
                var msg = "恭喜你，关注成功！";
                msg += "现在主动发一封站内信给Ta吧!";
                msg += "幸福往往由一个良好的沟通开始。";
                var loveId = "#loveFoucs"+targetUserID;
                $(loveId).removeAttr("onclick").removeClass("other").addClass("greyB").text('已关注');
                baihe.block({
                    type: 0,
                    title: '提示',
                    text: msg,
                    callback: function() {
                        $.unblockUI();
                    }
                });
            }else{
                baihe.block({
                    type: 0,
                    title: '提示',
                    text: "关注失败！",
                    callback: function() {
                        $.unblockUI();
                    }
                });
            }
        }
    });
}



