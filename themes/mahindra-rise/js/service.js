$(document).ready(function() {
    if ($('#bookservice-service_date').length > 0) {
        $("#bookservice-service_date").datepicker({
            clearBtn: true,
            minDate: 1,
            dateFormat: 'dd/mm/yy',
            onClose: function(dateText, inst) {
                $('#bookservice-service_date').parent().parent().addClass('nbook-selectdate');
                $('.service_timeslots').show();
            }
        });
    }
    if ($('#bookservice-city').length > 0) {
        $('#bookservice-city').change();
    }
    if ($('#bookservice-service_date').length > 0) {
        $("#bookservice-service_date").datepicker({
            clearBtn: true,
            minDate: 1,
            dateFormat: 'dd/mm/yy'
        });
    }


    $("#bookservice_mobistep1").on("beforeValidate", function() {
        $(this).find("button").prop("disabled", "disabled");
    }).on("afterValidate", function(event, messages, errorAttributes) {
        if (errorAttributes.length) {
            $(this).find("button").removeAttr("disabled");
        }
    }).on("beforeSubmit", function(event, jqXHR, settings) {
        $.ajax({
            url: lang + '/book-service/saveservicedata',
            type: 'post',
            data: $("#bookservice_mobistep1").serialize(),

            success: function(data) {
                $('#lead_id').val(data);
                ga_event({ event: 'leadsubmit', eventCategory: 'enquiry', eventAction: 'submit', form_field: 'submit', formName: 'book-service' });
                $(".nb-serresult").fadeIn();
                $(".nb-persresult").fadeOut();
                $(".servicemobitab span").fadeOut();
                $(".basicmobitab span").fadeIn();

            }
        });

        return false;
    });
    $("#bookservice_mobistep2").on("beforeValidate", function() {
        $(this).find("button").prop("disabled", "disabled");
    }).on("afterValidate", function(event, messages, errorAttributes) {
        if (errorAttributes.length) {
            $(this).find("button").removeAttr("disabled");
        }
    }).on("beforeSubmit", function(event, jqXHR, settings) {
        if ($("#bookservice-car_no").val() == "") {
            $(this).find("button").removeAttr("disabled");
            $("#bookservice-car_no").next().text("Please enter registration no.");
            $(".nb-shareresult").slideToggle();
            return false;
        } else {
            $.ajax({
                url: lang + '/book-service/saveservicedata',
                type: 'post',
                data: $("#bookservice_mobistep2, #bookservice_mobistep1").serialize(),

                success: function(data) {
                    location.reload();
                }
            });
        }
        return false;
    });


    $('input[name="BookService[pickup_required]"]').click(function() {
        if ($(this).val() == 'Yes') {
            $('.nb-addresspick').fadeIn();
        } else {
            $('.nb-addresspick').fadeOut();
        }
    })


});
$(window).load(function() {
    if ($('.bookservice_service').length > 0) {
        if (window.location.href.includes("serviceOffering")) {
            $(window).scrollTop($('#offeringSec').position().top - 170);
            $('.bookicon2').addClass('active');
            if (screen.width <= 768) {
                $('.owl-wrapper').trigger('owl.goTo', 1);
            }
        }

    }
});

function select_drop_outlet() {
    if ($("select#customerprofile-outlet_name option").length == 2) {
        $("#customerprofile-outlet_name option:nth(1)").attr("selected", "selected");
        $("#customerprofile-outlet_name option[value='']").remove();
        if ($("#customerprofile-outlet_name option").length == 1) {
            //getTimeSlot();
        }
    }
}

function validateNumber(event) {
    var recentChar = String.fromCharCode(event.which);
    var curr_val = $("#bookservice-kilometer_done").val();
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode == 8 || event.keyCode == 39) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else if (recentChar == '0' && curr_val.length == 0) {
        return false;
    } else
        return true;
};
$("#bookservice-kilometer_done").on("keypress keyup blur", function(event) {
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
});

function openbookservicepopup(outlet_id) {
    if (outlet_id != '') {
        $.ajax({
            url: lang + '/book-service/bookservicepopup?id=' + outlet_id,
            type: 'get',
            success: function(data) {
                $("#popup_data").html(data);
                mypopup = new DLRPopup('popup_data', 'popcontact', 'popcontactbg');
                mypopup.openPopup();
                $("#popup_data").find('.close').bind('click', function() {
                    mypopup.closePopup();
                })

            }

        });
    }
}

function openGalleryPopup(outlet_id, website_id) {

    $.ajax({
        url: lang + '/book-service/bookservicegallery?outlet_id=' + outlet_id + '&website_id=' + website_id,
        type: 'get',
        success: function(data) {
            if (data.status == "success") {
                var imgSrc = [];
                for (i = 0; i < data.image.length; i++) {
                    imgSrc.push({ src: data.image[i] });
                }
                $.magnificPopup.open({
                    items: imgSrc,
                    type: 'image',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                    },
                });
            }

        }

    });
}

function getTimeSlots() {
    var service_date = $('#bookservice-service_date').val();
    var outlet_id = $('#outlet_id').val();
    if (service_date != undefined && service_date != "") {
        $.ajax({
            url: lang + '/book-service/servicetimeslots?service_date=' + service_date + '&outlet_id=' + outlet_id,
            type: 'get',
            success: function(data) {
                $('.timeslots').find('.holder').text("Appointment Time");
                $('#bookservice-service_time').html(data);
            }
        })
    }
}

function saveServiceData(obj, id) {
    $.ajax({
        url: lang + '/book-service/bookservicepopup?id=' + id,
        type: 'post',
        data: $("#popup_form").serialize(),
        beforeSend: function(xhr) {
            obj.attr('disabled', true);
            $("#loading_img").show();
        },
        success: function(data) {
            $("#popup_data").html(data);
            mypopup = new DLRPopup('popup_data', 'popcontact', 'popcontactbg');
            mypopup.openPopup();
            $("#popup_data").find('.close').bind('click', function() {
                mypopup.closePopup();
            })
        }

    });

    return false;
}

function showServiceNo(outlet_id) {
    $('#callshowview_' + outlet_id).toggle();
}
$(document).mouseup(function(e) {
    if ($('.callusshow').length > 0) {
        var container = $(".callusshow");
        // If the target of the click isn't the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.callshowview').hide();
        }
    }
});

function getModelListing(purpose, id) {
    if (purpose != undefined) {
        $.get(lang + "/online-service/model-list", {
            purpose: purpose,
        }).done(function(data) {
            $('#' + id).html(data);
            $('#' + id).change();

        });
    }
}

function openbookservicepopup(outlet_id) {
    if (outlet_id != '') {
        $.ajax({
            url: lang + '/book-service/bookservicepopup?id=' + outlet_id,
            type: 'get',
            success: function(data) {
                $("#popup_data").html(data);
                mypopup = new DLRPopup('popup_data', 'popcontact', 'popcontactbg');
                mypopup.openPopup();
                $("#popup_data").find('.close').bind('click', function() {
                    mypopup.closePopup();
                })

            }

        });
    }
}

function openGalleryPopup(outlet_id, website_id) {

    $.ajax({
        url: lang + '/book-service/bookservicegallery?outlet_id=' + outlet_id + '&website_id=' + website_id,
        type: 'get',
        success: function(data) {
            if (data.status == "success") {
                var imgSrc = [];
                for (i = 0; i < data.image.length; i++) {
                    imgSrc.push({ src: data.image[i] });
                }
                $.magnificPopup.open({
                    items: imgSrc,
                    type: 'image',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                    },
                });
            }

        }

    });
}

function getTimeSlots() {
    var service_date = $('#bookservice-service_date').val();
    var outlet_id = $('#outlet_id').val();
    if (service_date != undefined && service_date != "") {
        $.ajax({
            url: lang + '/book-service/servicetimeslots?service_date=' + service_date + '&outlet_id=' + outlet_id,
            type: 'get',
            success: function(data) {
                $('.timeslots').find('.holder').text("Appointment Time");
                $('#bookservice-service_time').html(data);
            }
        });
    }
}

function saveServiceData(obj, id) {
    $.ajax({
        url: lang + '/book-service/bookservicepopup?id=' + id,
        type: 'post',
        data: $("#popup_form").serialize(),
        beforeSend: function(xhr) {
            obj.attr('disabled', true);
            $("#loading_img").show();
        },
        success: function(data) {
            $("#popup_data").html(data);
            mypopup = new DLRPopup('popup_data', 'popcontact', 'popcontactbg');
            mypopup.openPopup();
            $("#popup_data").find('.close').bind('click', function() {
                mypopup.closePopup();
            })
        }

    });

    return false;
}

function showServiceNo(outlet_id) {
    $('#callshowview_' + outlet_id).toggle();
}
$(document).mouseup(function(e) {
    if ($('.callusshow').length > 0) {
        var container = $(".callusshow");
        // If the target of the click isn't the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.callshowview').hide();
        }
    }
});

function showOfferingDesc(offering_id) {

    $('.stap-1').addClass('diactive');

    
    if(offering_id==1){
        $('.stap-2').addClass('active'); 
    } else if(offering_id==2){
        $('.stap-3').addClass('active'); 
    } else if(offering_id==3){
        $('.stap-4').addClass('active'); 
    } else if(offering_id==4){
        $('.stap-5').addClass('active'); 
    } else if(offering_id==5){
        $('.stap-6').addClass('active'); 
    } else if(offering_id==6){
        $('.stap-2').removeClass('active');
        $('.stap-3').removeClass('active');
        $('.stap-4').removeClass('active');
        $('.stap-5').removeClass('active');
        $('.stap-6').removeClass('active');
        $('.stap-1').removeClass('diactive');
        $('.stap-2').addClass('diactive');
        $('.stap-3').addClass('diactive');
        $('.stap-4').addClass('diactive');
        $('.stap-5').addClass('diactive');
        $('.stap-6').addClass('diactive');
        $('.stap-1').addClass('active'); 
    }
    
}

 /*function showOfferingDesc(offering_id) {

     if (offering_id != undefined && offering_id != "") {
         $('.stap-1').addClass('diactive');

         $.ajax({
             url: lang + '/book-service/service-offering-details.php?offering_id=' + offering_id,
             type: 'get',
             success: function(data) {
                 //$('.stap-2').addClass('active');
                 //$('.stap-2').html(data);
                 alert(data);
             }
         });
     }
 }*/

/*function showOfferingDesc(a) {
    void 0 != a && "" != a && ($(".stap-1").addClass("diactive"),
        $.ajax({
            url: lang + "/book-service/service-offering-details.php?offering_id=" + a,
            type: "get",
            success: function(a) {
                $(".stap-2").addClass("active");
                $(".stap-2").html(a)
            }
        }))
}*/

function showOfferings(){
    $('.stap-2').addClass('diactive');
    $('.stap-1').addClass('active');
}



$("#bookmenuslider").owlCarousel({
    items: 5,
    itemsDesktop: [1180, 4],
    itemsDesktopSmall: [979, 4],
    itemsTablet: [768, 3],
    itemsTabletSmall: [600, 2],
    itemsMobile: [479, 1],
    navigation: true,
    pagination: false,
    afterAction: function(el) {
        // this.$owlItems.find('li').eq(this.currentItem).click();
        // $(this).addClass('active');
    }

});
$("#bookmenuslider .owl-item:first-child").addClass("first");
$("#bookmenuslider .owl-prev").html('<span class="sprite leftarrow"></span>');
$("#bookmenuslider .owl-next").html('<span class="sprite rightarrow"></span>');

$('#bookmenuslider li').click(function(touch) {
    $('#bookmenuslider li.active').removeClass('active');
    $(this).addClass('active');
});

// Sticky red strip
$(function() {
    var stickyHeaderTop = 0;
    if ($('#redstripslide').length > 0) {
        stickyHeaderTop = $('#redstripslide').offset().top;
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $('#redstripslide').css({ position: 'fixed', top: '0' }).addClass("bookmenuFix");


        } else {
            $('#redstripslide').css({ position: 'relative', top: '0px' }).removeClass("bookmenuFix");


        }
    });
});

function showServiceSections(obj, text) {
    obj.addClass('active');

    var pos = 95;
    if (screen.width <= 768) {
        if (text == 'offeringSec') {
            pos = 180;
        } else if (text == 'videosSec') {
            pos = 40;
        } else if (text == 'walkaroundSec' || text == 'gallery') {
            pos = 120;
        } else {
            pos = 95;
        }
    } else {

        if (text == 'offeringSec') {
            pos = 170;
        } else if (text == 'gallery') {
            pos = 40;
        } else if (text == 'videosSec') {
            pos = 100;
        } else if (text == 'walkaroundSec') {
            pos = 140;
        } else {
            pos = 95;
        }
    }
    if (text == 'tetimonialSec') {
        var topPos = ''
        if (screen.width <= 768) {
            topPos = 1700;
        } else {
            topPos = 3600;
        }
        $('html, body').animate({
            scrollTop: topPos
        }, 500);
    } else {
        $('html, body').animate({
            scrollTop: $("#" + text).offset().top - pos
        }, 500);
    }

}

function getExchangeModel() {
    if ($('#exchange-exchange_make').val() != undefined) {
        $('#exchange-exchange_model').next().text('Select Exchange Model');
        var make_id = $('#exchange-exchange_make').val();
        $.ajax({
            url: '/exchange/getexchangemodels?make_id=' + make_id,
            type: 'get',
            success: function(data) {
                $('#exchange-exchange_model').html(data);
            }
        });
    }

}

function getExchangeCity() {
    if ($('#exchange-exchange_state').val() != undefined) {
        $('#exchange-exchange_city').next().text('Select City');
        var state_id = $('#exchange-exchange_state').val();
        $.ajax({
            url: '/exchange/getexchangecity?state_id=' + state_id,
            type: 'get',
            success: function(data) {
                $('#exchange-exchange_city').html(data);
            }
        });
    }

}

function exchange_popup(obj) {
    $.ajax({
        url: lang + '/exchange/popup',
        type: 'post',
        data: $("#popup_form").serialize(),
        beforeSend: function(xhr) {
            obj.attr('disabled', true);
            $("#loading_img").show();
        },
        success: function(data) {
            $('#popup_data').html(data);
            $('.popupwrap').show();
            $('.popupbg').show();
            return false;
        }

    });

    return false;
}