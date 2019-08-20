var app = angular.module("AngularJS", ["ngRoute"]);

app.directive("enter", function() {
  return function(scope, element, attr) {
    element.bind("mouseenter", () => {
      scope.$apply(attr.enter);
    });
  };
});

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "HomeController"
    })
    .when("/not-found", {
      templateUrl: "404.html",
      controller: "NotFoundController"
    })
    .otherwise({ redirectTo: "/not-found" });
});
