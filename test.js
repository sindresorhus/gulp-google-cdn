'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var googlecdn = require('./');

it('should replace libs with Google CDN hosted ones', function (cb) {
	this.timeout(10000);

	var stream = googlecdn(require('./bower.json'));

	stream.once('data', function (file) {
		assert(/ajax\.googleapis/.test(file.contents.toString()));
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		path: 'index.html',
		contents: new Buffer('<script src="bower_components/jquery/dist/jquery.js"></script>')
	}));

	stream.end();
});
