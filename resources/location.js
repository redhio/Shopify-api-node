'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const base = require('../mixins/base');

/**
 * Creates a Location instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Location(redhio) {
  this.redhio = redhio;

  this.name = 'locations';
  this.key = 'location';
}

assign(Location.prototype, pick(base, ['get', 'list', 'buildUrl']));

module.exports = Location;
