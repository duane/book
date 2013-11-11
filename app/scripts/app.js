'use strict';

angular.module('book', [
  'ngResource',
  'book.alert',
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
