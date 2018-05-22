'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a Country instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Country(redhio) {
  this.redhio = redhio;

  this.name = 'countries';
  this.key = 'country';
}

assign(Country.prototype, base);

module.exports = Country;
