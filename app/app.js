'use strict';
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);
app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
