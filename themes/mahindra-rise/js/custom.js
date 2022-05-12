// Gallery Event 
$(document).ready(function() {

    $('.img-gallery1,.img-gallery2').magnificPopup({
        delegate: 'a',
        type: 'image',
        //tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },

    });

    $("#testimslider").owlCarousel({
        autoPlay: false, //Set AutoPlay to 3 seconds
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [704, 2],
        itemsMobile: [479, 1],
        autoplayHoverPause: true,
        mouseDrag: false

    });


    var tabs = $('#variant_tabs');
    tabs.each(function() {
        var tab = $(this),
            tabItems = tab.find('ul.cd-tabs-navigation'),
            tabContentWrapper = tab.children('ul.cd-tabs-content'),
            tabNavigation = tab.find('nav');
        tabItems.on('click', 'a', function(event) {
            event.preventDefault();
            var selectedItem = $(this);
            if (!selectedItem.hasClass('selected')) {
                var selectedTab = selectedItem.data('content'),
                    selectedContent = tabContentWrapper.find('li[data-content="' + selectedTab + '"]'),
                    slectedContentHeight = selectedContent.innerHeight();
                tabItems.find('a.selected').removeClass('selected');
                selectedItem.addClass('selected');
                selectedContent.addClass('selected').siblings('li').removeClass('selected');
                //animate tabContentWrapper height when content changes
                //                tabContentWrapper.animate({
                //                    'height': slectedContentHeight
                //                }, 'auto');

                //when click on exterior/interior then animate tabContentWrapper height when content changes
                $('.modelpictures div.tabbutton li').click(function() {
                    selectedContent = tabContentWrapper.find('li[data-content="' + selectedTab + '"]'),
                        slectedContentHeight = selectedContent.innerHeight();
                    tabContentWrapper.animate({
                        'height': slectedContentHeight
                    }, auto);
                });

            }
        });
        //hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
        checkScrolling(tabNavigation);
        tabNavigation.on('scroll', function() {
            checkScrolling($(this));
        });
    });
    $(window).on('resize', function() {
        tabs.each(function() {
            var tab = $(this);
            checkScrolling(tab.find('nav'));
            tab.find('.cd-tabs-content').css('height', 'auto');
        });
    });

    function checkScrolling(tabs) {
        var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
            tabsViewport = parseInt(tabs.width());
        if (tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
            tabs.parent('.cd-tabs').addClass('is-ended');
        } else {
            tabs.parent('.cd-tabs').removeClass('is-ended');
        }
    }

    $('#modelpictab .picgallery').fadeOut(0);
    $('#modelpictab .picgallery:first').fadeIn(0);
    $('.toptabmain li:first').addClass('tabnavactive');
    // Change tab class and display content
    $('.toptabmain a').on('click', function(event) {
        event.preventDefault();
        $('.toptabmain li').removeClass('tabnavactive');
        $(this).parent().addClass('tabnavactive');
        $('#modelpictab .picgallery').fadeOut(0);
        $($(this).attr('href')).fadeIn("fast");
    });


    $('#interior').magnificPopup({
        delegate: 'a',
        type: 'image',
        //tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });

    $('#exterior').magnificPopup({
        delegate: 'a',
        type: 'image',
        //tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });


    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    sync1.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: true,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
    });

    sync2.owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsTablet: [1006, 3],
        itemsTabletSmall: [767, 3],
        itemsMobile: [479, 1],

        pagination: false,
        responsiveRefreshRate: 100,
        afterInit: function(el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $("#sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if ($("#sync2").data("owlCarousel") !== undefined) {
            center(current)
        }

    }
    $("#sync2").on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;

        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }

        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }
    }

    $(".slidersectionleft .owl-prev ").html('<span class="sprite leftarrow"></span>');
    $(".slidersectionleft .owl-next").html('<span class="sprite rightarrow"></span>');


    $("#newprice_varintslide").owlCarousel({
        items: 3,
        itemsDesktop: [1180, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 3],
        itemsTabletSmall: [600, 2],
        itemsMobile: [479, 1],
        navigation: true,
        pagination: false
    });
    $("#newprice_varintslide .owl-item:first-child").addClass("first");
    $("#newprice_varintslide .owl-prev").html('<span class="sprite leftarrow"></span>');
    $("#newprice_varintslide .owl-next").html('<span class="sprite rightarrow"></span>');



    $("#ModelVariant_NameSlider").owlCarousel({
        items: 5,
        itemsDesktop: [1180, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 3],
        itemsTabletSmall: [600, 2],
        itemsMobile: [479, 1],
        navigation: true,
        pagination: false,
        afterAction: function(el) {
            //remove class active
            this.$owlItems.find('li').removeClass('active')

            //add class active
            this.$owlItems.find('li').eq(this.currentItem).addClass('active');
            this.$owlItems.find('li').eq(this.currentItem).click();
        }

    });
    $("#ModelVariant_NameSlider .owl-item:first-child").addClass("first");
    $("#ModelVariant_NameSlider .owl-item:first-child").click();
    $("#ModelVariant_NameSlider .owl-prev").html('<span class="sprite leftarrow"></span>');
    $("#ModelVariant_NameSlider .owl-next").html('<span class="sprite rightarrow"></span>');

    $('#ModelVariant_NameSlider li').click(function(touch) {
        $('#ModelVariant_NameSlider li.active').removeClass('active');
        $(this).addClass('active');
    });




    // Popup Close open js
    var docheight = 0;

    function openPopup(divId, backgroundColorDivId) {
        if (!$('#' + divId).is(':visible')) {
            docheight = window.innerHeight;
            $('#' + divId).show();
            $('#' + backgroundColorDivId).show();
            $("body").scrollTop(0);
        } else {
            $('#' + divId).hide();
            $('#' + backgroundColorDivId).hide();
            docheight = parseInt(docheight);
            setTimeout(function() {
                $("body").scrollTop(docheight);
            }, 100);
        }
        window.onkeydown = function(event) {
            if (event.keyCode === 27) {
                $('#' + divId).hide();
                $('#' + backgroundColorDivId).hide();
            }
        };
    }

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }
});

//used car detail Slider
$(document).ready(function() {
    $("#newusedslide").show();

    var gallery_val = true;
    var controls_val = true;
    if (window.screen.availWidth < 1024) {
        gallery_val = false;
        controls_val = false;
    }

    $(window).bind('load', function() {


        $("#newusedslide").gsp_carousel({
            item: 1,
            loop: true,
            pager: false,
            thumbItem: 4,
            thumbMargin: 15,
            showCounter: true,
            counterText: "{current} of {total}",
            gallery: gallery_val,
            speed: 1000,
            auto: false,
            controls: controls_val,
            prevHtml: '<div class="owl-prev newusedsprite"></div>',
            nextHtml: '<div class="owl-next newusedsprite"></div>',
            onSliderLoad: function(el, scene) {
                if (window.screen.availWidth >= 1024) {
                    $('.zoomimage').each(function() {
                        $(this).ImageZoom({
                            type: 'standard',
                            zoomSize: [480, 300],
                            bigImageSrc: $(this).data('zoom-image'),
                            zoomViewerClass: 'standardViewer'
                        });
                    })
                }
            },
            onAfterSlide: function(el, scene, activeItems) {
                /*if(window.screen.availWidth >= 1024) {
                 var zoomitobj = activeItems.active_items.find('img');
                 zoomitobj.ezPlus();
                 }*/
            },
            responsive: [{
                breakpoint: 768,
                settings: {
                    item: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    item: 1,
                    pager: false
                }
            }, {
                breakpoint: 320,
                settings: {
                    item: 1,
                    pager: false
                }
            }]
        });
    });


    $("#accdetail1").owlCarousel({
        items: 1,
        itemsDesktop: [1180, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: [600, 1],
        itemsMobile: [479, 1],
        navigation: true,
        pagination: false
    });
    $("#accdetail1 .owl-item:first-child").addClass("first");
    $("#accdetail1 .owl-prev").html('<span class="sprite leftarrow"></span>');
    $("#accdetail1 .owl-next").html('<span class="sprite rightarrow"></span>');
});

// $(document).ready(function() {
//     $('a[href="tel:"]').click(function(event) {
//         event.preventDefault();
//     })
// })