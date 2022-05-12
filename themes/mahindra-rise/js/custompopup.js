/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mypopup;
$(document).on('click', "a[data-popup='custom-popup']", function (e) {
    e.preventDefault();
    if ($(this).data('url')) {
        var url = $(this).data('url');
    } else {
        var url = $(this).attr('href');
    }


    $.get(url, {}).done(function (data) {
        $("#popup_data").html(data);
        mypopup = new DLRPopup('popup_data','popcontact', 'popcontactbg');
        mypopup.openPopup();
//        $("#popup_data").find('.popupbg').show();
//        $("#popup_data").find('.popupwrap').show();
        $("#popup_data").find('.close').bind('click',function(){
            mypopup.closePopup();
        })
    });
})

function DLRPopup(maindid , divId, backgroundColorDivId) {

    this.divContainer = $("#"+maindid).find('#'+divId);
    this.background = $("#"+maindid).find('#'+backgroundColorDivId);
    this.openPopup = function () {
        $('#show_connecto_popup').text('false');
        if (!this.divContainer.is(':visible')) {
            $('body').addClass('no_scroll');
            this.divContainer.show();
            this.background.show();
            $("body").scrollTop(0);
        } else {
            $('body').removeClass('no_scroll');
            this.divContainer.hide();
            this.background.hide();
        }
        window.onkeydown = function (event) {
            if (event.keyCode === 27) {
                this.divContainer.hide();
                this.background.hide();
            }
        };
    }
    this.closePopup = function () {
        $('#show_connecto_popup').text('true');
        $('body').removeClass('no_scroll');
        this.divContainer.hide();
        this.background.hide();
    }

}


//To validate popup
function validateFunction(obj) {

    var type = $("#popup_type").val();
    $.ajax({
        url: lang + '/customer-profile/create-service?type=' + type,
        type: 'post',
        async: false,
        data: $("#popup_form").serialize(),
        beforeSend: function (xhr) {
            obj.attr('disabled', true);
            $("#loading_img").show();
        },
        success: function (data) {
            if (data.redirect != undefined) {
                $form = $("<form style='display:none;' action='" + lang + "/customer-profile/redirect' method='get'></form>");
                $form.append('<input type="hidden" name="redirect" value="' + data.redirect + '">');
                $form.append('<input type="submit" value="button">');
                $('body').append($form);
                $form.submit();
            } else {
                $("#popup_data").html(data);
                mypopup = new DLRPopup('popup_data','popcontact', 'popcontactbg');
                mypopup.openPopup();
                $("#popup_data").find('.close').bind('click',function(){
                    mypopup.closePopup();
                })
            }

        }

    });
    return false;
}

//To validate popup
function validatePopupNumber(obj) {
    //If for dont has errors then submit

    var type = $("#popup_type").val();
    var eventaction = $("#eventaction").val();
    var add_url = '';
    if (eventaction) {
        add_url = '&eventaction=' + eventaction;
    }
    $.ajax({
        url: lang + '/customer-profile/verify-number?type=' + type + add_url,
        type: 'post',
        async: false,
        data: $("#popup_form").serialize(),
        beforeSend: function (xhr) {
            //obj.attr('disabled', true);
            //$("#loading_img").show();
        },
        success: function (data) {

            if (data.status == 'success') {
                if (data.content != undefined)
                {
                    $("#popup_data").html(data.content);
                    mypopup.openPopup();

                } else if (data.redirect != undefined) {
                    $form = $("<form style='' action='" + lang + "/customer-profile/redirect' method='get'></form>");
                    $form.append('<input type="hidden" name="redirect" value="' + data.redirect + '">');
                    $form.append('<input type="submit" value="button">');
                    $('body').append($form);
                    $form.submit();
                }
            } else {
                alert(data.error);
            }
        }
    });
    return false;
}


//To validate popup
function validateaMobileNo(obj) {

    var type = $("#popup_type").val();
    var mobile_no = $("#customerprofile-update_mobileno").val();
    var filter = /^[6-9][0-9]{9}$/;

    $.ajax({
       url: lang + '/customer-profile/updateno?type=' + type,
        type: 'post',
        async: false,
        data: $("#popup_form1").serialize(),
        beforeSend: function (xhr) {
            obj.attr('disabled', true);
            $("#loading_img").show();
        },
        success: function (data) {
            $("#popup_data").html(data);
            mypopup = new DLRPopup('popup_data','popcontact', 'popcontactbg');
            mypopup.openPopup();
            $("#popup_data").find('.close').bind('click',function(){
                mypopup.closePopup();
            })
            if (!mobile_no || !filter.test(mobile_no)) {
                $("#popup_form1").show();
                $("#popup_form").hide();
            }
            $("#customerprofile-update_mobileno").val('');
        }

    });
    return false;
}

//To validate popup
function GetAnotherOtp(obj) {

    var popup_type = $("#popup_type").val();
    var cust_id = $("#customerprofile-cust_id").val();
    $.get(lang + '/customer-profile/resend-otp', {
        'cust_id': cust_id, 'type': popup_type,
    }).done(function (data) {

        $("#popup_data").html(data);
        mypopup = new DLRPopup('popup_data','popcontact', 'popcontactbg');
        mypopup.openPopup();
        $("#popup_data").find('.close').bind('click',function(){
            mypopup.closePopup();
        })
    })
}


//To validate popup
function popup(obj, id, variant_name) {

    $.ajax({
        url: lang + '/used-cars/popup?id=' + id + '&variant_name=' + variant_name,
        type: 'post',
        data: $("#popup_form").serialize(),
        beforeSend: function (xhr) {
            obj.attr('disabled', true);
            $("#loading_img").show();
        },
        success: function (data) {
            $("#popup_data").html(data);
            mypopup = new DLRPopup('popup_data','popcontact', 'popcontactbg');
            mypopup.openPopup();
            $("#popup_data").find('.close').bind('click',function(){
                mypopup.closePopup();
            })

        }

    });
    return false;
//return false;
}

function validateOfferPopup(obj) {

    var offer_id = $("#offer_id").val();
    $.ajax({
        url: lang + '/offers/popup?offer_id=' + offer_id,
        type: 'post',
        async: false,
        data: $("#popup_form").serialize(),
        beforeSend: function (xhr) {
            obj.attr('disabled', true);
            $("#loading_img").show();
        },
        success: function (data) {
            $("#popup_data").html(data);
            mypopup.openPopup();
        }

    });
    return true;
}

function validateTestimonialPopup(obj) {
    var formData = new FormData($("#popup_form")[0]);
    
        $('.field-testimonial-rating').removeClass('has-error');
        $('.field-testimonial-rating').find('.help-block').text(' ');
        
        $.ajax({
            url: lang + '/testimonial/popup',
            type: 'post',
            async: false,

            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function (xhr) {
                obj.attr('disabled', true);
                $(".button2").prop("disabled", "disabled");

            },
            success: function (data) {
                $("#popup_data").html(data);
               
                $(".button2").removeAttr("disabled"); 
                mypopup = new DLRPopup('popup_data','popcontact', 'popcontactbg');
                mypopup.openPopup();
                
                $("#popup_data").find('.close').bind('click',function(){
                    mypopup.closePopup();
                })
                var rating_number = $('#testimonial-rating').val();
                    $('.rate_me').children().slice(0, rating_number).removeClass('star-unselect');
                    $('.rate_me').children().slice(0, rating_number).addClass('star-fullselect');
                }
        });
        return true;

    
}

function validateCustomForm(obj) {

    $.ajax({
        url: lang + '/customer-profile/customform',
        type: 'post',
        async: false,
        data: $("#popup_form").serialize(),
        beforeSend: function (xhr) {
            obj.attr('disabled', true);
            $("#loading_img").show();
        },
        success: function (data) {

            $("#popup_data").html(data);
            mypopup.openPopup();
        }

    });
    return true;
}

function get_model_variant(model_id) {
    if (model_id) {
        $.get(lang + "/customer-profile/model-link", {
            model_id: model_id,

        }).done(function (data) {
            $('#customerprofile-variant_link_rewrite').val(data);
        });
    }
}

//To validate popup
function outlet_popup(obj,id) { 
    $.ajax({
        url: lang + '/outlet/popup?id=' + id,
        type: 'post',
        data: $("#popup_form").serialize(),
        beforeSend: function (xhr) {
           obj.attr('disabled', true);
            $("#loading_img").show();
        },
        success: function (data) { 
            $('#popup_data').html(data);
            $('.popupwrap').show();
            $('.popupbg').show();
           return false;
        }

    });    

return false;
}
