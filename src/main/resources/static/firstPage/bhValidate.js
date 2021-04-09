// 主函数
(function($) {
    $.fn.BHValidate = function(option, callback, def) {
        var ele = this;
        var id = ele.attr("id");
        var type = ele.attr("type");
        var rel = ele.attr("rel");
        var _onFocus = $("#" + id + validateSettings.onFocus.container);
        var _succeed = $("#" + id + validateSettings.succeed.container);
        var _isNull = $("#" + id + validateSettings.isNull.container);
        var _error = $("#" + id + validateSettings.error.container);
        if (def == true) {
            var str = ele.val();
            var tag = ele.attr("sta");            
            if (str == "" || str == "-1" || str==option.prompts.notice) {
                validateSettings.isNull.run({
                    prompts: option,
                    element: ele,
                    isNullEle: _isNull,
                    succeedEle: _succeed
                },
                option.isNull);
            } else if (tag == 1 || tag == 2) {
                return;
            } else {
                callback({
                    prompts: option,
                    element: ele,
                    value: str,
                    errorEle: _error,
                    succeedEle: _succeed
                });
            }
        } else {
            if (typeof def == "string") {
                ele.val(def);
            }
            if (type == "checkbox" || type == "radio") {
                if (ele.attr("checked") == true) {
                    ele.attr("sta", validateSettings.succeed.state);
                }
            }
            switch (type) {
            case "text":
            case "password":
                ele.bind("focus",
                function() {
                    var str = ele.val();
                    if (str == def) {
                        ele.val("");
                    }
                    validateSettings.onFocus.run({
                        prompts: option,
                        element: ele,
                        value: str,
                        onFocusEle: _onFocus,
                        succeedEle: _succeed
                    },
                    option.onFocus, option.onFocusExpand);
                }).bind("blur",
                function() {
                    var str = ele.val();
                    if (str == "") {
                        ele.val(def);
                    }
                    if (baihe.validateRules.isNull(str)) {
                        validateSettings.isNull.run({
                            prompts: option,
                            element: ele,
                            value: str,
                            isNullEle: _isNull,
                            succeedEle: _succeed
                        },
                        "");
                    } else {
                        callback({
                            prompts: option,
                            element: ele,
                            value: str,
                            errorEle: _error,
                            isNullEle: _isNull,
                            succeedEle: _succeed
                        });
                    }
                });
                break;
            default:
                if (rel && rel == "select") {
                    ele.bind("change",
                    function() {
                        var str = ele.val();
                        callback({
                            prompts: option,
                            element: ele,
                            value: str,
                            errorEle: _error,
                            isNullEle: _isNull,
                            succeedEle: _succeed
                        });
                    })
                } else {
                    ele.bind("click",
                    function() {
                        callback({
                            prompts: option,
                            element: ele,
                            errorEle: _error,
                            isNullEle: _isNull,
                            succeedEle: _succeed
                        });
                    })
                }
                break;
            }
        }
    }
})(jQuery);

// 配置
var validateSettings = {
    onFocus: {
        state: null,
        container: "_error",
        style: "focus",
        run: function(option, str, expands) {
        	if(option.element.val()==option.prompts.notice)
        	{
        		option.element.val('');
        	}       	
            if (!baihe.validateRules.checkType(option.element)) {
                option.element.removeClass(validateSettings.INPUT_style2).addClass(validateSettings.INPUT_style1);
            }
            option.succeedEle.removeClass(validateSettings.succeed.style);
            option.onFocusEle.removeClass().addClass(validateSettings.onFocus.style).html(str);
            // if (expands) {
            //     expands();
            // }
        }
    },
    isNull: {
        state: 0,
        container: "_error",
        style: "null",
        run: function(option, str) {
            option.element.attr("sta", 0);
            if (!baihe.validateRules.checkType(option.element)) {
                if (str == ""||option.element.val()==option.prompts.notice) {
                	option.element.val(option.prompts.notice);
                    option.element.removeClass(validateSettings.INPUT_style2).removeClass(validateSettings.INPUT_style1);
                } else {
                    option.element.removeClass(validateSettings.INPUT_style1).addClass(validateSettings.INPUT_style2);
                }
            }

            option.succeedEle.removeClass(validateSettings.succeed.style);
            if (str == "") {
                option.isNullEle.removeClass().addClass(validateSettings.isNull.style).html(str);
            } else {
                option.isNullEle.removeClass().addClass(validateSettings.error.style).html(str);
            }
        }
    },
    error: {
        state: 1,
        container: "_error",
        style: "error",
        run: function(option, str) {
            option.element.attr("sta", 1);
            if (!baihe.validateRules.checkType(option.element)) {
                option.element.removeClass(validateSettings.INPUT_style1).addClass(validateSettings.INPUT_style2);
            }

            //option.succeedEle.removeClass(validateSettings.succeed.style);
            option.errorEle.removeClass().addClass(validateSettings.error.style).html(str);
        }
    },
    succeed: {
        state: 2,
        container: "_succeed",
        style: "succeed",
        run: function(option) {
            option.element.attr("sta", 2);
            option.errorEle.empty();
            if (!baihe.validateRules.checkType(option.element)) {
                option.element.removeClass(validateSettings.INPUT_style1).removeClass(validateSettings.INPUT_style2);
            }

            option.succeedEle.addClass(validateSettings.succeed.style);
            option.errorEle.removeClass();
        }
    },
    INPUT_style1: "highlight1",
    INPUT_style2: "highlight2"
}

// // 验证规则
// var baihe.validateRules = {
//     isNull: function(str) {
//         return (str == "" || typeof str != "string");
//     },
//     betweenLength: function(str, _min, _max) {
//         return (str.length >= _min && str.length <= _max);
//     },
//     isUid: function(str) {
//         return new RegExp(baihe.validateRegExp.username).test(str);
//     },
//     fullNumberName: function(str) {
//         return new RegExp(baihe.validateRegExp.fullNumber).test(str);
//     },
//     isPwd: function(str) {
//         return /^.*([\W_a-zA-z0-9-])+.*$/i.test(str);
//     },
//     isPwdRepeat: function(str1, str2) {
//         return (str1 == str2);
//     },
//     isEmail: function(str) {
//         return new RegExp(baihe.validateRegExp.email).test(str);
//     },
//     isTel: function(str) {
//         return new RegExp(baihe.validateRegExp.tel).test(str);
//     },
//     isMobile: function(str) {
//         return new RegExp(baihe.validateRegExp.mobile).test(str);
//     },
//     checkType: function(element) {
//         return (element.attr("type") == "checkbox" || element.attr("type") == "radio" || element.attr("rel") == "select");
//     },
//     isRealName: function(str) {
//         return new RegExp(baihe.validateRegExp.realname).test(str);
//     },
//     isCompanyname: function(str) {
//         return new RegExp(baihe.validateRegExp.companyname).test(str);
//     },
//     isCompanyaddr: function(str) {
//         return new RegExp(baihe.validateRegExp.companyaddr).test(str);
//     },
//     isCompanysite: function(str) {
//         return new RegExp(baihe.validateRegExp.companysite).test(str);
//     },
//     simplePwd: function(str) {
//         // var pin = $("#regName").val();
//         // if (pin.length > 0) {
//         // pin = strTrim(pin);
//         // if (pin == str) {
//         // return true;
//         // }
//         // }
//         return pwdLevel(str) == 1;
//     },
//     weakPwd: function(str) {
//         for (var i = 0; i < weakPwdArray.length; i++) {
//             if (weakPwdArray[i] == str) {
//                 return true;
//             }
//         }
//         return false;
//     }
// };
// 验证文本
var validatePrompt = {
    regName: {
        //onFocus: "4-20位字符，支持中英文、数字及\"-\"、\"_\"组合",
        onFocus:"4-20位字符,支持汉字、字母、数字及\"-\"、\"_\"组合",
        notice:"邮箱/手机",
        succeed: "",
        isNull: "请输入用户名",
        error: {
            beUsed: "该用户名已被使用，请重新输入。如果您是该用户，请立刻<a href='https://passport.jd.com/uc/login' class='flk13'>登录</a>",
            badLength: "用户名长度只能在4-20位字符之间",
            badFormat: "用户名只能是邮箱或手机号",
            fullNumberName: "用户名不能是纯数字，请重新输入"
        },
        onFocusExpand: function() {
            $("#morePinDiv").removeClass().addClass("intelligent-error hide");
        }
    },

    pwd: {
        onFocus: "<span>6-20位字符，建议由字母，数字和符号两种以上组合</span>",
        notice:"密码",
        succeed: "",
        isNull: "请输入密码",
        error: {
            badLength: "密码长度只能在6-20位字符之间",
            badFormat: "密码只能由英文、数字及标点符号组成",
            simplePwd: "<span>该密码比较简单，有被盗风险，建议您更改为复杂密码，如字母+数字的组合</span>",
            weakPwd: "<span>该密码比较简单，有被盗风险，建议您更改为复杂密码</span>"
        },
        onFocusExpand: function() {
            $("#pwdstrength").hide();
        }
    },
    pwdRepeat: {
        onFocus: "请再次输入密码",
        succeed: "",
        isNull: "请确认密码",
        error: {
            badLength: "密码长度只能在6-20位字符之间",
            badFormat2: "两次输入密码不一致",
            badFormat1: "密码只能由英文、数字及标点符号组成"
        }
    },
    phone: {
        onFocus: "请输入手机号码",
        notice:"请填写真实电话",
        succeed: "",
        isNull: "请输入手机号码",
        error: ""
    },
    protocol: {
        onFocus: "",
        succeed: "",
        isNull: "请先阅读并同意《京东用户注册协议》",
        error: ""
    },
    empty: {
        onFocus: "",
        succeed: "",
        isNull: "",
        error: ""
    }
};

var nameold, morePinOld, emailResult;
var namestate = false;
// 回调函数
var validateFunction = {
    regName: function(option) {
        
         var format = baihe.validateRules.isMobile(option.value)||baihe.validateRules.isEmail(option.value);
        if (!format) {
            validateSettings.error.run(option, option.prompts.error.badFormat);
        }
        else {
            validateSettings.succeed.run(option);
        }
        // if (baihe.validateRules.isNull(regName) || regName == '') {
        //     option.element.removeClass(validateSettings.INPUT_style2).removeClass(validateSettings.INPUT_style1);
        //     $("#regName_error").removeClass().empty();
        //     return;
        // }
        // $("#authcodeDiv").show();
        // checkPin(option);
    },

    pwd: function(option) {
        var str1 = option.value;
        var regName = $("#regName").val().replace(/(^\s+)|(\s+$)/g,"");
        if ((baihe.validateRules.isNull(regName) == false) && (regName != '') && regName == str1) {
            $("#pwdstrength").hide();
            validateSettings.error.run(option, "<span>您的密码与账户信息太重合，有被盗风险，请换一个密码</span>");
            return;
        }

        //var str2 = $("#pwdRepeat").val();
        $("#pwdRepeat").blur();
        var format = baihe.validateRules.isPwd(option.value);
        var length = baihe.validateRules.betweenLength(option.value, 6, 20);

        $("#pwdstrength").hide();
        if (!length && format) {
            validateSettings.error.run(option, option.prompts.error.badLength);
        } else if (!length && !format) {
            validateSettings.error.run(option, option.prompts.error.badFormat);
        } else if (length && !format) {
            validateSettings.error.run(option, option.prompts.error.badFormat);
        } else if (baihe.validateRules.weakPwd(str1)) {
            validateSettings.error.run(option, option.prompts.error.weakPwd);
        } else {

            validateSettings.succeed.run(option);
            validateFunction.pwdstrength();
            if (baihe.validateRules.simplePwd(str1)) {
                $("#pwd_error").removeClass().addClass("focus");
                $("#pwd_error").empty().html(option.prompts.error.simplePwd);
                return;
            }
        }
        //		if (str2 == str1) {
        //			$("#pwdRepeat").focus();
        //		}
    },
    pwdRepeat: function(option) {
        var str1 = option.value;
        var str2 = $("#pwd").val();
        var length = baihe.validateRules.betweenLength(option.value, 6, 20);
        var format2 = baihe.validateRules.isPwdRepeat(str1, str2);
        var format1 = baihe.validateRules.isPwd(str1);
        if (!length) {
            validateSettings.error.run(option, option.prompts.error.badLength);
        } else {
            if (!format1) {
                validateSettings.error.run(option, option.prompts.error.badFormat1);
            } else {
                if (!format2) {
                    validateSettings.error.run(option, option.prompts.error.badFormat2);
                } else {
                    validateSettings.succeed.run(option);
                }
            }
        }
    },
     mobile: function (option) {
        var format = baihe.validateRules.isMobile(option.value);
        if (!format) {
            validateSettings.error.run(option, option.prompts.error);
        }
        else {
            validateSettings.succeed.run(option);
        }
    },
    protocol: function(option) {
        if (option.element.attr("checked") == true) {
            option.element.attr("sta", validateSettings.succeed.state);
            option.errorEle.html("");
        } else {
            option.element.attr("sta", validateSettings.isNull.state);
            option.succeedEle.removeClass(validateSettings.succeed.style);
        }
    },
    pwdstrength: function() {
        var element = $("#pwdstrength");
        var value = $("#pwd").val();
        if (value.length >= 6 && baihe.validateRules.isPwd(value)) {
            $("#pwd_error").removeClass('focus');
            $("#pwd_error").empty();
            element.show();
            var level = pwdLevel(value);
            switch (level) {
            case 1:
                element.removeClass().addClass("strengthA");
                break;
            case 2:
                element.removeClass().addClass("strengthB");
                break;
            case 3:
                element.removeClass().addClass("strengthC");
                break;
            default:
                break;
            }
        } else {
            element.hide();
        }
    },
    checkGroup: function(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                return true;
            }
        }
        return false;
    },
    checkSelectGroup: function(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].value == -1) {
                return false;
            }
        }
        return true;
    },

    FORM_submit: function(elements) {
        var bool = true;
        for (var i = 0; i < elements.length; i++) {
            if ($(elements[i]).attr("sta") == 2) {
                bool = true;
            } else {
                bool = false;
                break;
            }
        }

        return bool;
    }
};

// 检查用户名
var checkpin = -10;
function checkPin(option) {
    var pin = option.value;
    if (!baihe.validateRules.betweenLength(pin.replace(/[^\x00-\xff]/g, "**"), 4, 20)) {
        validateSettings.error.run(option, option.prompts.error.badLength);
        return false;
    }

    if (!baihe.validateRules.isUid(pin)) {
        validateSettings.error.run(option, option.prompts.error.badFormat);
        return;
    }
    if (baihe.validateRules.fullNumberName(pin)) {
        validateSettings.error.run(option, option.prompts.error.fullNumberName);
        return;
    }
    if (!namestate || nameold != pin) {
        if (nameold != pin) {
            nameold = pin;
            option.errorEle.html("<em style='color:#999'>检验中……</em>");
            $.getJSON("../validateuser/isPinEngaged?pin=" + escape(pin) + "&r=" + Math.random(),
            function(date) {
                checkpin = date.success;
                if (date.success == 0) {
                    validateSettings.succeed.run(option);
                    namestate = true;
                } else if (date.success == 2) {
                    validateSettings.error.run(option, "用户名包含了非法词");
                    namestate = false;
                } else {
                    validateSettings.error.run(option, "<span>" + option.prompts.error.beUsed.replace("{1}", option.value) + "</span>");
                    namestate = false;
                    morePinOld = date.morePin;
                    if (date.morePin != null && date.morePin.length > 0) {
                        var html = ""
                        for (var i = 0; i < date.morePin.length; i++) {
                            html += "<div class='item-fore'><input name='morePinRadio' onclick='selectMe(this);' type='radio' class='radio' value='" + date.morePin[i] + "'/><label>" + date.morePin[i] + "</label></div>"
                        }
                        $("#morePinGroom").empty();
                        $("#morePinGroom").html(html);
                        $("#morePinDiv").removeClass().addClass("intelligent-error");
                    }
                }
            });
        } else {

            if (checkpin == 2) {
                validateSettings.error.run(option, "用户名包含了非法词");
            } else {
                validateSettings.error.run(option, "<span>" + option.prompts.error.beUsed.replace("{1}", option.value) + "</span>");
                if (morePinOld != null && morePinOld.length > 0) {
                    $("#morePinDiv").removeClass().addClass("intelligent-error");
                }
            }
            namestate = false;
        }
    } else {
        validateSettings.succeed.run(option);
    }
}