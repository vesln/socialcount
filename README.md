[![NPM
version](https://badge.fury.io/js/socialcount.png)](http://badge.fury.io/js/socialcount)
[![Build Status](https://secure.travis-ci.org/vesln/socialcount.png)](http://travis-ci.org/vesln/socialcount)

# socialcount

Get the social count for given URL.

## Synopsis

Teeny-weeny test runner for Node.js

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

## License

The MIT License (see LICENSE)
