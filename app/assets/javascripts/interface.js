$(function() {

	$("[data-toggle=popover]").popover({
		html: true,
		content: function() {
			var correct_popever = '#popover-content-event-' +  this.id;
			console.dir(this);
			console.log(this.id);
			return $(correct_popever).html();
		}
	});

	var $my_form = $("[id='new_event'], [id^='edit_event']");

	$("[name='commit']").on("click", function( event ) {
 		//event.preventDefault();
 		var $lat = $("#event_lat");
 		var $lng = $("#event_lng");
   	if (!$lat.val()) {
   		var $street_val = $("#event_street").val();
   		var $city_val = $("#event_city").val();
   		var $state_val = $("#event_state").val();
   		var $zip_val = $("#event_zip").val();
    	if (!$street_val || !$city_val || !$state_val || !$zip_val) {
    		alert("You must provide an address.");
    		return(false);
    	}
    	else {
    		var address = $street_val + ", " + $city_val + ", " + $state_val + " " + $zip_val;
    		console.log("Address is " + address);

    		var geo_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" 
    		+ address + "&key=AIzaSyBlOxZUkm4yBVJyJp00DMPJKW8hNU2PUhw";

    		var request = {
    			url: geo_url,
    			type: "GET",
    			dataType: "json"
    		};

    		var response = $.ajax(request);

    		response.done(function(data) {
    			//console.log(data);
    			if (data.results.length == 0) {
    				alert("The address you entered was not accepted by Google Maps.")
    			}
    			else {
    				$lat.val(data.results[0].geometry.location.lat);
    				$lng.val(data.results[0].geometry.location.lng);
    				alert("OBTAINED FROM GOOGLE: Latitude is " + $lat.val() + " and longitude is " + $lng.val() + ".");
    				$my_form.submit();
    			}
    		})
    	}
    }
    // else {
    // 	alert("YOU PROVIDED Latitude is " + $lat.val() + " and longitude is " + $lng.val() + ".");
    // }
    // alert("ABOUT TO SUBMIT: Latitude is " + $lat.val() + " and longitude is " + $lng.val() + ".");
    // return(true);
  });

});
