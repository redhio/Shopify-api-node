'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates a CarrierService instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function CarrierService(redhio) {
  this.redhio = redhio;

  this.name = 'carrier_services';
  this.key = 'carrier_service';
}

assign(CarrierService.prototype, omit(base, ['count']));

module.exports = CarrierService;
