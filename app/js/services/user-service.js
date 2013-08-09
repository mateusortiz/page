'use strict';

app.factory('UserService', ['$http', function ($http) {
    var URL = 'heroku address';
    return {
        create: function () {
            $http.post(URL);
        }
    };
}]);