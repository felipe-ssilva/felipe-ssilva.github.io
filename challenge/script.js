;(function($, window, document, undefined) {

	$.ajax({
		url: 'https://of900lijd5.execute-api.us-east-1.amazonaws.com/v1/front-end/grid-people',
		method: 'GET'
	}).then(function(data) {
		console.log(data);
	});

})(jQuery, window, document);