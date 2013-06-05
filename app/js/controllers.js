/*
    This file contains all controllers of the application
    
    @author Vitor Vigano
 */

'use strict';

webdev.controller('HomeCtrl', ['$scope', 'FacebookService', function ($scope, FacebookService) {

    $scope.posts = [];
    
    FacebookService.get().success(function (posts) {
        
        $scope.posts = posts;
    });
}]);


