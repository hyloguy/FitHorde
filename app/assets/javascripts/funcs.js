
function addEventMarkers(fitEvents, myMap){
  for(var i = 0; i < fitEvents.length; i++){
    var myLatlng = new google.maps.LatLng(fitEvents[i].lat, fitEvents[i].lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      title: fitEvents[i].title,
      // title: 'TITLE GOES HERE',
      map: myMap,
      url: '/',
      animation: google.maps.Animation.DROP
    });
    //marker.setMap(myMap);
  }
}

function initialize() {

  // Center and draw map
	var latlng = new google.maps.LatLng(37.7597727, -122.427063);

  var mapOptions = {
    center: latlng,
    // scrollWheel: false,
    zoom: 12
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Get the array of Events from FitHorde App
  var requestToApp = {
    url: "/events",
    type: "GET",
    dataType: "json"
  };

  var responseFromApp = $.ajax(requestToApp);

  // Add a marker for each event!
  responseFromApp.done(function(fitEvents) {
    addEventMarkers(fitEvents, map);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
