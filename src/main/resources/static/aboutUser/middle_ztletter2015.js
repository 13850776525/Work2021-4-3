var countZt = 1;
function letter() {
    $.ajax({
        type : "GET",
        dataType : "json",
        url : "//u.baihe.com/nxcx/letter?rand=" + Math.random() * 500,
        data:{"countZt":countZt},
        success : function(json_data) {
            countZt++;
            greet(json_data);
        }
    });
    getContent();
}

//换一句
function getContent(){
    $.ajax({
        type : "GET",
        dataType : "json",
        url : "//u.baihe.com/nxcx/content",
        success : function(data) {
            $("#letterCon").html(data.letter);
        }
    });
}

//-----提示浮层
function prompt(content){
    baihe.block({text:content,callback:function(){
        $.blockUI({
        message:ztletterhtml
        });
    }});
}
function letteragain() {
    bhtgCount('nvxingcx_11');
    $.ajax({
        type : "GET",
        dataType : "json",
        url : "//u.baihe.com/nxcx/letter?rand=" + Math.random() * 500,
        data:{"countZt":countZt},
        success : function(json_data) {
            changeNext(json_data);
            countZt++;
        }
    });
}
//打招呼
function sendletter(){
    bhtgCount('nvxingcx_9');
    var content = $('#letterCon').text();
    var personArr=[];
    var checkobxs = $("[name^=checkUser]");
    for(var i=0;i<checkobxs.length;i++){
        if($($("[name^=checkUser]")[i]).prop('checked')){
            personArr.push(checkobxs[i].value);
        }
    }
    if(personArr.length <= 0){
        prompt('请勾选您要打招呼的对象哦');
    }else{
        //POST提交数据
        var personIds = personArr.join(",");
        $.ajax({
            type:"post",
            url:"/nxcx/send",//后台处理
            data:{ids:personIds,content:content},//传入参数
            dataType : 'json',// 返回数据格式
            success : function(data) {
                $('#pop_Icon01').removeAttr("onclick");
                $('#pop_Icon01').html("已发送成功");
                $('#pop_Icon01').removeAttr("id");
                letteragain();
            },// 成功数据后处理
            complete : function(XMLHttpRequest, textStatus) {
            }// 完成数据处理后
        });

    }
}

//选人
function isCheck(uid){
    var classVal = $("#check"+uid+" span").attr("class");
    if(classVal == 'ok'){
        $("#check"+uid+" span").removeClass();
        $("#check"+uid+" input").attr("checked",false);
    }else{
        $("#check"+uid+" span").addClass('ok');
        $("#check"+uid+" input").attr("checked",true);
    }

}

var ztletterhtml = '';
//-----打招呼
function greet(data){
    ztletterhtml += '<div class="promLetter" id="pop_Prompt">';
    ztletterhtml += '<a href="javascript:$.unblockUI();" class="close">关闭</a>';
    ztletterhtml += '<div class="picHead"><img src="'+data.myuserInfo.headPhotoUrl+'" alt="" />'+data.myuserInfo.nickname+'</div>';
    if(data.myuserInfo.gender == 1){
        ztletterhtml += '<div class="man">';
    }else{
        ztletterhtml += '<div class="woman">';
    }
    ztletterhtml += '<div class="txt">';
    ztletterhtml += '<a href="javascript:void(0);" onclick="getContent()">换一句</a>';
    ztletterhtml += '<span id="letterCon">'+data.letter+'</span>';
    ztletterhtml += '</div>';
    ztletterhtml += '<div class="picList">';
    ztletterhtml += '<ul id="changePe">';
    $.each(data.info,function(i,hiData){
        ztletterhtml += '<li>';
        ztletterhtml += '<a href="//profile1.baihe.com?oppID='+hiData.userID+'" target="_blank"><img src="'+hiData.headPhotoUrl+'" alt="" class="pic" />'+hiData.nickname+'<br />'+hiData.age+'，'+hiData.cityChn+'</a>';
        ztletterhtml += '<a href="javascript:void(0);" id="check'+hiData.userID+'" onclick="isCheck('+hiData.userID+');"  class="state"><span class="ok"><input name="checkUser" type="checkbox"  checked="checked" style="display: none;" value="'+data.info[i].userID+'" /></span></a>';
        ztletterhtml += '</li>';
    });
    ztletterhtml += '</ul>';
    ztletterhtml += '</div>';
    ztletterhtml += '<div class="icon">';
    ztletterhtml += '<a href="javascript:void(0);" class="link" id="pop_Icon01" onclick="sendletter()">打招呼</a>';
    ztletterhtml += '<a href="javascript:void(0);" class="linkT" onclick="letteragain()">换一组</a>';
    ztletterhtml += '</div>';
    ztletterhtml += '</div>';
    ztletterhtml += '</div>';
    $.blockUI({
        message:ztletterhtml
    });
}

//换一组
function changeNext(data){
    var ztletterhtml = '';
    $("#pop_Prompt").html("");
    ztletterhtml += '<a href="javascript:$.unblockUI();" class="close">关闭</a>';
    ztletterhtml += '<div class="picHead"><img src="'+data.myuserInfo.headPhotoUrl+'" alt="" />'+data.myuserInfo.nickname+'</div>';
    if(data.myuserInfo.gender == 1){
        ztletterhtml += '<div class="man">';
    }else{
        ztletterhtml += '<div class="woman">';
    }
    ztletterhtml += '<div class="txt">';
    ztletterhtml += '<a href="javascript:void(0);" onclick="getContent()">换一句</a>';
    ztletterhtml += '<span id="letterCon">'+data.letter+'</span>';
    ztletterhtml += '</div>';
    ztletterhtml += '<div class="picList">';
    ztletterhtml += '<ul id="changePe">';
    $.each(data.info,function(i,hiData){
        ztletterhtml += '<li>';
        ztletterhtml += '<a href="//profile1.baihe.com?oppID='+hiData.userID+'" target="_blank"><img src="'+hiData.headPhotoUrl+'" alt="" class="pic" />'+hiData.nickname+'<br />'+hiData.age+'，'+hiData.cityChn+'</a>';
        ztletterhtml += '<a href="javascript:void(0);" id="check'+hiData.userID+'" onclick="isCheck('+hiData.userID+');"  class="state"><span class="ok"><input name="checkUser" type="checkbox"  checked="checked" style="display: none;" value="'+data.info[i].userID+'" /></span></a>';
        ztletterhtml += '</li>';
    });
    ztletterhtml += '</ul>';
    ztletterhtml += '</div>';
    ztletterhtml += '<div class="icon">';
    ztletterhtml += '<a href="javascript:void(0);" class="link" id="pop_Icon01" onclick="sendletter()">打招呼</a>';
    ztletterhtml += '<a href="javascript:void(0);" class="linkT" onclick="letteragain()">换一组</a>';
    ztletterhtml += '</div>';
    ztletterhtml += '</div>';
    $("#pop_Prompt").html(ztletterhtml);
}
