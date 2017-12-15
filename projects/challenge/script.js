'use strict';

var $template = '<div v-if="countrie.length > 0">' +
					'<div class="_item" v-for="item in countrie">' +
						'<ul>' +
		                    '<li> <h2>{{ item.name }}</h2> </li>' +
		                    '<li> <img v-bind:src=\'item.flag\' /> </li>' +
		                '</ul>' +
		                '<ul class="_modal">' +
		                 	'<li> <img v-bind:src=\'item.flag\' /> </li>' +
		                	'<li> <h3>Nome: {{ item.name }}</h3> </li>' +
		                	'<li> <h4>Capital: {{ item.capital }}</h4> </li>' +
		                	'<li> <h5>População: {{ item.population }}</h5> </li>' +
		                '</ul>' +
	                '</div>' +
                '</div>';

// Registro
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
                url: "https://restcountries.eu/rest/v2/",
                dataType: 'json'
            }).done(function (response) {
                console.log(response);
                _this.fullCountrie(response);
            });
        },
        fullCountrie(data){
            this.countrie = data;
        }
    }
});

// Cria a instância raiz
new Vue({
    el: '._countrie'
});

$(function(){
    setInterval(function(){
		$('._item ul').on('click', function(){
	    	$(this).next('._modal').addClass('active');
	    });

	    $('._modal').on('click', function(){
	    	$(this).removeClass('active');
	    });
    });
});