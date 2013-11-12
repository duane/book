'use strict';

var book = angular.module('book').controller('MainCtrl', angular.noop);

function BookModalCtrl($scope, $modalInstance) {
  $scope.modal = $modalInstance;
}

book.controller('BookShelfCtrl', function BookShelfCtrl($http, $scope, $modal, quickISBN, alertService) {
  $scope.books = [];
  $scope.BulkFetch = function() {
    quickISBN.bulkFetch([
      '9781429997041',
      '9780345917430',
      '9780316679299',
      '9780872200142'
    ]).then(function(books) {
      for (var i = 0; i < books.length; i++) {
        var info = books[i].volumeInfo;
        var book = {
          authors: info.authors,
          title: info.title,
        };

        if ('imageLinks' in info) {
          book.thumbnail = info.imageLinks.thumbnail;
        }

        $scope.books.push(book);
      }
    });
  };

  $scope.FetchISBN = function() {
    $http({
      url: 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyDJKfcjr_IO7bfA9B5i9jRGhdiAeTL7yl4&q=isbn:'.concat(this.isbn),
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
          alertService.AddAlert('warning', 'Couldn\'t find the isbn!');
        }
      },
      // reject
      function(reason) {
        alertService.AddAlert('error', reason);
      }
    );
  };
});

function AlertController($scope, alertService) {
  $scope.CloseAlert = function(index) {
    alertService.CloseAlert(index);
  };
}
