'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates an ApplicationCredit instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function ApplicationCredit(redhio) {
  this.redhio = redhio;

  this.name = 'application_credits';
  this.key = 'application_credit';
}

assign(ApplicationCredit.prototype, omit(base, [
  'count',
  'delete',
  'update'
]));

module.exports = ApplicationCredit;
