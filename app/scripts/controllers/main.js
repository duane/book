'use strict';

var book = angular.module('book').controller('MainCtrl', angular.noop);

function BookModalCtrl($scope, $modalInstance) {
  $scope.modal = $modalInstance;
}

book.controller('BookShelfCtrl', function BookShelfCtrl($http, $scope, $modal, $log, isbnFetcher, alertService) {
  $scope.books = [];
  $scope.responses = [];
  $scope.BulkFetch = function() {
    isbnFetcher.fetchBulk([
      "9781429997041",
      "9780316679299",
      "9780141972060",
      "9780872200142",
      "9780316920049",
      "9780345917430",
      "9780321534965",
      "9780141974101"
    ]).then(function(books) {
      $scope.responses = books;
      $log.log(books);
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
    },
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
