app.controller('MainController', function($scope, $http){

  $http.get('/test').then(function(res){
    $scope.message = res.data;
  })


});
