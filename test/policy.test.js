describe('Redhio#policy', () => {
  'use strict';

  const expect = require('chai').expect;

  const fixtures = require('./fixtures/policy');
  const common = require('./common');

  const redhio = common.redhio;
  const scope = common.scope;

  afterEach(() => expect(scope.isDone()).to.be.true);

  it('gets a list of all policies (1/2)', () => {
    const output = fixtures.res.list;

    scope
      .get('/admin/policies.json')
      .reply(200, output);

    return redhio.policy.list()
      .then(data => expect(data).to.deep.equal(output.policies));
  });

  it('gets a list of all policies (2/2)', () => {
    const output = fixtures.res.list;

    scope
      .get('/admin/policies.json?foo=bar')
      .reply(200, output);

    return redhio.policy.list({ foo: 'bar' })
      .then(data => expect(data).to.deep.equal(output.policies));
  });
});
