/**
 * Created by Jyoti on 22/6/16.
 */

var videoCarousel;
(function ($) {
    window.dataLayer = window.dataLayer || [];
    $.fn.youtubeplayer = function (options) {

        defaults = {
            message: ''
        }
        var settings = $.extend({}, defaults, options);
        var $this = $(this);
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var playerInfoList = [];
        i = 0;
        var playlist = [];

        onYouTubeIframeAPIReady = function () {

            $this.each(function () {
                var $video = $(this);
                var match = $video.data('video').match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
                var youtube_vid = (match && match[7].length == 11) ? match[7] : false;


                player = new YT.Player($video.attr('id'), {
                    videoId: youtube_vid,
                    events: {
                        'onStateChange': function (event) {

                            var state = event.target.getPlayerState();
                            if (state === 2) {

                                if(videoCarousel!==undefined){
                                    videoCarousel.play()
                                }
                                if ( typeof PlayCarouselWhenVideoPause == 'function' ) {
                                    PlayCarouselWhenVideoPause();
                                }
                                if (screen.width < 1007) {
                                    $('#' + $video.data('video-msg')).show();
                                }
                                dataLayer.push({
                                    'event': 'video',
                                    'eventCategory': 'Bannervideo',
                                    'eventAction': 'pause',
                                    'eventLabel': 'Youtubevideo',
                                });
                            }
                            else if (state === 0) {
                                if(videoCarousel!==undefined){
                                    videoCarousel.play()
                                }
                                if ( typeof PlayCarouselWhenVideoPause == 'function' ) {

                                    PlayCarouselWhenVideoPause();
                                }
                                if (screen.width < 1007) {
                                    $('#' + $video.data('video-msg')).show();
                                }
                                dataLayer.push({
                                    'event': 'video',
                                    'eventCategory': 'Bannervideo',
                                    'eventAction': 'pause',
                                    'eventLabel': 'Youtubevideo',
                                });
                            }
                            else if (state === 1) {


                                if(videoCarousel!==undefined){
                                    videoCarousel.pause()
                                }
                                if ( typeof StopCarouselWhenVideoPlay == 'function' ) {
                                    StopCarouselWhenVideoPlay();
                                }

                                if (screen.width < 1007) {
                                    $('#' + $video.data('video-msg')).hide();
                                }
                                dataLayer.push({
                                    'event': 'video',
                                    'eventCategory': 'Bannervideo',
                                    'eventAction': 'play',
                                    'eventLabel': 'Youtubevideo',
                                });
                            }

                        }
                    }
                });


            });


        }

    }
}
(jQuery));

$(document).ready(function () {

    setTimeout(function(){
        var i = 1;
        $("div[data-video]").each(function(){
            $(this).attr('id', $(this).attr('id') + i++);
        });
        $("div[data-video]").youtubeplayer();
    },3000)

});
