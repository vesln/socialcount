/**
 * Test setup.
 *
 * @param {Hydro} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    suite: 'socialcount',
    formatter: 'hydro-dot',
    timeout: 5000,
    globals: {
      assert: require('assert'),
      social: require('./'),
      urls: {
        popular: 'http://www.boredpanda.com/miniam-food-dioramas-pierre-javelle-akiko-ida/',
        unpopular: 'http://example.com/node-social-count'
      }
    },
    plugins: [
      'hydro-tdd',
      'hydro-clean-stacks',
    ],
    tests: [
      'test/*.js'
    ]
  });
};
