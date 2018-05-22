describe('Redhio#apiPermission', () => {
  'use strict';

  const expect = require('chai').expect;

  const common = require('./common');

  const redhio = common.redhio;
  const scope = common.scope;

  afterEach(() => expect(scope.isDone()).to.be.true);

  it('deletes an api permission', () => {
    scope
      .delete('/admin/api_permissions/current.json')
      .reply(200);

    return redhio.apiPermission.delete()
      .then(data => expect(data).to.deep.equal({}));
  });
});
