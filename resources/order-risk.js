'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const baseChild = require('../mixins/base-child');

/**
 * Creates an OrderRisk instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function OrderRisk(redhio) {
  this.redhio = redhio;

  this.parentName = 'orders';
  this.name = 'risks';
  this.key = 'risk';
}

assign(OrderRisk.prototype, omit(baseChild, ['count']));

module.exports = OrderRisk;
