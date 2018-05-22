'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates a GiftCard instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function GiftCard(redhio) {
  this.redhio = redhio;

  this.name = 'gift_cards';
  this.key = 'gift_card';
}

assign(GiftCard.prototype, omit(base, ['delete']));

/**
 * Disables a gift card.
 *
 * @param {Number} id Gift card ID
 * @return {Promise} Promise that resolves with the result
 * @public
 */
GiftCard.prototype.disable = function disable(id) {
  const url = this.buildUrl(`${id}/disable`);
  return this.redhio.request(url, 'POST', this.key, { id });
};

/**
 * Searches for gift cards matching a given query.
 *
 * @param {Object} params Query parameters
 * @return {Promise} Promise that resolves with the result
 * @public
 */
GiftCard.prototype.search = function search(params) {
  const url = this.buildUrl('search', params);
  return this.redhio.request(url, 'GET', this.name);
};

module.exports = GiftCard;
