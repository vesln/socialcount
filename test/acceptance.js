var social = require('../');
var url = 'http://www.boredpanda.com/miniam-food-dioramas-pierre-javelle-akiko-ida/';
var emptyUrl = 'http://example.com/social-count';

test('get tweet count for url', function(done) {
  social(url, { tweets: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.tweets > 0, 'zero tweet count');
    done();
  });
});

test('get tweet count for url with no tweets', function(done) {
  social(emptyUrl, { tweets: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.tweets === 0, 'non-zero tweet count');
    done();
  });
});
