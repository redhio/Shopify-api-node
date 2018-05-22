describe('Redhio#event', () => {
  'use strict';

  const expect = require('chai').expect;

  const fixtures = require('./fixtures/event');
  const common = require('./common');

  const redhio = common.redhio;
  const scope = common.scope;

  afterEach(() => expect(scope.isDone()).to.be.true);

  it('gets a list of events (1/2)', () => {
    const output = fixtures.res.list;

    scope
      .get('/admin/events.json')
      .reply(200, output);

    return redhio.event.list()
      .then(data => expect(data).to.deep.equal(output.events));
  });

  it('gets a list of events (2/2)', () => {
    const output = fixtures.res.list;

    scope
      .get('/admin/events.json?page=1')
      .reply(200, output);

    return redhio.event.list({ page: 1 })
      .then(data => expect(data).to.deep.equal(output.events));
  });

  it('gets a count of all events (1/2)', () => {
    scope
      .get('/admin/events/count.json')
      .reply(200, { count: 3 });

    return redhio.event.count()
      .then(data => expect(data).to.deep.equal(3));
  });

  it('gets a count of all events (2/2)', () => {
    scope
      .get('/admin/events/count.json?foo=bar')
      .reply(200, { count: 3 });

    return redhio.event.count({ foo: 'bar' })
      .then(data => expect(data).to.deep.equal(3));
  });

  it('gets a single event by its ID (1/2)', () => {
    const output = fixtures.res.get;

    scope
      .get('/admin/events/677313116.json')
      .reply(200, output);

    return redhio.event.get(677313116)
      .then(data => expect(data).to.deep.equal(output.event));
  });

  it('gets a single event by its ID (2/2)', () => {
    const output = fixtures.res.get;

    scope
      .get('/admin/events/677313116.json?foo=bar')
      .reply(200, output);

    return redhio.event.get(677313116, { foo: 'bar' })
      .then(data => expect(data).to.deep.equal(output.event));
  });
});
