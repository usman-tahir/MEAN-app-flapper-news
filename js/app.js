(function () {
  'use strict';

  var app = angular.module('flapperNews', []);

  // Connect the app to its controller, and use scoping to access 'test'
  app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.test = 'Hello, World!';
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 4},
      {title: 'post 3', upvotes: 2},
      {title: 'post 4', upvotes: 2}
    ];
  }]);
}());
