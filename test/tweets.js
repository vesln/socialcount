test('get tweet count for url', function(done) {
  social(urls.popular, { tweets: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.tweets > 0, 'zero tweet count');
    done();
  });
});

test('get tweet count for url with no tweets', function(done) {
  social(urls.unpopular, { tweets: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.tweets === 0, 'non-zero tweet count');
    done();
  });
});
