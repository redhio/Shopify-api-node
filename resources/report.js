'use strict';

const assign = require('lodash/assign');
const omit = require('lodash/omit');

const base = require('../mixins/base');

/**
 * Creates a Report instance.
 *
 * @param {Redhio} redhio Reference to the Redhio instance
 * @constructor
 * @public
 */
function Report(redhio) {
  this.redhio = redhio;

  this.name = 'reports';
  this.key = 'report';
}

assign(Report.prototype, omit(base, 'count'));

module.exports = Report;
