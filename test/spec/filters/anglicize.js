'use strict';

describe('Filter: anglicizeList', function () {
  var $interpolate;

  // load the filter's module
  beforeEach(module('book.filters'));

  // initialize a new instance of the filter before each test
  var anglicize;
  beforeEach(inject(function ($filter, _$interpolate_) {
    anglicize = $filter('anglicizeList');
    $interpolate = _$interpolate_;
  }));

  it('should return the input array joined into a string by english conjunctions and punctuation', function () {
    var alpha = 'alpha',
        beta = 'beta',
        gamma = 'gamma',
        delta = 'delta';
    expect(anglicize([])).toBe('');
    expect(anglicize(alpha)).toBe(alpha);
    expect(anglicize([alpha])).toBe(alpha);
    expect(anglicize([alpha, beta])).toBe($interpolate('{{alpha}} and {{beta}}')({alpha: alpha, beta: beta}));
    expect(anglicize([alpha, beta, gamma])).toBe($interpolate('{{alpha}}, {{beta}}, and {{gamma}}')({alpha: alpha, beta: beta, gamma: gamma}));
    expect(anglicize([alpha, beta, gamma, delta])).toBe($interpolate('{{alpha}}, {{beta}}, {{gamma}}, and {{delta}}')({alpha: alpha, beta: beta, gamma: gamma, delta: delta}));
  });

});
