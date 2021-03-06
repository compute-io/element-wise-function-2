Element-Wise API
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates an element-wise API for a numeric function.


## Installation

``` bash
$ npm install element-wise-function
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var ewise = require( 'element-wise-function' );
```


#### ewise( fcn )

Creates an element-wise API for a numeric `function`.

``` javascript

```


## Examples

``` javascript
var create = require( 'element-wise-function')
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


[npm-image]: http://img.shields.io/npm/v/element-wise-function.svg
[npm-url]: https://npmjs.org/package/element-wise-function

[travis-image]: http://img.shields.io/travis/compute-io/element-wise-function/master.svg
[travis-url]: https://travis-ci.org/compute-io/element-wise-function

[codecov-image]: https://img.shields.io/codecov/c/github/compute-io/element-wise-function/master.svg
[codecov-url]: https://codecov.io/github/compute-io/element-wise-function?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/element-wise-function.svg
[dependencies-url]: https://david-dm.org/compute-io/element-wise-function

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/element-wise-function.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/element-wise-function

[github-issues-image]: http://img.shields.io/github/issues/compute-io/element-wise-function.svg
[github-issues-url]: https://github.com/compute-io/element-wise-function/issues
