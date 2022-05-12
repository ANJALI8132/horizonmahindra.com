$(document).ready(function () {
    $("#contact_service").hide();
})
$('#carousel-tab').gsp_tab({
    content_wrap: '#carousel-tab-container',
    responsive: false,
    layout: 'auto'
});
var $tabs = $('#carousel-in-tab *[data-gstab]');
$tabs.one('gse_tab_click', function (e, $tab, $container) {

}).on('gse_tab_click', function (e, $tab, $container) {


    setTimeout(function () {
        var $activeLink = $('#carousel-tab').find('.gsc-ta-active');
        var offsets = $activeLink[0].getBoundingClientRect();

        var scrollLeft = offsets.left + (offsets.width / 2);
        var winCenter = window.innerWidth / 2;
        var t = $('#carousel-tab').offset().left;
        //console.log(t, (scrollLeft - winCenter))
        var p = (t - (scrollLeft - winCenter));
        if (p < 0)
            $('#carousel-tab').animate({left: p});
        else
            $('#carousel-tab').animate({left: 0});
    }, 1);

});

var lead_type = 'contactus_newcar';
function getleadtype(obj) {
    lead_type = obj;
    if (lead_type == 'contactus_newcar') {
        $('#contact_service').hide();
        $('#contact_sales').show();
    } else if (lead_type == 'contactus_service') {
        $('#contact_sales').hide();
        $('#contact_service').show();
    } else if (lead_type == 'contactus_others') {
        $('#contact_service').hide();
        $('#contact_sales').show();
    } else if (lead_type == 'contactus_feedback') {
        $('#contact_service').hide();
        $('#contact_sales').show();
        $('#customerprofile-query').parent().parent().find('label').html('Your Query<sup>*</sup>');
    }
}

//call to contactus
function calltocontactus() {

    $('#show_contactus').show();
    $('body').addClass('pnoscroll');
    if (lead_type == 'contactus_service') {
        $('.popuptitle').text('Service No.');
        $('#service_phone').show();
        $('#new_car').hide();
    } else {
        $('.popuptitle').text('Sales No.');
        $('#new_car').show();
        $('#service_phone').hide();
    }
}



//Rate contact
if ($('.newcontact').find('.contact_rate').find('span').length > 0) {
    $('.newcontact').find('.contact_rate').find('span').click(function () {
        var rating_number = $(this).index() + 1;

        $('.contact_rate').find('.star-fullselect').addClass('star-unselect');
        $('.contact_rate').find('.star-fullselect').removeClass('star-fullselect');

        $('.contact_rate').children().slice(0, rating_number).removeClass('star-unselect');
        $('.contact_rate').children().slice(0, rating_number).addClass('star-fullselect');

        $('#customerprofile-rating').val(rating_number);
    })
}

function closePopup() {
    $("#show_contactus").hide();
    $("body").removeClass("pnoscroll");
}     