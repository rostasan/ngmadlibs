// Code goes here

var app = angular.module('myApp',[])
  .constant('VERSION', 1.1)
  .run(function(VERSION, $rootScope) {
    $rootScope.version = VERSION;

  });
app.controller('myCtrl', function($scope){
    $scope.femalename = "Female Name";
    $scope.jobtitle = "job title";
    $scope.tedioustask = "tedious task";
    $scope.dirtytask = "dirty task";
    $scope.celebrity = "celebrity";
    $scope.uselessskill = "useless skill";
    $scope.adjective = "adjective";
    $scope.obnoxiuouscelbertity = "obnoxiuous celbertity";
    $scope.hugenumber = "huge number";


});
