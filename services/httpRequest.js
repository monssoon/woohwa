gnp_app.service('httpRequest', ['$http', function($http)
{
    this.send = function(method, api, data)
    {   
        return $http(
            {   "method": method,
                "url": "http://woowha-1370.appspot.com/api/" + api,
                "headers": {'Content-Type': 'application/json'},
                "data": data
            }
        );
    };
}]);
