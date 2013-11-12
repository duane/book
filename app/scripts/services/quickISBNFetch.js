'use strict';

angular.module('book.quickISBNFetch', []).
  factory('quickISBN', function quickISBN($http, $q) {
    return {
      fetch: function(isbn) {
        var deferred = $q.defer();

        $http({
          url: 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyDJKfcjr_IO7bfA9B5i9jRGhdiAeTL7yl4&q=isbn:'.concat(isbn),
          method: 'GET'
        }).then(
          function(response) {
            var result = response.data;
            if ('items' in result) {
              deferred.resolve(result.items[0]);
            } else {
              deferred.reject('Couldn\'t find the isbn!');
            }
          },

          function(reason) {
            deferred.reject(reason);
          }
        );

        return deferred.promise;
      },

      bulkFetch: function(isbns) {
        var fetch = this.fetch;

        var deferred = $q.defer();

        var total = isbns.length;
        var finalized = 0;
        var books = [];
        angular.forEach(isbns, function(isbn, idx) {
          var promise2 = fetch(isbn).
          then(function(book) {
            books.push(book);
          })['finally'](function() {
            finalized = finalized + 1;
            if (finalized >= total) {
              deferred.resolve(books);
            }
          });
        });

        return deferred.promise;
      }
    };
  });