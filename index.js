'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var googlecdn = require('google-cdn');

module.exports = function (bowerConfig, options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-google-cdn', 'Streaming not supported'));
			return cb();
		}

		googlecdn(file.contents.toString(), bowerConfig, options, function (err, data) {
			if (err) {
				this.emit('error', new gutil.PluginError('gulp-google-cdn', err, {fileName: file.path}));
				return cb();
			}

			file.contents = new Buffer(data);
			this.push(file);
			cb();
		}.bind(this));
	});
};
