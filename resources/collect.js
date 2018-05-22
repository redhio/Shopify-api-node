'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates a Collect instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Collect(redhio) {
  this.redhio = redhio;

  this.name = 'collects';
  this.key = 'collect';
}

assign(Collect.prototype, omit(base, ['update']));

module.exports = Collect;
