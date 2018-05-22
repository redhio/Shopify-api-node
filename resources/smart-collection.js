'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a SmartCollection instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function SmartCollection(redhio) {
  this.redhio = redhio;

  this.name = 'smart_collections';
  this.key = 'smart_collection';
}

assign(SmartCollection.prototype, base);

/**
 * Sets the ordering type and/or the manual order of products in a smart
 * collection.
 *
 * @param {Number} id Smart collection ID
 * @param {Object} params Ordering parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
SmartCollection.prototype.order = function order(id, params) {
  const url = this.buildUrl(`${id}/order`, params);
  return this.redhio.request(url, 'PUT', undefined, {});
};

module.exports = SmartCollection;
