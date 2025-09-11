(function ($) {

	"use strict";

	$(".main-menu a").click(function () {
		var id = $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
		$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-" + id[1]).slideDown('slow');
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu a.homebutton").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		return false;
	});

	$(".main-menu a.infobutton").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .info-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.projectbutton").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .gallery-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.twatchbutton").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .twatch-section").slideDown('slow');
		return false;
	});

	$('.toggle-menu').click(function () {
		$('.show-menu').stop(true, true).slideToggle();
		return false;
	});

	$('.show-menu a').click(function () {
		$('.show-menu').fadeOut('slow');
	});


})(jQuery);