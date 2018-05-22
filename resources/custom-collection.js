'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a CustomCollection instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function CustomCollection(redhio) {
  this.redhio = redhio;

  this.name = 'custom_collections';
  this.key = 'custom_collection';
}

assign(CustomCollection.prototype, base);

module.exports = CustomCollection;
