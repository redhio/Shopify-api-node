'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const base = require('../mixins/base');

/**
 * Creates an ApiPermission instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function ApiPermission(redhio) {
  this.redhio = redhio;

  this.name = 'api_permissions';
  this.key = 'api_permission';
}

assign(ApiPermission.prototype, pick(base, 'buildUrl'));

/**
 * Deletes a token, which revokes access.
 *
 * @return {Promise} Promise that resolves with the result
 * @public
 */
ApiPermission.prototype.delete = function () {
  const url = this.buildUrl('current');
  return this.redhio.request(url, 'DELETE');
};

module.exports = ApiPermission;
