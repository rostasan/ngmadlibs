/**
 * Created by 0 on 11/5/2015.
 */
angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.

            when('/',
            {
                templateUrl : 'templates/home.html',
                controller : 'HomeCtrl'
            }).

            when('/ngMadlibs',
            {
                templateUrl : 'templates/ngmadlibs.html',
                controller : 'script.js'
            }).

            when('/display',
            {
                templateUrl : 'templates/ngmadlibs.html',
                controller : 'script.js'
            }).

            when('/build',
            {
                templateUrl : 'templates/ngmadlibs.html',
                controller : 'script.js'
            })
    }]);