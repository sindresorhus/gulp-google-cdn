# gulp-google-cdn

> Replaces script references with [Google CDN](https://github.com/passy/google-cdn) ones

*Issues with the output should be reported on the google-cdn [issue tracker](https://github.com/passy/google-cdn/issues).*


## Install

```
$ npm install --save-dev gulp-google-cdn
```


## Usage

```js
const gulp = require('gulp');
const googleCdn = require('gulp-google-cdn');

exports.default = () => (
	gulp.src('index.html')
		.pipe(googleCdn(require('./bower.json')))
		.pipe(gulp.dest('dist'))
);
```


## API

### googleCdn(bowerConfig, options?)

#### bowerConfig

Type: `object`

#### options

Type: `object`

See the `google-cdn` [options](https://github.com/passy/google-cdn#googlecdncontent-bowerjson-options-callback).
