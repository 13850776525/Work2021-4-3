var showVerifyDiv=false;
function getVerify(){
    var userAccount=$("#txtLoginEMail").val();
    $.getJSON("//my.baihe.com/Getinterlogin/getAccountTimes?jsonCallBack=?&userAccount="+userAccount,
        function(msg){
            if(msg.data['showCode']!=undefined&&msg.data['showCode']==true){
                showVerify();
                showVerifyDiv=true;
            }
        });    
}
function showVerify(){
    var tmpid=parseInt(new Date().getTime() + Math.random() * 10000);
    $("#tmpid").val(tmpid);
    $("#verfyRe").attr("href","javascript:showVerify();");
    $("#verfyRe").live('click',function(){
        baihe.bhtongji.tongji({'event':'1','spm':'4.10.56.229.701'});
    });
    $("#codeImg").attr("src", "//my.baihe.com/Getinterlogin/getVerifyPic?jsonCallBack=?&tmpId="+tmpid); 
    $("#verifyDiv").css("display","block");  
}


var showVerifyDivRegist=false;
var isBlackIP=false;
function getVerifyRegist(){
    $.getJSON("//my.baihe.com/Getinterregist/getIPTimes?jsonCallBack=?",
        function(msg){
            if(msg.data['isBlackIP']!=undefined&&msg.data['isBlackIP']==1){
                showVerifyDivRegist=false;
            }
            if(msg.data['isBlackIP']!=undefined&&msg.data['isBlackIP']==2){              
                showVerifyDivRegist=true;
                isBlackIP=true;
                //alert("您的IP存在风险无法注册！");
                baihe.block({
                    text:'您的IP存在风险无法注册！'
                });
                return false;
            }
            if(msg.data['showCode']!=undefined&&msg.data['showCode']==true){
                showVerify();
                showVerifyDivRegist=true;
            }
        });    
}
getVerifyRegist();