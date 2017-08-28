    // create the module and name it sportit
    // also include ngRoute for all our routing needs
    //var sportit = angular.module('sportit', ['ngRoute','ngSanitize','ionic.cloud']);
    var sportit = angular.module('sportit', ['ngRoute','ngSanitize']);
    //Routing defined at route.js , Service called from service.js and Factory called from factory.js

/*
sportit.run(function ($rootScope,$location,sessionService) {
    $rootScope.$on('$routeChangeStart', function (event) {
        userid = sessionService.get('userid');
        if( !(userid>0) ){
            $location.path('/login');
        }
        
    });
});*/

// create the controller and inject Angular's $scope
sportit.controller('mainController', function($scope,$location,menu,queryFactory,sessionService) {
    $scope.data = '';
   //sessionService.set('testpg','dippu');
   //alert(sessionService.get('testpg'));
   //sessionService.destroy('test');
   //sessionService.destroyAll();
   
    // Get Menu using Service from service.js       
    menu.getMenu().async().then(function(d) {
        $scope.menu = d.data;
   }); 
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

// create the controller and inject Angular's $scope
sportit.controller('loginController', function() {
   // $scope.data = '';
   
});
