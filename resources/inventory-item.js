'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates an InventoryItem instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function InventoryItem(redhio) {
  this.redhio = redhio;

  this.name = 'inventory_items';
  this.key = 'inventory_item';
}

assign(InventoryItem.prototype, omit(base, ['count', 'create', 'delete']));

module.exports = InventoryItem;
