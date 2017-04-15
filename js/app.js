(function () {
  'use strict';

  var app = angular.module('flapperNews', []);

  // Connect the app to its controller
  app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.posts = [];

    $scope.addPost = function () {
      $scope.posts.push({title: $scope.title || 'A new post', upvotes: 0});
      $scope.title = ''; // Clear the title
    };

    $scope.incrementUpvotes = function (post) {
      post.upvotes += 1;
    };
  }]);
}());
