/************* Main Js File ************************
    Template Name: Byasi
    Author: Themescare
    Version: 1.0
    Copyright 2021
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============
01 - Data Background JS
02 - Header Search JS
03 - Hero Carousel JS
04 - Testimonial Carousel JS
05 - Jarallax Background
06 - Flickclock Js
07 - Counter JS
08 - Popup JS
09 - Wow Animation Js
10 - Responsive Menu Js
11 - Progress Bar Js
12 - Preload Js

-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		=================================================================
		01 - Data Background JS
		=================================================================	
		*/
		$("[data-background").each(function () {
			$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
		});
		/* 
		=================================================================
		02 - Header Search JS
		=================================================================	
		*/
		$('#close-btn').click(function () {
			$('#search-overlay').fadeOut();
			$('#search-btn').show();
		});
		$('.search-toggle').click(function () {
			$('#search-overlay').fadeIn();
		});

		/* 
		=================================================================
		03 - Hero Carousel JS
		=================================================================	
		*/
		$('.hero-slider').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			loop: true,
			margin: 0,
			mouseDrag: true,
			autoplayTimeout: 7000,
			autoplay: true,
			dots: false,
			nav: true,
			navText: ["<span class='fas fa-angle-left'></span>", "<span class='fas fa-angle-right'></span>"],
			responsiveClass: true
		});

		$(".hero-slider").on("translate.owl.carousel", function () {
			$(".hero-slide-item h2").removeClass("animated fadeInUp").css("opacity", "0");
			$(".hero-slide-item .cta-btn").removeClass("animated fadeInDown").css("opacity", "0");
		});
		$(".hero-slider").on("translated.owl.carousel", function () {
			$(".hero-slide-item h2").addClass("animated fadeInUp").css("opacity", "1");
			$(".hero-slide-item .cta-btn").addClass("animated fadeInDown").css("opacity", "1");
		});

		/* 
		=================================================================
		04 - Testimonial Carousel JS
		=================================================================	
		*/
		$(".tetimonial-slider").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 20,
			touchDrag: true,
			mouseDrag: true,
			nav: false,
			dots: true,
			dotsData: true,
			autoplayTimeout: 6000,
			autoplaySpeed: 1200,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				750: {
					items: 2
				},
				1000: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});

		/* 
		=================================================================
		05 - Jarallax Background
		=================================================================	
		*/
		$('.jarallax').jarallax({
			speed: 0.5
		});


		/* 
		=================================================================
		06 - Flickclock Js
		=================================================================	
		*/
		var clock;
		var currentDate = new Date();
		var futureDate = new Date('2021-12-17 03:00');
		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
		clock = $('.your-clock').FlipClock(diff, {
			clockFace: 'DailyCounter',
			countdown: true
		});

		/* 
		=================================================================
		07 - Counter JS
		=================================================================	
		*/

		$('.counter').counterUp({
			delay: 15,
			time: 5000
		});

		/* 
		=================================================================
		08 - Popup JS
		=================================================================	
		*/

		$('.video-popup').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});


		/*==============================
		09 - Wow Animation Js
		==============================*/
		new WOW().init();

		/*==============================
		10 - Responsive Menu Js
		==============================*/
		$(".mainmenu ul li:has(ul)").addClass("has-submenu");
		$(".mainmenu ul li:has(ul.small-dropdown)").addClass("small-submenu");
		$(".mainmenu ul li ul").addClass("sub-menu");
		$(".mainmenu ul.dropdown li").hover(function () {
			$(this).addClass("hover")
		}, function () {
			$(this).removeClass("hover")
		});

		var $menu = $("#menu"),
			$menulink = $("#spinner-form"),
			$menuTriggercont = $(".spinner-master"),
			$menuTrigger = $(".has-submenu > a");
		$menulink.click(function (e) {
			$menulink.toggleClass("active");
			$menu.toggleClass("active");
			$menuTriggercont.toggleClass("active");
		});

		$menuTrigger.click(function (e) {
			e.preventDefault();
			var t = $(this);
			t.toggleClass("active").next("ul").toggleClass("active")
		});

		$(".mainmenu ul li:has(ul)");

	});


	/*==============================
	11 - Progress Bar Js
	==============================*/
	$(window).on("scroll", function () {

		var bodyScroll = $(window).scrollTop()

		if (bodyScroll > 1400) {

			$('#bar2').barfiller({
				duration: 2000
			});

			$('#bar3').barfiller({
				duration: 1600
			});

			$('#bar4').barfiller({
				duration: 1200
			});

			$('#bar5').barfiller({
				duration: 800
			});
		}
	});
    
    /*==============================
	12 - Preload Js
	==============================*/
    $(window).on('load', function () {
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 4000);
    });


}(jQuery));