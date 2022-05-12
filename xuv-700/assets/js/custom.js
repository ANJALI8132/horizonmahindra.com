
(function($){
    "use strict"

    var $window = $(window);
    var zero = 0;

    //sticky header
    $window.on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.main-header-area').addClass('navbar-sticky');
        } else {
            $('.main-header-area').removeClass('navbar-sticky');
        }
    });

    //Adrenox SLIDER ACTIVE CODE
    $('.adrenox-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        // navText: ["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //Highlight SLIDER ACTIVE CODE
    $('.highlight-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fas fa-caret-left" aria-hidden="true"></i>','<i class="fas fa-caret-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //Variant SLIDER ACTIVE CODE
    $('.variant-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        // navText: ['<i class="fas fa-caret-left" aria-hidden="true"></i>','<i class="fas fa-caret-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //Feature SLIDER ACTIVE CODE
    $('.feature-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        // navText: ['<i class="fas fa-caret-left" aria-hidden="true"></i>','<i class="fas fa-caret-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    //Testimonials SLIDER ACTIVE CODE
            $('.testi-slider.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                smartSpeed: 2000,
                autoplay: true,
                responsiveClass: true,
                autoplayTimeout: 4000,
                navText: ["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 2
                    }
                }
            });

}(jQuery));