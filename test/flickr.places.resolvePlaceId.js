var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.places.resolvePlaceId', function () {

	it('requires "place_id"', function () {

		assert.throws(function () {
			flickr.places.resolvePlaceId({});
		}, function (err) {
			return err.message === 'Missing required argument "place_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.resolvePlaceId({
			place_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.places.resolvePlaceId');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.place_id, '_');
	});

});
