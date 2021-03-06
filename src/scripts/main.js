// let $btn = document.querySelector('.menu-button');
// let $menu = document.querySelector('nav#navigation');
// let $anchors = document.querySelectorAll('.navigation__links a');
// let $overlay = document.querySelector('.overlay');
//
// $($btn).on('click', function () {
//     $($menu).hasClass('opened') ? $($menu).removeClass('opened') : $($menu).addClass('opened');
//     // $($menu).hasClass('opened') ? $($overlay).fadeIn() : $($overlay).fadeOut();
// });
// $($anchors).on('click', function () {
//     // $($overlay).fadeOut();
//     $($menu).removeClass('opened');
// });
function initialize() {
    var myLatlng = new google.maps.LatLng(53.3333,-3.08333),
        mapOptions = {
            zoom: 11,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);