'use strict';

angular.module('book.isbnFetcher', []).
  provider('isbnFetcher', function isbnFetcherProvider() {
    var fetcherBackendService;

    this.fetcherBackendService = function(_fetcherBackendService) {
      fetcherBackendService = _fetcherBackendService;
    };

    this.$get = ['$injector', '$http', '$q', '$log', function isbnFetcherFactory($injector, $http, $q, $log) {
      var fetcherBackend = $injector.get(fetcherBackendService);

      var fetchMany = function(isbn) {
        return fetcherBackend.fetchMany(isbn);
      };

      var fetchFirst = function(isbn) {
        var deferred = $q.defer();

        fetchMany(isbn).then(
          function(books) {
            if (books.length > 0) {
              deferred.resolve(books[0]);
            } else {
              deferred.reject('Couldn\'t find the isbn!');
            }
          },

          function(reason) {
            deferred.reject(reason);
          }
        );

        return deferred.promise;
      };

      var fetchBulk = function(isbns) {
        var deferred = $q.defer();

        var total = isbns.length;
        var finalized = 0;
        var books = [];
        for (var idx = 0; idx < isbns.length; idx++) {
          var isbn = isbns[idx];
          fetchFirst(isbn).then(function(book) {
            $log.log('success');
            books.push(book);
          },
          function(reason) {
            $log.log('failure');
            deferred.reject(reason);
          })['finally'](function() {
            $log.log('finally');
            finalized = finalized + 1;
            if (finalized >= total) {
              deferred.resolve(books);
            }
          });
        }

        return deferred.promise;
      };
      return {
        fetchFirst: fetchFirst,
        fetchMany: fetchMany,
        fetchBulk: fetchBulk
      }
    }];
  });
