'use strict';

angular.module('book.googleFetcher', []).
  factory('googleFetcher', ['$http', '$log', '$q', function($http, $log, $q) {
    return {
      fetchMany: function(isbn) {
        var deferred = $q.defer();

        $http({
          url: 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyDJKfcjr_IO7bfA9B5i9jRGhdiAeTL7yl4&q=isbn:'.concat(isbn),
          method: 'GET'
        }).then(function(response) {
          if ('items' in response.data) {
            deferred.resolve(response.data.items);
          } else {
            deferred.resolve([]);
          }
        }, function(reason) {
          deferred.reject(reason);
        });

        return deferred.promise;
      }
    }
  }]);