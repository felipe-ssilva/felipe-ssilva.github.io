var $template =  '<div v-if="countrie.length > 0">' +
					'<div v-for="item in countrie">' +
	                    '<h3> {{ item.name }} </h3>' +
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