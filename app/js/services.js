'use strict';

webdev.factory('FacebookTokenService', ['$http', function ($http) {
    
    var id = '574780919229558',
        secret = '3d92e0700710591c3cf8cbe943f66c8a',
        credentials = 'client_credentials';
            
    return {
        get: function () {
            return $http.get('https://graph.facebook.com/oauth/access_token?client_id=' +
                id + '&client_secret=' + secret + '&grant_type=' + credentials);
        }
    };
}]);

webdev.factory('FacebookGraphService', ['$resource', function ($resource) {
       
    return $resource('https://graph.facebook.com/523002967738428/feed?:token', {token: '@token'});
    
}]);