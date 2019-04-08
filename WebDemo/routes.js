// ROUTES
DemoApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/start', {
        templateUrl: 'pages/task1.html',
        controller: 'startController'
    })
    
    .when('/endFirtsTask', {
        templateUrl: 'pages/task2.html',
        controller: 'secondTaskController'
    })
    
    .when('/endSecondTask', {
        templateUrl: 'pages/end.html',
        controller: 'endController'
    })
});