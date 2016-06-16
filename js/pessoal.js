$(document).ready(function(){
	$(window).scroll(function (event) {
		var scroll = $(this).scrollTop();
		if (scroll >180) {
			$("#faux-menu").addClass('visible');
		} else{
			$("#faux-menu").removeClass('visible');
		};
	});
	// MENU
	$(".menu-home").click(function(){
		if ($(window).width()<=479) {
			$('body,html').animate({
				scrollTop: $("#header").offset().top
			}, 1500,"easeInOutQuint");
			return false;
		} else{
			$('body,html').animate({
				scrollTop: $("#header").offset().top
			}, 1500,"easeInOutQuint");
			return false;
		};
	});
	$(".menu-quem-somos").click(function(){
		if ($(window).width()<=479) {
			$('body,html').animate({
				scrollTop: $("#quem-somos").offset().top
			}, 1500,"easeInOutQuint");
			return false;
		} else{
			$('body,html').animate({
				scrollTop: $("#quem-somos").offset().top-140
			}, 1500,"easeInOutQuint");
			return false;
		};
	});
	$(".menu-pre-moldados").click(function(){
		$('body,html').animate({
			scrollTop: $("#moldados").offset().top-140
		}, 1500,"easeInOutQuint");
		return false;
	});
	$(".menu-casas-modulares").click(function(){
		$('body,html').animate({
			scrollTop: $("#casas-modulares").offset().top-140
		}, 1500,"easeInOutQuint");
		return false;
	});
	$(".menu-monte-projeto").click(function(){
		$('body,html').animate({
			scrollTop: $("#projeto").offset().top-140
		}, 1500,"easeInOutQuint");
		return false;
	});
});
