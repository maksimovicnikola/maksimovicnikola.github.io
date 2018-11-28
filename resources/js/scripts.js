$(document).ready(function () {

    // waypoints plugin, on scroll down to show smaller sticky nav with black color, else show usuall one
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '65px'
    })

    // Scroll on buttons
    $('.js--scroll-to-plan').click(function () {
        // for animations, we always need to select html and body
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    })

    $('.js--scroll-to-start').click(function () {
        // for animations, we always need to select html and body
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    })

    // Navigation scrolls, smooth scroling
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    // Animations on scroll
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
        // offset is setting animation 50% of height before section .js--wp-1 has reached
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn')
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse')
    }, {
        offset: '50%'
    });


    // Mobile navigation
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if (icon.hasClass('ion-md-menu')) {
            icon.removeClass('ion-md-menu');
            icon.addClass('ion-md-close');
        } else {
            icon.removeClass('ion-md-close');
            icon.addClass('ion-md-menu');
        }

        nav.slideToggle(200);
    })

    // Google Maps
    var map;

    if ($(window).width() < 480) {
        map = new GMaps({
            div: '.map',
            lat: 45.25,
            lng: 19.85,
            zoom: 12
        });
    } else if ($(window).width() < 767) {
        map = new GMaps({
            div: '.map',
            lat: 45.26,
            lng: 19.9,
            zoom: 12
        });
    } else {
        map = new GMaps({
            div: '.map',
            lat: 45.25,
            lng: 19.94,
            zoom: 12
        });
    }

    map.addMarker({
        lat: 45.2493914,
        lng: 19.8412469,
        title: 'Novi Sad',
        infoWindow: {
            content: '<p>This is Novi Sad!</p>'
        }
    });
});