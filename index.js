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
  fn(null, { tweets: 3 });
}

/**
 * Primary exports.
 */

module.exports = social;
