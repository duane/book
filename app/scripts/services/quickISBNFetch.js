'use strict';

angular.module('book.quickISBNFetch', []).
  factory('quickISBN', function quickISBN($http, $q, $log) {
    return {
      fetch: function(isbn) {
        var deferred = $q.defer();

        $http({
          url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'.concat(isbn),
          method: 'GET'
        }).then(
          function(response) {
            var result = response.data;
            if ('items' in result) {
              deferred.resolve(result.items[0]);
            } else {
              deferred.reject("Couldn\'t find the isbn!");
            }
          },

          function(reason) {
            deferred.reject(reason);
          }
        );

        $log.log(deferred);
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
          });
          $log.log(promise2);
          promise2['finally'](function() {
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