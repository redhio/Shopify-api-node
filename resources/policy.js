'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const base = require('../mixins/base');

/**
 * Creates a Policy instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Policy(redhio) {
  this.redhio = redhio;

  this.name = this.key = 'policies';
}

assign(Policy.prototype, pick(base, ['list', 'buildUrl']));

module.exports = Policy;
