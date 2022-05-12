/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function (touch) {
    // Sticky Header
    if (screen.width > 767) {
        $(function () {
            var stickyHeaderTop = 0;
            if ($('#stickyheader').length > 0) {
                stickyHeaderTop = $('#stickyheader').offset().top;
            }
            $(window).scroll(function () {
                if ($(window).scrollTop() > stickyHeaderTop) {
                    $('#stickyheader').css({position: 'fixed', top: '0px'}).addClass("headershadow");
                    $('.nav-item.stickyiconsheader').fadeIn("slow");
                    $('.topbuttons').fadeOut("slow");
                } else {
                    $('#stickyheader').css({position: 'relative', top: '0px'}).removeClass("headershadow");
                    $('.nav-item.stickyiconsheader').fadeOut("slow");
                    $('.topbuttons').fadeIn("slow");
                }
            });
        });

    }

    // Mobile Menu

    $("#menu .burger-menu").click(function () {
        $("#menu ul.menu_aberto").slideToggle("slow");

    })

    /*Menu Icon*/
    var clickDelay = 500,
            clickDelayTimer = null;

    $('.burger-click-region').on('click', function () {

        if (clickDelayTimer === null) {

            var $burger = $(this);
            $burger.toggleClass('active');
            $burger.parent().toggleClass('is-open');

            if (!$burger.hasClass('active')) {
                $burger.addClass('closing');
            }

            clickDelayTimer = setTimeout(function () {
                $burger.removeClass('closing');
                clearTimeout(clickDelayTimer);
                clickDelayTimer = null;
            }, clickDelay);
        }
    });

    // Desktop Menu
    if (screen.width < 1006) {
        
        $(".submenulist, .moremenu").on("click", function () {
            if($(this).find(".pcnavactive").length > 0){
                $(this).find(".pcnavactive").slideToggle("slow")
            }

        });
        $(".moresubmenu").on("click", function (e) {
            if($(this).find(".moresubmenulist").length > 0){
                e.stopPropagation();
                $(this).find(".moresubmenulist").slideToggle("slow");
            }

        });
        $(".submenu").find("li  ul").hide();
        $(".submenu").find("li a").on("click", function (e) {
            e.stopPropagation();
            $(this).parent().find('ul').slideToggle("slow");
        });
        
        
        $(".newproductmenu").on("click", function () {
            $(".newproductmenu .productlist").slideToggle("slow")
        });
    }
   

    if (screen.width > 1007) {
        $(".menu_aberto li.moremenu, .menu_aberto li.submenulist").on("mouseover", function (e) {
            $(this).find(".pcnavactive").show();

        });
        $(".menu_aberto li.moremenu,.menu_aberto li.submenulist").on("mouseleave", function (e) {
            $(this).find(".pcnavactive").hide();

        });
        
        $(".menu_aberto li.newproductmenu").on("mouseover", function (e) {
            $(this).find(".productlist").show();
        });
        $(".menu_aberto li.newproductmenu").on("mouseleave", function (e) {
            $(this).find(".productlist").hide();

        });
        
      
    }

    $(".menu_aberto li.newcarmenu").on("click", function () {
        $(".menu_aberto .shownewcars").slideToggle("slow");
    });


    $("html").click(function (event) {
        if ($(event.target).closest('.shownewcars, .newcarmenu').length === 0) {
            $('.shownewcars').slideUp("slow");
            $('.newcarmenu').removeClass("active");
        }
    });
    
     $(".custom-select").each(function (touch) {
         if(!$(this).parent().hasClass('select-wrapper')){
             $(this).wrap("<span class='select-wrapper'></span>");
         }
        $(this).after("<span class='holder'></span>");
    });
    $(".custom-select").change(function (touch) {
        var selectedOption = $(this).find(":selected").text();
        $(this).parents('.select-wrapper').find('.holder').text(selectedOption);
    });
    $(".holder").each(function (touch) {
        $(this).text($(this).parent().find('select').find(":selected").text());
    });

    //Mobile Sale service no slidetoogle
     $(".mobdots") .click(function() {
          $(".toplink") .slideToggle(200);
      });
      
      /*click to call */
     if ($(".clickcall").length > 0) {

        $(".clickcall").addClass("grow").delay(5000).queue(function () {
            $(this).removeClass("grow").dequeue();
        });

        $('.clickcall').click(function () {
            $('body').addClass('callbgnoscroll');

            $('.callpopupbg').fadeIn(500);
            $('.callparenttab').fadeIn(500);

        });

        $('.callparenttab a').click(function () {
            var data_id = $(this).attr("data-id");
            var outlet_count = $('#count_outlet_' + data_id).val();

            $('#' + data_id).gsp_modal({
                border: false,
                width: 'auto',
                onOpen: function () {
                    $('#show_connecto_popup').text('false');
                    $('.gsc_modal_wrapper').addClass('borderradius5');
                    if (outlet_count < 10) {
                        $('.gsc_modal_wrapper').addClass('nosearchmrgn');
                    } else {
                        $('.gsc_modal_wrapper').removeClass('nosearchmrgn');
                    }
                },
                onClose: function () {
                    $('#show_connecto_popup').text('true');
                    $('body').removeClass('callbgnoscroll');
                    $('.callpopup').trigger('gse_modal.close');
                    $('.callparenttab').fadeOut(500);
                    $('.callpopupbg').hide();
                    $('.callpopup').find('#search').val('');
                    $('.userdetail').show();
                }
            });

            $('#' + data_id).trigger('gse_modal.open');

            $('.callparenttab').fadeOut(500);
        });

        $('.callpclose').click(function () {
            $('body').removeClass('callbgnoscroll');
            $('.callpopup').trigger('gse_modal.close');
            $('.callparenttab').fadeOut(500);
            $('.callpopupbg').fadeOut(500);
            $('.callpopup').find('#search').val('');
            $('.userdetail').show();
        });

        $('.callpopupbg').click(function () {
            $('body').removeClass('callbgnoscroll');
            $('.callpopup').trigger('gse_modal.close');
            $('.callparenttab').fadeOut(500);
            $('.callpopupbg').hide();
            $('.callpopup').find('#search').val('');
            $('.userdetail').show();
        });
    }
})

function validateRegistrationNumber(event) {
    var key = window.event ? event.keyCode : event.which;

    if ((key > 64 && key < 91) || (key > 96 && key < 123)
        || key == 32 || key == 8 || key == 127
        || key == 46 || key == 9 || key == 8 || key == 46
        || key == 39 || key == 45 || key == 47) {
        return true;
    }
    else if (key < 48 || key > 57) {
        return false;
    }
    else return true;

}
function showvariantlist(variant_id, obj){
   
    
    var divIdHtml = "<div id='variant_loader' class='overlay' style='position: absolute;background: rgba(255,255,255,.8);top: 0;left: 0;width: 100%;height: 100%;'></div>";
    $('.specresult').hide();
    $('#specresult'+variant_id).append(divIdHtml);
    $('#specresult'+variant_id).show();
    setTimeout(function(){
        $('#variant_loader').remove();
    },500)
    
}

// Custom Check box
function setupLabel() {
    if ($('.label_check input').length) {
        $('.label_check ').each(function(){
            $(this).removeClass('c_on');
        });
        $('.label_check input:checked').each(function(){
            $(this).parent('div').addClass('c_on');
        });
    };
    if ($('.label_radio input').length) {
        $('.label_radio').each(function(){
            $(this).removeClass('r_on');
        });
        $('.label_radio input:checked').each(function(){
            $(this).parent('div').addClass('r_on');
        });
    };
};

$('.chkhold').addClass('has-js');
$('.chkholdradio').addClass('has-js');
$('.label_check, .label_radio').click(function(){
    setupLabel();
});
setupLabel();

