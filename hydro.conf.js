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
    plugins: [
      'hydro-clean-stacks',
    ],
    tests: [
      'test/*.js'
    ]
  });
};
