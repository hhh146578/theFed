
var map;
function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, { 
    zoom: 5,
    center: new google.maps.LatLng(37.7718079,-122.3980182)
  });

  var smallIcon = {
  	url: "img/icon.jpg", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
	}
 
  var newMarker = new google.maps.Marker({
    position: {lat: 37.7718079, lng: -122.3980182},
    map: map,
    icon: smallIcon,
    draggable: true,
  });

	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
}

