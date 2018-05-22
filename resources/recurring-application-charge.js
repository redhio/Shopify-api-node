'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates a RecurringApplicationCharge instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function RecurringApplicationCharge(redhio) {
  this.redhio = redhio;

  this.name = 'recurring_application_charges';
  this.key = 'recurring_application_charge';
}

assign(RecurringApplicationCharge.prototype, omit(base, [
  'count',
  'update'
]));

/**
 * Activates a recurring application charge.
 *
 * @param {Number} id Recurring application charge ID
 * @param {Object} params Recurring application charge properties
 * @return {Promise} Promise that resolves with the result
 * @public
 */
RecurringApplicationCharge.prototype.activate = function activate(id, params) {
  const url = this.buildUrl(`${id}/activate`);
  return this.redhio.request(url, 'POST', undefined, {
    [this.key]: params
  });
};

module.exports = RecurringApplicationCharge;
