'use strict';

angular.module('book', [
  'ngResource',
  'ngRoute',
  'ui',
  'ui.bootstrap',
  'book.alert',
  'book.filters',
  'book.isbnFetcher',
  'book.mockFetcher'
]).
config(function(isbnFetcherProvider) {
  isbnFetcherProvider.fetcherBackendService('mockFetcher');
}).
config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
