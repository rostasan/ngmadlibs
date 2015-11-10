/**
 * Created by 0 on 11/5/2015.
 */
angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/'){
            templateUrl : 'templates/home.html'
            controller : 'HomeCtrl'}
        $routeProvider.when('ngMadlibs'){
            templateUrl : 'templates/ngmadlibs.html'
            controller : 'script.js'
        }
    }


    ])


;