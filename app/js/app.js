'use strict';

/* configurations */
var app = angular.module('app', []);

// route configurations
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);