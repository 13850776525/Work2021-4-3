var iBtn=false;
var validArr = new Array(0);
var errTips = new Array(0);
var tmpId_index,tmpId_indexPop,tmpId_indexLogin;
var isFirstSave=true;
var ca=undefined;
// 极验
var handlerEmbed = function (captchaObj) {
    ca = captchaObj;
    var _this = this;
    captchaObj.onSuccess(function () {
        // js验证
        var validate = captchaObj.getValidate();
        if (!validate) {
            baihe.block({
                title: '提示',
                text: '抱歉，请您先完成登录验证。'
            });
            return;
        }
        $.ajax({
            //url: 'http://my.baihe.com/getinterlogin/gotoLogin?jsonCallBack=?',
            url: 'https://login.baihe.com/Getinterlogin/gotoLogin?event=3&spmp=4.20.53.225.685',
            type: 'post',
            crossDomain: true,
            dataType: 'json',
            data: {
                'txtLoginEMail': $('.js_account').val().replace(/(^\s+)|(\s+$)/g, ""),
                'txtLoginPwd': $('.js_password').val().replace(/(^\s+)|(\s+$)/g, ""),
                'chkRememberMe': $('.js_cookie_hide').val(),
                'codeId': tmpId_indexLogin,
                //'codeValue': $('.js_verification').val(),
                'event': '3',
                'spmp': '4.20.53.225.685',
                'challenge':validate.geetest_challenge,
                'validate':validate.geetest_validate,
                'seccode':validate.geetest_seccode
            },
            success:function(data) {
                if(data.data == 55 || data.data == 56 ||data.data == 66){
                    tanceng(data.state,data.data);
                }else if(data.data == 11){  //如果是2012.1.1之前注册的账号，出现防刷弹层
                    var num=data.state;
                    PreventData(num);
                    //console.log(num);
                    return;
                }else if (data.state == 1 && data.data) {//登陆成功,data.data返回token
                    baihe.bhtongji.tongji({'event':'3','spm':'4.20.57.225.1078'});
                    $('.js_account_msg').css('display', 'none');
                    //$(_this.mode).find('.js_verification_msg').css('display', 'none');
                    //window.location.href = 'http://u.baihe.com';
                    var ReturnUrl = '//u.baihe.com';
                    var url="//my.baihe.com/login/createLogin?token="+encodeURIComponent(data.data)+"&ReturnUrl="+ReturnUrl;
                    window.location.href = url;
                } else if (data.state == 0 && data.data == 3) {
                    baihe.bhtongji.tongji({'event':'3','spm':'4.20.57.225.1078'});
                    window.location.href = '//my.baihe.com/register/';
                }else if(data.state == 0 && data.data == 12){
                    baihe.block({
                        title: '提示',
                        text: '抱歉，您的账号存在登录异常，请检查您的登录环境后再次尝试。如有问题，请咨询客服电话：400-1520-555（8:00至20:00）。'
                    });
                } else if (data.state == 0 && data.data == 6) {
                    baihe.bhtongji.tongji({'event':'3','spm':'4.20.57.225.1078'});
                    $('.js_account_msg').css('display', 'block').html('您的IP被限制登录，请与客服联系!');
                    return false;
                }else if (data.state == 0 && data.data == 7) {   //验证码错误
                    baihe.bhtongji.tongji({'event':'3','spm':'4.20.57.225.1078'});
                    //$('.js_verification_msg').css('display', 'block').html("请输入正确的验证码");
                    $('.js_account_msg').hide();
                    /*if((data.state == 0&&data.data == 2) || (data.state == 0&&data.data == 1)){  //
                     $('.js_account_msg').css('display', 'block').html('账号或密码错误!');
                     }else{
                     $('.js_account_msg').hide();
                     $('.js_verification_msg').css('display', 'block').html("请输入正确的验证码");
                     }
                     $('.refresh').trigger('click');*/
                    return false;
                }else if((data.state == 0 && data.data == 1) || (data.state == 0 && data.data == 2)) {  //用户名和密码错误
                    $('.js_account_msg').css('display', 'block').html('账号或密码错误!');
                    /*if(data.state == 0 && data.data != 7){  //验证码正确
                     $('.js_verification_msg').hide();
                     $('.js_verification').val('');
                     $('.refresh').trigger('click');
                     return false;
                     }else{
                     $('.js_verification_msg').css('display', 'block').html("请输入正确的验证码");
                     }*/
                }
            }
        });
    })
};
$.ajax({
    // 获取id，challenge，success（是否启用failback）
    url: "//my.baihe.com/Getinterlogin/startCaptchaServlet?t=" + (new Date()).getTime(), // 加随机数防止缓存
    dataType:'jsonp',
    jsonp: 'jsonCallBack',
    success: function (data) {
        // 使用initGeetest接口
        // 参数1：配置参数
        // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
        initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            new_captcha: data.new_captcha,
            offline: !data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
            product: "bind", // 产品形式，包括：float，popup
            width: "300px",
            https: true
            // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
        }, handlerEmbed);
    }
});



errTips['ok'] = '<div class="ok">正确</div>';
errTips['account'] = '请填写您的注册邮箱或手机号';
errTips['password'] = '请输入6-16位密码';
errTips['nikename'] = '最多可输入12个汉字、字母或数字';
errTips['mobile'] = '请输入您的手机号';
// errTips['mybirth'] = '请选择您的生日';
// errTips['mycity'] = '请输入您所在地区';
errTips['code'] = '请填写验证码';
errTips['photoCode'] = '请填写验证码';

//ip判断黑名单or白名单
var noCookieReg = {};
function isShowCode() {
    var isCodeShow = false;
    $.getJSON('//my.baihe.com/Getinterregist/getIPTimes?jsonCallBack=?', function(data) {
        if (data.data.isBlackIP == 2) {
            $('#firstSave').off().addClass('grey');
            baihe.block({
                type: 0,
                title: '提示',
                text: '您的IP存在风险，无法注册',
                callback: null
            });
        } else if (data.data.isBlackIP == -1) {
            if (data.data.showCode) {
                isCodeShow = true;
                tmpId_index = parseInt(new Date().getTime() + Math.random() * 10000);
                tmpId_indexPop = parseInt(new Date().getTime() + Math.random() * 10000);
                //$(".showverifydiv").show().find('#codeImg').attr('src', 'http://my.baihe.com/Getinterlogin/getVerifyPic?jsonCallBack=?&tmpId=' + tmpId_index);
                //$("#showverifydivPop").show().find('.verImg').attr('src', 'http://my.baihe.com/Getinterlogin/getVerifyPic?jsonCallBack=?&tmpId=' + tmpId_indexPop);
            }
        }
        //noCookieReg.init(isCodeShow); 
		noCookieReg.init(); //去掉验证码 去调参数isCodeShow
        //var loginPop = new noCookiePopReg($('#loginPopForm'));
        //loginPop.init(isCodeShow);
        //loginPop.randomNear();
    });
}


noCookieReg = {
    init: function() {//去掉验证码 去调参数 isCodeShow
        var _this = this;
        _this.account();
        _this.password();
        //_this.code(isCodeShow);//去掉验证码 去调参数 isCodeShow
        _this.clickPromit();
        _this.firstSubmit();

        $(document).on('click', function() {
            $('.login .cityCont, .apply .infolayer01, .loginForm .newHomw_L01, .loginForm .newHomw_L02').css('display', 'none');
        });
    },
    submitFn: function() {
        $('#save').click(function(event) {
            event.preventDefault();
            var isSubmit = 0;
            for (ele in validArr) {
                if (validArr[ele] == false) {
                    if (ele != 'promit') {
                        $('#' + ele + '_msg').css('display', 'block').html(errTips[ele]);
                    } else {
                        baihe.block({
                            text: '请勾选“百合服务条款”'
                        });
                    }
                    isSubmit++;
                }
            }
            if (isSubmit <= 0) {
                var gcode = new Image();
                gcode.src = '//bhtg.baihe.com/stat.html?ggCode=wcksy_2';
                $.getJSON('//my.baihe.com/Getinterregist/perfectUserInfo?jsonCallBack=?', {
                    gender: $('#gender').val(),
                    nickname: $('#nikename').val(),
                    birthday: $('#myBirthday1').val(),
                    district: $('#mycityId').val(),
                    height: $('#csheight').val(),
                    education: $('#csdegree').val(),
                    marriage: $('#csmarriage').val(),
                    income: $('#csincome').val(),
                    mobileContact: $('#mobile_new').val(),
                    familyDescription: $('#userdesc').val(),
                    phoneCode: $('#photoCode input').val(),
                    'event': '2',
                    'spmp': '4.10.57.235.710',
                    codeId: '',
                    codeValue: ''
                }, function(data) {
                    if (data.data == 1) {
                        window.location.href = '//my.baihe.com/headphoto/';
                    }
                });
            }
        });
    },
    firstSave:function (event) {
		baihe.bhtongji.tongji({'event':'0','spm':'4.20.57.329.1077'});
		if(!isFirstSave){
			return;
		}
		var _this=$(this);
		//event.preventDefault(); 
		isFirstSave=false;            
		 _this.addClass('grey');          
		var isSubmit = 0;
		for (var ele in validArr) {
			if (validArr[ele] == false) {   
				if (ele != 'promit') {
					$('#' + ele + '_msg').css('display', 'block').html(errTips[ele]);
				} else {
					baihe.block({
						text: '请勾选“百合服务条款”'
					});
				}
				isSubmit++;
			}
		}
		if (isSubmit <= 0) {
            //---删除预注册---
            //$.getJSON('http://my.baihe.com/Getinterregist/createBHAccount?jsonCallBack=?', {
				//userAccount: $('#account').val().replace(/(^\s+)|(\s+$)/g,""),
				//password: $('#userPassWord').val().replace(/(^\s+)|(\s+$)/g,""),
				//codeId: tmpId_index,
				//codeValue: $('#codeVal').val().replace(/(^\s+)|(\s+$)/g,""),
				//'event': '1',
				//'spmp': '4.10.57.228.706'
            //}, function(data) {
				//if (data.state == 1 && data.data == 1) {
				//	baihe.cookie.setCookie('tongjiType', 'noCookie', '', '/', 'baihe.com');
				//	window.location='http://my.baihe.com/register';
				//}else if(data.state == 1 && data.data == 'tongdunerr'){  //同盾拦截
				//	baihe.block({
				//		text: '非常抱歉，您的注册环境异常，请稍后重试。如有疑问，请咨询客服：400-1520-555（8:00至20:00）。'
				//	});
				//}else{
				//	isFirstSave=true;
				//	_this.removeClass('grey');
				//	baihe.block({
				//		text: '注册失败，请重新注册！'
				//	});
				//}
            //});
            //----new sunzl----
            var userAccount = $('#account').val().replace(/(^\s+)|(\s+$)/g,"");
            var password = $('#userPassWord').val().replace(/(^\s+)|(\s+$)/g,"");
            var codeId = tmpId_index;
            var codeValue = $('#codeVal').val().replace(/(^\s+)|(\s+$)/g,"");
            var event = '1';
            var spmp = '4.10.57.228.706';
            baihe.cookie.setCookie('tongjiType', 'noCookie', '', '/', 'baihe.com');
			window.location='//my.baihe.com/register?userAccount='+ userAccount + '&' + $.md5(userAccount) + '=' + password +'&codeId='+ codeId +'&codeValue='+ codeValue +'&event='+ event +'&spmp='+ spmp +'&showInfoStatu=3';
            
            //----end----
		}else{
			 isFirstSave=true;
			 _this.removeClass('grey');
		}
	},
    firstSubmit: function() {
        $('#firstSave').on('click',this.firstSave);
    },

    picAuthCode:function(){
        var _this=this;
        var picCode_index=parseInt(new Date().getTime() + Math.random() * 10000);   
        var picAuthCodeImg=$("#picAuthCode .lodingIcon img");     
        picAuthCodeImg.attr('src', '//my.baihe.com/Getinterlogin/getVerifyPic?jsonCallBack=?&tmpId=' + picCode_index);
        $('#picAuthCode .lodingIcon').click(function(){
           getPicAuthCode();
        });   

        function getPicAuthCode(){
             picCode_index=parseInt(new Date().getTime() + Math.random() * 10000);   
            picAuthCodeImg.attr('src', '//my.baihe.com/Getinterlogin/getVerifyPic?jsonCallBack=?&tmpId=' + picCode_index);
        }

        $('#picAuthCode input').focus(function(event) {
          if($.trim($(this).val())=='输入验证码'){
                $(this).val('');
          }
        }).blur(function(event) {
           if($.trim($(this).val())==''){
                $(this).val('输入验证码');
                 $('#photoCode a.verIcon').addClass('grey');
           }else if(validArr['mobile']){
              $.getJSON('//my.baihe.com/Getinterlogin/checkVerifyPic?jsonCallBack=?',{
                    tmpId: picCode_index,
                    checkcode: $(this).val()
                }, function(data) {
                    if (data.data == 1) {                        
                         //$('#mobile_new').attr('disabled',true);
                          _this.isShowBtn();
                        $('#picAuthCode .error').hide().html('');
                    } else {                      
                         $('#picAuthCode .error').show().html('验证码错误');
                         getPicAuthCode();
                          $('#photoCode a.verIcon').addClass('grey');
                    }
                });
           }
        });
    },
    tips: function(obj, is, str, sub) {
        var _this = this;
        if (is == true) {
            obj.css('display', 'none');
            sub ? (validArr[sub] = true) : '';
        } else {
            obj.css('display', 'block').html(str);
            sub ? (validArr[sub] = false) : '';
        }
    },
    account: function() {
        var _this = this;
        var oTips = $('#account_msg');
        validArr['account'] = false;
        // $('#account').bind('focus', function() {
        //     validArr['account'] = false;
        //     var str = $(this).val().replace(/(^\s+)|(\s+$)/g,"");
        //     if (str == '手机') {
        //         $(this).val('');
        //     }
        // });
        $('#account').bind('blur', function() {
            var str = $(this).val().replace(/(^\s+)|(\s+$)/g,"");
            var isOk = false;
            // if (str == '') {
            //     $(this).val('手机');
            //     oTips.css('display', 'none');
            //     return;
            // }
            if (str.indexOf("@") > 0) {
                isOk = baihe.validateRules.isEmail(str);
            } else {
                $('#mobile_new').val(str);
                isOk = baihe.validateRules.isMobile(str);
            }
            _this.tips(oTips, isOk, '手机格式填写错误', 'account');
            if (isOk == true) {
                // $.getJSON('http://my.baihe.com/register/emailCheckForXs?jsonCallBack=?', {
                //     email: str
                // }, function(data) {
                //     if (data.state == 1) {
                //         _this.tips(oTips, true, '', 'account');
                //     } else {
                //         _this.tips(oTips, false, data.data + '<a class="orangeT" href="http://my.baihe.com/login">直接登录</a>', 'account');
                //     }
                // });
                _this.tips(oTips, true, '', 'account');
            }
        });
    },
    password: function() {
        var _this = this;

        var oTips = $('#password_msg');
        validArr['password'] = false;
        $("#userPassWord").bind('blur', function() {
            validArr['password'] = false;
            var str = $(this).val();
            var isOk = new RegExp(baihe.validateRegExp.password).test(str);
			//console.log('输入的内容'+str);
			//console.log('判断对错'+isOk);
            // if (str == '') {
            //     oTips.css('display', 'none');
            //     $(this).hide();
            //     $("#password").show().val('密码');
            //     return;
            // }
            _this.tips(oTips, isOk, errTips['password'], 'password');
        });
        $('#password').bind('focus', function() {            
			$(this).hide();
			$("#userPassWord").show().focus();
        });
    }, 
  
    /*百合服务条款*/
    clickPromit: function() {
        validArr['promit'] = true;
        $("#promit").change(function(event) {
            if ($(this).prop("checked")) {
                validArr['promit'] = true;
            } else {
                validArr['promit'] = false;
                errTips['promit'] = '请勾选“已阅读并同意百合服务条款”。　';
            }
        });
    }
   /* code: function(isCodeShow) {
        validArr['code'] = !isCodeShow;
        $('#codeVal').on('focus', function() {
            if ($('#codeVal').val() == '输入验证码') {
                $('#codeVal').val('');
            }
        });
        $('#codeVal').on('blur', function() {
            if ($('#codeVal').val() == '') {
                $('#codeVal').val('输入验证码');
                validArr['code'] = false;
            } else {
                $.getJSON('//my.baihe.com/Getinterlogin/checkVerifyPic?jsonCallBack=?',{
                    tmpId: tmpId_index,
                    checkcode: $('#codeVal').val()
                }, function(data) {
                    if (data.data == 1) {
                        validArr['code'] = true;
                         //$('#codeVal').prop("disabled", true);
                          baihe.bhtongji.tongji({'event': '0', 'spm': '4.10.57.754.2029'});
                        $('#code_msg').hide().html('');
                    } else {
                         baihe.bhtongji.tongji({'event': '0', 'spm': '4.10.57.755.2030'});
                        validArr['code'] = false;
                        $('#code_msg').show().html('验证码错误');
                    }
                });
            }
        });
        $('.lodingIcon').on('click', function() {
            validArr['code'] = false;
            var timer = new Date();
            tmpId_index = parseInt(timer.getTime() + Math.random() * 10000);
            $("#codeImg").attr("src", 'http://my.baihe.com/Getinterlogin/getVerifyPic?jsonCallBack=?&tmpId=' + tmpId_index);
            //$('#codeVal').prop("disabled", false).val('输入验证码');
        });
    } */
};
var checkCodePatn = /^(([\u4e00-\u9fa5]{4})|([0-9A-Za-z]{4}))$/;
function codeTest() {
    var val = $("#codeVal").val();
    if (val == '' || val == null) {
        $('#code_msg').css('display', 'block').html(errTips['code']);
        return;
    } else {
        if (checkCodePatn.test(val)) {
            $.getJSON('//my.baihe.com/register/checkVerifyPic?jsonCallBack=?', {
                checkcode: encodeURI(encodeURI(val))
            }, function(data) {
                if (data.data == 1) {
                    //$("#codeVal").attr("disabled", true);
                    if ($("#gender").val() == 1) {
                        var img = new Image();
                        img.src = "//bhtg.baihe.com/stat.html?ggCode=zhuceyouhua_7";
                    } else {
                        var img2 = new Image();
                        img2.src = "//bhtg.baihe.com/stat.html?ggCode=zhuceyouhua_8";
                    }
                    $("#regForm").submit();
                } else {
                    $('#code_msg').css('display', 'block').html(errTips['code']);
                    //$("#codeVal").attr("disabled", false);
                    return;
                }
            });
        } else {
            $('#code_msg').css('display', 'block').html(errTips['code']);
            return;
        }
    }
}

function noCookieLogin(obj) {
    var _this = this;
    _this.mode = obj;
    _this.validLoginArr = new Array(0);
    _this.account();
    _this.password();
    _this.promit();
    _this.submit();
}
noCookieLogin.prototype.submit = function() {
    var _this = this;
    $(_this.mode).find('.js_save').click(function(event) {
        iBtn=true;

        baihe.bhtongji.tongji({'event':'0','spm':'4.20.57.257.1079'});
        var isSubmit = 0;

        for (var ele in _this.validLoginArr) {
            if (_this.validLoginArr[ele] == false) {
                //if(ele=='code'){
                //if($('.js_verification').val()=='输入验证码' || $('.js_verification').val()==''){
                //	$(_this.mode).find('.js_verification_msg').css('display', 'block').html("请输入验证码");
                //}else{
                //	$(_this.mode).find('.js_verification_msg').hide();
                //}
                // }else{
                //if($('.js_account').val()=='手机/邮箱' || $('.js_password').val()=='密码'){
                //	$(_this.mode).find('.js_' + ele + '_msg').css('display', 'block').html(errTips[ele]);
                //}
                //}
                if($('.js_account').val()=='' || $('.js_password').val()==''){
                    $(_this.mode).find('.js_' + ele + '_msg').css('display', 'block').html(errTips[ele]);
                }
            }
        }
        ca.verify();
        iBtn=false;
        event.stopPropagation();
    });
}

noCookieLogin.prototype.promit = function() {
    var _this = this;
    $(_this.mode).find('.js_cookie').change(function(event) {
        if ($(this).prop("checked")) {
            $(_this.mode).find('.js_cookie_hide').val(1);
        } else {
            $(_this.mode).find('.js_cookie_hide').val(0);
        }
    });
}
noCookieLogin.prototype.tips = function(obj, is, str, sub) {
    var _this = this;
    if (is == true) {
        obj.css('display', 'none');
        sub ? (_this.validLoginArr[sub] = true) : '';
    } else {
        obj.css('display', 'block').html(str);
        sub ? (_this.validLoginArr[sub] = false) : '';
    }
}
noCookieLogin.prototype.account = function() {
    var _this = this;
    _this.validLoginArr['account'] = false;
    var oTips = $(_this.mode).find('.js_account_msg');
    // $(_this.mode).find('.js_account').bind('focus', function() {
    //     var str = $(this).val().replace(/(^\s+)|(\s+$)/g,"");
    //     if (str == '手机') {
    //         $(this).val('');
    //     }
    // });
    $(_this.mode).find('.js_account').bind('blur', function() {
        var $this = $(this);
        var str = $this.val().replace(/(^\s+)|(\s+$)/g,"");
        var isOk = false;
        // if (str == '') {
        //     $this.val('手机');
        //     oTips.css('display', 'none');
        //     return;
        // }
        if (str.indexOf("@") > 0) {
            isOk = baihe.validateRules.isLoginEmail(str);
            _this.tips(oTips, isOk, '邮箱格式错误，重新填写', 'account');
        } else {
            isOk = baihe.validateRules.isMobile(str);
            _this.tips(oTips, isOk, '手机格式错误，重新填写', 'account');
        }
        if (isOk == true) {
            // $.getJSON('http://my.baihe.com/register/emailCheckForXs?jsonCallBack=?', {
            //     email: str
            // }, function(data) {
            //     if (data.state == 1) {
            //         _this.tips(oTips, false, '帐号不存在!', 'account');
            //     }
            // });
            _this.tips(oTips, true, '', 'account');
        }
    });
}
noCookieLogin.prototype.password = function() {
    var _this = this;
    var oTips = $(_this.mode).find('.js_password_msg');
    _this.validLoginArr['password'] = false;
    // $(_this.mode).find('.js_password').bind('focus', function() {
    //     var str = $(this).val();
    //     if (str == '密码') {
    //         $(this).css('display', 'none');
    //         $(_this.mode).find('.js_password_hide').css('display', 'block').focus();
    //     }
    // });
    $(_this.mode).find('.js_password_hide').bind('blur', function() {
        var str = $(this).val();
        if (str == '') {
            $(this).css('display', 'none');
            $(_this.mode).find('.js_password').css('display', 'block');
            oTips.css('display', 'none');
            return;
        }
        var isOk = new RegExp(baihe.validateRegExp.password).test(str);
        _this.tips(oTips, isOk, errTips['password'], 'password');
    });
}
/*noCookieLogin.prototype.code = function() {
    var _this = this;
    //var oTips = $(_this.mode).find('.js_verification_msg');
    _this.validLoginArr['code'] = false;
    $(_this.mode).find('.js_verification').on('focus', function() {
        if ($(_this.mode).find('.js_verification').val() == '输入验证码') {
            $(_this.mode).find('.js_verification').val('');
        }
    });
    $(_this.mode).find('.js_verification').on('blur', function() {
       
		$.getJSON('//my.baihe.com/Getinterlogin/checkVerifyPic?jsonCallBack=?', {
			tmpId: tmpId_indexLogin,
			checkcode: $(_this.mode).find('.js_verification').val()
		}, function(data) {
			if (data.data == 1) {
				_this.validLoginArr['code'] = true;
				//oTips.hide().html('');
				if(iBtn){
					$('.js_save').trigger('click');	
				}
				//$(_this.mode).find('.js_verification_msg').css('display', 'none');
			} else {
				//oTips.show().html('请输入验证码');
				$(_this.mode).find('.js_verification').val('');
				if(iBtn){
					$('.js_save').trigger('click');	
				}
			}
		});
        
    });
	
    $(_this.mode).find('.refresh').on('click', function() {
        _this.validLoginArr['code'] = false;
        var timer = new Date();
        tmpId_indexLogin = parseInt(timer.getTime() + Math.random() * 10000);
        $(_this.mode).find(".verImg").attr("src", '//my.baihe.com/Getinterlogin/getVerifyPic?jsonCallBack=?&tmpId=' + tmpId_indexLogin);
    });
}*/

function tanceng(state,data){
    baihe.cookie.setCookie('grayuserID', state, '', '/', 'baihe.com');
    baihe.bhtongji.tongji({'event':'3','spm':'4.22.1719.262.14645'});
    var dhtml="";
    dhtml+="<div class='new_interdict_layer'>";
    dhtml+="<div class='new_interdict_top'></div>";
    dhtml+="<div class='new_interdict_p1'>";
    dhtml+="<div class='new_interdict_diamond'><span class='new_interdict_promotion'></span></div>";
    dhtml+='<a href="//payment1.baihe.com/app/tradeGateway.do?userID='+ state +'&commodityCode=HZ20181114&orderSource=bh_myhuimingdan_01" target="_blank" onclick="baihe.bhtongji.tongji({\'event\':\'3\',\'spm\':\'4.22.1719.4992.14646\'});baihe.cookie.setCookie(\'orderSource\', \'10030303\',\'\',\'\/\',\'.baihe.com\');" class="new_interdict_btn">购买豪钻12个月</a>';
    dhtml+="</div>";
    dhtml+="<div class='new_interdict_p2'>";
    dhtml+="<div class='new_interdict_approve'></div>";
    if(data == 55){
        dhtml+="<a class='new_interdict_btn new_interdict_btnDisabled'>已实名认证</a>";
    }else if(data == 56){
        dhtml+="<a class='new_interdict_btn new_interdict_btnDisabled'>实名认证审核中</a>";
    }else{
        // dhtml+="<a target='_blank' href='//credit.baihe.com/autonym/creditnew' class='new_interdict_btn' onclick='baihe.bhtongji.tongji({\"event\":\"3\",\"spm\":\"4.22.1719.2053.14647\"})'>实名认证</a>";
        dhtml+="<a  href='javascript:;' class='new_interdict_btn' onclick='baihe.bhtongji.tongji({\"event\":\"3\",\"spm\":\"4.22.1719.2053.14647\"})'>实名认证 </a>";
        dhtml+="<span class='prompt_jump'>请前往手机App认证</span>";
           
    }
    dhtml+="</div>";
    dhtml+="</div>";

    $.blockUI({
        message:dhtml,
        css: { width: "310px" }
    });
}

//联合登陆写入cookie
function bindType(v) {
    // baihe.cookie('bindType', v, {path: '/', domain: 'baihe.com'});
    baihe.cookie.setCookie('bindType', v, '', '/', 'baihe.com');
}

! function() {
    $(function() {
        var newArr = [];
        $(".story a").each(function(index, val) {
            newArr.push($(this).attr('data-id'));
        });
        if (newArr.length > 0) {
            $.ajax({
                url: '//story.baihe.com/index.php?action=spaceport&jsonCallBack=?',
                dataType: 'jsonp',
                data: {
                    "idStr": newArr.join()
                },
                success: function(data) {
                    if (typeof data != "undefined" && data) {
                        for (var newJson in data['msg']) {
                            $('#dataNum' + newJson).html(data['msg'][newJson]);
                        }
                    }
                }
            });
        }
    });
}();

function successStory() {
    var timer;
    $(".story a").mouseenter(function(event) {        
        var _this = this;
        timer = setTimeout(function() {
            $(_this).find('.like').show();
            setTimeout(function() {
                $(_this).find('.data').addClass('active');
            }, 50);

        }, 300);
    }).mouseleave(function(event) {
        var _this = this;
        if (timer) {
            clearTimeout(timer);
        }
        $(_this).find('.data').removeClass('active');
        setTimeout(function() {
            $(_this).find('.like').hide();
        }, 400);
    }).click(function(){
        baihe.bhtongji.tongji({'event':'0','spm':'4.10.57.367.1135'});
    });
}

function CodeSpm() {
    this.iJson = [{
        "spm": "2.18.51.223.678",
        "ggcode": "yzc_1",
        "channel": "2345",
        "code": "140021-mb"
    }, {
        "spm": "2.18.51.223.677",
        "ggcode": "yzc_2",
        "channel": "2345-k",
        "code": "140021-b"
    }, {
        "spm": "2.18.51.223.676",
        "ggcode": "yzc_3",
        "channel": "2345",
        "code": "140021-nb"
    }, {
        "spm": "2.18.51.223.675",
        "ggcode": "yzc_4",
        "channel": "hao360",
        "code": "140011-mb"
    }, {
        "spm": "2.18.51.223.674",
        "ggcode": "yzc_5",
        "channel": "hao360-k",
        "code": "140011-b"
    }, {
        "spm": "2.18.51.223.673",
        "ggcode": "yzc_6",
        "channel": "sgwzz",
        "code": "140099-mb"
    }, {
        "spm": "2.18.51.223.672",
        "ggcode": "yzc_7",
        "channel": "sgwzz",
        "code": "140099-b"
    }, {
        "spm": "2.18.51.223.671",
        "ggcode": "yzc_8",
        "channel": "114la",
        "code": "140108"
    }, {
        "spm": "2.18.51.223.670",
        "ggcode": "yzc_9",
        "channel": "114la-k",
        "code": "140108"
    }, {
        "spm": "2.18.51.223.669",
        "ggcode": "yzc_10",
        "channel": "rx",
        "code": "140104-mb"
    }, {
        "spm": "2.18.51.223.668",
        "ggcode": "yzc_11",
        "channel": "rx",
        "code": "140104-kb"
    }, {
        "spm": "2.18.51.223.667",
        "ggcode": "yzc_12",
        "channel": "jsdh-k",
        "code": "140159-b"
    }, {
        "spm": "2.18.51.223.666",
        "ggcode": "yzc_13",
        "channel": "jsdh",
        "code": "140159-mb"
    }, {
        "spm": "2.18.51.223.459",
        "ggcode": "yzc_220",
        "channel": "360-pp",
        "code": "360pp-010-1"
    }, {
        "spm": "2.17.50.222.350",
        "ggcode": "yzc_329",
        "channel": "soso-gdt",
        "code": "ppd-s-140226-0203"
    }, {
        "spm": "2.17.50.222.349",
        "ggcode": "yzc_330",
        "channel": "soso-gdt",
        "code": "ppd-s-8060-0203"
    }, {
        "spm": "2.17.50.222.348",
        "ggcode": "yzc_331",
        "channel": "soso-gdt",
        "code": "drnv-s-140140-0126"
    }, {
        "spm": "2.17.50.222.344",
        "ggcode": "yzc_335",
        "channel": "baidu-pp",
        "code": "350002-001"
    }];
}
CodeSpm.prototype.add = function() {
    var url = window.location.href;
    var isCode = baihe.getUrlParaments(url, 'Code');
    var isChannel = baihe.getUrlParaments(url, 'Channel');
    for (var i = 0; i < this.iJson.length; i++) {
        if (this.iJson[i].code === isCode && this.iJson[i].channel === isChannel) {
            baihe.statistics({
                spm: this.iJson[i].spm,
                ggCode: this.iJson[i].ggcode
            });
        }
    }
};

$(document).ready(function() {
    isShowCode();
    
    var login = new noCookieLogin($('#login'));
    $("#account,#password,#userPassWord,#codeVal").bind('keyup', function(event) {
        13!=event.keyCode||$(this).blur()&&$("#firstSave").click();
    });  
    $(".js_account,.js_password").bind('keyup', function(event) {
        13!=event.keyCode||$(this).blur()&&$(".js_save").click();
    });  
    $('input:checkbox').jqTransCheckBox();
    $('input:radio').jqTransRadio();
    successStory();

});