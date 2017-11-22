;(function($, window, document, undefined) {

	$.ajax({
		url: 'https://restcountries.eu/rest/v2/',
		method: 'GET'
	}).then(function(data) {
		console.log(data);
	});

})(jQuery, window, document);