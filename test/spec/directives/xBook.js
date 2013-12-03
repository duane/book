'use strict';

describe('Directive: xBook', function() {
  var elm;
  var thumbnail_isbn = '9780321534965',
      no_thumbnail_isbn = '9780262032933';
  var scope;

  beforeEach(module('book','app/views/xBook.html'));

  beforeEach(function() {
    var books = {};
    books[thumbnail_isbn] = {
      authors: ['Donald Ervin Knuth'],
      title: 'The Art of Computer Programming',
      thumbnail: 'images/9780321534965.png'
    };
    books[no_thumbnail_isbn] = {
      authors: ['Charles E. Leiserson', 'Thomas H. Cormen', 'Clifford Stein', 'Ronald Rivest'],
      title: 'Introduction to Algorithms'
    };

    module(function($provide) {
      $provide.value('isbnFetcher', {
        fetchFirst: function(isbn) {
          return {
            then: function(resolve, reject, cb3) {
              if (isbn in books) {
                resolve(books[isbn]);
              } else {
                reject('Couldn\'t find isbn.');
              }
            }
          };
        }
      });
    });

  });

  beforeEach(inject(function($templateCache, $rootScope, $compile, $interpolate) {
    var template = $templateCache.get('app/views/xBook.html');
    $templateCache.put('views/xBook.html', template);

    elm = angular.element($interpolate('<book-display isbn="{{isbn}}"></book-display>')({isbn: thumbnail_isbn}));

    $compile(elm)($rootScope);
    $rootScope.$digest();
    scope = elm.isolateScope();

    waitsFor(function() {
      // wait for load.
      return !!elm.isolateScope().book.title;
    });
  }));

  it('should apply the title and artist classes', function() {
    expect(elm.hasClass('book'));
    expect(elm.find('.title').length).toBe(1);
    expect(elm.find('.authors').length).toBe(1);
  });

  it('should populate the title & authors', function() {
    expect(elm.find('.title').text()).toBe('The Art of Computer Programming');
    expect(elm.find('.authors').text()).toBe('Donald Ervin Knuth');
  });

  it('should have the display-type set', function() {
    expect(elm.attr('display-type')).toBe('row');
    expect(elm.attr('display-type')).not.toBe('block');

    scope.$apply(function() {
      scope.displayType = 'block';
    });

    expect(elm.attr('display-type')).toBe('block');

    scope.$apply(function() {
      scope.displayType = 'row';
    });

    expect(elm.attr('display-type')).toBe('row');
  });

  it('should have a displayed <img> tag iff it has a thumbnail', function() {
    expect(elm.find('.book-thumbnail img').length).toBe(1);
    expect(elm.find('.book-thumbnail .missing').length).toBe(0);

    elm.isolateScope().$apply(function() {
      elm.isolateScope().isbn = no_thumbnail_isbn;
    });

    expect(elm.find('.book-thumbnail img').length).toBe(0);
    expect(elm.find('.book-thumbnail .missing').length).toBe(1);
  });

});
