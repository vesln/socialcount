[![NPM
version](https://badge.fury.io/js/socialcount.png)](http://badge.fury.io/js/socialcount)
[![Build Status](https://secure.travis-ci.org/vesln/socialcount.png)](http://travis-ci.org/vesln/socialcount)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

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
