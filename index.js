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
  facebook: 'http://api.facebook.com/restserver.php?method=links.getStats&format=json&urls={url}'
};

/**
 * Replace a URL placeholder in `base` and perform an HTTP GET request.
 *
 * @param {String} base url
 * @param {String} url
 * @param {Function} fn
 * @cb {Error} error
 * @cb {Response} HTTP response
 * @api private
 */

function get(base, url, fn) {
  request.get(base.replace('{url}', url), { json: true }, fn);
}

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
  get(URLS.tweets, url, function(err, res) {
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
  get(URLS.plus, url, function(err, res) {
    if (err) return fn(err);
    var match = (/window.__SSR = {c: (\d*).0 ,/).exec(res.body);
    if (!match || !match[0]) return fn(null, 0);
    fn(null, +match[1]);
  });
}

/**
 * Get the Facebook shares + likes count for `url`.
 *
 * TODO: add support for more than `total_count`.
 *
 * @param {String} url
 * @param {Function} callback
 * @cb {Error} error
 * @cb {Number} count
 * @api private
 */

function facebook(url, fn) {
  get(URLS.facebook, url, function(err, res) {
    if (err) return fn(err);
    var obj = Array.isArray(res.body) ? res.body[0] : {};
    fn(null, obj.total_count || 0);
  });
}

/**
 * Get the social count for `url`.
 *
 * Options:
 *
 * - tweets   {Boolean} fetch tweet count
 * - plus     {Boolean} fetch Google +1 count
 * - facebook {Boolean} fetch Facebook counts
 *
 * @param {String} url
 * @param {Object} options
 * @param {Function} callback
 * @cb {Error|null} error
 * @cb {Object} response
 * @api public
 */

function social(url, opts, fn) {
  var sources = [];
  var error = null;
  var total = 0;
  var ret = {};

  if (opts.facebook) sources.push({ fetcher: facebook, key: 'facebook' });
  if (opts.tweets) sources.push({ fetcher: tweets, key: 'tweets' });
  if (opts.plus) sources.push({ fetcher: plus, key: 'plus' });

  total = sources.length;

  if (!total) {
    return fn(null, ret);
  }

  sources.forEach(function(source) {
    source.fetcher(url, function(err, count) {
      if (err) return (error = err);
      ret[source.key] = count;
      if (--total === 0) return fn(error, ret);
    });
  });
}

/**
 * Primary exports.
 */

module.exports = social;
