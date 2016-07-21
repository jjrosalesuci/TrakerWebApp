angular.module('angularwebApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'services',
    'angular-growl',
    'blockUI',
    'satellizer',
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider, $authProvider) {      
    // Parametros de configuración
    $authProvider.loginUrl = "http://correo.cmkx.icrt.cu:3000/visor-coordenadas/web/index.php?r=site/auth";
    $authProvider.signupUrl = "http://correo.cmkx.icrt.cu:3000/visor-coordenadas/web/index.php?r=users/signup";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "myApp";

    $stateProvider.
        state("login", {
            url: "/login",
            templateUrl: "views/login.html",
            controller: "LoginController",
            controllerAs: "login"
        })
        .state("signup", {
            url: "/signup",
            templateUrl: "views/signup.html",
            controller: "SignUpController",
            controllerAs: "signup"
        })
        .state("logout", {
            url: "/logout",
            templateUrl: null,
            controller: "LogoutController"
        })
        .state("deviceAdd", {
            url: "/deviceAdd",
            templateUrl: "views/_deviceAdd.html",
            controller: "MainCtrl",
            controllerAs: "main",
            authenticate: true
        })
        .state("deviceEdit", {
            url: "/deviceEdit",
            templateUrl: 'views/_deviceEdit.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            authenticate: true
        })
        .state("deviceList", {
            url: "/deviceList",
            templateUrl: 'views/_deviceList.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            authenticate: true
        })
        .state("devicePosition", {
            url: "/devicePosition",
            templateUrl: 'views/_devicePosition.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            authenticate: true
        })
        .state("userProfile", {
            url: "/userProfile",
            templateUrl: 'views/_userProfile.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            authenticate: true
        })
        .state("default", {
            url: '',
            templateUrl: "views/_deviceList.html",
            controller: "MainCtrl",
            controllerAs: "main",
            authenticate: true
        });

    $urlRouterProvider.otherwise("/login");


}).run(function ($rootScope, $state, $auth) {
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        if (toState.authenticate && !$auth.isAuthenticated()) {
            $state.transitionTo("login");
            event.preventDefault();
        }
    });
});