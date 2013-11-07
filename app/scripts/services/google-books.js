angular.module('book.google-books', ['ngResource']).
  factory('googleBooks', ['$resource', function($resource) {
    return $resource('https://www.googleapis.com/books/v1/volumes?q=isbn\::isbn', {isbn: '@isbn'});
  }]).
  value('version', '0.0.1');