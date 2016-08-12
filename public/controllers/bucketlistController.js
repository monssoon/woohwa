bucket_app.controller("bucketlistController", ["$scope", "httpRequest", function ($scope, httpRequest) {

    // Dropzone.autoDiscover = false;

    //Set options for dropzone
    //Visit http://www.dropzonejs.com/#configuration-options for more options
    // $scope.dzOptions = {
    //     url : '/alt_upload_url',
    //     paramName : 'photo',
    //     maxFilesize : '10',
    //     acceptedFiles : 'image/jpeg, images/jpg, image/png',
    //     addRemoveLinks : true
    // };
    //
    //
    // //Handle events for dropzone
    // //Visit http://www.dropzonejs.com/#events for more events
    // $scope.dzCallbacks = {
    //     'addedfile' : function(file){
    //         console.log(file);
    //         $scope.newFile = file;
    //     },
    //     'success' : function(file, xhr){
    //         console.log(file, xhr);
    //     }
    // };
    //
    //
    // //Apply methods for dropzone
    // //Visit http://www.dropzonejs.com/#dropzone-methods for more methods
    // $scope.dzMethods = {};
    // $scope.removeNewFile = function(){
    //     $scope.dzMethods.removeFile($scope.newFile); //We got $scope.newFile from 'addedfile' event callback
    // }
    
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
