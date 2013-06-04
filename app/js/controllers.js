/*
    This file contains all controllers of the application
 */

'use strict';

webdev.controller('HomeCtrl', ['$scope', 'FacebookService', function ($scope, FacebookService) {

    $scope.posts = [];
        
    $scope.posts = FacebookService.get();
        
    console.log($scope.posts);
  
}]);


