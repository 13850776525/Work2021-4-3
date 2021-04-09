/**
 * Created by zhangzhao on 15-2-6.
 * 一键钟情
 */

$(function(){
    yjzqList();
    yjzqLoves();
    loveTwo();
    jumpTwo();
});
//
function yjzqList(){
    $.ajax({
        async: true,
        url:'//u.baihe.com/index/loveFirst',
        type:'get',
        dataType:'json',
        data: null,
        contentType: "application/json;utf-8",
        success:function(data){
            var html = '';
            if(data && data.length>0){
                twoPeople(data);
            }else{
                if(userInfoJson.gender==1){
                    $("#yjzq").addClass("wOver");
                }else{
                    $("#yjzq").addClass("mOver");
                }
            }
        }
    });
}
//显示两个人
function twoPeople(data){
    var spm1 = ['spm="4.2.2.527.1452" event="3"','baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.529.1454\'});'];
    var spm2 = ['spm="4.2.2.528.1453" event="3"','baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.2.2.530.1455\'});'];
    var html = '';
    html += '<div class="left">';
    html += yjzqUserList(data,spm1);
    html += '</div>';
    html += '<div class="right">';
    html += yjzqUserList(data,spm2);
    html += '</div>';
    html += '<div class="middle">';
    html += '<a href="javascript:;" class="icon twoLove">都喜欢</a>';
    html += '<a href="javascript:;" class="stopTwo">跳过</a>';
    html += '</div>';
    $("#yjzq").html('').html(html);
}

//点击都喜欢
function loveTwo(){
    $(".twoLove").live("click",function(){
        baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.531.1456'});
       var leftVal =  $("div.left").find(".yjzqLove").attr('oppId');
       var rightVal =  $("div.right").find(".yjzqLove").attr('oppId');
       baihe.bhtongji.clickTongJi({'event':'3','spm':'4.28.2.465.1385'});
       greet2(leftVal,'02.00.10204');//左边人打招呼
       greet2(rightVal,'02.00.10204');//右边人打招呼
        $("div.left").find(".yjzqLove").text("已喜欢");
        $("div.right").find(".yjzqLove").text("已喜欢");
        checkCount();
    });
}

//点击跳过
function jumpTwo(){
    $(".stopTwo").live("click",function(){
        baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.532.1457'});
        checkCount();
    });
}

//显示一个人
function yjzqUserList(data,spms){
    var html = '';
    var yjzqv = data.pop();
    if(typeof yjzqv !="undefined" && yjzqv){
        html += '';
        html += '<div class="pic">';
        html += '<a class="c333" target="_blank" href="//profile1.baihe.com?oppID='+yjzqv.userID+'" '+spms[0]+'><img src="'+yjzqv.headPhotoUrl+'" alt="" /></a>';
        html += '<a class="c333" target="_blank" href="//profile1.baihe.com?oppID='+yjzqv.userID+'" '+spms[0]+'><center>'+yjzqv.nickname+'</center>';
        html += yjzqv.age+'岁 ';
        if(yjzqv.occupationChn){
            html += yjzqv.occupationChn;
        }else{
            html += yjzqv.education;
        }
        html += '</a></div>';
        html += '<a href="javascript:;" class="icon yjzqLove" oppId="'+yjzqv.userID+'" spms="'+spms[1]+'">喜欢';
        if(yjzqv.gender==1){
            html += '他</a>';
        }else{
            html += '她</a>';
        }
    }
    return html;
}

//点击喜欢她
function yjzqLoves(){
    $(".yjzqLove").live('click',function(){
	greet2($(this).attr('oppId'),'02.00.10203');
        eval($(this).attr('spms'));
        $(this).text("已喜欢");
        checkCount();
    });
}

//已经显示过的人
function yjzqLove(userID,gender){
    $.ajax({
        async: true,
        url:'//u.baihe.com/index/haveLoveFirst',
        type:'get',
        dataType:'json',
        data: {'userID':userID},
        contentType: "application/json;utf-8",
        success:function(data){
            if(data.length <= 0){
                $("#yjzq").html('');
                if(gender==1){
                    $("#yjzq").addClass("wOver");
                }else{
                    $("#yjzq").addClass("mOver");
                }
            }else{
                twoPeople(data);
            }
        }
    });
}

//判断是否推荐了120个人(调用60次)
function checkCount(){
    var arr=[];
    $(".yjzqLove").each(function(){
        arr.push($(this).attr('oppid'));
    });
    var twoLove = arr.join();
    yjzqLove(twoLove,userInfoJson.gender);
}
