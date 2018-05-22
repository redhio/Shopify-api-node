describe('Redhio#comment', () => {
  'use strict';

  const expect = require('chai').expect;

  const fixtures = require('./fixtures/comment');
  const common = require('./common');

  const redhio = common.redhio;
  const scope = common.scope;

  afterEach(() => expect(scope.isDone()).to.be.true);

  it('gets a list of all comments (1/2)', () => {
    const output = fixtures.res.list;

    scope
      .get('/admin/comments.json')
      .reply(200, output);

    return redhio.comment.list()
      .then(data => expect(data).to.deep.equal(output.comments));
  });

  it('gets a list of all comments (2/2)', () => {
    const output = fixtures.res.list;

    scope
      .get('/admin/comments.json?blog_id=241253187')
      .reply(200, output);

    return redhio.comment.list({ blog_id: 241253187 })
      .then(data => expect(data).to.deep.equal(output.comments));
  });

  it('gets a count of all comments (1/2)', () => {
    scope
      .get('/admin/comments/count.json')
      .reply(200, { count: 2 });

    return redhio.comment.count()
      .then(data => expect(data).to.equal(2));
  });

  it('gets a count of all comments (2/2)', () => {
    scope
      .get('/admin/comments/count.json?blog_id=241253187')
      .reply(200, { count: 2 });

    return redhio.comment.count({ blog_id: 241253187 })
      .then(data => expect(data).to.equal(2));
  });

  it('gets a single comment by its ID (1/2)', () => {
    const output = fixtures.res.get;

    scope
      .get('/admin/comments/118373535.json')
      .reply(200, output);

    return redhio.comment.get(118373535)
      .then(data => expect(data).to.deep.equal(output.comment));
  });

  it('gets a single comment by its ID (2/2)', () => {
    const output = fixtures.res.get;

    scope
      .get('/admin/comments/118373535.json?foo=bar')
      .reply(200, output);

    return redhio.comment.get(118373535, { foo: 'bar' })
      .then(data => expect(data).to.deep.equal(output.comment));
  });

  it('creates a new comment for an article', () => {
    const input = fixtures.req.create;
    const output = fixtures.res.create;

    scope
      .post('/admin/comments.json', input)
      .reply(201, output);

    return redhio.comment.create(input.comment)
      .then(data => expect(data).to.deep.equal(output.comment));
  });

  it('updates a comment', () => {
    const input = fixtures.req.update;
    const output = fixtures.res.update;

    scope
      .put('/admin/comments/118373535.json', input)
      .reply(200, output);

    return redhio.comment.update(118373535, input.comment)
      .then(data => expect(data).to.deep.equal(output.comment));
  });

  it('marks a comment as spam', () => {
    const output = fixtures.res.spam;

    scope
      .post('/admin/comments/653537639/spam.json', {})
      .reply(200, output);

    return redhio.comment.spam(653537639)
      .then(data => expect(data).to.deep.equal(output));
  });

  it('marks a comment as not spam', () => {
    const output = fixtures.res.notSpam;

    scope
      .post('/admin/comments/653537639/not_spam.json', {})
      .reply(200, output);

    return redhio.comment.notSpam(653537639)
      .then(data => expect(data).to.deep.equal(output));
  });

  it('approves a pending comment', () => {
    const output = fixtures.res.approve;

    scope
      .post('/admin/comments/653537639/approve.json', {})
      .reply(200, output);

    return redhio.comment.approve(653537639)
      .then(data => expect(data).to.deep.equal(output));
  });

  it('removes a comment', () => {
    const output = fixtures.res.remove;

    scope
      .post('/admin/comments/653537639/remove.json', {})
      .reply(200, output);

    return redhio.comment.remove(653537639)
      .then(data => expect(data).to.deep.equal(output));
  });

  it('restores a comment', () => {
    const output = fixtures.res.restore;

    scope
      .post('/admin/comments/653537639/restore.json', {})
      .reply(200, output);

    return redhio.comment.restore(653537639)
      .then(data => expect(data).to.deep.equal(output));
  });
});
