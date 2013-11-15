'use strict';

angular.module('book', [
  'ngResource',
  'ngRoute',
  'ui',
  'ui.bootstrap',
  'book.alert',
  'book.filters',
  'book.isbnFetcher',
  'book.googleFetcher'
]).
config(function(isbnFetcherProvider) {
  isbnFetcherProvider.fetcherBackendService('googleFetcher');
}).
config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
