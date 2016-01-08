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
               
                    $scope.inputs = [
                        {
                            type:"text",
                            name:'jobtitle',
                            model:'',
                            required:'required',
                            placeholder:"Job Title",
                            value:'',
                            valid1:'',
                            valid2:'',
                            id:"box2"
                        },
                        {
                            type:'text',
                            name:'tedioustask',
                            model:'',
                            required:'required',
                            placeholder:"Tedious Task",
                            value:'',
                            valid1:'',
                            valid2:'',
                            id:'box3'
                        },
                        {
                            type:'text',
                            name:'dirtytask',
                            model:'dirtytask',
                            required:'required',
                            placeholder:"Dirty Task",
                            value:'',
                            valid1:'',
                            valid2:'',
                            id:'box4'
                        },
                        {
                            type:'text',
                            name:'celebrity',
                            model:'celebrity',
                            required:'required',
                            placeholder:"Celebrity's Name",
                            value:'',
                            valid1:'',
                            valid2:'',
                            id:'box5'
                        },
                        {
                            type:'text',
                            name:'uselessskill',
                            model:'uselessskill',
                            required:'required',
                            placeholder:"Useless Skill",
                            value:'',
                            valid1:'',
                            valid2:'',
                            id:'box6'
                        },
                        {
                            type:'text',
                            name:'jobtitle',
                            model:'jobtitle',
                            required:'required',
                            placeholder:"Job Title",
                            value:'',
                            valid1:'',
                            valid2:'',
                            id: 'box7'
                        },
                        {
                            type:'text',
                            name:'adjective',
                            model:'adjective',
                            required:'required',
                            placeholder:"Adjective",
                            value:'',
                            valid1:'',
                            valid2:'',
                            id:'box8'
                        },
                        {
                            type:'text',
                            name:'obnoxiuouscelbertity',
                            model:'obnoxiuouscelbertity',
                            required:'required',
                            placeholder:"Obnoxiuos Celebrity",
                            value:'',
                            valid1:'',
                            valid2:'',
                            id:'box9'
                        }

                    ]
                    
                };

    /*


       $scope.reset = function(madForm) {

            $scope.madForm.$setPristine();

           $scope.femalenames = $scope.femalenames;
           $scope.jobtitle = '';
           $scope.tedioustask = '';
           $scope.dirtytask = '';
           $scope.celebrity = '';
           $scope.uselessskill = '';
           $scope.adjective = '';
           $scope.obnoxiuouscelbertity = '';
           $scope.hugenumber = '';
    }; */

})();
