var bucket_app = angular.module("bucket_app", ['ui.router','flow']);


bucket_app.config(function($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise("/main");

    $stateProvider
        .state('main',{
            url: "/main",
            templateUrl: "main_cover.html",
            controller: "mainpageController"
        })
        .state('current_bucket_list',{
            url: "/currentbucketlist",
            templateUrl: "main_current_bucket_list.html",
            controller: "bucketlistController"
        });
        


});
