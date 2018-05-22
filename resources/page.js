'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a Page instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Page(redhio) {
  this.redhio = redhio;

  this.name = 'pages';
  this.key = 'page';
}

assign(Page.prototype, base);

module.exports = Page;
