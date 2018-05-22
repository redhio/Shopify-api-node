'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const baseChild = require('../mixins/base-child');
const base = require('../mixins/base');

/**
 * Creates a ProductVariant instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function ProductVariant(redhio) {
  this.redhio = redhio;

  this.parentName = 'products';
  this.name = 'variants';
  this.key = 'variant';
}

assign(ProductVariant.prototype, omit(baseChild, ['get', 'update']));

/**
 * Gets a single product variant by its ID.
 *
 * @param {Number} id Product variant ID
 * @params {Object} [params] Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
ProductVariant.prototype.get = function get(id, params) {
  const url = base.buildUrl.call(this, id, params);
  return this.redhio.request(url, 'GET', this.key);
};

/**
 * Updates an existing product variant.
 *
 * @param {Number} id Product variant ID
 * @params {Object} params Product variant properties
 * @return {Promise} Promise that resolves with the result
 * @public
 */
ProductVariant.prototype.update = function update(id, params) {
  const url = base.buildUrl.call(this, id);
  return this.redhio.request(url, 'PUT', this.key, params);
};

module.exports = ProductVariant;
