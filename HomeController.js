(function() {
  let app = angular.module("AngularJS");

  function HomeController($scope, $location) {
    let data = [
      {
        commentId: 1,
        message: "first message",
        date: new Date().toLocaleDateString()
      },
      {
        commentId: 2,
        message: "second message",
        date: new Date().toLocaleDateString()
      },
      {
        commentId: 3,
        message: "third message",
        date: new Date().toLocaleDateString()
      },
      {
        commentId: 4,
        message: "fourth message",
        date: new Date().toLocaleDateString()
      },
      {
        commentId: 5,
        message: "fifth message",
        date: new Date().toLocaleDateString()
      }
    ];

    $scope.btnText = "Show Data";
    $scope.data = null;
    $scope.color = "#700548";

    $scope.displayData = function() {
      $scope.data = !$scope.data ? data : null;

      let text = $scope.btnText;
      $scope.btnText = text === "Show Data" ? "Hide Data" : "Show Data";
    };

    $scope.changeColor = function() {
      $scope.color = $scope.color === "#FB4B4E" ? "#700548" : "#FB4B4E";
    };

    $scope.redirectTo = function() {
      $location.path("/components/zippy");
    };
  }

  app.controller("HomeController", HomeController);
})();
