'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a Redirect instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Redirect(redhio) {
  this.redhio = redhio;

  this.name = 'redirects';
  this.key = 'redirect';
}

assign(Redirect.prototype, base);

module.exports = Redirect;
