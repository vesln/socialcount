var social = require('../');

test('get tweet count for url', function(done) {
  social('http://google.com', { tweets: true }, function(err, res) {
    assert(!err);
    assert(res.tweets);
    done();
  });
});
