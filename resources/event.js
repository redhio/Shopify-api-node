'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates an Event instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Event(redhio) {
  this.redhio = redhio;

  this.name = 'events';
  this.key = 'event';
}

assign(Event.prototype, omit(base, ['create', 'delete', 'update']));

module.exports = Event;
