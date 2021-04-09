(function($){
	$.fn.extend({
	Scroll:function(opt,callback){
		if(!opt) var opt={};
			var _this=this.eq(0).find("ul:first");
			var lineH=_this.find("li:first").height(), 
			line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), 
			speed=opt.speed?parseInt(opt.speed,10):1000, //卷动速度，数值越大，速度越慢（毫秒）
			timer=opt.timer?parseInt(opt.timer,10):5000; //滚动的时间间隔（毫秒）
			if(line==0) line=1;
			var upHeight=0-line*lineH;
			scrollUp=function(){
				_this.animate({
					marginTop:upHeight
				},speed,function(){
					for(i=1;i<=line;i++){
						_this.find("li:first").appendTo(_this);
					}
					_this.css({marginTop:0});
				});
			}
			_this.hover(function(){
				clearInterval(timerID);
			},function(){
				timerID=setInterval("scrollUp()",timer);
			}).mouseout();
		}       
	})
})(jQuery);

//-----红豆支付
function redBean(num)
{
	for(var id = 1;id<=2;id++)
	{
		var Tag="cont"+id;
		var Css = "on" + id;
		if(id==num)
		{
			document.getElementById(Tag).style.display="block";
			document.getElementById(Css).className = "active";
		}
		else
		{
			document.getElementById(Tag).style.display="none";
			document.getElementById(Css).className = "txt";
		}
	}
}
var fixedPop = function (){
	var _this = this;
	_this.oFix = $('#js_fixed_right');
	_this.vWidth = _this.oFix.width();
	_this.fxiedLeft = _this.oFix.position().left;
	_this.absoluteTop = $('body').outerHeight() - _this.oFix.outerHeight() - 445 ;
	_this.maxTop = _this.oFix.offset().top;

	$(window).resize(function() {
		_this.oFix.css({
			'position': '',
			'top': '',
			'left': '',
			'width': ''
		});
		_this.fxiedLeft = _this.oFix.position().left;
	});

	$(window).scroll(function() {
	    _this.scrollFn();
	});
	$(window).load(function() {
	    _this.scrollFn();
	});
};
fixedPop.prototype.scrollFn = function() {
	var _this = this;
	if ($(window).scrollTop() > _this.maxTop) {
		if ($(window).scrollTop() >= _this.absoluteTop) {
			_this.oFix.css({
				'position': 'static', /* absolute */
				'top': _this.absoluteTop
			});
		} else {
			_this.oFix.css({
				'position': 'static', /* fixed */
				'top' : 0,
				'left': _this.fxiedLeft,
				'width': _this.vWidth
			});
		}
	} else {
		_this.oFix.css({
			'position': '',
			'top': '',
			'left': '',
			'width': ''
		});
	}
};

$(function(){
	var fixeRight = new fixedPop();

	if( $('select').jqTransSelect().length > 0 ){jqTransformAddDocumentListener();}  
	$("#scrollDiv2").Scroll({line:1,speed:500,timer:1000});
})

