var app = angular.module('restCountriesApp');

app.factory('CountryListFactory', ['$http', function ($http) {

    function downloadCountries() {

        var promise = $http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;population;alpha3Code;')

        return promise;
    }

    return {

        fetchCountryDetails: function(countryCode) {

            return $http.get('https://restcountries.eu/rest/v2/alpha/' + countryCode)

                .then(function(response) {

                    return response.data;
                });
        },
        getCountries: function (callback) {

            // if countries are in the local storage fetch them
            var countryList = localStorage.getItem('countries');
            if (countryList) {
                countryList = JSON.parse(countryList);
                callback(null, countryList);
                return;
            }

            downloadCountries()

                .then(function(response) {

                    var countriesString = JSON.stringify(response.data);
                    localStorage.setItem('countries', countriesString);
                    callback(null, response.data);
                })

                .catch(function(err) {

                    callback('Error while fetching the countries')
                    console.log('Error', err);
                });

            // else download all the country details and process them and store them in the local storage
        }
    };
}])