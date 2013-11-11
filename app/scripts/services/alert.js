'use strict';

angular.module('book.alert', []).
  factory('alertService', ['$rootScope', function($rootScope) {
    var alertService = {};
    $rootScope.alerts = [];
    alertService.AddAlert = function(type, msg) {
      $rootScope.alerts.push({type:type, msg:msg});
    };

    alertService.CloseAlert = function(index) {
      $rootScope.alerts.splice(index, 1);
    };
    return alertService;
  }]);