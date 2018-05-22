'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates a StorefrontAccessToken instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function StorefrontAccessToken(redhio) {
  this.redhio = redhio;

  this.name = 'storefront_access_tokens';
  this.key = 'storefront_access_token';
}

assign(StorefrontAccessToken.prototype, omit(base, [
  'count',
  'get',
  'update'
]));

module.exports = StorefrontAccessToken;
