// 随机显示会员6男18女
var userManInfo = [{
	'id': '77837014',
	'age': '18',
	'edu': '本科',
	'height': '180',
	'imgname': '77837014.jpg'
}, {
	'id': '80519589',
	'age': '27',
	'edu': '本科',
	'height': '178',
	'imgname': '80519589.jpg'
}, {
	'id': '87416629',
	'age': '31',
	'edu': '本科',
	'height': '183',
	'imgname': '87416629.jpg'
}, {
	'id': '103528616',
	'age': '23',
	'edu': '本科',
	'height': '170',
	'imgname': '103528616.jpg'
}, {
	'id': '107079844',
	'age': '30',
	'edu': '本科',
	'height': '180',
	'imgname': '107079844.jpg'
}, {
	'id': '107267209',
	'age': '29',
	'edu': '本科',
	'height': '178',
	'imgname': '107267209.jpg'
}, {
	'id': '108212548',
	'age': '23',
	'edu': '本科',
	'height': '176',
	'imgname': '108212548.jpg'
}, {
	'id': '108669039',
	'age': '37',
	'edu': '本科',
	'height': '176',
	'imgname': '108669039.jpg'
}, {
	'id': '108752614',
	'age': '32',
	'edu': '本科',
	'height': '176',
	'imgname': '108752614.jpg'
}, {
	'id': '109941440',
	'age': '30',
	'edu': '本科',
	'height': '175',
	'imgname': '109941440.jpg'
}, {
	'id': '109335348',
	'age': '24',
	'edu': '本科',
	'height': '175',
	'imgname': '109335348.jpg'
}, {
	'id': '108799979',
	'age': '24',
	'edu': '本科',
	'height': '180',
	'imgname': '108799979.jpg'
}, {
	'id': '85947412',
	'age': '29',
	'edu': '本科',
	'height': '183',
	'imgname': '85947412.jpg'
}, {
	'id': '111693777',
	'age': '24',
	'edu': '本科',
	'height': '183',
	'imgname': '111693777.jpg'
}];
var userWomenInfo = [{
	'id': '104730974',
	'age': '25',
	'edu': '本科',
	'height': '160',
	'imgname': '104730974.jpg'
}, {
	'id': '105280318',
	'age': '22',
	'edu': '本科',
	'height': '163',
	'imgname': '105280318.jpg'
}, {
	'id': '58404730',
	'age': '23',
	'edu': '本科',
	'height': '164',
	'imgname': '58404730.jpg'
}, {
	'id': '64024592',
	'age': '26',
	'edu': '本科',
	'height': '164',
	'imgname': '64024592.jpg'
}, {
	'id': '85826219',
	'age': '25',
	'edu': '本科',
	'height': '165',
	'imgname': '85826219.jpg'
}, {
	'id': '93278222',
	'age': '26',
	'edu': '本科',
	'height': '163',
	'imgname': '93278222.jpg'
}, {
	'id': '93812002',
	'age': '24',
	'edu': '大专',
	'height': '155',
	'imgname': '93812002.jpg'
}, {
	'id': '94636632',
	'age': '27',
	'edu': '大专',
	'height': '158',
	'imgname': '94636632.jpg'
}, {
	'id': '95230235',
	'age': '27',
	'edu': '本科',
	'height': '160',
	'imgname': '95230235.jpg'
}, {
	'id': '95337365',
	'age': '28',
	'edu': '本科',
	'height': '174',
	'imgname': '95337365.jpg'
}, {
	'id': '104506944',
	'age': '24',
	'edu': '本科',
	'height': '164',
	'imgname': '104506944.jpg'
},/* {
	'id': '131645131',
	'age': '25',
	'edu': '本科',
	'height': '170',
	'imgname': '131645131.jpg'
}, */{
	'id': '106779355',
	'age': '24',
	'edu': '本科',
	'height': '171',
	'imgname': '106779355.jpg'
}, {
	'id': '106801898',
	'age': '22',
	'edu': '本科',
	'height': '164',
	'imgname': '106801898.jpg'
}, {
	'id': '107096751',
	'age': '24',
	'edu': '本科',
	'height': '164',
	'imgname': '107096751.jpg'
}, {
	'id': '107274890',
	'age': '25',
	'edu': '大专',
	'height': '160',
	'imgname': '107274890.jpg'
}, {
	'id': '107493457',
	'age': '23',
	'edu': '本科',
	'height': '163',
	'imgname': '107493457.jpg'
}, {
	'id': '107590675',
	'age': '26',
	'edu': '本科',
	'height': '163',
	'imgname': '107590675.jpg'
}, {
	'id': '107862401',
	'age': '22',
	'edu': '本科',
	'height': '173',
	'imgname': '107862401.jpg'
}, {
	'id': '107881660',
	'age': '24',
	'edu': '本科',
	'height': '162',
	'imgname': '107881660.jpg'
}, {
	'id': '107904884',
	'age': '25',
	'edu': '大专',
	'height': '162',
	'imgname': '107904884.jpg'
}, {
	'id': '107928922',
	'age': '28',
	'edu': '本科',
	'height': '165',
	'imgname': '107928922.jpg'
}, {
	'id': '108020309',
	'age': '21',
	'edu': '本科',
	'height': '164',
	'imgname': '108020309.jpg'
}, {
	'id': '108569125',
	'age': '24',
	'edu': '本科',
	'height': '163',
	'imgname': '108569125.jpg'
}, {
	'id': '108613721',
	'age': '24',
	'edu': '本科',
	'height': '165',
	'imgname': '108613721.jpg'
}, {
	'id': '108651537',
	'age': '26',
	'edu': '大专',
	'height': '160',
	'imgname': '108651537.jpg'
}, {
	'id': '108657174',
	'age': '24',
	'edu': '本科',
	'height': '165',
	'imgname': '108657174.jpg'
}, {
	'id': '108671561',
	'age': '25',
	'edu': '大专',
	'height': '160',
	'imgname': '108671561.jpg'
}, {
	'id': '108722559',
	'age': '26',
	'edu': '本科',
	'height': '160',
	'imgname': '108722559.jpg'
}, {
	'id': '108781221',
	'age': '27',
	'edu': '本科',
	'height': '168',
	'imgname': '108781221.jpg'
}, {
	'id': '93938406',
	'age': '26',
	'edu': '本科',
	'height': '167',
	'imgname': '93938406.jpg'
}, {
	'id': '85710709',
	'age': '26',
	'edu': '本科',
	'height': '158',
	'imgname': '85710709.jpg'
}, {
	'id': '82814631',
	'age': '27',
	'edu': '本科',
	'height': '170',
	'imgname': '82814631.jpg'
}, {
	'id': '62314474',
	'age': '22',
	'edu': '大专',
	'height': '168',
	'imgname': '62314474.jpg'
}, {
	'id': '54824926',
	'age': '26',
	'edu': '本科',
	'height': '168',
	'imgname': '54824926.jpg'
}, {
	'id': '92695984',
	'age': '25',
	'edu': '本科',
	'height': '162',
	'imgname': '92695984.jpg'
}, {
	'id': '105582094',
	'age': '24',
	'edu': '本科',
	'height': '162',
	'imgname': '105582094.jpg'
}, {
	'id': '104878950',
	'age': '25',
	'edu': '本科',
	'height': '158',
	'imgname': '104878950.jpg'
}, {
	'id': '106730492',
	'age': '26',
	'edu': '本科',
	'height': '165',
	'imgname': '106730492.jpg'
}, {
	'id': '107644834',
	'age': '28',
	'edu': '本科',
	'height': '164',
	'imgname': '107644834.jpg'
}, {
	'id': '97024561',
	'age': '24',
	'edu': '本科',
	'height': '168',
	'imgname': '97024561.jpg'
}, {
	'id': '110523568',
	'age': '22',
	'edu': '本科',
	'height': '173',
	'imgname': '110523568.jpg'
}, {
	'id': '111637032',
	'age': '28',
	'edu': '本科',
	'height': '161',
	'imgname': '111637032.jpg'
}, {
	'id': '111498739',
	'age': '27',
	'edu': '本科',
	'height': '164',
	'imgname': '111498739.jpg'
}, {
	'id': '111659089',
	'age': '27',
	'edu': '硕士',
	'height': '158',
	'imgname': '111659089.jpg'
}, {
	'id': '111806481',
	'age': '26',
	'edu': '本科',
	'height': '166',
	'imgname': '111806481.jpg'
}, {
	'id': '111498373',
	'age': '27',
	'edu': '本科',
	'height': '164',
	'imgname': '111498373.jpg'
}, {
	'id': '111816896',
	'age': '26',
	'edu': '本科',
	'height': '162',
	'imgname': '111816896.jpg'
}, {
	'id': '111681696',
	'age': '26',
	'edu': '本科',
	'height': '168',
	'imgname': '111681696.jpg'
}, {
	'id': '91472312',
	'age': '27',
	'edu': '本科',
	'height': '163',
	'imgname': '91472312.jpg'
}, {
	'id': '110576353',
	'age': '25',
	'edu': '大专',
	'height': '168',
	'imgname': '110576353.jpg'
}, {
	'id': '111000732',
	'age': '25',
	'edu': '本科',
	'height': '164',
	'imgname': '111000732.jpg'
}, {
	'id': '110825383',
	'age': '23',
	'edu': '本科',
	'height': '168',
	'imgname': '110825383.jpg'
}, {
	'id': '110672507',
	'age': '27',
	'edu': '大专',
	'height': '165',
	'imgname': '110672507.jpg'
}];

function randomShowUser() {
	userManInfo.sort(function() {
		return Math.random() < 0.5 ? 1 : -1;
	});
	userWomenInfo.sort(function() {
		return Math.random() < 0.5 ? 1 : -1;
	});
	var newUserInfo = userManInfo.slice(0, 7).concat(userWomenInfo.slice(0, 21));
	newUserInfo.sort(function() {
		return Math.random() < 0.5 ? 1 : -1;
	});
	$('#wrap .wrap-box .item').each(function(index, el) {
		$(this).find('img').attr('src', '//images9.baihe.com/landingpage/images_0925/' + newUserInfo[index].imgname);
		$(this).find('div').html(newUserInfo[index].age + '岁&nbsp;&nbsp; ' + newUserInfo[index].edu + '&nbsp;&nbsp;' + newUserInfo[index].height);
	});
	$('#wrap .wrap-box img').bind('load', function() {
		$('#wrap .wrap-box').show();
		$('#wrap .loading').hide();
		var time = null;
		time = setTimeout(function() {
			effect();
		}, 1000);
		// var oUa = window.navigator.userAgent;
		// if (oUa.indexOf('MSIE 6.0') != -1 || oUa.indexOf('MSIE 7.0') != -1 || oUa.indexOf('MSIE 8.0') != -1 || oUa.indexOf('MSIE 9.0') != -1) {
		// 	clearTimeout(time);
		// 	effect();
		// }
	});
}

function checkLoadHeight() {
		$('#wrap .loading').height($(window).height() - $('.header').height());
	}
	//表单焦点效果
$.fn.inputFour = function(opt) {
		opt = $.extend({
			fourClass: 'Shadow',
			blurClass: 'inp'
		}, opt);
		return this.each(function() {
			var $this = $(this);
			$this.live({
				focus: function() {
					$this.removeClass(opt.blurClass).addClass(opt.fourClass);
				},
				blur: function() {
					$this.removeClass(opt.fourClass).addClass(opt.blurClass);
				}
			});
		});
	}
	//登录

function placeholder(classname) {
		$(classname).focus(function() {
			if ($(this).val() == this.defaultValue) {
				$(this).val('');
			}
		}).blur(function() {
			if ($(this).val() == '') {
				$(this).val(this.defaultValue);
			}
		})
	}
	//图片尺寸
function imgWidthAuto() {
		var wrap = $('#wrap');
		var max = 280,
			min = 200;
		var windowWidth = $(window).width();
		var itemWidth = Math.ceil(windowWidth / 6);
		if (windowWidth >= max * 6) {
			var lineItemSize = Math.ceil(windowWidth / max);
			itemWidth = Math.ceil(windowWidth / lineItemSize);
			wrap.css({
				'width': itemWidth * lineItemSize + lineItemSize + 1
			});
			wrap.find('.item').css('width', itemWidth);
		} else {
			itemWidth = itemWidth >= 200 ? itemWidth : 200;
			wrap.css({
				'width': itemWidth * 6 + 6
			});
			wrap.find('.item').css('width', itemWidth);
		}
	}
	//最小宽度
function minWeight() {
		$('body').css('overflow-x', $(window).width() <= 1057 ? 'visible' : 'hidden');
		$('.login').css('margin-right', $(window).width() <= 1057 ? '0' : '24px');
		if (($.browser.msie) && ($.browser.version == '6.0')) {
			$('.header').css('width', $(window).width() <= 1057 ? '1057px' : '100%');
			$('.login').css('margin-right', $(window).width() <= 1057 ? '0' : '12px');
		}
	}
	//显示图片个数
function maxImgNum() {
		if ($(window).width() <= 1680) {
			$('#wrap .wrap-box .item').slice(24, 28).css('display', 'none');
		} else {
			$('#wrap .wrap-box .item').slice(24, 28).css('display', 'block');

		}
	}
	//ie6fix
function fix() {
		if (($.browser.msie) && ($.browser.version == '6.0')) {
			var top = 110;
			$('.layerBox').css({
				'position': 'absolute',
				'top': (document.body.scrollTop || document.documentElement.scrollTop) + top + 'px',
				'margin-top': '0'
			});
		}
	}
	//显示时间
function effect() {
	$('.layerBox').stop(true, true).fadeIn(600);
	$('.footer').show(600);
}


//注册验证
function checkMailMobile(src) {
		var email = /^[A-Za-z0-9]+[A-Za-z0-9_\-.]*[A-Za-z0-9]+\@[A-Za-z0-9\-_]+(((\._-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+)+$/;
		var mobile = /^1\d{10}$/;
		if (email.test(src) || mobile.test(src)) {
			return true;
		}
		return false;
	}
	// 首页注册
var baseRegister = {
	'errTips': {
		'baseUser': '请输入您的手机/邮箱',
		'mail': '该邮箱或手机已注册，直接<a href="http://bhtg.baihe.com/stat.html?ggCode=zhuceyouhua_3#https://my.baihe.com">登录</a>',
		'errorUser': '邮箱或手机填写不正确',
		'password': '请输入您的密码',
		'errorPass': '请输入6-16位英文字母或数字',
		'basePicCode': '验证码',
		'errorPicCode': '验证码错误'
	},
	'infoOld': '',
	'userIs': false,
	'passIs': false,
	'picCodeIs': false,
	'hasReg':false,
	//'noAuth':true,
	'temId': '',
	init: function() {
		var _this = this;
		_this.requestUser();
		_this.requestPass();
		_this.requestPicCode();
		_this._submit();
	},
	requestUser: function() {
		var _this = this;
		$('#baseReg .js_mail').bind('focus', function() {
			$(this).siblings('.error').html('').css('display', 'none');
			if ($(this).val() == _this.errTips['baseUser']) {
				$(this).val('');
				_this.userIs = false;
				$(this).siblings('.error').html(_this.errTips['errorUser']).css('display', 'none');
			}
			return false;
		});
		$('#baseReg .js_mail').bind('blur', function() {
			var $this = $(this);
			var mailVal = $this.val();
			if (mailVal == '' && /^\s*$/.test(mailVal)) {
				$this.val(_this.errTips['baseUser']);
			}else{
				_this.requestshowPicCodeSvr();
			}
			_this.requestUserSvr($this, mailVal);
			
		});
	},
	requestUserSvr: function(obj, formval) {
		var _this = this;
		if (!checkMailMobile(formval)) {
			obj.siblings('.ok').css('display', 'none');
			obj.siblings('.error').html(_this.errTips['errorUser']).css('display', 'block');
		} else {
			obj.siblings('.ok').css('display', 'block');
			obj.siblings('.error').html(_this.errTips['errorUser']).css('display', 'none');
			_this.userIs = true;
			_this.hasReg=false;
			// var url = 'http://my.baihe.com/register/emailCheckForXs?jsonCallBack=?';
			// $.getJSON(url, {
			// 	email: formval
			// }, function(data) {
			// 	_this.infoOld = obj.val();
			// 	if (data.state == 1) {
			// 		obj.siblings('.ok').css('display', 'block');
			// 		obj.siblings('.error').html(_this.errTips['errorUser']).css('display', 'none');
			// 		_this.userIs = true;
			// 		_this.hasReg=false;
			// 		 // $.ajax({
			// 			// 	        url: 'http://my.baihe.com/Getinterregist/checkPhoneAuth?jsonCallBack=?',
			// 			// 	        dataType: 'jsonp',
			// 			// 	        data: {
			// 			// 	            'phone': formval
			// 			// 	        },
			// 			// 	        success: function(data) {
			// 			// 	            if (data && data.state == 1 && data.data == 1) {
			// 			// 	            	validArr['noAuth']=false;
			// 			// 	                baihe.block({
			// 			// 	                    text: '此手机号已经手机认证过，注册成功后将此手机号与原账号解绑，并绑定此账号？',
			// 			// 	                    callback: function(){
			// 			// 	                    	validArr['noReg']=true;
			// 			// 	                    }
			// 			// 	                });
			// 			// 	            }else{
			//
			// 			// 	            }
			// 			// 	        }
			// 			// 	    });
			//
			//
			//
			//
			// 	} else {
			// 		if(data.data == 'tongdunerr'){
			// 					baihe.block({
			// 						title: '提示',
			// 						text: '非常抱歉，您的注册环境异常，请稍后重试。如有疑问，请咨询客服：400-1520-555（8:00至20:00）。'
			// 					});
			// 					return false;
			// 				}
			// 		obj.siblings('.ok').css('display', 'none');
			// 		obj.siblings('.error').html(_this.errTips['mail']).css('display', 'block');
			// 		_this.userIs = true;
			// 		_this.hasReg=true;
			// 	}
			// });
		}
	},
	requestPass: function() {
		var _this = this;
		var password = /^[a-zA-Z0-9]{6,16}$/;
		var passEle = $('#baseReg .js_pass');
		var passEleReal = $('#baseReg .js_pass2');
		passEleReal.bind('keydown', function() {
			checkPwdLevel();
		});
		passEle.bind('focus', function() {
			passEleReal.css('display', 'block').focus();
			passEle.css('display', 'none');
			passEleReal.siblings('.error').css('display', 'none');
			if ($(this).val() == _this.errTips['password']) {
				$(this).val('');
				_this.passIs = false;
			}
		});
		passEleReal.bind('blur', function() {
			var $this = $(this);
			var passVal = $this.val();
			if (passVal == '' && /^\s*$/.test(passVal)) {
				passEleReal.css('display', 'none');
				passEle.css('display', 'block');
				passEle.val(_this.errTips['password']);
				passEleReal.siblings('#passSafe').css('display', 'none');
			} else if ($this.val().length < 6 || $this.val().length > 16 || !password.test($this.val())) {
				passEleReal.siblings('.error').css('display', 'block');
			} else {
				passEleReal.siblings('.error').css('display', 'none');
				_this.passIs = true;
			}

		});

		function checkPwdLevel() {
			var str = passEleReal.val();
			var level = 1;
			if (str == '' || str.length < 6) {
				level = 1;
			} else {
				if (isNaN(str) && password.test(str)) {
					if (str.length < 10 || str.length > 16) {
						level = 2;
					} else {
						level = 3;
					}
				}
			}
			passEleReal.siblings('#passSafe').css('display', 'block');
			passEleReal.siblings('#passSafe').removeClass();
			passEleReal.siblings('#passSafe').addClass("passLevel");
			switch (level) {
				case 1:
					passEleReal.siblings('#passSafe').html("低");
					passEleReal.siblings('#passSafe').addClass("low");
					break;
				case 2:
					passEleReal.siblings('#passSafe').html("中");
					passEleReal.siblings('#passSafe').addClass("medium");
					break;
				case 3:
					passEleReal.siblings('#passSafe').html("高");
					passEleReal.siblings('#passSafe').addClass("high");
					break;
			}
		}
	},
	requestPicCode: function() {
		var _this = this;
		$('#baseReg .js_piccode').bind('focus', function() {
			$(this).siblings('.error').html('').hide();
			if ($(this).val() == _this.errTips['basePicCode']) {
				$(this).val('');
			}
			$("#verifyErr").html("验证码错误").hide();
		});
		$('#baseReg .js_piccode').bind('blur', function() {
			var picCodeVal = $(this).val();
			var tmpid=$("#tmpid").val();
			var code= $("#code").val();
			if (picCodeVal == '') {
				$(this).val(_this.errTips['basePicCode']);
				$("#verifyErr").html("请填写验证码").show();
			}else{	                
					    $.getJSON("//my.baihe.com/Getinterlogin/checkVerifyPic?jsonCallBack=?&tmpId="+tmpid+"&checkcode="+code,
					        function(msg){
					            if(msg.state==1&&msg.data==1){					                
					                //validArr['codeVal'] = true;
				                    baihe.bhtongji.tongji({'event': '0', 'spm': '4.10.56.754.2022'});
				                    $('#codeVal_msg').html('');
					                _this.picCodeIs=true;
					                return true;
					            }else{
					                $('#verifyErr').html('验证码错误').show();
					                 baihe.bhtongji.tongji({'event': '0', 'spm': '4.10.56.755.2023'}); 
					                 showVerify();
					                //validArr['codeVal'] = false;
					                return false;
					            }
					        }); 
	                } 
		// 	//_this.requestPicCodeSvr(this, picCodeVal);
		});
	},
	requestPicCodeSvr: function(obj, formval) {
		var _this=this;
		_this.picCodeIs=checkVerify($("#tmpid").val(), $("#code").val());
	},
	requestGetPicCodeSvr: function() {
		showVerify()
	},
	requestshowPicCodeSvr: function() {
		getVerifyRegist();
	},
	_submit: function() {
		var _this = this;
		var oSubmit = $('#baseRegSubmit');
		var newMarkerLp = "baihe_chlp";
		oSubmit.bind('click', function(event) {
			if (_this.userIs&&!(_this.hasReg) && _this.passIs) {
				var newCodeSpm = new CodeSpm();
				newCodeSpm.add();

				$("#password").val($('#baseReg .js_pass2').val());
				$("#password_tip").val($('#baseReg .js_pass2').val());

				var loginsubmit = function() {
					var userAccount = $('#baseReg .js_mail').val();
					var password = $('#baseReg .js_pass2').val();
					var codeValue = $("#code").val()?$("#code").val().toLowerCase():'';
					var codeId = $("#tmpid").val();
					/*if (showVerifyDivRegist == true) {
						$.getJSON("http://my.baihe.com/Getinterlogin/checkVerifyPic?jsonCallBack=?&tmpId=" + codeId + "&checkcode=" + codeValue,
							function(msg) {
								if (msg.state == 1 && msg.data == 1) {
									$("#verifyErr").hide();
									var url = 'http://my.baihe.com/Getinterregist/createBHAccount?jsonCallBack=?';
									$.getJSON(url, {
										userAccount: userAccount,
										password: password,
										codeId: codeId,
										codeValue: codeValue,
										'event':'1',
										'spmp':'4.10.56.228.700'
									}, function(data) {
										if (data.data == 1) {
											baihe.cookie.setCookie('tongjiType','newlandpage','','/','baihe.com','');
											//baihe.bhtongji.tongji({'event':'0','spm':'4.10.56.228.700'});
											location.href = "http://my.baihe.com/register";
										} else {											
											baihe.block({
						                        text: '注册失败,请重试！'
						                    });
										}
									});
								} else {
									$("#verifyErr").show();
								}
							});
					} else {
						var url = 'http://my.baihe.com/Getinterregist/createBHAccount?jsonCallBack=?';
						$.getJSON(url, {
							userAccount: userAccount,
							password: password,
							codeId: codeId,
							codeValue: codeValue,
							'event':'1',
							'spmp':'4.10.56.228.700'
						}, function(data) {
							if (data.data == 1) {
								baihe.cookie.setCookie('tongjiType','newlandpage','','/','baihe.com','');
								//baihe.bhtongji.tongji({'event':'0','spm':'4.10.56.228.700'});
								location.href = "http://my.baihe.com/register";
							} else {								
								baihe.block({
						                        text: '注册失败,请重试！'
						                    });
							}
						});
					}*/
					if(!showVerifyDivRegist||(showVerifyDivRegist&&_this.picCodeIs)){
						//---删除预注册-sunzl---
						//var url = 'http://my.baihe.com/Getinterregist/createBHAccount?jsonCallBack=?';
						//$.getJSON(url, {
						//	userAccount: userAccount,
						//	password: password,
						//	codeId: codeId,
						//	codeValue: codeValue,
						//	'event':'1',
						//	'spmp':'4.10.56.228.700'
						//}, function(data) {
						//	if (data.data == 1) {
						//		baihe.cookie.setCookie('tongjiType','newlandpage','','/','baihe.com','');
						//		location.href = "http://my.baihe.com/register";
						//	}else if(data.data == 'tongdunerr'){
						//		baihe.block({
						//			title: '提示',
						//			text: '非常抱歉，您的注册环境异常，请稍后重试。如有疑问，请咨询客服：400-1520-555（8:00至20:00）。'
						//		});
						//		return false;
						//	}else {
						//		baihe.block({
						//			text: '注册失败,请重试！'
						//		});
						//	}
						//});
						//----new sunzl----
						var userAccount = userAccount;
						var password = password;
						var codeId = codeId;
						var codeValue = codeValue;
						var event = '1';
						var spmp = '4.10.56.228.700';
						baihe.cookie.setCookie('tongjiType','newlandpage','','/','baihe.com','');
						//获取浏览器传参
		                function GetQueryString(name){
		                     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		                     var r = window.location.search.substr(1).match(reg);
		                     if(r!=null)return  unescape(r[2]); return null;
		                }

		                var chanel = GetQueryString('Channel');
		                baihe.cookie.setCookie('channel',chanel,'','/','baihe.com','');

		                function getLocationParameter(){
		                	var url = location.search //获取url中"?"符后的字串 ('?modFlag=business&role=1')
							var theRequest = {};
							if (url.indexOf('?') != -1) {
								var str = url.substr(1) //substr()方法返回从参数值开始到结束的字符串；
								var strs = str.split('&')
								for (var i = 0; i < strs.length; i++) {
								    theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
								}
								
							}
							return theRequest;
		                }
		                var jumpLaction = '//my.baihe.com/register?userAccount='+ userAccount + '&' + $.md5(userAccount) + '=' + password +'&codeId='+ codeId +'&codeValue='+ codeValue +'&event='+ event +'&spmp='+ spmp +'&showInfoStatu=3&Channel='+chanel+'';
		                var locationParameter = getLocationParameter();
		                var newParameter = '';
		                var endJumpLaction = '';
		                for(  var key in locationParameter ){
		                	     $.md5(userAccount)
		                	if( key !== userAccount || key !== codeId || key !== codeValue || key !== event || key !== spmp || key !== showInfoStatu ||key !== Channel ||key !== $.md5(userAccount)){
		                		newParameter += '&'+key+'='+locationParameter[key];
		                	}
		                }
		                endJumpLaction = jumpLaction + newParameter;
		                window.location=endJumpLaction;
						//----end----
					}

				}
				setTimeout(loginsubmit, 500);

			} else {
				if (!_this.userIs) {
					if($('#baseReg .js_mail').val()==''||$('#baseReg .js_mail').val()=='邮箱 / 手机'){
						$('#baseReg .js_mail').siblings('.error').html('手机或邮箱账号不能为空').css('display', 'block');
					}else{
					$('#baseReg .js_mail').siblings('.error').html(_this.errTips['errorUser']).css('display', 'block');
					}
				}
				if(_this.hasReg){
					$('#baseReg .js_mail').siblings('.error').html(_this.errTips['email']).css('display', 'block');
				}
				if (!_this.passIs) {
					$('#baseReg .js_pass').siblings('.error').html(_this.errTips['errorPass']).css('display', 'block');
				}
				if (!_this.picCodeIs) {
					if ($("#code").val() == '') {
						$('#baseReg .js_piccode').siblings('.error').html("请填写验证码").css('display', 'block');
					} else {
						$('#baseReg .js_piccode').siblings('.error').html(_this.errTips['errorPicCode']).css('display', 'block');
					}
				}
				event.preventDefault();
			}
		});

		$(document).keydown(function(e) {
			if (e.keyCode == 13) {
				var mailVal = $('#baseReg .js_mail').val();
				if (mailVal == '' && /^\s*$/.test(mailVal)) {
					$('#baseReg .js_mail').val(_this.errTips['baseUser']);
				}
				_this.requestUserSvr($('#baseReg .js_mail'), mailVal);

				var password = /^[a-zA-Z0-9_]{6,16}$/;
				var passVal = $('#baseReg .js_pass2').val();
				if (passVal == '' && /^\s*$/.test(passVal)) {
					$('#baseReg .js_pass2').css('display', 'none');
					$('#baseReg .js_pass').css('display', 'block');
					$('#baseReg .js_pass').val(_this.errTips['password']);
					$('#baseReg .js_pass2').siblings('#passSafe').css('display', 'none');
				} else if ($('#baseReg .js_pass2').val().length < 6 || $('#baseReg .js_pass2').val().length > 16 || !password.test($('#baseReg .js_pass2').val())) {
					$('#baseReg .js_pass2').siblings('.error').css('display', 'block');
				} else {
					$('#baseReg .js_pass2').siblings('.error').css('display', 'none');
					_this.passIs = true;
				}

				if (_this.userIs &&_this.hasReg && _this.passIs) {
					oSubmit.trigger('click');
				}
			}
		});

	}
};
//
/*var randomNear = {
	init: function() {
		window.setInterval(this._random, 2000);
	},
	_random: function() {
		var randomNum = Math.ceil(Math.random() * (1500 - 800) + 800);
		var obj = $('.header .txt strong');
		var objA = $('.layerBox .txt strong');
		obj.html(randomNum);
		objA.html(randomNum);
	}
};*/

function CodeSpm() {
	this.iJson = [{
		"spm": "2.18.51.223.663",
		"ggcode": "yzc_16",
		"channel": "ycgg",
		"code": "140178"
	}, {
		"spm": "2.18.51.223.662",
		"ggcode": "yzc_17",
		"channel": "snx  ",
		"code": "140191"
	}, {
		"spm": "2.18.51.223.661",
		"ggcode": "yzc_18",
		"channel": "xggg",
		"code": "140190"
	}, {
		"spm": "2.18.51.223.660",
		"ggcode": "yzc_19",
		"channel": "sqmt",
		"code": "140200"
	}, {
		"spm": "2.18.51.223.659",
		"ggcode": "yzc_20",
		"channel": "360ss",
		"code": "3-0000136"
	}, {
		"spm": "2.18.51.223.658",
		"ggcode": "yzc_21",
		"channel": "360ss",
		"code": "3-0000194"
	}, {
		"spm": "2.18.51.223.657",
		"ggcode": "yzc_22",
		"channel": "360ss",
		"code": "3-25873"
	}, {
		"spm": "2.18.51.223.656",
		"ggcode": "yzc_23",
		"channel": "360ss",
		"code": "3-0001080"
	}, {
		"spm": "2.18.51.223.655",
		"ggcode": "yzc_24",
		"channel": "360ss",
		"code": "3-00007079"
	}, {
		"spm": "2.18.51.223.654",
		"ggcode": "yzc_25",
		"channel": "360ss",
		"code": "3-0000164"
	}, {
		"spm": "2.18.51.223.653",
		"ggcode": "yzc_26",
		"channel": "360ss",
		"code": "3-25878"
	}, {
		"spm": "2.18.51.223.652",
		"ggcode": "yzc_27",
		"channel": "360ss",
		"code": "3-00615-g"
	}, {
		"spm": "2.18.51.223.651",
		"ggcode": "yzc_28",
		"channel": "360ss",
		"code": "3-47929"
	}, {
		"spm": "2.18.51.223.650",
		"ggcode": "yzc_29",
		"channel": "360ss",
		"code": "3-00002968"
	}, {
		"spm": "2.18.51.223.649",
		"ggcode": "yzc_30",
		"channel": "360ss",
		"code": "3-0000182"
	}, {
		"spm": "2.18.51.223.648",
		"ggcode": "yzc_31",
		"channel": "360ss",
		"code": "3-00024096"
	}, {
		"spm": "2.18.51.223.647",
		"ggcode": "yzc_32",
		"channel": "360ss",
		"code": "3-48179"
	}, {
		"spm": "2.18.51.223.646",
		"ggcode": "yzc_33",
		"channel": "360ss",
		"code": "3-01684-g"
	}, {
		"spm": "2.18.51.223.645",
		"ggcode": "yzc_34",
		"channel": "360ss",
		"code": "3-0001108"
	}, {
		"spm": "2.18.51.223.644",
		"ggcode": "yzc_35",
		"channel": "360ss",
		"code": "3-0001305"
	}, {
		"spm": "2.18.51.223.643",
		"ggcode": "yzc_36",
		"channel": "360ss",
		"code": "3-00003647"
	}, {
		"spm": "2.18.51.223.642",
		"ggcode": "yzc_37",
		"channel": "360ss",
		"code": "3-0000206"
	}, {
		"spm": "2.18.51.223.641",
		"ggcode": "yzc_38",
		"channel": "360ss",
		"code": "3-00001711"
	}, {
		"spm": "2.18.51.223.640",
		"ggcode": "yzc_39",
		"channel": "360ss",
		"code": "3-00007553"
	}, {
		"spm": "2.18.51.223.639",
		"ggcode": "yzc_40",
		"channel": "360ss",
		"code": "3-00001706"
	}, {
		"spm": "2.18.51.223.638",
		"ggcode": "yzc_41",
		"channel": "360ss",
		"code": "3-00852-g"
	}, {
		"spm": "2.18.51.223.637",
		"ggcode": "yzc_42",
		"channel": "360ss",
		"code": "3-0001156"
	}, {
		"spm": "2.18.51.223.636",
		"ggcode": "yzc_43",
		"channel": "360ss",
		"code": "3-00008425"
	}, {
		"spm": "2.18.51.223.635",
		"ggcode": "yzc_44",
		"channel": "360ss",
		"code": "3-0000912"
	}, {
		"spm": "2.18.51.223.634",
		"ggcode": "yzc_45",
		"channel": "360ss",
		"code": "3-0001279"
	}, {
		"spm": "2.18.51.223.633",
		"ggcode": "yzc_46",
		"channel": "360ss",
		"code": "3-00610-g"
	}, {
		"spm": "2.18.51.223.632",
		"ggcode": "yzc_47",
		"channel": "360ss",
		"code": "3-00001707-sj"
	}, {
		"spm": "2.18.51.223.631",
		"ggcode": "yzc_48",
		"channel": "360ss",
		"code": "3-00008764"
	}, {
		"spm": "2.18.51.223.630",
		"ggcode": "yzc_49",
		"channel": "360ss",
		"code": "3-0000140"
	}, {
		"spm": "2.18.51.223.629",
		"ggcode": "yzc_50",
		"channel": "360ss",
		"code": "3-0001286"
	}, {
		"spm": "2.18.51.223.628",
		"ggcode": "yzc_51",
		"channel": "360ss",
		"code": "3-00017861"
	}, {
		"spm": "2.18.51.223.627",
		"ggcode": "yzc_52",
		"channel": "360ss",
		"code": "3-00020250"
	}, {
		"spm": "2.18.51.223.626",
		"ggcode": "yzc_53",
		"channel": "360ss",
		"code": "3-0000149"
	}, {
		"spm": "2.18.51.223.625",
		"ggcode": "yzc_54",
		"channel": "360ss",
		"code": "3-01255-g"
	}, {
		"spm": "2.17.50.222.624",
		"ggcode": "yzc_55",
		"channel": "360ss",
		"code": "3-00022635"
	}, {
		"spm": "2.18.51.223.623",
		"ggcode": "yzc_56",
		"channel": "360ss",
		"code": "3-0001309"
	}, {
		"spm": "2.18.51.223.622",
		"ggcode": "yzc_57",
		"channel": "360ss",
		"code": "3-00007576"
	}, {
		"spm": "2.18.51.223.621",
		"ggcode": "yzc_58",
		"channel": "360ss",
		"code": "3-25881"
	}, {
		"spm": "2.18.51.223.620",
		"ggcode": "yzc_59",
		"channel": "360ss",
		"code": "3-00008419"
	}, {
		"spm": "2.18.51.223.619",
		"ggcode": "yzc_60",
		"channel": "360ss",
		"code": "3-00023034"
	}, {
		"spm": "2.18.51.223.618",
		"ggcode": "yzc_61",
		"channel": "360ss",
		"code": "3-00001712"
	}, {
		"spm": "2.18.51.223.617",
		"ggcode": "yzc_62",
		"channel": "360ss",
		"code": "3-00003405"
	}, {
		"spm": "2.18.51.223.616",
		"ggcode": "yzc_63",
		"channel": "360ss",
		"code": "3-00873-g"
	}, {
		"spm": "2.18.51.223.615",
		"ggcode": "yzc_64",
		"channel": "360ss",
		"code": "3-01833-g"
	}, {
		"spm": "2.18.51.223.614",
		"ggcode": "yzc_65",
		"channel": "360ss",
		"code": "3-25855"
	}, {
		"spm": "2.18.51.223.613",
		"ggcode": "yzc_66",
		"channel": "360ss",
		"code": "3-0000067"
	}, {
		"spm": "2.18.51.223.612",
		"ggcode": "yzc_67",
		"channel": "360ss",
		"code": "3-0000066"
	}, {
		"spm": "2.18.51.223.611",
		"ggcode": "yzc_68",
		"channel": "360ss",
		"code": "3-00008500"
	}, {
		"spm": "2.18.51.223.610",
		"ggcode": "yzc_69",
		"channel": "360ss",
		"code": "3-0001104"
	}, {
		"spm": "2.18.51.223.609",
		"ggcode": "yzc_70",
		"channel": "360ss",
		"code": "3-0001025"
	}, {
		"spm": "2.18.51.223.608",
		"ggcode": "yzc_71",
		"channel": "360ss",
		"code": "3-00022798"
	}, {
		"spm": "2.18.51.223.607",
		"ggcode": "yzc_72",
		"channel": "360ss",
		"code": "3-00001713-sj"
	}, {
		"spm": "2.18.51.223.606",
		"ggcode": "yzc_73",
		"channel": "360ss",
		"code": "3-00024092"
	}, {
		"spm": "2.18.51.223.605",
		"ggcode": "yzc_74",
		"channel": "360ss",
		"code": "3-0000849"
	}, {
		"spm": "2.18.51.223.604",
		"ggcode": "yzc_75",
		"channel": "360ss",
		"code": "3-0001187"
	}, {
		"spm": "2.18.51.223.603",
		"ggcode": "yzc_76",
		"channel": "360ss",
		"code": "3-00005775"
	}, {
		"spm": "2.18.51.223.602",
		"ggcode": "yzc_77",
		"channel": "360ss",
		"code": "3-00014852"
	}, {
		"spm": "2.18.51.223.601",
		"ggcode": "yzc_78",
		"channel": "360ss",
		"code": "3-00003400"
	}, {
		"spm": "2.18.51.223.600",
		"ggcode": "yzc_79",
		"channel": "360ss",
		"code": "3-00003404"
	}, {
		"spm": "2.18.51.223.599",
		"ggcode": "yzc_80",
		"channel": "360ss",
		"code": "3-00023970"
	}, {
		"spm": "2.18.51.223.598",
		"ggcode": "yzc_81",
		"channel": "360ss",
		"code": "3-00019809"
	}, {
		"spm": "2.18.51.223.597",
		"ggcode": "yzc_82",
		"channel": "360ss",
		"code": "3-00018781"
	}, {
		"spm": "2.18.51.223.596",
		"ggcode": "yzc_83",
		"channel": "360ss",
		"code": "3-01705-g"
	}, {
		"spm": "2.18.51.223.595",
		"ggcode": "yzc_84",
		"channel": "360ss",
		"code": "3-00008509"
	}, {
		"spm": "2.18.51.223.594",
		"ggcode": "yzc_85",
		"channel": "360ss",
		"code": "3-25854"
	}, {
		"spm": "2.18.51.223.593",
		"ggcode": "yzc_86",
		"channel": "360ss",
		"code": "3-25915"
	}, {
		"spm": "2.18.51.223.592",
		"ggcode": "yzc_87",
		"channel": "360ss",
		"code": "3-0000084"
	}, {
		"spm": "2.18.51.223.591",
		"ggcode": "yzc_88",
		"channel": "360ss",
		"code": "3-00008434"
	}, {
		"spm": "2.18.51.223.590",
		"ggcode": "yzc_89",
		"channel": "360ss",
		"code": "3-00008432"
	}, {
		"spm": "2.18.51.223.589",
		"ggcode": "yzc_90",
		"channel": "360ss",
		"code": "3-00008423"
	}, {
		"spm": "2.18.51.223.588",
		"ggcode": "yzc_91",
		"channel": "360ss",
		"code": "3-26175"
	}, {
		"spm": "2.18.51.223.587",
		"ggcode": "yzc_92",
		"channel": "360ss",
		"code": "3-0001094"
	}, {
		"spm": "2.18.51.223.586",
		"ggcode": "yzc_93",
		"channel": "360ss",
		"code": "3-0001068"
	}, {
		"spm": "2.18.51.223.585",
		"ggcode": "yzc_94",
		"channel": "360ss",
		"code": "3-00001708"
	}, {
		"spm": "2.18.51.223.584",
		"ggcode": "yzc_95",
		"channel": "360ss",
		"code": "3-00023065"
	}, {
		"spm": "2.18.51.223.583",
		"ggcode": "yzc_96",
		"channel": "360ss",
		"code": "3-0000162"
	}, {
		"spm": "2.18.51.223.582",
		"ggcode": "yzc_97",
		"channel": "360ss",
		"code": "3-0000187-sj"
	}, {
		"spm": "2.18.51.223.581",
		"ggcode": "yzc_98",
		"channel": "360ss",
		"code": "3-0001091"
	}, {
		"spm": "2.18.51.223.580",
		"ggcode": "yzc_99",
		"channel": "360ss",
		"code": "3-00007624"
	}, {
		"spm": "2.18.51.223.579",
		"ggcode": "yzc_100",
		"channel": "360ss",
		"code": "3-00004549"
	}, {
		"spm": "2.18.51.223.578",
		"ggcode": "yzc_101",
		"channel": "360ss",
		"code": "3-00018152"
	}, {
		"spm": "2.18.51.223.577",
		"ggcode": "yzc_102",
		"channel": "360ss",
		"code": "3-00007918"
	}, {
		"spm": "2.18.51.223.576",
		"ggcode": "yzc_103",
		"channel": "360ss",
		"code": "3-01306-g"
	}, {
		"spm": "2.18.51.223.575",
		"ggcode": "yzc_104",
		"channel": "360ss",
		"code": "3-00423-g"
	}, {
		"spm": "2.18.51.223.574",
		"ggcode": "yzc_105",
		"channel": "360ss",
		"code": "3-01953-g"
	}, {
		"spm": "2.18.51.223.573",
		"ggcode": "yzc_106",
		"channel": "360ss",
		"code": "3-03773-g"
	}, {
		"spm": "2.18.51.223.572",
		"ggcode": "yzc_107",
		"channel": "360ss",
		"code": "3-08579"
	}, {
		"spm": "2.18.51.223.571",
		"ggcode": "yzc_108",
		"channel": "360ss",
		"code": "3-0001454"
	}, {
		"spm": "2.18.51.223.570",
		"ggcode": "yzc_109",
		"channel": "360ss",
		"code": "3-00022702"
	}, {
		"spm": "2.18.51.223.569",
		"ggcode": "yzc_110",
		"channel": "360ss",
		"code": "3-00001805"
	}, {
		"spm": "2.18.51.223.568",
		"ggcode": "yzc_111",
		"channel": "360ss",
		"code": "3-0000065"
	}, {
		"spm": "2.18.51.223.567",
		"ggcode": "yzc_112",
		"channel": "360ss",
		"code": "3-0001096"
	}, {
		"spm": "2.18.51.223.566",
		"ggcode": "yzc_113",
		"channel": "360ss",
		"code": "3-0001101"
	}, {
		"spm": "2.18.51.223.565",
		"ggcode": "yzc_114",
		"channel": "360ss",
		"code": "3-00023068"
	}, {
		"spm": "2.18.51.223.564",
		"ggcode": "yzc_115",
		"channel": "360ss",
		"code": "3-0001028"
	}, {
		"spm": "2.18.51.223.563",
		"ggcode": "yzc_116",
		"channel": "360ss",
		"code": "3-00022728"
	}, {
		"spm": "2.18.51.223.562",
		"ggcode": "yzc_117",
		"channel": "360ss",
		"code": "3-0000159"
	}, {
		"spm": "2.18.51.223.561",
		"ggcode": "yzc_118",
		"channel": "360ss",
		"code": "3-0000854"
	}, {
		"spm": "2.18.51.223.560",
		"ggcode": "yzc_119",
		"channel": "360ss",
		"code": "3-0000833"
	}, {
		"spm": "2.18.51.223.559",
		"ggcode": "yzc_120",
		"channel": "sogou",
		"code": "500377-1354"
	}, {
		"spm": "2.18.51.223.558",
		"ggcode": "yzc_121",
		"channel": "sogou",
		"code": "500375-0065"
	}, {
		"spm": "2.18.51.223.557",
		"ggcode": "yzc_122",
		"channel": "sogou",
		"code": "500375-0018"
	}, {
		"spm": "2.18.51.223.556",
		"ggcode": "yzc_123",
		"channel": "sogou",
		"code": "500138-007"
	}, {
		"spm": "2.18.51.223.555",
		"ggcode": "yzc_124",
		"channel": "sogou",
		"code": "500376-1506"
	}, {
		"spm": "2.18.51.223.554",
		"ggcode": "yzc_125",
		"channel": "sogou",
		"code": "500006-007"
	}, {
		"spm": "2.18.51.223.553",
		"ggcode": "yzc_126",
		"channel": "sogou",
		"code": "500375-0069"
	}, {
		"spm": "2.18.51.223.552",
		"ggcode": "yzc_127",
		"channel": "sogou",
		"code": "500375-0027"
	}, {
		"spm": "2.18.51.223.551",
		"ggcode": "yzc_128",
		"channel": "sogou",
		"code": "500375-0038"
	}, {
		"spm": "2.18.51.223.550",
		"ggcode": "yzc_129",
		"channel": "sogou",
		"code": "500375-7986"
	}, {
		"spm": "2.18.51.223.549",
		"ggcode": "yzc_130",
		"channel": "sogou",
		"code": "500375-8589"
	}, {
		"spm": "2.18.51.223.548",
		"ggcode": "yzc_131",
		"channel": "sogou",
		"code": "500005-002"
	}, {
		"spm": "2.18.51.223.547",
		"ggcode": "yzc_132",
		"channel": "sogou",
		"code": "500014-001"
	}, {
		"spm": "2.18.51.223.546",
		"ggcode": "yzc_133",
		"channel": "sogou",
		"code": "6-04484"
	}, {
		"spm": "2.18.51.223.545",
		"ggcode": "yzc_134",
		"channel": "sogou",
		"code": "500375-8134"
	}, {
		"spm": "2.18.51.223.544",
		"ggcode": "yzc_135",
		"channel": "sogou",
		"code": "500015-004"
	}, {
		"spm": "2.18.51.223.543",
		"ggcode": "yzc_136",
		"channel": "sogou",
		"code": "500138-001"
	}, {
		"spm": "2.18.51.223.542",
		"ggcode": "yzc_137",
		"channel": "sogou",
		"code": "500013-006"
	}, {
		"spm": "2.18.51.223.541",
		"ggcode": "yzc_138",
		"channel": "sogou",
		"code": "500229-009"
	}, {
		"spm": "2.18.51.223.540",
		"ggcode": "yzc_139",
		"channel": "sogou",
		"code": "500263-025"
	}, {
		"spm": "2.18.51.223.539",
		"ggcode": "yzc_140",
		"channel": "sogou",
		"code": "500375-0019"
	}, {
		"spm": "2.18.51.223.538",
		"ggcode": "yzc_141",
		"channel": "sogou",
		"code": "500376-16182"
	}, {
		"spm": "2.18.51.223.537",
		"ggcode": "yzc_142",
		"channel": "sogou",
		"code": "500375-0086"
	}, {
		"spm": "2.18.51.223.536",
		"ggcode": "yzc_143",
		"channel": "sogou",
		"code": "500377-285"
	}, {
		"spm": "2.18.51.223.535",
		"ggcode": "yzc_144",
		"channel": "sogou",
		"code": "500003-001"
	}, {
		"spm": "2.18.51.223.534",
		"ggcode": "yzc_145",
		"channel": "sogou",
		"code": "500286-005"
	}, {
		"spm": "2.18.51.223.533",
		"ggcode": "yzc_146",
		"channel": "sogou",
		"code": "500005-004"
	}, {
		"spm": "2.18.51.223.532",
		"ggcode": "yzc_147",
		"channel": "sogou",
		"code": "500375-0034"
	}, {
		"spm": "2.18.51.223.531",
		"ggcode": "yzc_148",
		"channel": "sogou",
		"code": "500377-3588"
	}, {
		"spm": "2.18.51.223.530",
		"ggcode": "yzc_149",
		"channel": "sogou",
		"code": "500377-1344"
	}, {
		"spm": "2.18.51.223.529",
		"ggcode": "yzc_150",
		"channel": "sogou",
		"code": "500248-037"
	}, {
		"spm": "2.18.51.223.528",
		"ggcode": "yzc_151",
		"channel": "sogou",
		"code": "500130-006"
	}, {
		"spm": "2.18.51.223.527",
		"ggcode": "yzc_152",
		"channel": "sogou",
		"code": "500377-9036"
	}, {
		"spm": "2.18.51.223.526",
		"ggcode": "yzc_153",
		"channel": "sogou",
		"code": "6-00855"
	}, {
		"spm": "2.18.51.223.525",
		"ggcode": "yzc_154",
		"channel": "sogou",
		"code": "6-04566"
	}, {
		"spm": "2.18.51.223.524",
		"ggcode": "yzc_155",
		"channel": "sogou",
		"code": "6-64584"
	}, {
		"spm": "2.18.51.223.523",
		"ggcode": "yzc_156",
		"channel": "sogou",
		"code": "500377-146"
	}, {
		"spm": "2.18.51.223.522",
		"ggcode": "yzc_157",
		"channel": "sogou",
		"code": "6-47846"
	}, {
		"spm": "2.18.51.223.521",
		"ggcode": "yzc_158",
		"channel": "sogou",
		"code": "500005-001"
	}, {
		"spm": "2.18.51.223.520",
		"ggcode": "yzc_159",
		"channel": "sogou",
		"code": "500006-005"
	}, {
		"spm": "2.18.51.223.519",
		"ggcode": "yzc_160",
		"channel": "sogou",
		"code": "6-04600"
	}, {
		"spm": "2.18.51.223.518",
		"ggcode": "yzc_161",
		"channel": "sogou",
		"code": "500377-101103"
	}, {
		"spm": "2.18.51.223.517",
		"ggcode": "yzc_162",
		"channel": "sogou",
		"code": "500153-049"
	}, {
		"spm": "2.18.51.223.516",
		"ggcode": "yzc_163",
		"channel": "sogou",
		"code": "500375-0009"
	}, {
		"spm": "2.18.51.223.515",
		"ggcode": "yzc_164",
		"channel": "sogou",
		"code": "500229-019"
	}, {
		"spm": "2.18.51.223.514",
		"ggcode": "yzc_165",
		"channel": "sogou",
		"code": "500375-1155"
	}, {
		"spm": "2.18.51.223.513",
		"ggcode": "yzc_166",
		"channel": "sogou",
		"code": "6-04452"
	}, {
		"spm": "2.18.51.223.512",
		"ggcode": "yzc_167",
		"channel": "sogou",
		"code": "500377-2848"
	}, {
		"spm": "2.18.51.223.511",
		"ggcode": "yzc_168",
		"channel": "sogou",
		"code": "500376-16793"
	}, {
		"spm": "2.18.51.223.510",
		"ggcode": "yzc_169",
		"channel": "sogou",
		"code": "500219-016"
	}, {
		"spm": "2.18.51.223.509",
		"ggcode": "yzc_170",
		"channel": "sogou",
		"code": "500377-14135"
	}, {
		"spm": "2.18.51.223.508",
		"ggcode": "yzc_171",
		"channel": "sogou",
		"code": "500276-036"
	}, {
		"spm": "2.18.51.223.507",
		"ggcode": "yzc_172",
		"channel": "sogou",
		"code": "6-04561"
	}, {
		"spm": "2.18.51.223.506",
		"ggcode": "yzc_173",
		"channel": "sogou",
		"code": "500377-3188"
	}, {
		"spm": "2.18.51.223.505",
		"ggcode": "yzc_174",
		"channel": "sogou",
		"code": "500283-046"
	}, {
		"spm": "2.18.51.223.504",
		"ggcode": "yzc_175",
		"channel": "sogou",
		"code": "500316-001"
	}, {
		"spm": "2.18.51.223.503",
		"ggcode": "yzc_176",
		"channel": "sogou",
		"code": "6-64776"
	}, {
		"spm": "2.18.51.223.502",
		"ggcode": "yzc_177",
		"channel": "sogou",
		"code": "6-64779"
	}, {
		"spm": "2.18.51.223.501",
		"ggcode": "yzc_178",
		"channel": "sogou",
		"code": "500375-7915"
	}, {
		"spm": "2.18.51.223.500",
		"ggcode": "yzc_179",
		"channel": "sogou",
		"code": "500011-002"
	}, {
		"spm": "2.18.51.223.499",
		"ggcode": "yzc_180",
		"channel": "sogou",
		"code": "500376-14642"
	}, {
		"spm": "2.18.51.223.498",
		"ggcode": "yzc_181",
		"channel": "sogou",
		"code": "6-65495"
	}, {
		"spm": "2.18.51.223.497",
		"ggcode": "yzc_182",
		"channel": "sogou",
		"code": "500376-16212"
	}, {
		"spm": "2.18.51.223.496",
		"ggcode": "yzc_183",
		"channel": "sogou",
		"code": "500375-8549"
	}, {
		"spm": "2.18.51.223.495",
		"ggcode": "yzc_184",
		"channel": "sogou",
		"code": "500376-16560"
	}, {
		"spm": "2.18.51.223.494",
		"ggcode": "yzc_185",
		"channel": "sogou",
		"code": "500263-015"
	}, {
		"spm": "2.18.51.223.493",
		"ggcode": "yzc_186",
		"channel": "sogou",
		"code": "6-15472"
	}, {
		"spm": "2.18.51.223.492",
		"ggcode": "yzc_187",
		"channel": "sogou",
		"code": "500016-001"
	}, {
		"spm": "2.18.51.223.491",
		"ggcode": "yzc_188",
		"channel": "sogou",
		"code": "500375-0048"
	}, {
		"spm": "2.18.51.223.490",
		"ggcode": "yzc_189",
		"channel": "sogou",
		"code": "500093-008"
	}, {
		"spm": "2.18.51.223.489",
		"ggcode": "yzc_190",
		"channel": "sogou",
		"code": "500375-0007"
	}, {
		"spm": "2.18.51.223.488",
		"ggcode": "yzc_191",
		"channel": "sogou",
		"code": "500375-2821"
	}, {
		"spm": "2.18.51.223.487",
		"ggcode": "yzc_192",
		"channel": "sogou",
		"code": "500377-5251"
	}, {
		"spm": "2.18.51.223.486",
		"ggcode": "yzc_193",
		"channel": "sogou",
		"code": "500375-0026"
	}, {
		"spm": "2.18.51.223.485",
		"ggcode": "yzc_194",
		"channel": "sogou",
		"code": "500376-14678"
	}, {
		"spm": "2.18.51.223.484",
		"ggcode": "yzc_195",
		"channel": "sogou",
		"code": "500377-3631"
	}, {
		"spm": "2.18.51.223.483",
		"ggcode": "yzc_196",
		"channel": "sogou",
		"code": "500377-1382"
	}, {
		"spm": "2.18.51.223.482",
		"ggcode": "yzc_197",
		"channel": "sogou",
		"code": "500377-5367"
	}, {
		"spm": "2.18.51.223.481",
		"ggcode": "yzc_198",
		"channel": "sogou",
		"code": "500377-100036"
	}, {
		"spm": "2.18.51.223.480",
		"ggcode": "yzc_199",
		"channel": "sogou",
		"code": "500376-16187"
	}, {
		"spm": "2.18.51.223.479",
		"ggcode": "yzc_200",
		"channel": "sogou",
		"code": "500377-132"
	}, {
		"spm": "2.18.51.223.478",
		"ggcode": "yzc_201",
		"channel": "sogou",
		"code": "500376-1607"
	}, {
		"spm": "2.18.51.223.477",
		"ggcode": "yzc_202",
		"channel": "sogou",
		"code": "6-04447"
	}, {
		"spm": "2.18.51.223.476",
		"ggcode": "yzc_203",
		"channel": "sogou",
		"code": "6-47872"
	}, {
		"spm": "2.18.51.223.475",
		"ggcode": "yzc_204",
		"channel": "sogou",
		"code": "500377-5405"
	}, {
		"spm": "2.18.51.223.474",
		"ggcode": "yzc_205",
		"channel": "sogou",
		"code": "500377-100105"
	}, {
		"spm": "2.18.51.223.473",
		"ggcode": "yzc_206",
		"channel": "sogou",
		"code": "500016-007"
	}, {
		"spm": "2.18.51.223.472",
		"ggcode": "yzc_207",
		"channel": "sogou",
		"code": "500368-106"
	}, {
		"spm": "2.18.51.223.471",
		"ggcode": "yzc_208",
		"channel": "sogou",
		"code": "500366-078"
	}, {
		"spm": "2.18.51.223.470",
		"ggcode": "yzc_209",
		"channel": "sogou",
		"code": "6-00791"
	}, {
		"spm": "2.18.51.223.469",
		"ggcode": "yzc_210",
		"channel": "sogou",
		"code": "500183-013"
	}, {
		"spm": "2.18.51.223.468",
		"ggcode": "yzc_211",
		"channel": "sogou",
		"code": "500004-002"
	}, {
		"spm": "2.18.51.223.467",
		"ggcode": "yzc_212",
		"channel": "sogou",
		"code": "500157-030"
	}, {
		"spm": "2.18.51.223.466",
		"ggcode": "yzc_213",
		"channel": "sogou",
		"code": "500157-009"
	}, {
		"spm": "2.18.51.223.465",
		"ggcode": "yzc_214",
		"channel": "sogou",
		"code": "500015-008"
	}, {
		"spm": "2.18.51.223.464",
		"ggcode": "yzc_215",
		"channel": "sogou",
		"code": "500283-037"
	}, {
		"spm": "2.18.51.223.463",
		"ggcode": "yzc_216",
		"channel": "sogou",
		"code": "500006-011"
	}, {
		"spm": "2.18.51.223.462",
		"ggcode": "yzc_217",
		"channel": "sogou",
		"code": "500334-039"
	}, {
		"spm": "2.18.51.223.461",
		"ggcode": "yzc_218",
		"channel": "sogou",
		"code": "500299-007"
	}, {
		"spm": "2.18.51.223.460",
		"ggcode": "yzc_219",
		"channel": "sogou",
		"code": "500375-1172"
	}, {
		"spm": "2.18.51.223.458",
		"ggcode": "yzc_221",
		"channel": "sougou-pp",
		"code": "500378-0001"
	}, {
		"spm": "2.18.51.223.457",
		"ggcode": "yzc_222",
		"channel": "rr",
		"code": "140103-299"
	}, {
		"spm": "2.18.51.223.456",
		"ggcode": "yzc_223",
		"channel": "rr",
		"code": "140103-303"
	}, {
		"spm": "2.18.51.223.455",
		"ggcode": "yzc_224",
		"channel": "rr",
		"code": "140103-273"
	}, {
		"spm": "2.18.51.223.454",
		"ggcode": "yzc_225",
		"channel": "rr",
		"code": "140103-305"
	}, {
		"spm": "2.18.51.223.453",
		"ggcode": "yzc_226",
		"channel": "rr",
		"code": "140103-285"
	}, {
		"spm": "2.18.51.223.452",
		"ggcode": "yzc_227",
		"channel": "rr",
		"code": "140103-265"
	}, {
		"spm": "2.18.51.223.451",
		"ggcode": "yzc_228",
		"channel": "rr",
		"code": "140103-317"
	}, {
		"spm": "2.18.51.223.450",
		"ggcode": "yzc_229",
		"channel": "baidu",
		"code": "1-1073880"
	}, {
		"spm": "2.18.51.223.449",
		"ggcode": "yzc_230",
		"channel": "baidu",
		"code": "313005-00005"
	}, {
		"spm": "2.18.51.223.448",
		"ggcode": "yzc_231",
		"channel": "baidu",
		"code": "1-1073881"
	}, {
		"spm": "2.18.51.223.447",
		"ggcode": "yzc_232",
		"channel": "baidu",
		"code": "313001-00066"
	}, {
		"spm": "2.18.51.223.446",
		"ggcode": "yzc_233",
		"channel": "baidu",
		"code": "1-1078746"
	}, {
		"spm": "2.18.51.223.445",
		"ggcode": "yzc_234",
		"channel": "baidu",
		"code": "313012-00003"
	}, {
		"spm": "2.18.51.223.444",
		"ggcode": "yzc_235",
		"channel": "baidu",
		"code": "313002-00106"
	}, {
		"spm": "2.18.51.223.443",
		"ggcode": "yzc_236",
		"channel": "baidu",
		"code": "313003-00064"
	}, {
		"spm": "2.18.51.223.442",
		"ggcode": "yzc_237",
		"channel": "baidu",
		"code": "1-0069311"
	}, {
		"spm": "2.18.51.223.441",
		"ggcode": "yzc_238",
		"channel": "baidu",
		"code": "313001-00181"
	}, {
		"spm": "2.18.51.223.440",
		"ggcode": "yzc_239",
		"channel": "baidu",
		"code": "313002-00059"
	}, {
		"spm": "2.17.50.222.439",
		"ggcode": "yzc_240",
		"channel": "baidu",
		"code": "1-1084456"
	}, {
		"spm": "2.17.50.222.438",
		"ggcode": "yzc_241",
		"channel": "baidu",
		"code": "313005-00057"
	}, {
		"spm": "2.17.50.222.437",
		"ggcode": "yzc_242",
		"channel": "baidu",
		"code": "311423-098"
	}, {
		"spm": "2.17.50.222.436",
		"ggcode": "yzc_243",
		"channel": "baidu",
		"code": "1-1073862"
	}, {
		"spm": "2.17.50.222.435",
		"ggcode": "yzc_244",
		"channel": "baidu",
		"code": "313001-00068"
	}, {
		"spm": "2.17.50.222.434",
		"ggcode": "yzc_245",
		"channel": "baidu",
		"code": "1-0025388"
	}, {
		"spm": "2.17.50.222.432",
		"ggcode": "yzc_247",
		"channel": "baidu",
		"code": "313001-00186"
	}, {
		"spm": "2.17.50.222.430",
		"ggcode": "yzc_249",
		"channel": "baidu",
		"code": "313012-00010"
	}, {
		"spm": "2.17.50.222.429",
		"ggcode": "yzc_250",
		"channel": "baidu",
		"code": "1-0000023"
	}, {
		"spm": "2.17.50.222.428",
		"ggcode": "yzc_251",
		"channel": "baidu",
		"code": "zxy-0000150"
	}, {
		"spm": "2.17.50.222.427",
		"ggcode": "yzc_252",
		"channel": "baidu",
		"code": "313002-00060"
	}, {
		"spm": "2.17.50.222.426",
		"ggcode": "yzc_253",
		"channel": "baidu",
		"code": "1-0007165"
	}, {
		"spm": "2.17.50.222.425",
		"ggcode": "yzc_254",
		"channel": "baidu",
		"code": "1-0025349"
	}, {
		"spm": "2.17.50.222.424",
		"ggcode": "yzc_255",
		"channel": "baidu",
		"code": "1-0002104"
	}, {
		"spm": "2.17.50.222.423",
		"ggcode": "yzc_256",
		"channel": "baidu",
		"code": "1-0007511"
	}, {
		"spm": "2.17.50.222.422",
		"ggcode": "yzc_257",
		"channel": "baidu",
		"code": "1-0000004"
	}, {
		"spm": "2.17.50.222.420",
		"ggcode": "yzc_259",
		"channel": "baidu",
		"code": "1-1073724"
	}, {
		"spm": "2.17.50.222.419",
		"ggcode": "yzc_260",
		"channel": "baidu",
		"code": "1-0000059"
	}, {
		"spm": "2.17.50.222.418",
		"ggcode": "yzc_261",
		"channel": "baidu",
		"code": "1-1082670"
	}, {
		"spm": "2.17.50.222.417",
		"ggcode": "yzc_262",
		"channel": "baidu",
		"code": "1-0008033"
	}, {
		"spm": "2.17.50.222.416",
		"ggcode": "yzc_263",
		"channel": "baidu",
		"code": "1-0008069"
	}, {
		"spm": "2.17.50.222.415",
		"ggcode": "yzc_264",
		"channel": "baidu",
		"code": "312711-0602"
	}, {
		"spm": "2.17.50.222.414",
		"ggcode": "yzc_265",
		"channel": "baidu",
		"code": "1-1080240"
	}, {
		"spm": "2.17.50.222.413",
		"ggcode": "yzc_266",
		"channel": "baidu",
		"code": "312122-003"
	}, {
		"spm": "2.17.50.222.412",
		"ggcode": "yzc_267",
		"channel": "baidu",
		"code": "313001-00084"
	}, {
		"spm": "2.17.50.222.411",
		"ggcode": "yzc_268",
		"channel": "baidu",
		"code": "1-0002115"
	}, {
		"spm": "2.17.50.222.410",
		"ggcode": "yzc_269",
		"channel": "baidu",
		"code": "312636-063"
	}, {
		"spm": "2.17.50.222.409",
		"ggcode": "yzc_270",
		"channel": "baidu",
		"code": "311183-017"
	}, {
		"spm": "2.17.50.222.408",
		"ggcode": "yzc_271",
		"channel": "baidu",
		"code": "1-1083694"
	}, {
		"spm": "2.17.50.222.405",
		"ggcode": "yzc_274",
		"channel": "baidu",
		"code": "1-1085583"
	}, {
		"spm": "2.17.50.222.399",
		"ggcode": "yzc_280",
		"channel": "baidu",
		"code": "312338-012"
	}, {
		"spm": "2.17.50.222.398",
		"ggcode": "yzc_281",
		"channel": "baidu",
		"code": "1-1083931"
	}, {
		"spm": "2.17.50.222.395",
		"ggcode": "yzc_284",
		"channel": "baidu",
		"code": "zxy-0000020"
	}, {
		"spm": "2.17.50.222.393",
		"ggcode": "yzc_286",
		"channel": "baidu",
		"code": "1-1083854"
	}, {
		"spm": "2.17.50.222.392",
		"ggcode": "yzc_287",
		"channel": "baidu",
		"code": "1-1071250"
	}, {
		"spm": "2.17.50.222.391",
		"ggcode": "yzc_288",
		"channel": "baidu",
		"code": "1-1085069"
	}, {
		"spm": "2.17.50.222.389",
		"ggcode": "yzc_290",
		"channel": "baidu",
		"code": "1-0021447"
	}, {
		"spm": "2.17.50.222.388",
		"ggcode": "yzc_291",
		"channel": "baidu",
		"code": "1-1085615"
	}, {
		"spm": "2.17.50.222.387",
		"ggcode": "yzc_292",
		"channel": "baidu",
		"code": "1-0025390"
	}, {
		"spm": "2.17.50.222.385",
		"ggcode": "yzc_294",
		"channel": "baidu",
		"code": "1-0007184"
	}, {
		"spm": "2.17.50.222.382",
		"ggcode": "yzc_297",
		"channel": "baidu",
		"code": "1-1083852"
	}, {
		"spm": "2.17.50.222.374",
		"ggcode": "yzc_305",
		"channel": "baidu",
		"code": "1-1085335"
	}, {
		"spm": "2.17.50.222.373",
		"ggcode": "yzc_306",
		"channel": "baidu",
		"code": "1-1083826"
	}, {
		"spm": "2.17.50.222.361",
		"ggcode": "yzc_318",
		"channel": "baidu",
		"code": "1-1083770"
	}, {
		"spm": "2.17.50.222.360",
		"ggcode": "yzc_319",
		"channel": "baidu",
		"code": "1-1084082"
	}, {
		"spm": "2.17.50.222.359",
		"ggcode": "yzc_320",
		"channel": "baidu",
		"code": "1-1083862"
	}, {
		"spm": "2.17.50.222.358",
		"ggcode": "yzc_321",
		"channel": "baidu",
		"code": "1-1085484"
	}, {
		"spm": "2.17.50.222.357",
		"ggcode": "yzc_322",
		"channel": "baidu",
		"code": "1-1084950"
	}, {
		"spm": "2.17.50.222.356",
		"ggcode": "yzc_323",
		"channel": "baidu",
		"code": "1-1085502"
	}, {
		"spm": "2.17.50.222.355",
		"ggcode": "yzc_324",
		"channel": "baidu",
		"code": "1-1085572"
	}, {
		"spm": "2.17.50.222.353",
		"ggcode": "yzc_326",
		"channel": "baidu",
		"code": "1-1085405"
	}, {
		"spm": "2.17.50.222.347",
		"ggcode": "yzc_332",
		"channel": "soso-xgdt",
		"code": "60002-570"
	}, {
		"spm": "2.17.50.222.346",
		"ggcode": "yzc_333",
		"channel": "soso-xgdt",
		"code": "60002-681"
	}, {
		"spm": "2.17.50.222.345",
		"ggcode": "yzc_334",
		"channel": "soso-xgdt",
		"code": "60002-669"
	}];
}
CodeSpm.prototype.add = function() {
	var url = window.location.href;
	var isCode = this.getUrlParaments(url, 'Code');
	var isChannel = this.getUrlParaments(url, 'Channel');
	for (var i = 0; i < this.iJson.length; i++) {
		if (this.iJson[i].code === isCode && this.iJson[i].channel === isChannel) {
			this.statistics({
				spm: this.iJson[i].spm,
				ggCode: this.iJson[i].ggcode
			});
		}
	}
};
CodeSpm.prototype.getUrlParaments = function(url, name) {
	if (url.split('?').length <= 1) {
		return '';
	}
	var arrName = url.split('?')[1].split('&');
	if (name) {
		for (var i = 0; i < arrName.length; i++) {
			if (arrName[i].split('=')[0] == name) {
				return arrName[i].split('=')[1];
			}
		}
	} else {
		return url.split('?')[1];
	}
	return '';
};
CodeSpm.prototype.statistics = function(options) {
	options = $.extend({
		spm: '',
		ggCode: ''
	}, options);
	var img1 = new Image();
	img1.src = 'http://bhtg.baihe.com/stat.html?ggCode=' + options.ggCode;
	var img2 = new Image();
	img2.src = '//spm.baihe.com/?spm=' + options.spm;
};

$(function() {
	var i = 0;
	maxImgNum();
	placeholder('.user-name');
	minWeight();
	fix();
	imgWidthAuto();
	checkLoadHeight();
	$(window).resize(imgWidthAuto);
	$(window).resize(minWeight);
	$(window).resize(maxImgNum);
	$(window).scroll(fix);
	$('.wrap-box .item').live({
		mouseover: function() {
			$(this).css('opacity', '1');
			$(this).find('div').stop().animate({
				height: '38px'
			}, 150);
		},
		mouseout: function() {
			$(this).css('opacity', '0.8');
			$(this).find('div').stop().animate({
				height: '0px'
			}, 50);
		}
	});
	randomShowUser();
	$('.layerBox .apply li input').inputFour();

	baseRegister.init();
	//randomNear.init();

});