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
            var books = [];
            for (var i = 0; i < response.data.items.length; i++) {
              var info = response.data.items[i].item.volumeInfo
              var book = {
                authors: info.authors,
                title: info.title
              };

              if ('imageLinks' in info) {
                book.thumbnail = info.imageLinks.thumbnail;
              }
              book.push(book);
            }
            deferred.resolve(books);
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