'use strict';

describe('Directive: xBook', function() {
  var elm, scope;
  beforeEach(module('book'));
  var author = 'Duane Bailey',
       title = 'Title';

  beforeEach(inject(function($rootScope, $compile, isbnFetcher) {
    elm = angular.element('<book-display></book-display>');
    scope = $rootScope;

    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should have the title & authors', inject(function($log) {
    debugger;
    scope.$apply(function() {
      scope.book = {
        authors: [author],
        title: title
      };
    });

    var title_ele = elm.find('.book .title');
    var authors_ele = elm.find('.book .authors');

    expect(title_ele.eq(0).text()).toBe(title);
    expect(authors_ele.eq(0).text()).toBe(author);
  }));
});