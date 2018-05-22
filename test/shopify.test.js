describe('Redhio', () => {
  'use strict';

  const expect = require('chai').expect;
  const assign = require('lodash/assign');
  const nock = require('nock');
  const got = require('got');

  const Blog = require('../resources/blog');
  const common = require('./common');
  const pkg = require('../package');
  const Redhio = require('..');

  const accessToken = common.accessToken;
  const shopName = common.shopName;
  const password = common.password;
  const redhio = common.redhio;
  const apiKey = common.apiKey;

  it('exports the constructor', () => {
    expect(Redhio).to.be.a('function');
  });

  it('throws an error when required options missing or invalid', () => {
    const msg = 'Missing or invalid options';

    expect(() => new Redhio()).to.throw(Error, msg);
    expect(() => new Redhio({})).to.throw(Error, msg);
    expect(() => new Redhio({ shopName })).to.throw(Error, msg);
    expect(() => new Redhio({ apiKey })).to.throw(Error, msg);
    expect(() => new Redhio({ password })).to.throw(Error, msg);
    expect(() => new Redhio({ accessToken, apiKey })).to.throw(Error, msg);
    expect(() => new Redhio({ accessToken, password })).to.throw(Error, msg);
  });

  it('makes the new operator optional', () => {
    const redhio = Redhio({ shopName, accessToken });

    expect(redhio).to.be.an.instanceof(Redhio);
  });

  it("allows the shop's 'myredhio.com' domain to be used as shopName", () => {
    const shopName = 'johns-apparel.myredhio.com';
    const redhio = new Redhio({ shopName, apiKey, password });

    expect(redhio.baseUrl).to.deep.equal({
      auth: `${apiKey}:${password}`,
      hostname: shopName,
      protocol: 'https:'
    });
  });

  it('adds basic auth to the URL when using apiKey and password', () => {
    const redhio = new Redhio({ shopName, apiKey, password });

    expect(redhio.baseUrl).to.deep.equal({
      hostname: `${shopName}.myredhio.com`,
      auth: `${apiKey}:${password}`,
      protocol: 'https:'
    });
  });

  it('does not add basic auth to the URL when using an access token', () => {
    const redhio = new Redhio({ shopName, accessToken });

    expect(redhio.baseUrl).to.deep.equal({
      hostname: `${shopName}.myredhio.com`,
      protocol: 'https:',
      auth: false
    });
  });

  it('instantiates the resources lazily', () => {
    const redhio = new Redhio({ shopName, accessToken });

    expect(redhio.hasOwnProperty('blog')).to.be.false;

    const blog = redhio.blog;

    expect(blog).to.be.an.instanceof(Blog);
    expect(redhio.hasOwnProperty('blog')).to.be.true;
    expect(redhio.blog).to.equal(blog);
  });

  it('allows to manually instantiate a resource', () => {
    const redhio = new Redhio({ shopName, accessToken });
    const blog = new Blog(redhio);

    expect(redhio.hasOwnProperty('blog')).to.be.false;

    redhio.blog = blog;

    expect(redhio.hasOwnProperty('blog')).to.be.true;
    expect(redhio.blog).to.equal(blog);
  });

  it('has undefined callLimit values for the initial instance', () => {
    const redhio = new Redhio({ shopName, accessToken });

    expect(redhio.callLimits).to.deep.equal({
      remaining: undefined,
      current: undefined,
      max: undefined
    });
  });

  describe('Redhio#request', () => {
    const url = assign({ path: '/test' }, redhio.baseUrl);
    const scope = common.scope;

    afterEach(() => expect(nock.isDone()).to.be.true);

    it('returns a RequestError when the request fails', () => {
      const message = 'Something wrong happened';

      scope
        .get('/test')
        .replyWithError(message);

      return redhio.request(url, 'GET').then(() => {
        throw new Error('Test invalidation');
      }, err => {
        expect(err).to.be.an.instanceof(got.RequestError);
        expect(err.message).to.equal(message);
      });
    });

    it('returns a RequestError when timeout expires (1/2)', () => {
      const redhio = new Redhio({ shopName, accessToken, timeout: 100 });

      //
      // `scope.delay()` can only delay the `response` event. The connection is
      // still established so it is useless for this test. To work around this
      // issue a non-routable IP address is used here instead of `nock`. See
      // https://tools.ietf.org/html/rfc5737#section-3
      //
      redhio.baseUrl.hostname = '192.0.2.1';

      return redhio.request(redhio.baseUrl, 'GET').then(() => {
        throw new Error('Test invalidation');
      }, err => {
        expect(err).to.be.an.instanceof(got.RequestError);
        expect(err.message).to.equal('Request timed out');
      });
    });

    it('returns a RequestError when timeout expires (2/2)', () => {
      const redhio = new Redhio({ shopName, accessToken, timeout: 100 });

      scope
        .get('/test')
        .delayBody(200)
        .reply(200, {});

      return redhio.request(url, 'GET').then(() => {
        throw new Error('Test invalidation');
      }, err => {
        expect(err).to.be.an.instanceof(got.RequestError);
        expect(err.message).to.include('Request timed out');
      });
    });

    it('returns a ParseError when it fails to parse the response body', () => {
      scope
        .get('/test')
        .reply(200, 'invalid JSON');

      return redhio.request(url, 'GET').then(() => {
        throw new Error('Test invalidation');
      }, err => {
        expect(err).to.be.an.instanceof(got.ParseError);
        expect(err.message).to.be.a('string');
      });
    });

    it('returns an HTTPError when the server response code is not 2xx', () => {
      scope
        .get('/test')
        .reply(400, {});

      return redhio.request(url, 'GET').then(() => {
        throw new Error('Test invalidation');
      }, err => {
        expect(err).to.be.an.instanceof(got.HTTPError);
        expect(err.message).to.equal('Response code 400 (Bad Request)');
      });
    });

    it('uses basic auth as intended', () => {
      const redhio = new Redhio({ shopName, apiKey, password });
      const url = assign({ path: '/test' }, redhio.baseUrl);

      nock(`https://${shopName}.myredhio.com`, {
        reqheaders: {
          'User-Agent': `${pkg.name}/${pkg.version}`,
          'Accept': 'application/json'
        },
        badheaders: ['X-Redhio-Access-Token']
      }).get('/test')
        .basicAuth({ user: apiKey, pass: password })
        .reply(200, {});

      return redhio.request(url, 'GET');
    });

    it('builds the request body as intended (1/2)', () => {
      nock(`https://${shopName}.myredhio.com`, {
        reqheaders: {
          'User-Agent': `${pkg.name}/${pkg.version}`,
          'X-Redhio-Access-Token': accessToken,
          'Content-Type': 'application/json',
          'Content-Length': val => val > 0,
          'Accept': 'application/json'
        }
      }).post('/test', {
        foo: { bar: 'baz' }
      }).reply(201, {});

      return redhio.request(url, 'POST', 'foo', { bar: 'baz' });
    });

    it('builds the request body as intended (2/2)', () => {
      nock(`https://${shopName}.myredhio.com`, {
        reqheaders: {
          'User-Agent': `${pkg.name}/${pkg.version}`,
          'X-Redhio-Access-Token': accessToken,
          'Content-Type': 'application/json',
          'Content-Length': val => val > 0,
          'Accept': 'application/json'
        }
      }).post('/test', { bar: 'baz' })
        .reply(201, {});

      return redhio.request(url, 'POST', undefined, { bar: 'baz' });
    });

    it('updates callLimits if the relevant header exists (1/2)', () => {
      scope
        .get('/test')
        .reply(200, {}, {
          'X-Redhio-Shop-Api-Call-Limit': '4/40'
        });

      return redhio.request(url, 'GET')
        .then(() => {
          expect(redhio.callLimits).to.deep.equal({
            remaining: 36,
            current: 4,
            max: 40
          });
        });
    });

    it('updates callLimits if the relevant header exists (2/2)', () => {
      scope
        .get('/test')
        .reply(422, {}, {
          'X-Redhio-Shop-Api-Call-Limit': '5/40'
        });

      return redhio.request(url, 'GET').then(() => {
        throw new Error('Test invalidation');
      }, () => {
        expect(redhio.callLimits).to.deep.equal({
          remaining: 35,
          current: 5,
          max: 40
        });
      });
    });

    it('emits the `callLimits` event', (done) => {
      scope
        .get('/test')
        .reply(200, {}, {
          'X-Redhio-Shop-Api-Call-Limit': '6/40'
        });

      redhio.on('callLimits', limits => {
        expect(limits).to.deep.equal({
          remaining: 34,
          current: 6,
          max: 40
        });
        done();
      });

      redhio.request(url, 'GET');
    });

    it('does not update callLimits if the relevant header is missing', () => {
      scope
        .get('/test')
        .reply(200, {});

      return redhio.request(url, 'GET')
        .then(() => {
          expect(redhio.callLimits).to.deep.equal({
            remaining: 34,
            current: 6,
            max: 40
          });
        });
    });

    it('returns the subtree with root node at key', () => {
      const data = { foo: 'bar' };

      scope
        .get('/test')
        .reply(200, data);

      return redhio.request(url, 'GET', 'foo')
        .then(res => expect(res).to.equal(data.foo));
    });

    it('returns the full response body when key is not provided', () => {
      const data = { foo: 'bar' };

      scope
        .get('/test')
        .reply(200, data);

      return redhio.request(url, 'GET')
        .then(res => expect(res).to.deep.equal(data));
    });

    it('returns an empty object when response body is empty', () => {
      scope
        .get('/test')
        .reply(200);

      return redhio.request(url, 'GET')
        .then(res => expect(res).to.deep.equal({}));
    });

    it('is throttled when the autoLimit option is set', () => {
      const original = Redhio.prototype.request;
      const timestamps = [];

      Redhio.prototype.request = function () {
        timestamps.push(Date.now());
        return original.apply(this, arguments);
      };

      const redhio = new Redhio({
        autoLimit: { calls: 1, interval: 100, bucketSize: 1 },
        accessToken,
        shopName
      });

      Redhio.prototype.request = original;

      scope
        .get('/test')
        .times(3)
        .reply(200, {});

      return Promise.all([
        redhio.request(url, 'GET'),
        redhio.request(url, 'GET'),
        redhio.request(url, 'GET')
      ]).then(() => {
        expect(timestamps.length).to.equal(3);
        expect(timestamps[2] - timestamps[1]).to.be.within(80, 120);
        expect(timestamps[1] - timestamps[0]).to.be.within(80, 120);
      });
    });
  });
});
