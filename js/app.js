(function () {
  'use strict';

  var app = angular.module('flapperNews', []);

  // Connect the app to its controller
  app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.posts = [];

    $scope.addPost = function () {
      // Link for the post
      if (!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title || 'A new post',
        upvotes: 0,
        link: $scope.link
      });
      $scope.title = ''; // Clear the title
      $scope.link = ''; // Clear the link
    };

    $scope.incrementUpvotes = function (post) {
      post.upvotes += 1;
    };
  }]);
}());
