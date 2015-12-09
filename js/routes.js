/**
 * Created by 0 on 11/5/2015.
 */
angular.module('madApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.

            when('/',
            {
                templateUrl : 'templates/home.html',
                controller : 'appCtrl'
            }).

            when('/ngMadlibs',
            {
                templateUrl : 'templates/ngmadlibs.html',
                controller : 'appCtrl'
            }).

            when('/display',
            {
                templateUrl : 'templates/display.html',
                controller : 'appCtrl'
            }).

            when('/build',
            {
                templateUrl : 'templates/build.html',
                controller : 'appCtrl'
            })
    }]);