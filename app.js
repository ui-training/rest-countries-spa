var app = angular.module('restCountriesApp', []);

app.controller('TestController', ['$scope', function($scope) {
    $scope.message = 'Loaded the test controller';
}]);