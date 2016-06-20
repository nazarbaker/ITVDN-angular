var module = angular.module('myApp', []);

module.controller('learnListCtrl', function($scope){
  let model = {
    user: "Nazar",
    courses: []
  }

  $scope.user = model.user;
  $scope.courses = model.courses;
  $scope.addCourse = function(){
    model.courses.push(
      {
        "title": $scope.newCourse,
        "boolen": false
      }
    )
    $scope.newCourse = '';
  }
  // буде працювати і чере чекбокс без нижньої функції
  $scope.changeState = function(course){
    course.boolen = !course.boolen;
  }
  $scope.setStyle = function(boolen){
    return boolen ? "color: green" : "color: red; font-weight: bold";
  }
  $scope.showText = function(boolen){
    return boolen ? "Yes" : "No";
  }
});
