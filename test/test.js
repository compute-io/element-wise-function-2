/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	create = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-element-wise-function-2', function tests() {

	it( 'should export a function', function test() {
		expect( create ).to.be.a( 'function' );
	});

});
