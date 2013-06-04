/*
    This file contains all services of the application
 */

'use strict';

webdev.factory('FacebookService', ['$resource', function ($resource) {
       
    return $resource('http://localhost\\:3000/feeds');
    
}]);


webdev.factory('ErrorService', function ($q) {

    return function (promise) {
    
        return promise.then(
            
            function (response) {
                // Do nothing
                console.log('SUCESSO');
                return response;
            },
            function (response) {
                // Error
                console.log('ERRO');
                return $q.reject(response);
            }
        );
    };
});