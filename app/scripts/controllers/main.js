'use strict';

angular.module('book').controller('MainCtrl', angular.noop).
  controller('BookShelfCtrl', function BookShelfCtrl($scope) {
    $scope.isbns = ['9780262032933', '9780321534965'];
  }).controller('AlertController', function($scope, alertService) {
    $scope.CloseAlert = function(index) {
      alertService.CloseAlert(index);
    };
  });
