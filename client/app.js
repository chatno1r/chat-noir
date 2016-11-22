angular.module("ChatNoir", ["ngRoute", "ngResource", "ngAnimate", "ChatNoir.controllers", "ChatNoir.services", "ChatNoir.directives"])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    .when("/", {
        templateUrl: "views/welcome.html",
        controller: "WecomeController"
    })
    .otherwise({
        redirectTo: "/"
    });
}]);