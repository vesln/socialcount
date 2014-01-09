[![NPM
version](https://badge.fury.io/js/socialcount.png)](http://badge.fury.io/js/socialcount)
[![Build Status](https://secure.travis-ci.org/vesln/socialcount.png)](http://travis-ci.org/vesln/socialcount)

# socialcount

## Synopsis

Get social stats for given url

## Supported sources:

- Facebook
- Google+
- Twitter

> Feel free to fork, add a new source and send a pull request

## Usage

```js
var social = require('socialcount');

var opts = {
  facebook: true,
  plus: true,
  tweets: true,
};

social('http://awesome.io', opts, function(err, res) {
  // facebook
  res.facebook.count; // total
  res.facebook.shareCount;
  res.facebook.likeCount;
  res.facebook.commentCount;

  // tweets
  res.tweet.count;

  // +
  res.plus.count;
});
```

## Installation

```js
$ npm install socialcount
```

### Notes for Node 0.11 users

The Google+ counts won't work due to SSL bug.

## License

The MIT License (see LICENSE)
