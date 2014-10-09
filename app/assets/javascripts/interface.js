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

});
