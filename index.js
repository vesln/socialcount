/**
 * External dependencies.
 */

var request = require('request');

/**
 * URLS.
 */

var URLS = {
  tweets: 'http://urls.api.twitter.com/1/urls/count.json?url={url}',
  plus: 'https://plusone.google.com/u/0/_/+1/fastbutton?url={url}',
};

/**
 * Get the tweet count for `url`.
 *
 * @param {String} url
 * @param {Function} callback
 * @cb {Error} error
 * @cb {Number} count
 * @api private
 */

function tweets(url, fn) {
  request.get(URLS.tweets.replace('{url}', url), { json: true }, function(err, res) {
    if (err) return fn(err);
    fn(null, res.body.count);
  });
}

/**
 * Get the +1 count for `url`.
 *
 * @param {String} url
 * @param {Function} callback
 * @cb {Error} error
 * @cb {Number} count
 * @api private
 */

function plus(url, fn) {
  request.get(URLS.plus.replace('{url}', url), function(err, res) {
    if (err) return fn(err);
    var match = (/window.__SSR = {c: (\d*).0 ,/).exec(res.body);
    if (!match || !match[0]) return fn(null, 0);
    fn(null, +match[1]);
  });
}

/**
 * Get the social count for `url`.
 *
 * Options:
 *
 * - tweets {Boolean} fetch tweets
 *
 * @param {String} url
 * @param {Object} options
 * @param {Function} callback
 * @cb {Error|null} error
 * @cb {Object} response
 * @api public
 */

function social(url, opts, fn) {
  if (opts.tweets) {
    tweets(url, function(err, count) {
      if (err) return fn(err);
      fn(null, { tweets: count });
    });
  }

  if (opts.plus) {
    plus(url, function(err, count) {
      if (err) return fn(err);
      fn(null, { plus: count });
    });
  }
}

/**
 * Primary exports.
 */

module.exports = social;
