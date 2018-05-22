'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates a FulfillmentService instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function FulfillmentService(redhio) {
  this.redhio = redhio;

  this.name = 'fulfillment_services';
  this.key = 'fulfillment_service';
}

assign(FulfillmentService.prototype, omit(base, ['count']));

module.exports = FulfillmentService;
