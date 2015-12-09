(function(){
angular.module('madApp')
  .constant('VERSION', 1.1)
  .run(function(VERSION, $rootScope) {
    $rootScope.version = VERSION;
});
});
