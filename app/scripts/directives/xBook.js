'use strict';

angular.module('book').
  directive('bookDisplay', [function() {
    return { transclude: true, templateUrl: 'views/xBook.html', restrict: 'AECM', link: function(s, i, attr) {} };
  }]);
