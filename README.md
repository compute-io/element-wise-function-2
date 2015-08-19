Element-Wise API
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates an element-wise API for a 2-parameter numeric function.


## Installation

``` bash
$ npm install element-wise-function-2
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var ewise2 = require( 'element-wise-function-2' );
```


#### ewise2( fcn )

Creates an element-wise API for a 2-parameter numeric `function`.

``` javascript

```


## Examples

``` javascript
var create = require( 'element-wise-function-2')
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/element-wise-function-2.svg
[npm-url]: https://npmjs.org/package/element-wise-function-2

[travis-image]: http://img.shields.io/travis/compute-io/element-wise-function-2/master.svg
[travis-url]: https://travis-ci.org/compute-io/element-wise-function-2

[codecov-image]: https://img.shields.io/codecov/c/github/compute-io/element-wise-function-2/master.svg
[codecov-url]: https://codecov.io/github/compute-io/element-wise-function-2?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/element-wise-function-2.svg
[dependencies-url]: https://david-dm.org/compute-io/element-wise-function-2

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/element-wise-function-2.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/element-wise-function-2

[github-issues-image]: http://img.shields.io/github/issues/compute-io/element-wise-function-2.svg
[github-issues-url]: https://github.com/compute-io/element-wise-function-2/issues
