'use strict';

angular.module('book.filters', []).
  filter('anglicizeList', function ($interpolate, $log) {
    return function (input) {
      if (input instanceof Array) {
        if (input.length === 0) {
          return '';
        } else if (input.length === 1) {
          return input[0];
        } else if (input.length === 2) {
          return $interpolate('{{first}} and {{second}}')({first: input[0], second: input[1]});
        } else {
          var buffer = input[0];
          for (var i = 1; i < (input.length - 1); i++) {
            buffer = buffer.concat($interpolate(', {{entry}}')({entry: input[i]}));
          }
          return buffer.concat($interpolate(', and {{entry}}')({entry: input[input.length - 1]}));
        }
      } else {
        return input;
      }
    };
  });
