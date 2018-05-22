'use strict';

const assign = require('lodash/assign');

const base = require('../mixins/base');

/**
 * Creates a Webhook instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Webhook(redhio) {
  this.redhio = redhio;

  this.name = 'webhooks';
  this.key = 'webhook';
}

assign(Webhook.prototype, base);

module.exports = Webhook;
