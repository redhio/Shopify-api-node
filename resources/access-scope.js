'use strict';

const assign = require('lodash/assign');

/**
 * Creates an AccessScope instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function AccessScope(redhio) {
  this.redhio = redhio;

  this.name = 'access_scopes';
}

/**
 * Retrieves a list of access scopes associated to the access token.
 *
 * @return {Promise} Promise that resolves with the result
 * @public
 */
AccessScope.prototype.list = function list() {
  const path = `/admin/oauth/${this.name}.json`;
  const url = assign({ path }, this.redhio.baseUrl);
  return this.redhio.request(url, 'GET', this.name);
};

module.exports = AccessScope;
