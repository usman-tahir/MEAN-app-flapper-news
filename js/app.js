(function () {
  'use strict';

  var app = angular.module('flapperNews', ['ui.router']);

  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'main'
        })
        .state('posts', {
          url: '/post/{id}',
          templateUrl: '/posts.html',
          ontroller: 'PostsCtrl'
        });
      $urlRouterProvider.otherwise('home');
    }]);

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
        link: $scope.link,
        comments: [
          {author: 'John Doe', body: 'Great post!', upvotes: 0},
          {author: 'Jane Doe', body: 'Great idea!', upvotes: 0}
        ] // Mock comments
      });
      $scope.title = ''; // Clear the title
      $scope.link = ''; // Clear the link
    };

    $scope.incrementUpvotes = function (post) {
      post.upvotes += 1;
    };
  }]);

  app.controller('PostsCtrl', [
    '$scope',
    '$stateParameters',
    'posts',
    function ($scope, $stateParameters, posts) {
      $scope.post = posts.posts[$stateParameters.id];

      $scope.addComment = function () {
        if ($scope.body === '') { return; };
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      }
    }]);

}());
