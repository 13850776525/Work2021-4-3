// JavaScript Document
// JavaScript Document
$(document).ready(function(){
	//右边微信鼠标经过
	$("#r-wx").mouseenter(function(){
		$("#fi-wx-show").css({display:"block"});
	});
		
	$("#r-wx").mouseleave(function(){
		$("#fi-wx-show").css({display:"none"});
	});
	
	var oTop = document.getElementById("scrollUp");
	var oUp = document.getElementById("scrollUpf");
	if(oTop){
	oTop.onclick = function(){
		document.documentElement.scrollTop = document.body.scrollTop =0;
	}
	}
	
	if ($.browser.msie && (parseInt($.browser.version) < 7)){
		if(oTop){
		oUp.style.position = 'absolute';
		  var screenh = document.documentElement.clientHeight || document.body.clientHeight;
		  oUp.style.top = screenh - oUp.offsetHeight -200 + "px";
		  window.onscroll = function(){
			var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
			oUp.style.top = screenh - oUp.offsetHeight + scrolltop-200 +"px";
		  }
	}
	}	
		
		//结束
});


