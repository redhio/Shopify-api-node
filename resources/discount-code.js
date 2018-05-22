'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const baseChild = require('../mixins/base-child');
const base = require('../mixins/base');

/**
 * Creates a DiscountCode instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function DiscountCode(redhio) {
  this.redhio = redhio;

  this.parentName = 'price_rules';
  this.name = 'discount_codes';
  this.key = 'discount_code';
}

assign(DiscountCode.prototype, omit(baseChild, 'count'));

/**
 * Searches by discount code.
 *
 * @param {Object} params Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
DiscountCode.prototype.lookup = function lookup(params) {
  const url = base.buildUrl.call(this, 'lookup', params);
  return this.redhio.request(url, 'GET', this.key);
};

module.exports = DiscountCode;
