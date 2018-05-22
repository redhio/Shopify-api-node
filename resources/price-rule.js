'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates a PriceRule instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function PriceRule(redhio) {
  this.redhio = redhio;

  this.name = 'price_rules';
  this.key = 'price_rule';
}

assign(PriceRule.prototype, omit(base, 'count'));

module.exports = PriceRule;
