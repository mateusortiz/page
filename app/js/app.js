'use strict';

var webdev = angular.module('webdev', ['ngResource']);

// routes configuration
webdev.config(['$routeProvider', function ($routeProvider) {

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
}]);

// hack to work with node API
webdev.config(['$httpProvider', function ($httpProvider) {
    
    $httpProvider.defaults.useXDomain = true;
    
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

// response interceptor
webdev.config(['$httpProvider', function ($httpProvider) {
    
    $httpProvider.responseInterceptors.push('ErrorService');
}]);