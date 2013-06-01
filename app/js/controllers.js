/*
    This file contains all controllers of the application
 */

'use strict';

webdev.controller('HomeCtrl', ['$scope', 'FacebookTokenService', 'FacebookGraphService', function ($scope, FacebookTokenService, FacebookGraphService) {

    $scope.posts = [];
    
    FacebookTokenService.get().success(function (data) {
        
        $scope.posts = FacebookGraphService.get({token: data});
        
        console.log($scope.posts);
    });
}]);


