'use strict';

angular.module('book', [
  'ngResource',
  'ngRoute',
  'ui',
  'ui.bootstrap',
  'book.alert',
  'book.quickISBNFetch',
]).
config(function ($routeProvider, $logProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
