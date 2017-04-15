(function () {
  'use strict';

  var app = angular.module('flapperNews', []);

  // Posts 'factory' service
  app.factory('posts', [function () {
    // Return an object that can be reused and added to in the future
    var postsObject = {
      posts: []
    };
    console.log('returning main postsObject');
    return postsObject;
  }]);

  // Connect the app to its controller
  app.controller('MainCtrl', ['$scope', 'posts', function ($scope, posts) {
    $scope.posts = posts.posts;

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
