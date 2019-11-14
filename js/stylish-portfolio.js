(function ($) {
    "use strict"; // Start of use strict

    // Closes the sidebar menu
    $(".menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('#sidebar-wrapper .js-scroll-trigger').click(function () {
        $("#sidebar-wrapper").removeClass("active");
        $(".menu-toggle").removeClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    });

    // // Scroll to top button appear
    // $(document).scroll(function () {
    //     var scrollDistance = $(this).scrollTop();
    //     if (scrollDistance > 100) {
    //         $('.scroll-to-top').fadeIn();
    //     } else {
    //         $('.scroll-to-top').fadeOut();
    //     }
    // });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function (event) {
    var that = $(this);
    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);
    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");
    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

// Makes navbar disappear at the top, then re-appear when scrolling
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $('.navbar').removeClass('hidden');

    }
    else {
        $('.navbar').addClass('hidden');
    }
});

// For Div Day team card rotation
$(function () {
    $('.btn-rotate-1').click(function () {
        $('.card-front-1').toggleClass(' rotate-card-front-1');
        $('.card-back-1').toggleClass(' rotate-card-back-1');
    });
    $('.btn-rotate-2').click(function () {
        $('.card-front-2').toggleClass(' rotate-card-front-2');
        $('.card-back-2').toggleClass(' rotate-card-back-2');
    });
    $('.btn-rotate-3').click(function () {
        $('.card-front-3').toggleClass(' rotate-card-front-3');
        $('.card-back-3').toggleClass(' rotate-card-back-3');
    });
    $('.btn-rotate-4').click(function () {
        $('.card-front-4').toggleClass(' rotate-card-front-4');
        $('.card-back-4').toggleClass(' rotate-card-back-4');
    });
    $('.btn-rotate-5').click(function () {
        $('.card-front-5').toggleClass(' rotate-card-front-5');
        $('.card-back-5').toggleClass(' rotate-card-back-5');
    });
    $('.btn-rotate-6').click(function () {
        $('.card-front-6').toggleClass(' rotate-card-front-6');
        $('.card-back-6').toggleClass(' rotate-card-back-6');
    });
    $('.btn-rotate-7').click(function () {
        $('.card-front-7').toggleClass(' rotate-card-front-7');
        $('.card-back-7').toggleClass(' rotate-card-back-7');
    });
    $('.btn-rotate-8').click(function () {
        $('.card-front-8').toggleClass(' rotate-card-front-8');
        $('.card-back-8').toggleClass(' rotate-card-back-8');
    });
});