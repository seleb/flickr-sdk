var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.stats.getCollectionStats', function () {

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionStats({
				collection_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "collection_id"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionStats({
				date: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "collection_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getCollectionStats({
			date: '_',
			collection_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.stats.getCollectionStats');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.date, '_');
		assert.equal(req.params.collection_id, '_');
	});

});
