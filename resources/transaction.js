'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const baseChild = require('../mixins/base-child');

/**
 * Creates a Transaction instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Transaction(redhio) {
  this.redhio = redhio;

  this.parentName = 'orders';
  this.name = 'transactions';
  this.key = 'transaction';
}

assign(Transaction.prototype, omit(baseChild, ['delete', 'update']));

module.exports = Transaction;
