/**
 * External dependencies.
 */

var request = require('request');

/**
 * URLS.
 */

var URLS = {
  tweets: 'http://urls.api.twitter.com/1/urls/count.json?url={url}'
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
  tweets(url, function(err, count) {
    if (err) return fn(err);
    fn(null, { tweets: count });
  });
}

/**
 * Primary exports.
 */

module.exports = social;
