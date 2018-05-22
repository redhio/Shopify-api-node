'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const base = require('../mixins/base');

/**
 * Creates a ShippingZone instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function ShippingZone(redhio) {
  this.redhio = redhio;

  this.name = this.key = 'shipping_zones';
}

assign(ShippingZone.prototype, pick(base, ['list', 'buildUrl']));

module.exports = ShippingZone;
