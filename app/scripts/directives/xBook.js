'use strict';

angular.module('book').
  directive('bookDisplay', [function() {
    return {
      transclude: true,
      template: ['<div class="book">',
                 '<img ng-src="{{book.thumbnail}}" ng-if="book.thumbnail"/>',
                 '<div class="book-cover missing" ng-if="!book.thumbnail"></div>',
                 '<span class="title">{{book.title}}<br/></span>',
                 'by <span class="authors">{{book.authors|anglicizeList}}</span>',
                 '</div>'].join('\n'),
      restrict: 'AECM',
      link: function(s, i, attr) {} };
  }]);
