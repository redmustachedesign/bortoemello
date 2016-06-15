$(document).ready(function(){
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if (scroll > 400) {
			$('#faux-menu').slideDown();
		}else{
			$('#faux-menu').slideUp();
		};
	});
	// MENU
	$(".menu-home").click(function(){
		$('body,html').animate({
			scrollTop: $("#header").offset().top
		}, 1500,"easeInOutQuint");
		return false;
	});
	$(".menu-quem-somos").click(function(){
		$('body,html').animate({
			scrollTop: $("#quem-somos").offset().top-140
		}, 1500,"easeInOutQuint");
		return false;
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
