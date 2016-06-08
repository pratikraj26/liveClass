app

.controller('MainCtrl', function($scope, $rootScope, socket) {
  $scope.scroll = null;
  $scope.navStick = false;
  $scope.currentNavItem = 'page1';
  $scope.loginForm = {};

  $rootScope.connectSocketIO = function(){
  }

  $scope.show_login_modal = false;

  $scope.open_login_modal = function(){
    $scope.show_login_modal = true;
  }

  $scope.close_login_modal = function(){
    $scope.show_login_modal = false;
  }

  $scope.$watch('scroll', function(value){
    // console.log("The value is: " + value);
    if(value > 420){
      $scope.navStick = true;
    }else{
      $scope.navStick = false;
    }
  });
})

.controller('IndexCtrl', function($scope, $rootScope, socket){

})
.controller('TeachCtrl', function($scope, $rootScope, socket){

})
