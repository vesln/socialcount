test('get facebook counts', function(done) {
  social(urls.popular, { facebook: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.facebook.count > 0, 'zero fb count');
    assert(res.facebook.shareCount > 0, 'zero fb share count');
    assert(res.facebook.likeCount > 0, 'zero fb like count');
    assert(res.facebook.commentCount > 0, 'zero fb comment count');
    done();
  });
});

test('get facebook counts for url with no shares', function(done) {
  social(urls.unpopular, { facebook: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.facebook.count === 0, 'non-zero fb count');
    done();
  });
});
