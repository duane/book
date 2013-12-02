'use strict';

angular.module('book', [
  'ngResource',
  'ngRoute',
  'ui',
  'ui.bootstrap',
  'book.alert',
  'book.filters',
  'book.isbnFetcher'
]).
config(function(isbnFetcherProvider) {
  isbnFetcherProvider.fetcherBackendService('simpleFetcher');
}).
config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
