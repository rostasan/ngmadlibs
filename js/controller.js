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
        $scope.femalenames =[
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
        $scope.resetForm = [];


        $scope.reset = function(madForm) {
            $scope.femalenames = angular.copy($scope.resetForm);
            $scope.jobtitle = angular.copy($scope.resetForm);
            $scope.tedioustask = angular.copy($scope.resetForm);
            $scope.dirtytask = angular.copy($scope.resetForm);
            $scope.celebrity = angular.copy($scope.resetForm);
            $scope.uselessskill = angular.copy($scope.resetForm);
            $scope.adjective = angular.copy($scope.resetForm);
            $scope.obnoxiuouscelbertity = angular.copy($scope.resetForm);
            $scope.hugenumber = angular.copy($scope.resetForm);
            madForm.$setPristine()
    };



        }

    })();


    /*        $scope.xjobtitle = "";
 $scope.xtedioustask = "";
 $scope.xdirtytask = "";
 $scope.xcelebrity = "";
 $scope.xuselessskill = "";
 $scope.xadjective = "";
 $scope.xobnoxiuouscelbertity = "";
 $scope.xhugenumber = "";
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
 }; */