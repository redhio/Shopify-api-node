'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a CustomerSavedSearch instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function CustomerSavedSearch(redhio) {
  this.redhio = redhio;

  this.name = 'customer_saved_searches';
  this.key = 'customer_saved_search';
}

assign(CustomerSavedSearch.prototype, base);

/**
 * Gets all customers who match the criteria for the specified customer saved
 * search.
 *
 * @param {Number} id Customer saved search ID
 * @param {Object} [params] Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
CustomerSavedSearch.prototype.customers = function customers(id, params) {
  const url = this.buildUrl(`${id}/customers`, params);
  return this.redhio.request(url, 'GET', 'customers');
};

module.exports = CustomerSavedSearch;
