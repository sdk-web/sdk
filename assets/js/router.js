// 라우팅 및 환경 설정
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'MainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });

    // HTML5 Mode 활성화
    $locationProvider.html5Mode(true);
}]);
