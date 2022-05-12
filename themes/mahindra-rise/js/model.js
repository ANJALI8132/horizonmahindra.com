/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var hashValue = location.hash;
    hashValue1 = hashValue.replace(/^#/, '');
    hashValue = hashValue1.replace('&360view', '');
    if (hashValue != '') {
        if ($("li[rel=" + hashValue + "]").length > 0) {
            if (hashValue1 == 'tab3&360view') {
                $('.modelpictures li#ftc_tab a').click();
            }
            $("li[rel=" + hashValue + "] a").click();
        }
    }

    if ($(".modelcolor").find('ul[class^=colorrow]').find('li').length > 0) {
        $(".modelcolor").find('ul[class^=colorrow]').find('li').click(function (touch) {
            $(this).parents('.modelcolor').find('li').removeClass('active');
            $(this).addClass('active');
            $('.modelcolor  .modeimg').find('img').attr('src', $(this).data('src'));
            $('.modelcolor  .modeimg').find('span').html($(this).data('color'));
        })
    }

    if ($("#stockcolor").find('ul').find('li').length > 0) {
        $("#stockcolor").find('ul').find('li').click(function (touch) {
            $(this).parents('#stockcolor').find('li').removeClass('active');
            $(this).addClass('active');
            $('#colorId').val($(this).data('color-id'));
        })
    }
    
//for color on overview
    if ($(".modeloverview  .color").length > 0) {
        $(".modeloverview").find(".color div").click(function (touch) {
            $(this).parents('.color').find('div').removeClass('active');
            $(this).addClass('active');
            $('.modeloverview  .modeimg').find('img').attr('src', $(this).data('src'));
            $('.modeloverview  .modeimg').find('span').html($(this).data('color'));
        })
    }
    
    
    $('#stockcolor li').click(function(){
        $('#stockNotAvailable').css('display','none');
        $('#stockAvailable').css('display','none');
    })

    $('#stockVariantId').change(function(){
        $('#stockNotAvailable').css('display','none');
        $('#stockAvailable').css('display','none');
    })

})

function ftc_image(type) {
    if (type == 'interior') {
        $('#owl-picture1').css('display', 'none');
        $('#int-owl-picture2').css('display', 'block');
        $(".ftctab span.exterior").removeClass("active");
        $(".ftctab span.interior").addClass("active");

    } else {
        $('#owl-picture1').css('display', 'block');
        $('#int-owl-picture2').css('display', 'none');
        $(".ftctab span.exterior").addClass("active");
        $(".ftctab span.interior").removeClass("active");
    }
}
//compare page
if ($('.comparedetail').length > 0) {
    $('.comparedetail').find('li a').click(function () {
        $('.comparedetail').find('li a').removeClass('selected');
        $(this).addClass('selected');

        $('.overviewresult').find('li').removeClass('selected');
        $('.overviewresult').find("[data-content='" + $(this).attr('data-content') + "']").addClass('selected');
    })
}

function checkStock() {
    var divIdHtml = '<div class="loader" style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%; text-align: center; box-sizing: border-box; padding-top: 10px; background: rgba(255, 255, 255, 0.7) none repeat scroll 0px 0px;"><img src="/themes/mahindra-rise/image/loader.gif" /></div>';

    $.ajax({
        url: lang + '/cust-car-info/check-stock-availablity',
        type: 'post',
        data: $("#stockForm").serialize(),
        
        beforeSend: function () {
           $('.popupbutton').append(divIdHtml);
        },
        success: function (data) {
            $('.loader').css("display","none");;
            if(data.status != undefined && (data.status == "true" || data.status == true ) ){
                
                $('#stockNotAvailable').css('display','none');
                $('#stockAvailable').css('display','block');
            }else {
                $('#stockAvailable').css('display','none');
                $('#stockNotAvailable').css('display','block');
            }
        }

    });
    return false;
}
