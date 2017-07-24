$(function() {
	// design
	var drawing = $('.ui-design__drawing'),
		button = $('.ui-design__button'),
		exit = $('.ui-design__exit'),
		opacity = $('.ui-design__opacity'),
		scale = $('.ui-design__scale'),
		reset = $('.ui-design__reset'),
		animate = $('.ui-design__animate'),
		box = $('.ui-design__box'),
		yy = $('.yylogo');
	button.on('click', function() {
		drawing.toggleClass('is-off');
		if (drawing.hasClass('is-off')) {
			button.html('打开设计稿');
		} else {
			button.html('关闭设计稿');
		}
	})
	exit.on('click', function() {
		$('body').toggleClass('is-design');
		if ($('body').hasClass('is-design')) {
			exit.html('退出设计模式');
		} else {
			exit.html('进入设计模式');
		}
	})
	animate.on('click', function() {
		yy.toggleClass('is-animate');
		if (yy.hasClass('is-animate')) {
			animate.html('关闭动画');
		} else {
			animate.html('开启动画');
		}
	})
	reset.on('click', function() {
		opacity.add(scale).find('input').val(50).trigger('input');
	})
	opacity.on('input', 'input', function() {
		var val = this.value;
		opacity.find('span').html(val);
		yy.css('opacity', val/100);
	})
	scale.on('input', 'input', function() {
		var val = (.5 + (this.value - 0)/100).toFixed(2);
		scale.find('span').html(val);
		box.css('-webkit-transform', 'scale('+ val +')');
	})
	// reset.click();
	// button.click();
	// exit.click();
});