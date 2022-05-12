$(document).ready(function () {
    
    var popup_data = $("#customformpopup").text();
    var json_data = $("#popuppageurls").text();
    var page_url = [];
    if (json_data) {
        var page_url = $.parseJSON(json_data);
    }
    var pageURL = window.location.protocol + '//' + window.location.hostname + window.location.pathname;

    if (popup_data) {

        if ($.inArray(pageURL, page_url) == -1 || page_url == '') {
            var url = "/customer-profile/customform";
        } else {
            var url = '';
        }
    }

    if (url) {
        setTimeout(function () {
            $.get(lang + url, {}).done(function (data) {
                $("#popup_data").html(data);
                mypopup = new DLRPopup('popcontact', 'popcontactbg');
                mypopup.openPopup();
            });
        }, 5000);
    }

    $("a[href^='tel:']").each(function () {
        var link = this;
        // replace tel with javascript; in desktop view
        if (!navigator.userAgent.match(/(mobile)/gi)) {
            link.href = "javascript:;";
        }
    });
    
    
    if($('.stcikybtngrp').length > 0){
        $(window).scroll(function(event){
            let pos = $(window).scrollTop();
            if (pos > 1030) {
                $('.stcikybtngrp').addClass('stickyOn');
            } else {
                $('.stcikybtngrp').removeClass('stickyOn');
            }
        })
      
       
    }
   // console.log($(window).scrollTop() + $('.toplink').height() +'----');
    //$(window).on('scroll', onScroll); 
});

if($(".desktoptionprice").length > 0){
    $(".checkoptionprice").click(function(){
        if($(".checkoptionprice").is(":checked")){
            $('.optional_price').show();
            $('.onroad_price').hide();
        }else{
            $('.optional_price').hide();
            $('.onroad_price').show();
        }
    })
}    

function showoptionprice(variant_id){
    if($(".checkoptionpricemobi"+variant_id).is(":checked")){
            $('.optional_price'+variant_id).show();
            $('.onroad_price'+variant_id).hide();
        }else{
            $('.optional_price'+variant_id).hide();
            $('.onroad_price'+variant_id).show();
    }
}

//Track calls
var startTrackLog = '';
function trackCalls(phoneno){
    if(phoneno != undefined && phoneno != ''){
        $('#calledno').val(phoneno);
        var fewSeconds = 20;
        var toplink = $('.toplink');
        toplink.hide();
        setTimeout(function(){
            toplink.show();
        }, fewSeconds*1000);
        pushCallLogs('start');
        setTimeout(function(){
            checkActivity();
        }, 5000);
        startTrackLog =  setInterval(function(){
            stopRequest();
        }, 40000);
    }
}
 



var sent=false;

function pushCallLogs(type) {
    var phoneno =$('#calledno').val();
     $.ajax({
        type: "get",
        url: lang + "/mahindra/pushcalllogs",
        data: {phoneno: phoneno,type:type},
        
        success: function (data) {
            console.log(data);
            if(data == 1){
                sent = true;
                if(type == 'cancel'){
                    sent = false;
                    clearInterval(startTrackLog);  
                }
            } 
           
        }
    });

}
function checkActivity(){
    if(sent == true){
        console.log('activity');
        $(window).on('scroll', onScroll); 
        $(window).on('touchend', onTouchend); 
    }
}
function onScroll(){ 
    if($(window).scrollTop() + $('.toplink').height() > 159 && sent == true){
        pushCallLogs('cancel');
        $(window).off("scroll", onScroll);     
        $(window).off("touchend", onTouchend);
    }

}
function onTouchend(){ 
    if(sent == true){
        pushCallLogs('cancel');
        $(window).off("touchend", onTouchend);
        $(window).off("scroll", onScroll);  
    }
}
function stopRequest(){
   sent = false; 
}
