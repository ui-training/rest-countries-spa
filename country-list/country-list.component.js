var app = angular.module('restCountriesApp');

app.component('countryList', {

    templateUrl: './country-list/country-list.template.html',

    controller: ['$http', 'CountryListFactory', function ($http, CountryListFactory) {

        var controller = this;
        controller.countries = [];

        CountryListFactory.getCountries(function (err, countries) {

            if (err) {
                controller.error = err;
            } else {
                controller.countries = countries;
            }
        });

        controller.status = 'Loaded';
    }]
});
