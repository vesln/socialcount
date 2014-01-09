test('get google plus count', function(done) {
  social(urls.popular, { plus: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.plus > 0, 'zero +1 count');
    done();
  });
});

test('get google plus count for url with no pluses', function(done) {
  social(urls.unpopular, { plus: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.plus === 0, 'non-zero +1 count');
    done();
  });
});
