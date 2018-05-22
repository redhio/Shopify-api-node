'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const base = require('../mixins/base');

/**
 * Creates a Shop instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Shop(redhio) {
  this.redhio = redhio;

  this.name = this.key = 'shop';
}

assign(Shop.prototype, pick(base, 'buildUrl'));

/**
 * Gets the configuration of the shop.
 *
 * @param {Object} [params] Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Shop.prototype.get = function get(params) {
  const url = this.buildUrl(undefined, params);
  return this.redhio.request(url, 'GET', this.key);
};

module.exports = Shop;
