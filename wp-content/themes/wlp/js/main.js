jQuery(document).ready(function ($) {

    if ($('section').hasClass('has-background-image')) {
        $('body').addClass('whiteMenu');
    }

    $('#our-teams .team-row .team-category-grid .grid-item .item-meta').matchHeight();

    $('.application_details').insertAfter(".singleJobDescription");
    $(".application_button").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".application_details").offset().top
        }, 1000);
    });

    setTimeout(
        function () {
            $('.wpjmsf-field-grid-item-orderby').insertAfter(".wpjmsf-field-grid-item-job_types").show();
        }, 500);

    function ImpSwitchMobileMenu() {
        var screenW = $(document).innerWidth();
		
		if(screenW <= 1080 && screenW > 810){
			$('body').on('click','.mega-menu-link',function(e){
				var link = $(this);
				if(link.parent().hasClass('mega-menu-item-has-children')){
					$('.mega-menu-link').parent().removeClass('mega-toggle-on').addClass('mega-toggle-off');
					console.log("clicked me");
					e.preventDefault();
					if(link.parent().hasClass('mega-toggle-on')){
						//link.parent().removeClass('mega-toggle-on').addClass('mega-toggle-off');
					}else{
						link.parent().addClass('mega-toggle-on').removeClass('mega-toggle-off');
					}
				}
			});
		}else if(screenW <= 810 && screenW > 600){
            $('#header-navbar').addClass('menu-slide-out').removeClass('menu-slide-in');
            var popoutLogo = $('#header .logo').clone();
            $(popoutLogo).addClass('logo-menu').removeClass('logo');
            $(popoutLogo).children('img').prop('src', $(popoutLogo).data('logo'));
            var popoutPhone = $('#top .phone').clone();
            var popoutEmail = $('#top .mail').clone();
            var popoutSocials = $('#footer .col_1 .social').clone();
            if ($('#header-navbar').children().length == 1) {
                $('#header-navbar #menu-main-menu').before($(popoutLogo));
                $('#header-navbar #menu-main-menu').after('<div id="popout-contact"></div><div id="popout-social-icons"></div>');
                $('#header-navbar #popout-contact').append($(popoutPhone));
                $('#header-navbar #popout-contact').append($(popoutEmail));
                $('#header-navbar #popout-social-icons').append($(popoutSocials));
            }
			$('body').on('click','.mega-menu-link',function(e){
				var link = $(this);
				if(link.parent().hasClass('mega-menu-item-has-children')){
					e.preventDefault();
					if(link.parent().hasClass('mega-toggle-on')){
						link.parent().removeClass('mega-toggle-on').addClass('mega-toggle-off');
					}else{
						$('.mega-menu-link').removeClass('mega-toggle-on').addClass('mega-toggle-off');
						link.parent().addClass('mega-toggle-on').removeClass('mega-toggle-off');
					}
				}
			});
        }
		else if(screenW <= 600){
			if ($('#featured-block #columns').children().length == 1){
				$('#featured-block #columns ul').after('<div id="columns-dots"></div>');
			}
			$('#featured-block #columns ul').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				dots: false,
				adaptiveHeight: true,
				rows:3,
				slidesPerRow: 1
			});
			$('.related-team-members .team-category-grid').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				dots: false,
				adaptiveHeight: true
			});
			if ($('#footer .container .col_4').children().length == 5) {
				$('#footer .container .col_4').append($('#footer .container .col_1 .social'));
			}
        }
		else{
			$('#featured-block #columns ul.slick-initialized,.related-team-members .team-category-grid.slick-initialized').slick('unslick');
			if($('#footer .container .col_4').children().length == 6){
				$('#footer .container .col_1').append($('#footer .container .col_4 .social'));
			}
            $('#header-navbar').removeClass('menu-slide-in').removeClass('menu-slide-out');
            $('#header-navbar .logo-menu,#popout-contact,#popout-social-icons').remove();
        }
    }
	
    ImpSwitchMobileMenu();

    $(window).resize(function () {
        ImpSwitchMobileMenu();
    });

    $('body').on('click touchend', '#mmenu', function (e) {
        e.preventDefault();
        var btn = $(this);
        var popoutMenu = $('#header-navbar');
        var topbar = $('#top');
        btn.toggleClass('mmenu-open');
        if (btn.hasClass('mmenu-open')) {
            popoutMenu.addClass('menu-slide-in').removeClass('menu-slide-out');
            $(topbar).addClass('mmenu-open');
        } else {
            popoutMenu.removeClass('menu-slide-in').addClass('menu-slide-out');
            $(topbar).removeClass('mmenu-open');
        }
    });

    var ppWaypoint = $('.highlight').waypoint(function (direction) {
        if (direction == 'down') {
            $(this.element).addClass('active');
            this.destroy();
        }
    }, {
        offset: '80%'
    });

    $('#schools .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        responsive: {
            1000: {
                items: 4
            },
            810: {
                items: 3
            },
            500: {
                items: 2
            },
            390: {
                items: 1
            },
			0: {
				items: 1
			}
        }
    });

    $('#people-say .owl-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        speed: 800,
        arrows: false,
        dots: true,
        asNavFor: '.testimonial-images'
    });
    $('.testimonial-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        speed: 800,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '#people-say .owl-carousel'
    });

    $('#interested .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive: {
            1000: {
                items: 3
            },
            810: {
                items: 2
            },
            500: {
                items: 1
            },
            390: {
                items: 1
            },
			0: {
				items: 1
			}
        }
    });
	
    $('#below-content .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        responsive: {
            1000: {
                items: 4
            },
            810: {
                items: 3
            },
            500: {
                items: 2
            },
            390: {
                items: 1
            },
			0: {
				items: 1
			}
        }
    });
    var lastScrolledTop = 0;
    var delta = 5;
    //var navbarHeight = $('#header').outerHeight();
    var didScroll = false;
    var lightLogo = $('#header .container .logo').data('logo-white');
    var scrollLogo = $('#header .container .logo').data('logo-scrolled');
    var darkLogo = $('#header .container .logo').data('logo');

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrolledTop - st) <= delta) {
            return;
        }        
        if (st > 30) {
            // Scroll Down
            $('#top').addClass('top-up');
            $('#header').removeClass('nav-down').addClass('nav-up');
            $('#header .container .logo > img').attr('src', scrollLogo);
            $('#mmenu').removeClass('btn-down').addClass('btn-up');
        } else {
            // Scroll Up
            $('#top').removeClass('top-up');
            $('#header').removeClass('nav-up');
            if ($('#header .container .logo').hasClass('logo-dark')) {
                $('#header .container .logo > img').attr('src', darkLogo);
            } else {
				if($('#mmenu').hasClass('mmenu-open')) {
					$('#header .container .logo > img').attr('src', darkLogo);
				} else {
                	$('#header .container .logo > img').attr('src', lightLogo);
				}
            }
            $('#mmenu').removeClass('btn-up').addClass('btn-down');
        }
        lastScrolledTop = st;
    }
    $(window).scroll(function () {
        didScroll = true;
    });
    
    if($(window).scrollTop() != 0) {
     $('#header').addClass('nav-up');
    }

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    // Accordion Controls
    $('body').on('click touchend', '.accordion-container .accordion-item .accordion-header', function (e) {
        e.preventDefault();
        var toggle = $(this).children('.accordion-toggle');
        var parent = toggle.closest('.accordion-item');
        var content = parent.find('.accordion-content');

        if (parent.hasClass('accordion-open')) {
            parent.removeClass('accordion-open').addClass('accordion-closed');
            toggle.removeClass('toggle-open').addClass('toggle-closed');
            content.slideUp(300);
        } else {
            $('.accordion-container .accordion-item').removeClass('accordion-open').addClass('accordion-closed');
            $('.accordion-container .accordion-item .accordion-header .accordion-toggle').removeClass('toggle-open').addClass('toggle-closed');
            $('.accordion-container .accordion-item .accordion-content').slideUp(300);
            parent.removeClass('accordion-closed').addClass('accordion-open');
            toggle.removeClass('toggle-closed').addClass('toggle-open');
            content.slideDown(300);
        }

    });

    $('#menu-main-menu .menu-item-has-children').each(function () {
        var thisParent = $(this);
        if (thisParent.children().hasClass('sub-wrapper')) {
            var count = thisParent.children('.sub-wrapper').children().length;
            if (count > 1 && !thisParent.children('.sub-wrapper').hasClass('columns-' + count)) {
                thisParent.children('.sub-wrapper').addClass('columns-' + count);
            }
        }
    });

    $('body').on('click', '#featured-block #video .video .featured-vid-play', function () {
        var trigger = $(this);
        var pause = trigger.siblings('.featured-vid-pause');
        var parent = trigger.parent();
        var video = trigger.data('video');
        var poster = trigger.data('poster');
		$('.carousel-slide-inner #slide-0-video').get(0).pause();
		
        if (video != '' && poster != '') {
            parent.append('<div id="video-box"><video class="mobile-video" autoplay loop id="featured-block-vid" webkit-playsinline playsinline poster="' + poster + '"><source src="' + video + '" type="video/mp4"></video></div>');
            trigger.hide(0);
            trigger.siblings('img').hide(0);
            $(pause).css('display', 'block');
//            trigger.siblings('#video-box video').play();
        }
    });
    $('body').on('click touchend', '#featured-block #video .video .featured-vid-pause', function () {
        var trigger = $(this);
		trigger.toggleClass('video-paused');
		if(trigger.hasClass('video-paused')){
			$('#featured-block .video #video-box > video').get(0).pause();
			trigger.prop('src',trigger.data('paused'));
		}else{
			$('#featured-block .video #video-box > video').get(0).play();
			trigger.prop('src',trigger.data('play'));
		}
    });

    // Video header play controls
    $('body').on('click touchend', '.play-video', function () {
        var playBtn = $(this);
        var pauseBtn = playBtn.siblings('.stop-video');
        var video = playBtn.siblings('video');
        if (video != '' && pauseBtn != '') {
            video[0].play();
            playBtn.hide();
            pauseBtn.show();
        }
    });

    // Video header play controls
    $('body').on('click touchend', '.stop-video', function () {
        var pauseBtn = $(this);
        var playBtn = pauseBtn.siblings('.play-video');
        var video = pauseBtn.siblings('video');
        if (video != '' && playBtn != '') {
            video[0].pause();
            pauseBtn.hide();
            playBtn.show();
        }
    });

    // Tabs Content Navigation
    $('body').on('click touchend', '.tabs-nav-link', function (e) {
        if ($(this).hasClass('isLink')) {

        } else {
            e.preventDefault();
            var currentTab = $(this);
            var index = currentTab.data('section-index');
            $('.tabs-nav-link').removeClass('tab-active');
            $('#tab-panels .tab-panel').removeClass('tab-panel-active').addClass('tab-panel-inactive');
            currentTab.addClass('tab-active');
            $('#tab-panels .tab-panel-' + index).removeClass('tab-panel-inactive').addClass('tab-panel-active');
        }
    });
	
	$('#video .video').unbind('click').bind('click', function(){
		
		var video = $(".video-homepage");
		$(".video-homepage").toggleClass('video-play');
		if($(".video-homepage").hasClass('video-play')){
			video[0].play();
			$(".video-homepage").parent().find('i').removeClass('fa-circle-play').addClass('fa-circle-pause');
		} else {
			video[0].pause();
			video.currentTime = 1;
			$(".video-homepage").parent().find('i').removeClass('fa-circle-pause').addClass('fa-circle-play');
		}
	});
	
	$('#surrounding-video-div .video-box-inner').unbind('click').bind('click', function(){
		var video = $('.sub-video');
		$('.sub-video').toggleClass('video-play');
		if($('.sub-video').hasClass('video-play')){
			video[0].play();
			$('.sub-video').parent().find('i').removeClass('fa-circle-play').addClass('fa-circle-pause');
		} else {
			video[0].pause();
			video.currentTime = 1;
			$('.sub-video').parent().find('i').removeClass('fa-circle-pause').addClass('fa-circle-play');
		}
	});

	$("#mmenu").on('click touchstart', function () {	
			var whiteLogo = $('#header .container .logo').data('logo-white');
			var darkLogo = $('#header .container .logo').data('logo');
			$("#header").toggleClass('mobile-menu-open');
		if($(this).hasClass('mmenu-open')){	
			
            if ($('#header .container .logo').hasClass('logo-dark')) {
				$("#header .logo").css({'background':'white'});
                $('#header .container .logo > img').attr('src', darkLogo);
            } else {
                $('#header .container .logo > img').attr('src', lightLogo);
				$("#header .logo").css({'background':'transparent'});
            }		
		} else {
			$('#header .container .logo > img').attr('src', darkLogo);
			$("#header .logo").css({'background':'white'});
		}
	});
});