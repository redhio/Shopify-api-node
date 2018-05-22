'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a ScriptTag instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function ScriptTag(redhio) {
  this.redhio = redhio;

  this.name = 'script_tags';
  this.key = 'script_tag';
}

assign(ScriptTag.prototype, base);

module.exports = ScriptTag;
