app = new angular.module('app_editable',[])

app.directive('editable',() ->
  restrict: 'A'
  transclude: true
  templateUrl: 'templates/editable.html'
  scope:
    value: '='
  link: (scope,elem,attr) ->
    scope.showIcon=false
    scope.showEditButton = (v) ->
      scope.showIcon=v
)

app.controller('myCtrl',['$scope', ($scope) ->
  $scope.someContent = "blablabla"
  $scope.content2 = "test2"
  $scope.content3 = "test3"
  $scope.content4 = "petit test"
])
