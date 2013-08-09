// This file contains all services of the application

'use strict';

webdev.factory('FacebookService', ['$http', function ($http) {
    
    var URL = 'http://localhost:3000/feeds';
    
    return {
        
        get: function () {
        
            return $http.get(URL);
        }
    };
}]);

webdev.factory('ErrorService', function ($q) {

    return function (promise) {
    
        return promise.then(
            
            function onSuccess(response) {
                // Do nothing                
                return response;
            },
            function onError(response) {
                // Error                
                return $q.reject(response);
            }
        );
    };
});