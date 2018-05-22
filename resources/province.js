'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const baseChild = require('../mixins/base-child');

/**
 * Creates a Province instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Province(redhio) {
  this.redhio = redhio;

  this.parentName = 'countries';
  this.name = 'provinces';
  this.key = 'province';
}

assign(Province.prototype, omit(baseChild, ['create', 'delete']));

module.exports = Province;
