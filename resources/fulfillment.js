'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const baseChild = require('../mixins/base-child');

/**
 * Creates a Fulfillment instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Fulfillment(redhio) {
  this.redhio = redhio;

  this.parentName = 'orders';
  this.name = 'fulfillments';
  this.key = 'fulfillment';
}

assign(Fulfillment.prototype, omit(baseChild, ['delete']));

/**
 * Completes a pending fulfillment.
 *
 * @param {Number} orderId Order ID
 * @param {Number} id Fulfillment id
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Fulfillment.prototype.complete = function complete(orderId, id) {
  const url = this.buildUrl(orderId, `${id}/complete`);
  return this.redhio.request(url, 'POST', undefined, {})
    .then(body => body[this.key]);
};

/**
 * Opens a pending fulfillment.
 *
 * @param {Number} orderId Order ID
 * @param {Number} id Fulfillment id
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Fulfillment.prototype.open = function open(orderId, id) {
  const url = this.buildUrl(orderId, `${id}/open`);
  return this.redhio.request(url, 'POST', undefined, {})
    .then(body => body[this.key]);
};

/**
 * Cancels a pending fulfillment.
 *
 * @param {Number} orderId Order ID
 * @param {Number} id Fulfillment id
 * @return {Promise} Promise that resolves with the result
 * @public
 */
Fulfillment.prototype.cancel = function cancel(orderId, id) {
  const url = this.buildUrl(orderId, `${id}/cancel`);
  return this.redhio.request(url, 'POST', undefined, {})
    .then(body => body[this.key]);
};

module.exports = Fulfillment;
