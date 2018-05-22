'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates a Theme instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Theme(redhio) {
  this.redhio = redhio;

  this.name = 'themes';
  this.key = 'theme';
}

assign(Theme.prototype, omit(base, ['count']));

module.exports = Theme;
