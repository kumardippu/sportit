 // configure our routes
 //sportit defined at main.js
    sportit.config(['$routeProvider',function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                /*templateUrl : 'pages/home.html',
                controller  : 'loginController'*/
                templateUrl : 'pages/login.html',
                controller  : 'loginController'
            })

            .when('/login', {
                templateUrl : 'pages/login.html',
                controller  : 'loginController'
            })

            .when('/success', {
                templateUrl : 'pages/success.html',
                controller  : 'loginController'
            })
            .when('/success', {
                templateUrl : 'pages/success.html',
                controller  : 'loginController'
            })

            .when('/location', {
                templateUrl : 'pages/location.html',
                controller  : 'loginController'
            })

            .when('/notification', {
                templateUrl : 'pages/notification.html',
                controller  : 'loginController'
            })
          .when('/action', {
                templateUrl : 'pages/action.html',
                controller  : 'loginController'
            })
          .when('/find', {
                templateUrl : 'pages/find.html',
                controller  : 'loginController'
            })
          .when('/organise', {
                templateUrl : 'pages/organise.html',
                controller  : 'loginController'
            })
            // route for the about page
            /*.when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/quiz', {
                templateUrl : 'pages/contact.html',
                controller  : 'quizController'
            })
           */
            // route for the contact page
            .when('/qbank/:catid/', {
                templateUrl : 'pages/qbank.html',
                controller  : 'qbankController'
            })
            .when('/qod/:qtype/', {
                templateUrl : 'pages/qbank.html',
                controller  : 'qodController'
            })
            
            .otherwise({redirectTo : '/'});
            /*.when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });*/
    }]);