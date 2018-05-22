'use strict';

const assign = require('lodash/assign');

const baseChild = require('../mixins/base-child');

/**
 * Creates a ProductImage instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function ProductImage(redhio) {
  this.redhio = redhio;

  this.parentName = 'products';
  this.name = 'images';
  this.key = 'image';
}

assign(ProductImage.prototype, baseChild);

module.exports = ProductImage;
