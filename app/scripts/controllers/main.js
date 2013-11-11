'use strict';
var book = angular.module('book');

var BookCtrl = book.controller('BookCtrl', ['$scope', function($scope) {}]);

var BookChoiceCtrl = book.controller('BookChoiceCtrl', ['$http', '$scope', '$modal', '$log', 'alertService', function($http, $scope, $modal, $log, alertService) {
  $scope.AddBook = function() {
    $http({
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'.concat(this.isbn),
      method: 'GET'
    }).then(
      // resolve
      function(response) {
        $log.log(this);
        $log.log(response.data);
        var result = response.data;
        if ('items' in result) {
          $modal.open({
            templateUrl: 'views/book_choice.html'
        });
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
}]);

var BookModalCtrl = book.controller('BookModalCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

}]);

var AlertController = book.controller('AlertController', ['$scope', 'alertService', function($scope, alertService) {
  $scope.CloseAlert = function(index) {
    alertService.CloseAlert(index);
  };
}]);