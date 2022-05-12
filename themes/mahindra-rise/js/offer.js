$(document).ready(function(){
    if($('.sdescribe') .length > 0){
        showOffer();
    }
})

function submit_offer_form(page, view) {

    var obj = $('#offers-model_name');
    variant_data($('#variant_' + obj.val()), obj, page);

    if (view == 'mobile') {
        $('.soffer-selectbtn').click();
    }
}

function variant_data(obj, modelobj, page) {
    var variant_id = obj.val();

    var model_id = modelobj.val();

    var type = $('#offer_type').val();
    var city = $('#offers-city').val();

    if (page) {
        var page_no = page;
    } else {
        var page_no = $('#page_no').val();
    }


    $.get(lang + "/offers/variantdetail", {
        model_id: model_id,
        variant_id: variant_id,
        type: type,
        page: page_no,
        city_id: city
    }).done(function (data) {
        $('#offerproduct').html(data);

        //popup for terms and conditions
        $('.offer_terms').gsp_popup({
            inline: true,
            onOpen: function () {
                $('#show_connecto_popup').text('false');
                $('body').addClass('pnoscroll');
            },
            onClosed: function () {
                $('#show_connecto_popup').text('true');
                $('body').removeClass('pnoscroll');
            },
        });
        showOffer();
       
    });
}
//offer page filter
if (screen.width > 1007) {
    $('#offer_type').change(function () {
        console.log('test');
        variant_data($('#variant_' + $('#offers-model_name').val()), $('#offers-model_name'));
    });

    $("select[id ^='variant_']").change(function () {
        if ($(this).is(':visible')) {
            variant_data($('#variant_' + $('#offers-model_name').val()), $('#offers-model_name'));
        }
    });
}
function select_variant_offer(obj) {

    $("select[id ^='variant_']").parent().hide();
    $('#variant_' + obj.val()).parent().show();
    if (obj.val() && obj.val() != '0') {
        //window.location.hash = obj.find('option:selected').data('model_link');
    } else {
        //history.pushState('', document.title, window.location.pathname);
    }
    if (screen.width > 1007) {
        variant_data($('#variant_' + obj.text()), obj);
    }
}

function showOffer(){
      //Offer page
        $('.sdescribe').click(function () {
            var count = $(this).data('count');
            $('div[class^="soffer-des"]').not('.soffer-des' + count).slideUp();

            $('.soffer-des' + $(this).data('count')).slideToggle(700);
            $('.sdescribe' + $(this).data('count')).addClass('active');
            $('#sofferlist' + $(this).data('count')).addClass('sofselected');
        });

        $('.soff-close').click(function () {
            $('.soffer-des' + $(this).data('count')).slideToggle(700);
            $('.sdescribe' + $(this).data('count')).removeClass('active');
            $('#sofferlist' + $(this).data('count')).removeClass('sofselected');
        });

        $('.spoffertab').click(function () {
            $('.spoffer-result').fadeIn();
            $('.corofferresult').fadeOut();
            $('.spoffertab').addClass('active');
            $('.coroffertab').removeClass('active');
        });
}

//To validate popup
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
             mypopup = new DLRPopup('popup_data','popcontact', 'popcontactbg');
            mypopup.openPopup();
            $("#popup_data").find('.close').bind('click',function(){
                mypopup.closePopup();
            })
        }

    });
    return true;
}
