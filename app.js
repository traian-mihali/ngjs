var app = angular.module("AngularJS", ["ngRoute"]);

app.directive("enter", function() {
  return function(scope, element, attr) {
    element.bind("mouseenter", () => {
      scope.$apply(attr.enter);
    });
  };
});

app.directive("zippy", function() {
  return {
    restricted: "E",
    transclude: true,
    scope: {
      title: "@"
    },
    template: `
            <div>
              <h2 ng-click="toggleContent()" ng-style="title && style" >{{title}}</h2>
              <div ng-show="isVisible" ng-style="contentStyle"><p ng-transclude></p></div>
            </div>
            `,
    link: function(scope, element, attr) {
      scope.isVisible = false;

      scope.toggleContent = function() {
        scope.isVisible = !scope.isVisible;
      };

      scope.style = {
        margin: "0px",
        padding: "50px",
        backgroundColor: "#ccc",
        borderRadius: "5px"
      };

      scope.contentStyle = {
        backgroundColor: "#eee",
        borderRadius: "5px",
        padding: "50px"
      };
    }
  };
});

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "HomeController"
    })
    .when("/components/zippy", {
      templateUrl: "ZippyComponent.html",
      controller: "ZippyController"
    })
    .when("/not-found", {
      templateUrl: "404.html",
      controller: "NotFoundController"
    })
    .otherwise({ redirectTo: "/not-found" });
});
