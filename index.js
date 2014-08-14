'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var googlecdn = require('google-cdn');

module.exports = function (bowerConfig, options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-google-cdn', 'Streaming not supported'));
			return;
		}

		googlecdn(file.contents.toString(), bowerConfig, options, function (err, data) {
			if (err) {
				cb(new gutil.PluginError('gulp-google-cdn', err, {fileName: file.path}));
				return;
			}

			file.contents = new Buffer(data);
			cb(null, file);
		});
	});
};
