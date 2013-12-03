'use strict';

angular.module('book').
  directive('bookDisplay', function(alertService) {
    var defaultDisplayType = 'row';
    var allowedTypes = [defaultDisplayType, 'block'];
    return {
      templateUrl: 'views/xBook.html',
      restrict: 'AECM',
      replace: true,
      scope: {
        displayType: '@',
        isbn: '@'
      },
      controller: ['$scope', '$log', 'isbnFetcher', function($scope, $log, isbnFetcher) {
        $scope.displayType = defaultDisplayType;
        $scope.book = {};
        $scope.getISBN = function(isbn) {
          if (isbn) {
            isbnFetcher.fetchFirst(isbn).then(function(book) {
              $scope.book = book;
            }, function(reason) {
              alertService.AddAlert('error', 'Could not find ISBN '.concat($scope.isbn));
              $log.info(reason);
            });
          }
        };
      }],
      link: function(scope, element, $attr) {
        $attr.$observe('display-type', function(type) {
          scope.displayType = type ? type : defaultDisplayType;
        });

        scope.$watch('displayType', function(newType, oldType) {
          $attr.$set('display-type', newType ? newType : defaultDisplayType);
        });

        scope.$watch('isbn', scope.getISBN);
      }
    };
  });
