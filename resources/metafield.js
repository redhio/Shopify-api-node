'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a Metafield instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Metafield(redhio) {
  this.redhio = redhio;

  this.name = 'metafields';
  this.key = 'metafield';
}

assign(Metafield.prototype, base);

module.exports = Metafield;
