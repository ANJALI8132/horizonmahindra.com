 
		
		if ($('#testimonila_slider').length) {
        $('#testimonila_slider').slick({
            autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplaySpeed: 4000,
            speed: 2000,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
						adaptiveHeight: true
                    }
                }
            ]
        });
    }
    
		
		


	