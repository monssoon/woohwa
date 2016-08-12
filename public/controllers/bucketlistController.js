bucket_app.controller("bucketlistController", ["$scope", "httpRequest", function ($scope, httpRequest) {

    $scope.taewoo = {"email": '', "profileurl": ''};
    $scope.jaewha = {"email": '', "profileurl": ''};

    httpRequest.send('GET','users')
        .then(
            function(res)
            {
                console.log("success");
                $scope.taewoo.email = res.data.data[0].email;
                $scope.taewoo.profileurl = res.data.data[0].photourl;
                $scope.jaewha.email = res.data.data[1].email;
                $scope.jaewha.profileurl = res.data.data[1].photourl;

            }
            ,
            function(res)
            {
                alert("fail");
                console.log("fail");
                console.log(res);
            }
        );

    httpRequest.send('GET','buckets/uncomplete')
        .then(
            function(res)
            {
                console.log(res);
                $scope.bucketlist = res.data.data;
                console.log($scope.bucketlist);
            }
            ,
            function (res) {
                alert("fail");
                console.log(res);
            }
        );

}]);
