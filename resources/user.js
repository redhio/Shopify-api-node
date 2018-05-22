'use strict';

const assign = require('lodash/assign');
const pick = require('lodash/pick');

const base = require('../mixins/base');

/**
 * Creates a User instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function User(redhio) {
  this.redhio = redhio;

  this.name = 'users';
  this.key = 'user';
}

assign(User.prototype, pick(base, ['get', 'list', 'buildUrl']));

/**
 * Gets the current logged-in user.
 *
 * @return {Promise} Promise that resolves with the result
 * @public
 */
User.prototype.current = function() {
  return this.get('current');
};

module.exports = User;
