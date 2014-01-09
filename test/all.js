test('get count from all sources', function(done) {
  social(urls.popular, { facebook: true, plus: true, tweets: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.facebook > 0, 'zero fb count');
    assert(res.plus > 0, 'zero +1 count');
    assert(res.tweets > 0, 'zero tweet count');
    done();
  });
});
