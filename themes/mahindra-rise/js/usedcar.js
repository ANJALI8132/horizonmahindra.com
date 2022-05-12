function getPrice(brand_id, searched_price) {

    $.get(lang + "/used-cars/get-price", {
        brand_id: brand_id,
        searched_price: searched_price

    }).done(function (data) {

        $('#price').html(data);
        $('#price').change();
        $('#price1').html(data);
        $('#price1').change();


    });
    
}

/* reset Used car */
function resetUsedcars() {
    $('#model').val('');
    $('#city').val('');  
    $('#usedcar_km').val('');
    $('#usedcar_year').val('');
    $('#fuel').val('');
    $('#custom_price').val('');
    $(".brandlist").find('input[type=checkbox]').each(function () {
        this.checked = false;
    });
    $(".pricelist").find('input[type=radio]').each(function () {
        this.checked = false;
    });    
}

/* Used car by sort price */
function sortByprice(sorted_price, type) {
    $.ajax({
        type: "get",
        url: lang + "/used-cars/index",
        data: {sorted_price: sorted_price, type: type},
        success: function (data) {
            location.reload();
        }
    });

}

/* Used car by type */
function getusedcars(car_type) {
    var curr_type = getUrlParameter('type');
    var url = window.location.href;
    if (curr_type === undefined) {
        window.location.href = window.location.pathname + "?type=" + car_type;
    } else {
        var newurl = url.replace("type=" + curr_type, "type=" + car_type);
        window.location.href = newurl;
    }
}
function getUrlParameter(sParam) {
    
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
function getBrandModels(id_brand, id, expire) {
    //if (id_brand) {
    $.get(lang + "/cust-car-info/brand-models", {
        id_brand: id_brand,
        expire: expire

    }).done(function (data) {

        $('#' + id).html(data);
        $('#' + id).next(".holder").text($('#' + id).find(":selected").text());
        var variant_id = id.substr(id.length - 1);
        if (expire) {
            getModelVariantsId('', 'usedcars-variant_id');
        } else {
            getModelVariants('', 'custcarinfo-variant' + variant_id);
        }
    });
    // }

    if (id_brand == '') {
        var variant_id = id.substr(id.length - 1);
        if (expire) {
            getModelVariantsId('', 'usedcars-variant_id');
        } else {
            getModelVariants('', 'custcarinfo-variant' + variant_id);
        }

        $("#compare1").submit();
    }
}
function getModelVariantsId(id_model, id) {


    //var website_id = $('#brand').val();
    $.get(lang + "/used-cars/model-variants", {
        id_model: id_model,

    }).done(function (data) {

        $('#' + id).html(data);
        $('#' + id).change();

    });

}

function getModelVariants(id_model, id) {
    $.get(lang + "/cust-car-info/model-variants", {
        id_model: id_model,

    }).done(function (data) {
        $('#' + id).html(data);

        $("select[id^='custcarinfo-variant']").each(function () {
            if (id != $(this).attr('id') && $(this).val() != '') {
                $('#' + id).find("option[value='" + $(this).val() + "']").remove();
            }
        })
        $('#' + id).next(".holder").text($('#' + id).find(":selected").text());
    });
    if (id_model == '') {
        $('#custcarinfo-variant' + id).change();
    }
}
var minval='100000';
var maxval='3000000';
$(document).ready(function () {
    $(".filterclick").click(function () {
        $(".leftfilter").show();
    });

    $(".filtermobi-close").click(function () {
        $(".leftfilter").hide();
    });

    $("#content-1").mCustomScrollbar({
        autoHideScrollbar: false,
        theme: "rounded"
    });

    $("#content-2").mCustomScrollbar({
        autoHideScrollbar: false,
        theme: "rounded"
    });
    
   
    if($('.usedcarwrap').length > 0){
        if($('#custom_price').val() != ' '){
            getSliderVal($('#custom_price').val());
        }
    
    if ($('#content-1').find("input[name='price_range']:checked").val()) {
        var price = $('#content-1').find("input[name='price_range']:checked").val();
        if(price == 'above-30-lakh' || price == 'below-1-lakh'){
            minval='100000';
            maxval='3000000';
            $( ".range_val" ).text("1 Lakh to 30 Lakh");
        }
        
    }
   }
})


if($('.usedcar_range_slider').length > 0){
 $( function() {

$( ".usedcar_range_slider" ).slider({
        range: true,
        min: 100000,
        max: 3000000,       
        step:1000,
        values: [minval,maxval],
        slide: function( event, ui ) {
            var range1 = (ui.values[ 0 ]/100000).toFixed(1);
            var range2 = (ui.values[ 1 ]/100000).toFixed(1);
            
            $('#custom_price').val(range1+"-lakh-to-"+range2+"-lakh");
            $('#custom_price').attr('checked', true);

        $( ".range_val" ).text( range1 +" Lakh to "  + range2+ " Lakh  " );
            $('.ui-slider-handle:first').html('<div class="tooltip top slider-tip current-time"><div class="tooltip-arrow"></div><div class="tooltip-inner actual-time ng-binding">' + ui.values[0] + ' '+'</div></div>');
            $('.ui-slider-handle:last').html('<div class="tooltip top slider-tip current-time"><div class="tooltip-arrow"></div><div class="tooltip-inner actual-time ng-binding">' + ui.values[1] + ' '+'</div></div>');
 
        },
        change: function(event, ui) {}
    });
    
    
 });
}
function getSliderVal(custom_price){
    var arr = custom_price.split('-');
    minval =  Math.round(arr[0]*100000);
    maxval =  Math.round(arr[3]*100000);
    $( ".range_val" ).text( arr[0] +" Lakh to "  + arr[3]+ " Lakh  " );
}
    
    