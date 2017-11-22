var $product =  '<div class="product" v-for="item in countrie">' +
                    '<h3> {{ item.name }} </h3>' +
                '</div>';

// registro
Vue.component('countrie', {
    template: $product,
    data: function () {
        return {
            countrie: []
        }
    },
    created() {
        this.getCountrie();
    },
    methods: {
        getCountrie(){
            var _this = this;
            $.ajax({
                url: "https://restcountries.eu/rest/v2/",
                dataType: 'json'
            }).done(function (response) {
                console.log(response);
                _this.makeCountrie(response);
            });
        },
        makeCountrie(data){
            this.countrie = data;
        }
    }
});

// cria a instância raiz
new Vue({
    el: '._countrie'
});

/*;(function($, window, document, undefined) {

	$.ajax({
		url: 'https://restcountries.eu/rest/v2/',
		method: 'GET'
	}).then(function(data) {
		console.log(data);
	});

})(jQuery, window, document);*/