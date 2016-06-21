var module = angular.module('myApp', []);

module.controller('senderCtrl', function($scope, $rootScope){
  $scope.send = function(){
    // .$broadcast - відправка події всім scope from rootScope
    $rootScope.$broadcast("messageEvent", {
      message: $scope.messageInput
    })
  }
});


module.controller('receiverCtrl', function($scope){
  // обробка події messageEvent на поточному scope
  $scope.$on("messageEvent", function(event, args){
    $scope.info = args.message;
  })
});
