'use strict';

webdev.factory('FacebookService', ['$resource', function ($resource) {
       
    return $resource('http://localhost\\:3000/feeds');
    
}]);