(function() {
  let app = angular.module("AngularJS");

  function NotFoundController($scope, $routeParams) {
    $scope.error = {
      message: "Page Not Found",
      details: "Invalid URL",
      status: 404,
      url: "/not-found"
    };

    console.log($routeParams);

    $scope.showDetails = false;
    $scope.btnText = "Show Details";

    $scope.handleClick = function() {
      $scope.showDetails = !$scope.showDetails;
      $scope.btnText = $scope.showDetails ? "Hide Details" : "Show Details";
    };

    $scope.toggleColor = null;

    $scope.changeBackground = function() {
      $scope.toggleColor = !$scope.toggleColor
        ? { "background-color": "#EC4E20", color: "white" }
        : null;
    };
  }

  app.controller("NotFoundController", NotFoundController);
})();