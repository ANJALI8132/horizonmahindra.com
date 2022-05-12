/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$container = $('<div id="thankyou-popup"><div class="close-icon"><span data-icon="close"></span></div><div class="popup-body"><div class="popupcontent"></div></div></div><div class="overlapebg" style="display: none;"></div>');
$(document).ready(function () {
    $(".videosecurl").find('iframe').hide();
    $(".videosecurl").on("click", function () {
        var $this = $(this);
        var url = $this.data('embed');
        var iframe = document.createElement("iframe");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("width", "100%");
        iframe.setAttribute("allow", "autoplay; encrypted-media");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("src", $this.data('embed'));
        $container.find(".popupcontent").html('');
        $container.find(".popupcontent").append(iframe);

        var regex = /[?]/;
        if (regex.test(url) == true) {
            var startloc = url + "&autoplay=1";
        } else {
            var startloc = url + "?autoplay=1";
        }
        $container.find("iframe").attr('src', startloc).show();
        $container.find(".overlapebg").fadeIn();
        $container.fadeIn();
        $("body").append($container);
        $container.find('.close-icon').click(function () {
            $container.remove();
        });
    })
})
