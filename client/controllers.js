angular.module("ChatNoir.controllers", [])
.controller("WecomeController", ["$scope", "$location", "SEOService", function($scope, $location, SEOService) {
     SEOService.setSEO({
         title: "ChatNoir | home",
         //image: "http://" + $location.host() + "/images/tree-31581_960_720.png",
         description: "For fun and profit!",
         url: $location.absUrl()
     });   
    $scope.toggleImg = function() {
        var bool = true;
        bool = !bool;//toggle class on img 2
    }
}])