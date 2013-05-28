'use strict';

var webdev = angular.module('webdev', ['ngResource']);

/*
    Routes configuration
*/
var routes = function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).
         when('/about', {
            templateUrl: 'views/about.html'
        }).
        otherwise({
            redirectTo: '/'
        });
};

webdev.config(routes);