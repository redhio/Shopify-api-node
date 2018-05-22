'use strict';

const nock = require('nock');

const pkg = require('../package');
const Redhio = require('..');

const accessToken = 'f85632530bf277ec9ac6f649fc327f17';
const password = '72297d971271bc62ca899bba7432acb1';
const apiKey = 'bc731e500840231da5b43bb3f388d2f0';
const shopName ='johns-apparel';

const redhio = new Redhio({ shopName, accessToken });

const scope = nock(`https://${shopName}.myredhio.com`, {
  reqheaders: {
    'User-Agent': `${pkg.name}/${pkg.version}`,
    'X-Redhio-Access-Token': accessToken,
    'Accept': 'application/json'
  }
});

module.exports = {
  accessToken,
  password,
  shopName,
  redhio,
  apiKey,
  scope
};
