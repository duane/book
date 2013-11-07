'use strict';

angular.module('book', [
  'ngResource',
  'book.google-books',
  'book.alert',
  'ui',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'BookController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
