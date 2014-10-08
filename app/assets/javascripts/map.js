  function initialize() {

  	var latlng = new google.maps.LatLng(37.7597727, -122.427063);

    var mapOptions = {
      center: latlng,
      scrollWheel: false,
      zoom: 12
    };

	  var marker = new google.maps.Marker({
	    position: latlng,
	    url: '/',
	    animation: google.maps.Animation.DROP
	  });

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    marker.setMap(map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
