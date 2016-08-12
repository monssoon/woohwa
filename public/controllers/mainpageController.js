bucket_app.controller('mainpageController', ["$scope", "httpRequest", "$interval", function ($scope, httpRequest, $interval) {

    var tick = function()
    {
        $scope.clock = Date.now();
    }
    tick();
    $interval(tick, 1000);

    httpRequest.send('GET','mainpage')
        .then(
            function(res)
            {
                console.log(res);
                $scope.complete = res.data.data.complete;
                $scope.uncomplete = res.data.data.uncomplete;
            },
            function(res)
            {
                alert("fail");
                console.log(res)
            }
        );
}]);
