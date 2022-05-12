$(document).ready(function () {
    if ($('#outlet-outlet_type').length > 0) {
        $(window).bind('load', function () {
            $('#outlet-outlet_type').change()
        });
    }

    $('#outlet-outlet_type').change(function () {
        select_city();
    });
    $('#outlet-city').change(function () {
        select_area();
    });
    $('#outlet-area').change(function () {
        if ($('#page_val').length > 0 && $('#page_val').val() == 'home') {
            select_data();
        }
    });
  
    /*New Outlet Page*/
    $(".nout-viewgal").click(function () {
        $(".nout-showgal").fadeIn();
        $(".nout-viewgal").fadeOut();
    });

    $(".nout-btn1").click(function () {
        $(".mobi-modisearch").slideToggle();
        $(".noutmobi-bgtrans").fadeIn();
    });

    $(".mobi-outbtn").click(function () {
        if ($('.success').length > 0) {
            $('.success').text('');
            $('.success').hide();
        }
        $(".mobi-modisearch").slideToggle();
        $(".noutmobi-bgtrans").fadeIn();
    });


    $(".modiclose").click(function () {
        $(".mobi-modisearch").slideToggle();
        $(".noutmobi-bgtrans").fadeOut();
    });

    $(".nout-close").click(function () {
        $(".nout-popupbg").fadeOut();
        $(".nout-popupwrap").fadeOut();
    });

    $('a.mobi-outseemore').on('click', function (event) {
        event.preventDefault();
        $('.daywise').slideToggle(function (event) {
            if ($('.daywise').is(':visible')) {
                $('.mobi-outseemore').removeClass('outplus');
                $('.mobi-outseemore').addClass('outminus');
            } else {
                $('.mobi-outseemore').addClass('outplus');
                $('.mobi-outseemore').removeClass('outminus');

            }
        });
    });

    if ($('#googleMap').length > 0) {
        setTimeout(function () {
            var show_single = 0;
            //show single location in cse of outlet detail page
            if ($('.newoutlet-detail').length > 0) {
                show_single = 1;
            }
            $.fn.google_map({
                'type_val': $('#outlet-outlet_type').val(),
                'city_val': $('#outlet-city').val(),
                'my_lat': $("#mylat").val(),
                'my_long': $("#mylong").val(),
                'brand': $('#outlet-outlet_brand').val(),
                'show_single': show_single
            });
        }, 200);
    }

    //scroll down on outlet detail page
    if ($("#scrollhere").length > 0) {
        $('html, body').animate({
            scrollTop: $("#scrollhere").offset().top
        }, 1000);
    }
    
    //Rate outlet
    if ($('#outlet_detail').find('.rate_me').find('span').length > 0) {
        $('#outlet_detail').find('.rate_me').find('span').click(function () {
            var rating_number = $(this).index() + 1;

            $('.rate_me').find('.star-fullselect').addClass('star-unselect');
            $('.rate_me').find('.star-fullselect').removeClass('star-fullselect');

            $('.rate_me').children().slice(0, rating_number).removeClass('star-unselect');
            $('.rate_me').children().slice(0, rating_number).addClass('star-fullselect');

            $('#outletrating-rating').val(rating_number);
        })
    }

})
function select_variant(obj, type) {
    $("select[id ^='variant_" + type + "']").parent().hide();
    $('#variant_' + type + '_' + obj.val()).parent().show();
}

function select_city() {
    var type_val = $('#outlet-outlet_type').val();
    var brand = $('#outlet-outlet_brand').val();
    var selected_city = $('#hidden_selected_city').val();
    var is_first_selected = 'no';
    if (($('.noutdetailwrap').length > 0 && $('.newoutlet-mobiview').length > 0) || $('.outletshome').length > 0) {
        var is_first_selected = 'yes';
    }
    //  if (type_val) {
    $.get(lang + "/outlet/city", {
        outlet_type: type_val,
        outlet_brand: brand,
        selected_city: selected_city,
        is_first_selected: is_first_selected
    }).done(function (data) {
        $('#outlet-city').html(data);

//        if (!selected_city) {
//            selected_city = $('#outlet-city').find(":selected").text();
//        }
        $('#outlet-city').next(".holder").text(selected_city);
        $('#outlet-city').change();
    });
    //  }
}

function select_area() {
    var type_val = $('#outlet-city').val();
    var brand = $('#outlet-outlet_brand').val();
    var outlet_type_val = $('#outlet-outlet_type').val();
    var selected_area = $('#hidden_selected_area').val();

    if (type_val != $('#hidden_selected_city').val()) {
        selected_area = '';
    }
    var is_first_selected = 'no';
    if (($('.noutdetailwrap').length > 0 && $('.newoutlet-mobiview').length > 0) || $('.outletshome').length > 0) {
        var is_first_selected = 'yes';
    }
    $.get(lang + "/outlet/area", {
        outlet_city: type_val,
        outlet_type_val: outlet_type_val,
        outlet_brand: brand,
        selected_area: selected_area,
        is_first_selected: is_first_selected
    }).done(function (data) {
        if (outlet_type_val == '') {
            data = '<option value="">Locality</option>';
        }
        $('#outlet-area').html(data);
        if (!selected_area) {
            selected_area = $('#outlet-area').find(":selected").text();
        }
        $('#outlet-area').next(".holder").text(selected_area);
        $('#outlet-area').change();
        //  select_data();

    });


    //  }
}

function select_data(page_count) {
    var outlet_type_val = $('#outlet-outlet_type').val();
    var brand = $('#outlet-outlet_brand').val();
    if (brand == undefined) {
        brand = '';
    }
    var city_val = $('#outlet-city').val();
    var area_val = $('#outlet-area').val();
    if (!page_count) {
        page_count = 1;
    }
    var page = $("#page_val").val();
    if (page == undefined) {
        page = '';
    }
    $.ajax({
        url: lang + '/outlet/data?outlet_type=' + outlet_type_val + '&city=' + city_val + '&area=' + encodeURIComponent(area_val) + '&page=' + page_count + '&outlet_brand=' + brand + '&page_type=' + page,
        type: 'get',
        beforeSend: function (xhr) {
            $(".lodingimg").show();
        }, success: function (data) {
            $('#outlet_data').html(data);
            $(".lodingimg").hide();
            if (page == '') {
                $(window).scrollTop(0);
            }
            //Open request call back popup
            if (page != 'home') {
                $.get(lang + '/outlet/generate-url-with-title?outlet_type=' + outlet_type_val + '&city=' + city_val, function (data) {
                    if (data != '') {
                        $('#heading').html(data.page_heading);                       
                        history.pushState(window.location.href + '/', "new_page", data.url)
                    }
                    ;
                });
            }
            if ($('#outlet-model_id').length > 0) {
                $('#outlet-model_id').change();
            }

            $("a[href^='tel:']").each(function () {
                var link = this;
                // replace tel with javascript; in desktop view

                if (!navigator.userAgent.match(/(mobile)/gi)) {
                    link.href = "javascript:;";
                }
            });

            if (page != undefined && page == 'home') {
                $.fn.google_map({
                    'type_val': $('#outlet-outlet_type').val(),
                    'city_val': $('#outlet-city').val(),
                    'my_lat': $("#mylat").val(),
                    'my_long': $("#mylong").val(),
                    'scroll': 0,
                    'brand': brand
                });
            }
        }

    })
}


function outlet_filter() {

    var outlet_type_val = $('#outlet-outlet_type').val();
    var brand = $('#outlet-outlet_brand').val();
    var city_val = $('#outlet-city').val();
    var area_val = $('#outlet-area').val();
    var page = $("#page_val").val();
    if (outlet_type_val) {
        $.get(lang + "/outlet/outletlink", {
            outlet_type: outlet_type_val,
            city: city_val,
            area: area_val,
            page: page, outlet_brand: brand
        }).done(function (data) {
            if (data) {
                var pageURL = lang + '/outlet/' + data + '.html';
            } else {
                var pageURL = lang + '/outlet.html';
            }
            window.location.href = pageURL;
        });
    } else {
        var pageURL = lang + '/outlet.html';
        window.location.href = pageURL;
    }
    return false;
}

function search_outlet(outlet_type) {
    // Declare variables
    var input, filter, landmark_text, address_text, outlet_list, userdetail;
    input = $('#' + outlet_type).find('#search').val();
    filter = input.toUpperCase();
    outlet_list = $('#' + outlet_type).find('.outlet_list');
    userdetail = outlet_list.find('.userdetail');

    var data_found = 0;
    // Loop through all list items, and hide those who don't match the search query

    userdetail.each(function (index) {
        landmark_text = $(this).find('.landmark').text();
        address_text = $(this).find('.addrs').text();

        if (landmark_text.toUpperCase().indexOf(filter) > -1 || address_text.toUpperCase().indexOf(filter) > -1) {
            data_found = data_found + 1;
            $(this).show();
        } else {
            $(this).hide();
        }
    });

    if (!data_found) {
        $('.no_data').show();
    } else {
        $('.no_data').hide();
    }
}

function showWorkingHours(outlet_id) {
    $("#daywise" + outlet_id).slideToggle(function () {

        if ($(this).is(":visible") == true) {
            $(".workingslide").removeClass('nout-plus');
            $(".workingslide").addClass('nout-minus');

        } else {
            $(".workingslide").removeClass('nout-minus');
            $(".workingslide").addClass('nout-plus');
        }

    });
}

function outlet_popup(obj, id) {
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

function submitRating(outlet_link) {
    // if (!$('#outlet_detail').find('.has-error').length) {
    $.ajax({
        url: lang + '/outlet/outlet-detail?link_rewrite=' + outlet_link,
        type: 'post',
        data: $("#outlet_detail").serialize(),
        beforeSend: function (xhr) {
            // obj.attr('disabled', true);
            $(".nout-viewbtn").prop("disabled", "disabled");
        },
        success: function (data) {
            var i;
            if (data != "1") {
                $(".nout-viewbtn").removeAttr("disabled");
                errors = $.parseJSON(data);
                $.each(errors, function (i, item) {
                    $('#outletrating-' + i).parent().addClass('has-error');
                    $('#outletrating-' + i).parent().find('.help-block').text(item);
                });
            } else {
                $(".nout-viewbtn").removeAttr("disabled");
                if ($('.newoutlet-desktopview').length > 0) {
                    $('.success').show();
                    $('#outlet_detail')[0].reset();
                    $('#outletrating-' + i).parent().removeClass('has-error');
                    $('#outletrating-' + i).parent().find('.help-block').text('');
                    $('.rate_me').find('span').addClass('star-unselect');
                    $('#outletrating-rating').val(' ');
                } else {
                    location.reload();
                }
            }
        }
    });
    //  }
    return false;
}

function select_data_outletmobile() {
    select_data();
    setTimeout(function () {
        $(".noutmobi-bgtrans").css('display', 'none');
    }, 10);
}


function service_popup(obj, id) {
    $.ajax({
        url: lang + '/outlet/service-popup?id=' + id,
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
    return true;
}

//To validate driving popup
function driving_popup(obj, id) {
    $.ajax({
        url: lang + '/outlet/driving-popup?id=' + id,
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
    return true;
}

//get ratings
function getRatings(outlet_id, page, exclude_ids) {
    var outlet_id = outlet_id;

    $.ajax({
        url: lang + '/outlet/getratings?outlet_id=' + outlet_id + '&page=' + page + '&exclude_ids=' + exclude_ids,
        type: 'get',
        success: function (data) {
            if ($.trim(data)) {
                $("#rating_data").append(data);

            }

        }
    });
}


function book_test_drive_popup(obj, id) {
    $.ajax({
        url: lang + '/outlet/book-test-drive-popup?id=' + id,
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

        }

    });
    return true;
}

function openRatingPopup () {
    $(".nout-popupbg").fadeIn();
    $(".nout-popupwrap").fadeIn();
}
