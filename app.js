var app = angular.module("AngularJS", ["ngRoute", "ngAnimate"]);

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
              <div class="animate-if" ng-if="isVisible" ng-style="contentStyle"><p ng-transclude></p></div>
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
        borderRadius: "5px",
        cursor: "pointer"
      };

      scope.contentStyle = {
        backgroundColor: "#eee",
        borderRadius: "5px",
        padding: "50px"
      };
    }
  };
});

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "controllers/HomeController"
    })
    .when("/components/zippy", {
      templateUrl: "views/ZippyComponent.html",
      controller: "controllers/ZippyController"
    })
    .when("/not-found", {
      templateUrl: "views/404.html",
      controller: "controllers/NotFoundController"
    })
    .otherwise({ redirectTo: "/not-found" });
});
