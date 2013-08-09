'use strict';

app.controller('HomeCtrl', ['$scope', 'UserService', function ($scope, UserService) {
    $scope.create = function () {
          UserService.create();
    };
}]);