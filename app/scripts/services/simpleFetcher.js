'use strict';

angular.module('book.isbnFetcher').
  factory('simpleFetcher', function() {
    var books = {
      '9780321534965': {
        authors: ['Donald Ervin Knuth'],
        title: 'The Art of Computer Programming',
        thumbnail: 'images/9780321534965.png'
      },
      '9780262032933': {
        authors: ['Charles E. Leiserson', 'Thomas H. Cormen', 'Clifford Stein', 'Ronald Rivest'],
        title: 'Introduction to Algorithms'
      }
    };

    return {
      fetchMany: function(isbn) {
        return {
          then: function(resolve, reject, notify) {
            if (isbn in books) {
              resolve([books[isbn]]);
            } else {
              reject('Couldn\'t find isbn.');
            }
          }
        };
      }
    };
  });