/**
 * Created by arti on 19/5/16.
 */

window.dataLayer = window.dataLayer || [];
(function ($) {


    $.fn.tracking = function (options) {

        defaults = {
            'open': false,
            'clicked': false,
            'formId': '',
            'location': '',
            'openType': 'clicked'
        }
        var settings = $.extend({}, $.fn.tracking.defaults, options);
        var label;
        var formObj;
        var formInput;
        var type;
        var event_category;
        var event_action;
        var match = '';

        if (settings.formId) {
            formObj = $('#' + settings.formId);
            formInput = formObj.find(':input');
        }
        if (settings.location == undefined) {
            settings.location = '';
        }


        if (settings.formId && formObj.attr('name') != undefined) {
            type = formObj.attr('name');
            if (type == undefined) {
                type = '';
            }
            event_category = 'enquiry';
            event_action = 'form filled';
            if (settings.openType == 'autoopen') {
                type = settings.openType + "-" + type;
            }

            if (settings.open) {
                dataLayer.push({
                    'event': 'leadbuttonclick',
                    'eventCategory': event_category,
                    'eventAction': 'open',
                    'formName': type
                });


            } else if (settings.clicked) {

                if (settings.openType == 'autoopen') {
                    dataLayer.push({
                        'event': 'leadformopen',
                        'eventCategory': event_category,
                        'eventAction': 'autoopen',
                        'formName': type
                    });


                } else {
                    dataLayer.push({
                        'event': 'leadbuttonclick',
                        'eventCategory': event_category,
                        'eventAction': 'clicked',
                        'formName': type,
                        'location': settings.location
                    });


                }


            }
//            formInput.each(function () {
//
//                var input = $(this);
//
//                var event_type = input.prop('type');
//                var event_name = input.attr('name');
//
//
//                if (event_name) {
//                    var match = event_name.match(/\[(.*?)\]/);
//                    if (match)
//                        match = match[1];
//                }
//                if (match) {
//                    match = match.replace("_", " ");
//                    match = match.toLowerCase().replace(/\b[a-z]/g, function (letter) {
//                        return letter.toUpperCase();
//                    });
//                } else {
//                    match = event_name;
//                }
//
//                if (type == 'contact us') {
//                    var contact_page_text = type;
//                    if ($("h1").first() != undefined && $("h1").first().text() != '') {
//                        contact_page_text = $("h1").first().text();
//                    } else if ($("h2").first() != undefined && $("h2").first().text() != '') {
//                        contact_page_text = $("h2").first().text();
//                    }
//                    else if ($("h3").first() != undefined && $("h3").first().text() != '') {
//                        contact_page_text = $("h3").first().text();
//                    }
//                    type = contact_page_text;
//                }
//
//                var label = match;
//
//                input.unbind('.event_tracking');
//
//                if (event_type == 'radio' || event_type == 'checkbox' ||  event_type == 'file') {
//                    input.on('click.event_tracking', function () {
//                        var action_event = event_action;
//                        var form_field = label;
//                        dataLayer.push({
//                            'event': 'formfilled',
//                            'eventCategory': event_category,
//                            'eventAction': action_event,
//                            'formField': form_field,
//                            'formName': type
//
//                        });
//                    });
//                } else if (event_type == 'text') {
//                    input.on('blur.event_tracking', function () {
//                        dataLayer.push({
//                            'event': 'formfilled',
//                            'eventCategory': event_category,
//                            'eventAction': 'form filled',
//                            'formField': label,
//                            'formName': type
//                        });
//                    });
//                } else {
//                    input.on('blur.event_tracking', function () {
//                        dataLayer.push({
//                            'event': 'formfilled',
//                            'eventCategory': event_category,
//                            'eventAction': 'form filled',
//                            'formField': label,
//                            'formName': type
//                        });
//                    });
//                }
//
//            });

        }
    };
}(jQuery));

$(document).ready(function () {
    $('form').each(function () {
        if($(this).attr('id') != 'fuel_form'){
            $.fn.tracking({'open': true, 'formId': $(this).attr('id')});
        }
        
    })

});



var position = "";
$(document).on("click", "a", function (event, ui) {
    position = $(this).attr("data-position");
})
$(document).ajaxComplete(function (event, xhr, settings) {
    var response = xhr.responseText;

    var form = $("<div>" + response + "</div>").find("form");

    if (form) {
        var ajaxURL = settings.url.substring(1);
        var eventAction = '';
        var sURLVariables = ajaxURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == 'eventaction')
            {
                eventAction = sParameterName[1];
            }
        }
        form.each(function () {
            $.fn.tracking({'clicked': true, 'formId': $(this).attr('id'), 'location': position, 'openType': eventAction});
        })
    }
});

function ga_event($options) {

    var eventLabel = '';
    var formField = '';
    var formName = '';
    if ($options.eventLabel) {
        eventLabel = $options.eventLabel;
    }
    if ($options.form_field) {
        formField = $options.form_field;
    }
    if ($options.formName) {
        formName = $options.formName;
    }

    dataLayer.push({
        'event': $options.event,
        'eventCategory': $options.eventCategory,
        'eventAction': $options.eventAction,
        'eventLabel': eventLabel,
        'form_field': formField,
        'formName': formName,
    });
}
