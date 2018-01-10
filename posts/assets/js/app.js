var app = {
	init: function(){
		var _this = this;

		_this.page.init();
	},
	helper: {
		get: function(){
			// Get + Append
			attachRefresh();

			function attachRefresh() {
		    	$.get('https://simplefinancialcontrol.firebaseio.com/blog.json').then(displayPost);
			}

			function displayPost(post) {
		        var output = $('.articles');
		        output.empty();
		        var postStr = "";

		        for (var key in post) {
		            postStr += '<li><h2>'+`${post[key]["Title"]}`+'</h2> <p>'+`${post[key]["Text"]}`+'</p></li>';
		        }
		        output.append(postStr);
		        console.log('Append ok!');
		    }
		},
		post: function(date){
			var _title = $("#title").val();
	        var _text = $("#text").val();

	        var param = {Title: _title, Text: _text};

		    $.ajax({
				url: 'https://simplefinancialcontrol.firebaseio.com/blog.json',
				type: "POST",
				dataType: "json",
				data: JSON.stringify(param),
				success: function () {
					console.log("Success!");
				},
				error: function(error) {
					console.log("Error: "+error);
				}
		    });
		}
	},
	page: {
		init: function(){
			var _this = this;

			_this.html();
			_this.delegate();
		},
		html: function(){
			app.helper.get();
		},
		delegate: function(){
			// Post
			$('.btn-add').on('click', function(e){
				e.preventDefault();
				app.helper.post();				
		    });	
		}
	}
}

$(function(){
    app.init();
});