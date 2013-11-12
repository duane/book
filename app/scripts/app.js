'use strict';

angular.module('book', [
  'ngResource',
  'ngRoute',
  'ui',
  'ui.bootstrap',
  'book.alert',
  'book.quickISBNFetch',
  'book.filters'
]).
config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
