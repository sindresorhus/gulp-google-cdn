'use strict';
const through = require('through2');
const googleCdn = require('google-cdn');
const PluginError = require('plugin-error');

module.exports = (bowerConfig, options) => {
	return through.obj((file, encoding, callback) => {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-google-cdn', 'Streaming not supported'));
			return;
		}

		googleCdn(file.contents.toString(), bowerConfig, options, (error, data) => {
			if (error) {
				callback(new PluginError('gulp-google-cdn', error, {fileName: file.path}));
				return;
			}

			file.contents = Buffer.from(data);
			callback(null, file);
		});
	});
};
