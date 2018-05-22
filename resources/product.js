'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a Product instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Product(redhio) {
  this.redhio = redhio;

  this.name = 'products';
  this.key = 'product';
}

assign(Product.prototype, base);

module.exports = Product;
