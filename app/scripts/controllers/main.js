'use strict';

angular.module('book').
  controller('BookController', ['$scope', 'alertService', 'googleBooks', function($scope, alertService, googleBooks) {
    $scope.books = [];
    $scope.AddBook = function() {
      if (this.isbn) {
        alertService.AddAlert('', 'woah');
        var book = googleBooks.get({isbn: this.isbn});
        $scope.books.push(book);
      } else {
        $scope.alerts.push({msg: "Please enter an ISBN to fetch."});
      }
    };
  }]).
  controller('AlertController', ['$scope', 'alertService', function($scope, alertService) {
    $scope.CloseAlert = function(index) {
      alertService.CloseAlert(index);
    };
  }]);
