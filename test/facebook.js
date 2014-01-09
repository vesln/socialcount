test('get facebook count', function(done) {
  social(urls.popular, { facebook: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.facebook.count > 0, 'zero fb count');
    done();
  });
});

test('get facebook count count for url with no shares', function(done) {
  social(urls.unpopular, { facebook: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.facebook.count === 0, 'non-zero +1 count');
    done();
  });
});
