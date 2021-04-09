setAccessToken();
function setAccessToken(){
	if(!bzt_getCookie('accessToken')||bzt_getCookie('accessToken')=='null'){
		var radomData=getRandomData();
		bzt_setCookie('accessToken',radomData,null,'/','baihe.com',null);
	}
}


function getRandomData(){
	return 'BH'+new Date().getTime()+''+Math.floor(Math.random()*1000000);	
}

function bzt_setCookie(name, value, expires, path, domain, secure) {
	document.cookie = name + "=" + escape (value) +
	((expires) ? "; expires=" + expires : "") +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");
}

function bzt_getCookie(name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return bzt_getCookieVal(j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
	}
	return "";
}

function bzt_getCookieVal(offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) {
		endstr = document.cookie.length;
	}
	return unescape(document.cookie.substring(offset, endstr));
}

//	_fmOpt = {
//      partner: 'baihe',
//      appName: 'baihe',
//      token: bzt_getCookie('accessToken')
//  };
//  var cimg = new Image(1,1);
//  cimg.onload = function() {
//      _fmOpt.imgLoaded = true;
//  };
//  cimg.src = "https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=baihe&appName=baihe&tokenId="+bzt_getCookie('accessToken');
//  var fp = document.createElement('script'); fp.type = 'text/javascript'; fp.async = true;
//  fp.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.fraudmetrix.cn/fm.js?ver=0.1';
//  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fp, s);
//  


var fsd = false;
try{
    if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
        fsd = true;
    }
} catch (e) {
}

(function() {
    _fmOpt = {
        partner: 'baihe',
        appName: 'baihe',
        token: bzt_getCookie('accessToken'),
        flashsd : fsd
    };
    var cimg = new Image(1,1);
    cimg.onload = function() {
        _fmOpt.imgLoaded = true;
    };
    cimg.src = "https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=baihe&appName=baihe&tokenId=" + _fmOpt.token;
    var fm = document.createElement('script'); fm.type = 'text/javascript'; fm.async = true;
    fm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.fraudmetrix.cn/fm.js?ver=0.1&t=' + (new Date().getTime()/3600000).toFixed(0);
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fm, s);
})();
  		