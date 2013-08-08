(function() {
  var app;

  app = new angular.module('app_editable', []);

  app.directive('editable', function() {
    return {
      restrict: 'A',
      transclude: true,
      templateUrl: 'templates/editable.html',
      scope: {
        value: '='
      },
      link: function(scope, elem, attr) {
        scope.showIcon = false;
        return scope.showEditButton = function(v) {
          return scope.showIcon = v;
        };
      }
    };
  });

  app.controller('myCtrl', [
    '$scope', function($scope) {
      $scope.someContent = "blablabla";
      $scope.content2 = "test2";
      $scope.content3 = "test3";
      return $scope.content4 = "petit test";
    }
  ]);

}).call(this);
