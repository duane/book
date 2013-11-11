'use strict';

angular.module('book', [
  'ngResource',
  'ngRoute',
  'book.alert',
  'book.quickISBNFetch',
  'ui',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'BookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
