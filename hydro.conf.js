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
    globals: {
      assert: require('assert')
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
