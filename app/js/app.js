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

/*
    Hack to work with facebook API
*/
webdev.config(['$httpProvider', function ($httpProvider) {  
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);