(function(){
    /**
     *  when setting a Model you need module ('
     */
angular.module('madApp', ['ngMessages','ngRoute'])
  .constant('VERSION', 1.1)
  .run(function(VERSION, $rootScope) {
    $rootScope.version = VERSION;
})
}());
