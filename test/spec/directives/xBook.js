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

  it('should apply the appropriate classes', function() {
    expect(elm.hasClass('book'));
    expect(elm.find('.book .title').length === 1);
    expect(elm.find('.book .authors').length === 1);
  });

  it('should have the title & authors', function() {
    scope.$apply(function() {
      scope.book = {
        authors: [author],
        title: title
      };
    });

    expect(elm.find('.book .title').text()).toBe(title);
    expect(elm.find('.book .authors').text()).toBe(author);
  });
});