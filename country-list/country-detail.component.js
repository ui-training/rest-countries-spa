var app = angular.module('restCountriesApp');

app.component('countryDetail', {

    templateUrl: './country-list/country-detail.template.html',

    controller: ['CountryListFactory', '$routeParams', function (CountryListFactory, $routeParams) {

        var promise = CountryListFactory.fetchCountryDetails($routeParams.countryCode);
        var controller = this;

        promise
            .then(function (countryDetails) {
                controller.details = countryDetails;
            })
            .catch(function (err) {
                controller.error = 'Unable fetch country details';
            });
    }]
})