var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.panda.getList', function () {

	it('returns a Request instance', function () {
		var req = flickr.panda.getList({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.panda.getList');
		assert.equal(req.header['Content-Type'], 'text/plain');
	});

});
