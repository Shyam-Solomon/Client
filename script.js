var app = angular.module("myApp", ["ngRoute","capp","hbapp"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/abt", {
        templateUrl :"./abt.html"
    })
    .when("/home",{
        templateUrl :"./home.html"
    })
    .when("/pro", {
        templateUrl : "./pro.html"

    })
    .when("/qual", {
        templateUrl : "./qual.html"
    })
    .when("/mypic", {
        templateUrl : "./mypic.html"
    })
    .when("/co", {
        templateUrl : "./contact/co.html",
        controller: "ctctrl"
    })
    .when("/hob", {
        templateUrl : "./hobbies/hob.html",
        controller: "myCtrl2"
    })
    $locationProvider.html5Mode(true);
    
});
app.controller('navCtrl', function($scope, $http) {
  $http.get("./navbar.json")
  .then(function(response) {
      $scope.navbar = response.data.navbarmenu;
  });

  function getmyid(data){
	console.log(data);
  }

});


