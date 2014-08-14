# [gulp](http://gulpjs.com)-google-cdn [![Build Status](https://travis-ci.org/sindresorhus/gulp-google-cdn.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-google-cdn)

> Replaces script references with [Google CDN](https://github.com/passy/google-cdn) ones

*Issues with the output should be reported on the google-cdn [issue tracker](https://github.com/passy/google-cdn/issues).*


## Install

```sh
$ npm install --save-dev gulp-google-cdn
```


## Usage

```js
var gulp = require('gulp');
var googlecdn = require('gulp-google-cdn');

gulp.task('default', function () {
	return gulp.src('index.html')
		.pipe(googlecdn(require('./bower.json')))
		.pipe(gulp.dest('dist'));
});
```


## API

### googlecdn(bowerConfig, [options])

#### bowerConfig

*Required*  
Type: `object`

#### options

See the google-cdn [options](https://github.com/passy/google-cdn#googlecdncontent-bowerjson-options-callback).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
