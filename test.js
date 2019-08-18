/* eslint-env mocha */
'use strict';
const assert = require('assert');
const Vinyl = require('vinyl');
const googleCdn = require('.');

it('replaces libs with Google CDN hosted ones', function (callback) {
	this.timeout(10000);

	const stream = googleCdn(require('./fixtures/bower.json'));

	stream.once('data', file => {
		assert(/ajax\.googleapis/.test(file.contents.toString()));
	});

	stream.on('end', callback);

	stream.end(new Vinyl({
		path: 'index.html',
		contents: Buffer.from('<script src="bower_components/jquery/dist/jquery.js"></script>')
	}));
});
