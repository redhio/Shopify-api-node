'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const baseChild = require('../mixins/base-child');

/**
 * Creates a Payment instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Payment(redhio) {
  this.redhio = redhio;

  this.parentName = 'checkouts';
  this.name = 'payments';
  this.key = 'payment';
}

assign(Payment.prototype, omit(baseChild, ['delete', 'update']));

module.exports = Payment;
