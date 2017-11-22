'use strict';

var $template =  '<div class="countrie" v-for="item in countrie">' +
                '</div>';

// registro
Vue.component('countrie', {
    template: $template,
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
                url: 'https://restcountries.eu/rest/v2/',
                method: 'GET'
            }).done(function (response) {
                console.log(response);
                _this._Countrie(response);
            });
        },
        _Countrie(data){
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