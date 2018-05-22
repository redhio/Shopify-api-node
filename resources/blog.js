'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a Blog instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Blog(redhio) {
  this.redhio = redhio;

  this.name = 'blogs';
  this.key = 'blog';
}

assign(Blog.prototype, base);

module.exports = Blog;
