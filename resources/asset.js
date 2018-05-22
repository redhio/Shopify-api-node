'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const baseChild = require('../mixins/base-child');

/**
 * Creates an Asset instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Asset(redhio) {
  this.redhio = redhio;

  this.parentName = 'themes';
  this.name = 'assets';
  this.key = 'asset';
}

assign(Asset.prototype, pick(baseChild, ['list', 'buildUrl']));

/**
 * Get a single asset by its ID.
 *
 * @param {Number} themeId Theme ID
 * @param {Object} params Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Asset.prototype.get = function get(themeId, params) {
  const url = this.buildUrl(themeId, undefined, params);
  return this.redhio.request(url, 'GET', this.key);
};

/**
 * Creates an asset.
 *
 * @param {Number} themeId Theme ID
 * @param {Object} params Asset properties
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Asset.prototype.create = function create(themeId, params) {
  const url = this.buildUrl(themeId);
  return this.redhio.request(url, 'PUT', this.key, params);
};

/**
 * Updates an asset.
 *
 * @param {Number} themeId Theme ID
 * @param {Object} params Asset properties
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Asset.prototype.update = Asset.prototype.create;

/**
 * Deletes an asset.
 *
 * @param {Number} themeId Theme ID
 * @param {Object} params Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Asset.prototype.delete = function remove(themeId, params) {
  const url = this.buildUrl(themeId, undefined, params);
  return this.redhio.request(url, 'DELETE');
};

module.exports = Asset;
