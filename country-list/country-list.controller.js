var app = angular.module('restCountriesApp');

app.component('countryList', {

    templateUrl: './country-list/country-list.template.html',

    controller: ['$http', function ($http) {

        var controller = this;
        controller.countries = [];

        var promise = $http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;population;')

        promise

            .then(function(response) {

                controller.countries = response.data;
                console.log('Countries', response.data);
            })

            .catch(function(err) {

                controller.error = 'Error while fetching the countries'
                console.log('Error', err);
            })

        controller.status = 'Loaded';
    }]
});
