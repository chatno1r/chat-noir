angular.module("ChatNoir", ["ngRoute", "ngResource", "ngAnimate", "ChatNoir.controllers", "ChatNoir.services", "ChatNoir.directives"])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    .when("/", {
        templateUrl: "views/welcome.html",
        controller: "WecomeController"
    })
    // .when("/contact", {
    //     templateUrl: "views/contact.html"
    // })
    // .when("/bugs", {
    //     templateUrl: "views/bugs.html",
    //     controller: "BugsController"
    //})
    .otherwise({
        redirectTo: "/"
    });
}]);