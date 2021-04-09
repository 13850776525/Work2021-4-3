(function(){
    var utils = {
		
        // 字符串转Base64
        stringToBase64: function(input) {
			//return input;
            try {
                return window.btoa(unescape(window.encodeURIComponent(input)));
            } catch (e) {
                input = unescape(window.encodeURIComponent(input));
                var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                var str = String(input);
                for (
                    var block, charCode, idx = 0, map = chars, output = '';
                    str.charAt(idx | 0) || (map = '=', idx % 1);
                    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
                ) {
                    charCode = str.charCodeAt(idx += 3 / 4);
                    if (charCode > 0xFF) {
                    }
                    block = block << 8 | charCode;
                }
                return output;
            }
        },
        isIOS: function() {
            return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ;
        },
        isAndroid: function() {
            return /(Android|Adr)/i.test(navigator.userAgent) ;
        },
		getIE9:function(){
			if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<=9){
			  return true;
			}
			return false;
		},
        // 获取cookie中某一项的值
        getCookieValue: function(name) {
            var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
            if (arr != null) {
                return decodeURIComponent(arr[2]);
            }else {
                return '';
            }
        },
        //查询url后传递的字符串参数 json
        getUrlParamas: function(urlSearch) {
            urlSearch = (urlSearch && /\?.*/.exec(urlSearch)[0]) || location.search;
            if (urlSearch.indexOf('?') !== -1) {
                urlSearch = urlSearch.slice(1);
            }
            var queryString = urlSearch.length ? urlSearch : '';
            var result = {};
            var items = queryString.length ? queryString.split('&') : [];
            var name, value;
            if ( !Array.prototype.forEach ) {
                Array.prototype.forEach = function forEach( callback, thisArg ) {
                    var T, k;
                    if ( this == null ) {
                        throw new TypeError( "this is null or not defined" );
                    }
                    var O = Object(this);
                    var len = O.length >>> 0;
                    if ( typeof callback !== "function" ) {
                        throw new TypeError( callback + " is not a function" );
                    }
                    if ( arguments.length > 1 ) {
                        T = thisArg;
                    }
                    k = 0;
                    while( k < len ) {
             
                        var kValue;
                        if ( k in O ) {
                            kValue = O[ k ];
                            callback.call( T, kValue, k, O );
                        }
                        k++;
                    }
                };
            }
           items.forEach(function(item){
                item = item.split('=');
                //url后的参数浏览器会对其进行编码（encodeURIComponent），此处解码。
                name = window.decodeURIComponent(item[0]);
                value = window.decodeURIComponent(item[1]);
                if (name && name.length) {
                    result[name] = value;
                }
            });

            return result;
        },
        //根据url参数名，查询参数值
        getQueryValue: function(str, url) {
            var obj = this.getUrlParamas(url);
            return obj[str] || '';
        } 
    };

    var COMM_STAT = {
        init: function() {
            this.pageDuration(); //停留时间
            var getCookieValue = utils.getCookieValue;
            var getQueryValue = utils.getQueryValue;
            // 缓存、url
			this.pt = utils.getQueryValue('pt');
            this.com = this.getCom();
            this.brand = this.getBrand();
            this.isIOS = utils.isIOS();
            this.isAndroid = utils.isAndroid();
            this.platform = this.getPlatform();
            this.uid = getCookieValue('userID') || getCookieValue('spmUserID') || getCookieValue('GCUserID') || utils.getQueryValue('ruid').replace(/^[A-Z,a-z]+/, '');
            this.channel = utils.getQueryValue('channel') || getCookieValue('channel');
            this.version = utils.getQueryValue('version') || getCookieValue('version');
            this.deviceid = getCookieValue('deviceid2');
            this.deviceid2 = getCookieValue('deviceid2');
            this.imei = getCookieValue('imei');
            this.idfa = getCookieValue('idfa');
            this.mbrand = this.getMbrand();	
            this.screen = this.getScreen();
			this.utf = document.characterSet || document.inputEncoding || document.charset;      
        },
        send: function(obj, async, url){
			  if(utils.getIE9()){
                return ;
            }
            url = url || 'https://spmw.baihe.com/';
            //步骤一:创建异步对象
            var ajax;
            if (window.XMLHttpRequest) {
                //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                ajax = new XMLHttpRequest();
            } else {
                // IE6, IE5 浏览器执行代码
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }
            //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
            if(obj && Object.keys(obj).length > 0){
                obj = utils.stringToBase64(JSON.stringify(obj));
            }
            ajax.open('POST', url, !!async);
            ajax.withCredentials = true;
            // ajax.setRequestHeader("Content-type","application/json;charset=utf-8");
            //步骤四:注册事件 onreadystatechange 状态改变就会调用
            // ajax.onreadystatechange = function () {
            //     if (ajax.readyState==4 && ajax.status==200) {
            //         //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            //         console.log(ajax.responseText);//输入相应的内容
            //     }
            // }
            //步骤三:发送请求
           

		   ajax.send(obj);
        },
        // 分别处理下
        handle: function(obj, eventid, subeventid, eventdesc, extended) {
            obj.eventid = eventid || '';
            obj.subeventid = subeventid || '';
            obj.eventdesc = eventdesc || '';
            obj.extended = extended || '';
            this.send(obj, true);
        },
        // 获取公共参数
        getCommonParamas: function() {
            return {
                url: location.href,
                com: this.com,
                time: this.getTime(),
                brand: this.brand,
                platform: this.platform,
                uid: this.uid || this.getUid(),
                channel: this.channel,
				//pt:this.pt,
                version: this.version,
                deviceid: this.deviceid,
                deviceid2: this.deviceid2,
                imei: this.imei,
                idfa: this.idfa,
                mbrand: this.mbrand,
                // 网络状态可能会随时变化 所以实时获取不缓存
                mnet: this.getMnet(),
                 screen: this.screen,
				utf:this.utf
            };
        },
         /**
         * 进入页面上报
         * @param {String} eventid 要记录的打点标识
         * @param {String} subeventid 子打点标识，无可传空
         * @param {String} eventdesc 标识描述，无可传空
         * @param {Object} extended 扩展参数，无可传空
         */
        enter: function(eventid, subeventid, eventdesc, extended){
            var obj = this.getCommonParamas();
            obj.eventtype = 1;
            this.handle(obj, eventid, subeventid, eventdesc, extended);
        },
        /**
         * 点击上报
         * @param {String} eventid 要记录的打点标识
         * @param {String} subeventid 子打点标识，无可传空
         * @param {String} eventdesc 标识描述，无可传空
         * @param {Object} extended 扩展参数，无可传空
         */
        click: function(eventid, subeventid, eventdesc, extended){
            var obj = this.getCommonParamas();
            obj.eventtype = 3;
            this.handle(obj, eventid, subeventid, eventdesc, extended);
        },
        /**
         * 进入前台上报
         * @param {Object} extended 扩展参数，无可传空
         */
        show: function(extended) {
            var obj = this.getCommonParamas();
            obj.eventtype = 4;
            this.handle(obj, extended);
        },
        /**
         * 进入后台上报
         * @param {Object} extended 扩展参数，无可传空
         */
        hide: function(extended) {
            var obj = this.getCommonParamas();
            obj.eventtype = 5;
            obj.extended = obj.extended || {};
            obj.extended.pageDuration = new Date().getTime() - this.pageStart;
            this.safeSend(obj);
        },
        /**
         * 自定义上报
         * @param {String} eventid 要记录的打点标识
         * @param {String} subeventid 子打点标识，无可传空
         * @param {String} eventdesc 标识描述，无可传空
         * @param {Object} extended 扩展参数，无可传空
         */
        custom: function(eventid, subeventid, eventdesc, extended) {
            var obj = this.getCommonParamas();
            obj.eventtype = 8;
            this.handle(obj, eventid, subeventid, eventdesc, extended);
        },
		 /**
         * 营销页进入上报
         * @param {String} eventid 要记录的打点标识
         * @param {String} subeventid 子打点标识，无可传空
         * @param {String} eventdesc 标识描述，无可传空
         * @param {Object} extended 扩展参数，无可传空
         */
        mkEnter: function(eventid, subeventid, eventdesc, extended){
            var obj = this.getCommonParamas();
            obj.eventtype = 10;
            this.handle(obj, eventid, subeventid, eventdesc, extended);
        },
        /**
         * 营销页点击上报
         * @param {String} eventid 要记录的打点标识
         * @param {String} subeventid 子打点标识，无可传空
         * @param {String} eventdesc 标识描述，无可传空
         * @param {Object} extended 扩展参数，无可传空
         */
        mkClick: function(eventid, subeventid, eventdesc, extended){
            var obj = this.getCommonParamas();
            obj.eventtype = 11;
            this.handle(obj, eventid, subeventid, eventdesc, extended);
        },
		
		// 获取uid
        getUid: function() {
            return utils.getCookieValue('userID') || utils.getCookieValue('spmUserID') || utils.getCookieValue('GCUserID') || utils.getQueryValue('ruid').replace(/^[A-Z,a-z]+/, '');
        },
        // 平台
        getCom: function(){
            var url = window.location.host;
			if(this.pt === 'jiayuan'){
				return 'jy'
			}else if(this.pt === 'baihe'){
				return 'bh'
			}else if(/baihe\.com/.test(url)){
                return 'bh';	
            }else if(/jiayuan\.com/.test(url)){
                return 'jy';	
            }else{
                return '';
            }
        },
        // 品牌
        getBrand: function() {
           return 'DZB';
        },
        //时间
        getTime: function(){
            return new Date().getTime();
        },
        //平台id
        getPlatform: function(){
            if(this.com === 'bh'){
				if(/i\.baihe\.com/.test(window.location.host) || utils.getCookieValue('client_id') == 1206){
					return 1206;
				}else if(this.isIOS){
                    return 1203;
                }else if(this.isAndroid){
                    return 1202 ;
                }else{
                    return 11;
                }
            }else if(this.com === 'jy'){
				 if(this.isIOS){
                    return 11;
                }else if(this.isAndroid){
                    return 13 ;
                }else{
                    return 3;
                }
			}else{
				return '';
			}
        },
        // 手机品牌
        getMbrand:function(){
			var userAgent = navigator.userAgent;
            var ua = userAgent.split("(")[1].split(")")[0];
            var brand = "";
            var phone = [/IPHONE/gi, /huawei/gi, /mi/gi, /vivo/gi, /OPPO/gi, /samsung/gi, /SONY/gi, /Nokia/gi, /HTC/gi, /ZTE/gi, /Lenovo/gi, /ZUK/gi];
			var isOpera = userAgent.indexOf("Opera") > -1; 
			var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; 
			var isEdge = userAgent.indexOf("Edge") > -1; 
			var isFF = userAgent.indexOf("Firefox") > -1; 
			var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; 
			var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; 
			if(this.platform === 11){
				if (!!window.ActiveXObject || "ActiveXObject" in window) {
					var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
					reIE.test(userAgent);
					var fIEVersion = parseFloat(RegExp["$1"]);
					if (fIEVersion == 6) {
						return "PC IE6";
					} else if (fIEVersion == 7) {
						return "PC IE7";
					}else if (fIEVersion == 8) {
						return "PC IE8";
					} else if (fIEVersion == 9) {
						return "PC IE9";
					} else if (fIEVersion == 10) {
						return "PC IE10";
					}  else {
						return "PC 11";
					}
				}else if (isOpera) {
					return "PC Opera";
				}else if (isEdge) {
					return "PC Edge";
				}else if (isFF) {
					return "PC FF";
				}else if (isSafari) {
					return "PC Safari";
				}else if (isChrome) {
					return "PC Chrome";
				}	

			}else if (phone[0].test(ua)) {
                return brand = "iPhone";
            } else if (phone[1].test(ua)) {
                return brand = "HUAWEI";
            } else if (phone[2].test(ua)) {
                return brand = "小米";
            } else if (phone[3].test(ua)) {
                return brand = "vivo";
            } else if (phone[4].test(ua)) {
                return brand = "OPPO";
            } else if (phone[5].test(ua)) {
                return brand = "SAMSUNG";
            } else if (phone[6].test(ua)) {
                return brand = "SONY";
            } else if (phone[7].test(ua)) {
                return brand = "Nokia";
            } else if (phone[8].test(ua)) {
                return brand = "HTC";
            } else if (phone[9].test(ua)) {
                return brand = "ZTE";
            } else if (phone[10].test(ua) || phone[11].test(ua)) {
                return brand = "Lenovo";
            } else {
                return brand = "Android";
            }
        },
        //网络类型
        getMnet:function(){
            var ua = navigator.userAgent;
            var networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other';
            networkStr = networkStr.toLowerCase().replace('nettype/', '');
            var networkType;
            switch (networkStr) {
                case 'wifi':
                    networkType = 'wifi';
                    break;
                case '4g':
                    networkType = '4g';
                    break;
                case '3g':
                    networkType = '3g';
                    break;
                case '3gnet':
                    networkType = '3g';
                    break;
                case '2g':
                    networkType = '2g';
                    break;
                default:
                    networkType = 'other';
            }
            return networkType;
        },
        //屏幕大小
        getScreen:function(){
            var sWidth = window.screen.width;
            var sHeight = window.screen.height;
            return sWidth + "*" + sHeight;
        },
        // 获取离开页面需要上报的数据
        getLeaveInfo: function(extended) {
            var obj = this.getCommonParamas();
            obj.eventtype = 2;
            // obj.eventid = 'pageDuration';
            // obj.eventdesc = new Date().getTime() - this.pageStart;
            obj.extended = {
                pageDuration: new Date().getTime() - this.pageStart
            };
            return obj;
        },
        // 页面停留时长
        pageDuration: function() {
            // 获取起始时间
            if(window.performance && window.performance.timing){
                this.pageStart = window.performance.timing.responseStart;
            }else{
                this.pageStart = new Date().getTime();
            }
            var _this = this;

            var visibilitychangeHandler = function() {
                // 显示
                if(document.visibilityState === 'visible'){
                    // 重新进入也看 重新计时
                    _this.pageStart = new Date().getTime();
                    _this.show();
                // 隐藏
                }else{
                    _this.hide();
                }
            }
			if(utils.getIE9()){
                 return ;   
            }
			
            // 页面显隐
            window.addEventListener('visibilitychange', visibilitychangeHandler, false);

            // 页面即将卸载
            window.addEventListener('beforeunload', function() {
                window.removeEventListener('visibilitychange', visibilitychangeHandler, false);
                _this.safeSend(_this.getLeaveInfo());
            }, false);
        },
        // 支持sendBeacon就用sendBeacon 不支持就用同步XHR 确保离开能发出去
        safeSend: function(logInfo) {
            if(navigator.sendBeacon){
                navigator.sendBeacon("https://spmw.baihe.com/", utils.stringToBase64(JSON.stringify(logInfo)));
            }else{
                this.send(logInfo, false);
            }
        }
    };

    // 初始化
    COMM_STAT.init();
    // 挂载到全局作用域
    window.COMM_STAT = COMM_STAT;
})();