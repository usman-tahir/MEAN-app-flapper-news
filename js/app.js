(function () {
  'use strict';

  var app = angular.module('flapperNews', []);

  // Connect the app to its controller, and use scoping to access 'test'
  app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.test = 'Hello, World!';
  }]);
}());
