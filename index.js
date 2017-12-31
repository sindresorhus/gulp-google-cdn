'use strict';
const through = require('through2');
const googleCdn = require('google-cdn');
const PluginError = require('plugin-error');
const Buffer = require('safe-buffer').Buffer;

module.exports = (bowerConfig, options) => {
	return through.obj((file, enc, cb) => {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-google-cdn', 'Streaming not supported'));
			return;
		}

		googleCdn(file.contents.toString(), bowerConfig, options, (err, data) => {
			if (err) {
				cb(new PluginError('gulp-google-cdn', err, {fileName: file.path}));
				return;
			}

			file.contents = Buffer.from(data);
			cb(null, file);
		});
	});
};
