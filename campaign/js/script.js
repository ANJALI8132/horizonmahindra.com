(function($) {

	"use strict";



if ($('.sponsors-carousel-3slider').length) {
		$('.sponsors-carousel-3slider').owlCarousel({
			stagePadding:0,
		
			loop:true,
			rewind: true,
			margin:0, 
			nav:false,
			dots:false,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				500:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}


})(window.jQuery);
