var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.tags.getClusters', function () {

	it('requires "tag"', function () {

		assert.throws(function () {
			flickr.tags.getClusters({});
		}, function (err) {
			return err.message === 'Missing required argument "tag"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.tags.getClusters({
			tag: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.tags.getClusters');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.tag, '_');
	});

});
