/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
angular
        .module('madApp')
        .controller('appCtrl', appCtrl);

function appCtrl($scope){
        $scope.xfemalename =[
                            {name: "Lily"},
                            {name: "Emily"},
                            {name: "Madelyn"},
                            {name: "Madison"},
                            {name: "Chloe"},
                            {name: "Charlotte"},
                            {name: "Aubrey"},
                            {name: "Avery"},
                            {name: "Abigail"},
                            {name: "Kaylee"},
                            {name: "Layla"},
                            {name: "Harper"},
                            {name: "Ella"},
                            {name: "Amelia"},
                            {name: "Arianna"},
                            {name: "Riley"},
                            {name: "Aria"},
                            {name: "Hailey"},
                            {name: "Hannah"},
                            {name: "Aaliyah"},
                            {name: "Evelyn"},
                            {name: "Addison"} 
                            ];
        $scope.xjobtitle = "job title";
        $scope.xtedioustask = "tedious task";
        $scope.xdirtytask = "dirty task";
        $scope.xcelebrity = "celebrity";
        $scope.xuselessskill = "useless skill";
        $scope.xadjective = "adjective";
        $scope.xobnoxiuouscelbertity = "obnoxiuous celbertity";
        $scope.xhugenumber = "huge number";
        $scope.madLib = function(){
            console.log("Submitting worked");
                $scope.femalename = $scope.selected.xfemalenames.name;
                $scope.jobtitle = $scope.xjobtitle;
                $scope.tedioustask = $scope.xtedioustask;
                $scope.dirtytask = $scope.xdirtytask;
                $scope.celebrity = $scope.xcelebrity;
                $scope.uselessskill = $scope.xuselessskill;
                $scope.adjective = $scope.xadjective;
                $scope.obnoxiuouscelbertity = $scope.xobnoxiuouscelbertity;
                $scope.hugenumber = $scope.xhugenumber;
            };
        }
    })();