/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular
        .module('madApp')
        .controller('appCtrl', appCtrl);

function appCtrl($scope){
        $scope.femalename = "Female Name";
        $scope.jobtitle = "job title";
        $scope.tedioustask = "tedious task";
        $scope.dirtytask = "dirty task";
        $scope.celebrity = "celebrity";
        $scope.uselessskill = "useless skill";
        $scope.adjective = "adjective";
        $scope.obnoxiuouscelbertity = "obnoxiuous celbertity";
        $scope.hugenumber = "huge number";

};