'use strict';
var book = angular.module('book');

var BookCtrl = book.controller('BookCtrl', angular.noop);

book.controller('BookShelfCtrl', function BookShelfCtrl($http, $scope, $modal, $log, alertService) {
  $scope.books = [];
  $scope.FetchISBN = function() {
    $http({
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'.concat(this.isbn),
      method: 'GET'
    }).then(
      // resolve
      function(response) {
        var result = response.data;
        if ('items' in result) {
          var childScope = $scope.$new(true);
          childScope.books = result.items;
          $modal.open({
            templateUrl: 'views/book_choice.html',
            controller: BookModalCtrl,
            scope: childScope
          }).result.then(
            function(book) {
              $scope.books.push(book);
            },
            function(reason) {
              alertService.AddAlert('warning', reason);
            }
          );
        } else {
          alertService.AddAlert('warning', "Couldn\'t find the isbn!");
        }
      },
      // reject
      function(reason) {
        alertService.AddAlert('error', reason);
      }
    );
  };
});

var AlertController = book.controller('AlertController', ['$scope', 'alertService', function($scope, alertService) {
  $scope.CloseAlert = function(index) {
    alertService.CloseAlert(index);
  };
}]);

function BookModalCtrl($scope, $modalInstance) {
  $scope.modal = $modalInstance;
}
