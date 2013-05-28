/*
    This file contains all controllers of the application
 */

'use strict';

webdev.controller('HomeCtrl', ['$scope', 'FacebookService', function ($scope, FacebookService) {

    $scope.posts = [];
    
    FacebookService.get({}, function (data) {
        $scope.posts = data;
    });
    
}]);


