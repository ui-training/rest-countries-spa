var app = angular.module('restCountriesApp', ['ngRoute']);

app.config([
    '$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/countries/:countryCode', {template: '<country-detail></country-detail>'})
            .when('/countries', {template: '<country-list></country-list>'})
    }
]);