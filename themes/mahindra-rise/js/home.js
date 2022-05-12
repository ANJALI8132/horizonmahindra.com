/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
            $('#model_car1').click();

            $("#bannerslider").owlCarousel({
                navigation: true, // Show next and prev buttons
                pagination: false,
                slideSpeed: 300,
                singleItem: true,
                lazyLoad: true,
                autoPlay: 25000,
            });
            $("#bannerslider .owl-prev").attr("title", "Previous").html('<i class="sprite leftarrow"></i>');
            $("#bannerslider .owl-next").attr("title", "Next").html('<i class="sprite rightarrow"></i>');




            $(document).ready(function() {
                $('#model_car1').click();

                $("#testimonialslider").owlCarousel({
                    navigation: true, // Show next and prev buttons
                    pagination: false,
                    slideSpeed: 300,
                    singleItem: true,
                    lazyLoad: true,
                    autoPlay: 25000,
                });
                $("#testimonialslider .owl-prev").attr("title", "Previous").html('<i class="sprite leftarrow"></i>');
                $("#testimonialslider .owl-next").attr("title", "Next").html('<i class="sprite rightarrow"></i>');



                $("#carmodelgallery").owlCarousel({
                    items: 6,
                    itemsDesktop: [1180, 4],
                    itemsDesktopSmall: [979, 4],
                    itemsTablet: [768, 3],
                    itemsTabletSmall: [600, 2],
                    itemsMobile: [479, 1],
                    navigation: true,
                    pagination: false,
                    afterAction: function(el) {
                        this.$owlItems.find('li').eq(this.currentItem).click();
                        $(this).addClass('active');
                    }

                });
                $("#carmodelgallery .owl-item:first-child").addClass("first");
                $("#carmodelgallery .owl-prev").html('<span class="sprite leftarrow"></span>');
                $("#carmodelgallery .owl-next").html('<span class="sprite rightarrow"></span>');

                $('#carmodelgallery li').click(function(touch) {
                    $('#carmodelgallery li.active').removeClass('active');
                    $(this).addClass('active');
                });
            })

            function StopCarouselWhenVideoPlay() {
                $("#bannerslider").trigger('owl.stop');
            }

            function PlayCarouselWhenVideoPause() {
                $("#bannerslider").trigger('owl.play', 5000);
            }

            function display_model_car(model_id, obj) {
                obj.addClass('active');

                var divIdHtml = "<div class='overlay' style='position: absolute;background: rgba(255,255,255,.8);top: 0;left: 0;width: 100%;height: 100%;'></div>";
                $.ajax({
                    type: "get",
                    url: lang + "/site/model-car",
                    data: { model_id: model_id },
                    beforeSend: function() {
                        $('#car_detail').append(divIdHtml);
                    },
                    success: function(data) {
                        $('#car_detail').html(data);
                        $('img').gsp_lazyload();
                    }
                });

            }

            if ($('.customno').length > 0) {
                $('.mobdots').on('click touchstart', function() {
                    $('.mobitoplink').addClass('active');
                })
            }