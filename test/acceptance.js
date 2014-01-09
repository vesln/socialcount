var social = require('../');
var url = 'http://www.boredpanda.com/miniam-food-dioramas-pierre-javelle-akiko-ida/';

test('get tweet count for url', function(done) {
  social(url, { tweets: true }, function(err, res) {
    assert(!err, 'unexpected error');
    assert(res.tweets > 0, 'zero tweet count');
    done();
  });
});
