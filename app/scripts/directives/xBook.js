'use strict';

angular.module('book').
  directive('bookDisplay', function(alertService) {
    var defaultDisplayType = 'row';
    var allowedTypes = [defaultDisplayType, 'block'];
    return {
      templateUrl: 'views/xBook.html',
      restrict: 'AECM',
      scope: {
        displayType: '=?',
        isbn: '=',
        book: '=?'
      },
      controller: ['$scope', 'isbnFetcher', function($scope, isbnFetcher) {
        $scope.displayType = defaultDisplayType;
        $scope.book = {}
        $scope.getISBN = function(isbn) {
          if (isbn) {
            isbnFetcher.fetchFirst(isbn).then(function(book) {
              $scope.book = book;
            }, function(reason) {
              alertService.AddAlert('error', 'Could not find ISBN '.concat($scope.isbn));
            });
          }
        };
      }],
      link: function(scope, element, attrs) {
        scope.getISBN(scope.isbn);
        scope.$watch('isbn', scope.getISBN);
        scope.$watch('displayType', function(newType, oldType) {
          element.toggleClass('display-type-'.concat(oldType), false);
          element.toggleClass('display-type-'.concat(newType), true);
          element.attr('display-type', newType);
        });
      }
    };
  });
