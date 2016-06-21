var module = angular.module('myApp', []);

module.controller('learnListCtrl', function(){
  this.value = "--------------";
  this.changeValue = function(){
    this.value = "Hello World!"
  }
});
