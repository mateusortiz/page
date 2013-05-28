'use strict';

webdev.factory('FacebookService', ['$resource', function ($resource) {
    
    var url = 'https://graph.facebook.com/523002967738428';
    
    return $resource(url);
    
}]);