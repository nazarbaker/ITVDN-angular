var module = angular.module('App', []);

module.controller('AppCtrl', function($scope, $http){
  $scope.items = [
    {"name": "Item1", "value": "Value1"},
    {"name": "Item2", "value": "Value2"},
    {"name": "Item3", "value": "Value3"}
  ];
  $scope.url = "table.html";
});
