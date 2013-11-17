'use strict';

describe('Directive: xBook', function() {
  var elm, scope;
  beforeEach(module('book'));

  beforeEach(module('app/views/xBook.html'));

  var author = 'Duane Bailey',
       title = 'Title';
  var isbn = '9780321534965';

  beforeEach(inject(function($templateCache, $rootScope, $compile, $interpolate) {
    var template = $templateCache.get('app/views/xBook.html');
    $templateCache.put('views/xBook.html', template);

    elm = angular.element($interpolate('<book-display isbn="{{isbn}}"></book-display>')({isbn: isbn}));

    $compile(elm)($rootScope);
    $rootScope.$digest();

    scope = elm.isolateScope();

    waitsFor(function() {
      return !!scope.book.title;
    });
  }));

  it('should apply the title and artist classes', function() {
    expect(elm.hasClass('book'));
    expect(elm.find('.book .title').length).toBe(1);
    expect(elm.find('.book .authors').length).toBe(1);
  });

  it('should populate the title & authors', function() {
    debugger;
    expect(elm.find('.book .title').text()).toBe('The Art of Computer Programming');
    expect(elm.find('.book .authors').text()).toBe('Donald Ervin Knuth');
  });

  it('should have the class display-type-{{display-type}} set', function() {
    expect(elm.hasClass('display-type-row'));
    expect(!elm.hasClass('display-type-block'));
    scope.$apply(function() {
      scope.displayType = 'block';
    });
    expect(!elm.hasClass('display-type-row'));
    expect(elm.hasClass('display-type-block'));
    scope.$apply(function() {
      scope.displayType = 'row';
    });
    expect(elm.hasClass('display-type-row'));
    expect(!elm.hasClass('display-type-block'));
  });
});
