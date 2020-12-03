(function ($) {
    "use strict";

    var $header = $('#header'),
        $headerHeight = $header.height(),
        $title = $('.title');

    var navScroll = {

        init: function () {
            $(window).on('scroll', function () {
                navScroll.navDrop();
            })
        },

        navDrop: function () {
            var $scrollTop = $(window).scrollTop();

            if ($scrollTop > $headerHeight) {
                $header.addClass('scrolled');
                $title.css('padding-top', '70px');
            } else if ($scrollTop == 0) {
                $header.removeClass('scrolled');
                $title.css('padding-top', '0');
            }

        }
    }

    $(document).ready(function () {
        navScroll.init();
    })


    //    Preloader  ======================
    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });



    //  slicknav ====================

    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });

    /*================================
              Smooth Scroll
      ==================================*/
    var links = $("nav ul li a[href^='#']");
    var topGap = 70;

    links.on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top - topGap
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
        return false;
    });


    /* ===============================
            Active menu item
    =================================== */
    $(window).on("scroll", function () {
        activeMenuItem($("nav"));
    });

    //function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            home = nav.find(" > ul > li:first");

        sections.each(function () {
            var top = $(this).offset().top - 92,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }



    // ======== equiment-worp  slider

    $('.hero-slider-active').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        margin: 0,
        items: 1,
    });


    // ======== equiment-worp  slider

    $('.equiment-worp').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 0,
            },
            600: {
                items: 2,
                loop: true,
            },
            1000: {
                items: 4,
                loop: true,
            }
        }
    });

    // ======== testmonial  slider

    $('.all-testmonial').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        items: 1,
        dots: true,
        nav: false,
        margin: 20,
    });


    // ======== testmonial  slider

    $('.all-feature').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                stagePadding: 50
            },
            800: {
                items: 2,
                stagePadding: 50
            },
            1000: {
                items: 2,
                stagePadding: 70
            },
            1200: {
                items: 2,
                stagePadding: 150,
            },
            1400: {
                items: 2,
                stagePadding: 250,
            },
            1600: {
                items: 2,
                stagePadding: 350,
            }
        }
    })
    // ======== equiment-worp  slider

    $('.all-blog').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        margin: 25,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 0,
            },
            600: {
                items: 1,
                loop: true,
            },
            1000: {
                items: 2,
                loop: true,
            }
        }
    });
    // ======== equiment-worp  slider

    $('.our-team').owlCarousel({
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        margin: 25,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 0,
            },
            600: {
                items: 2,
                loop: true,
            },
            1000: {
                items: 4,
                loop: true,
            }
        }
    });

    //=======  reservation-slider

    // ======== blog-details-page  slider

    $('.right-slider').owlCarousel({
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        margin: 0,
        items: 1
    });

    //=======  reservation-slider
    //=======  scrollTop

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

})(jQuery);
