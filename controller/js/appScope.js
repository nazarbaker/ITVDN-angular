var module = angular.module('myApp', []);

module.controller('learnListCtrl', function($scope){
  $scope.value = "--------------";
  $scope.changeValue = function(){
    $scope.value = "Hello World!"
  }
});
