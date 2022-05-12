/**
 * Created by Komal on 22/6/16.
 */

var globalGmap = null;
var globalMarkers = [];
(function ($) {

    $.fn.google_map = function (options) {

        defaults = {
            'type_val': '',
            'city_val': '',
            'brand': '',
            'my_lat': 28.6400,
            'my_long': 77.2118,
            'red_pin': '/images/redpin.png',
            'green_pin': '/images/greenpin.png',
            'scroll': 1,
            'static': 0,
            'map_id': 'googleMap',
            'show_single': 0
        }

        var settings = $.extend({}, defaults, options);
        var map;
        var type_val = settings.type_val;
        var city_val = settings.city_val;
        var brand = settings.brand;
        var my_lat = settings.my_lat;
        var my_long = settings.my_long;
        var red_pin = settings.red_pin;
        var green_pin = settings.green_pin;
        var show_single = settings.show_single;

        var dynamicMap = {

            init: function () {


                if (globalGmap !== null) {
                    this.removeMarkersGlobally(globalGmap, globalMarkers);

                    this.mapInit();
                    return;
                }

                this.bind();
            },
            bind: function () {
                var self = this;

                $("#" + settings.map_id).gsp_gmap_lazyload({
//                    key: "AIzaSyD3kLZvpOfQ0qx4kbEcPwhy6UrJfhqCSb8", // Old Key
                    key: "AIzaSyBVuk3CLChQ3EJhJ6uv9hOjY4VwVp4T2rI",
                    lazyload: true,
                    success: function () {
                        self.mapInit();
                    }
                });

            },

            clearAllMarkers: function () {
                var self = this;
                var markers = $.extend([], self.markers1);
                markers.forEach(function (marker, index) {
                    self.removeMarker(marker);
                });
            },

            removeMarker: function (marker) {
                var self = this;
                (self.gmap).removeMarker(marker, function (markers) {
                    self.markers = markers;
                });
            },

            bindInfoWindow: function (infowindow) {
                var self = this;
                self.markers1.forEach(function (item, index) {
                    item.setTitle(self.markers1[index]['title']);
                    item.addListener('click', function () {
                        infowindow.setContent(self.markers1[index]['content']);
                        infowindow.open(self.map, item);
                    });
                });
            },

            mapInit: function () {
                var self = this;

                //global var
                var gmap = map = infowindow = null, markers1 = markerArray = [];
                //Marker Array
                if(settings.show_single){
                    var requestParams =  {outlet_type: type_val, city: city_val, outlet_brand: brand, lat:my_lat, long:my_long};
                }else{
                   var requestParams =  {outlet_type: type_val, city: city_val, outlet_brand: brand};
                }
                var markers_array = $.get(lang + "/outlet/markers", requestParams).done(function (data) {

                    if (data) {

                        var outlet_markers = JSON.parse(data);
                        for (var i = 0; i < outlet_markers.length; i++) {
                            if (outlet_markers[i][0] != '' && outlet_markers[i][1] != '') {

                                var ga_event = "ga_event({'event': 'clicktrack','eventCategory': 'OutletMapNavigation','eventAction': 'clicked','eventLabel': 'Map'})";

                                window_html = '<ul>' +
                                        '<li class="slick-center">' +
                                        '<div class="adcontain">' +
                                        '<b style="color:#6d6d6d !important;"> ' + outlet_markers[i][9] + ' </b>' +outlet_markers[i][2] + ' </b>' +
                                        '<p style="font-size:12px !important; color:#707070 !important; width:220px;">' + outlet_markers[i][3] + ' , ' + outlet_markers[i][4] + ' ' + outlet_markers[i][5] + ' ' + outlet_markers[i][6] + ' - ' + outlet_markers[i][7] + ' </p>' +
                                        '</div>' +
                                        '</li>' +
                                        '<li class="telno">' +
                                        '<div class=""></div>' +
                                        '<div class="">' + outlet_markers[i][8] + '</div>' +
                                        '<div class="direction"><b><u><a onclick="' + ga_event + '" target="_blank" a href="https://www.google.com/maps?saddr=My+Location&daddr=' + outlet_markers[i][0] + ',' + outlet_markers[i][1] + '">Get Directions</a></u></b></div>' +
                                        '</li>' +
                                        '</ul>';

                                var icon_image = settings.green_pin;
                                if (parseFloat(outlet_markers[i][0]) == parseFloat(my_lat) && parseFloat(outlet_markers[i][1]) == parseFloat(my_long)) {
                                    icon_image = settings.red_pin;
                                }

                                    markerArray.push({
                                        position: {
                                            lat: parseFloat(outlet_markers[i][0]),
                                            lng: parseFloat(outlet_markers[i][1])
                                        }, icon: icon_image, title: outlet_markers[i][2], content: window_html
                                    });
                              
                            }
                        }
                    }

                    self.gmap = $("#" + settings.map_id).gsp_gmap({
                        key: '',
                        address: "Delhi",
                        zoom: 9,
                        maxZoom: 17,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        scrollwheel: (settings.scroll) ? true : false
                    })
                            .marker(markerArray)
                            .then(function (markers) {
                                self.markers1 = markers;
                                globalMarkers = markers;
                                //console.log(self.markers1)
                            })
                            .infowindow()
                            .then(function (infowindow) {
                                self.infowindow = infowindow;
                                self.bindInfoWindow(infowindow);
                            }).fit();

                    globalGmap = self.gmap;

                });
            },

            removeMarkersGlobally: function (map, markers) {
                var self = this;
                map.resetPreviousResults();
                markers.forEach(function (marker, index) {

                    map.removeMarker(marker, function (markers) {
                    });
                });
            }
        }

        dynamicMap.init();
        $.gmap = dynamicMap;
    };
}(jQuery));
