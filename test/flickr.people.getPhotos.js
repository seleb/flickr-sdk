var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.people.getPhotos', function () {

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.people.getPhotos({});
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.people.getPhotos({
			user_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.people.getPhotos');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.user_id, '_');
	});

});
