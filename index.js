'use strict';
var gutil = require('gulp-util');
var map = require('map-stream');
var googlecdn = require('google-cdn');

module.exports = function (bowerConfig, options) {
	return map(function (file, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}

		googlecdn(file.contents.toString(), bowerConfig, options, function (err, data) {
			if (err) {
				return cb(new Error('gulp-google-cdn: ' + err));
			}

			file.contents = new Buffer(data);
			cb(null, file);
		});
	});
};
