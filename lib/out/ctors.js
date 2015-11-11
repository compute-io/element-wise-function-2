'use strict';

// MODULES //

var noop = require( '@kgryte/noop' ),
	matrix = require( './matrix.js' ),
	typedarray = require( './typedarray.js' ),
	array = require( './array.js' );


// KEY //

/**
* KEY:
*	1 => number
*	2 => generic array
*	3 => typed array
*	4 => matrix
*/


// OUTPUT CONSTRUCTORS //

var ctors = {};

/**
* Number.
*/
ctors[ '1' ] = noop;

/**
* Array.
*/
ctors[ '2' ] = array;
ctors[ '12' ] = array;
ctors[ '23' ] = array;
ctors[ '123' ] = array;

/**
* Typed array.
*/
ctors[ '3' ] = typedarray;
ctors[ '13' ] = typedarray;

/**
* Matrix.
*/
ctors[ '4' ] = matrix;
ctors[ '14' ] = matrix;
ctors[ '24' ] = matrix;
ctors[ '34' ] = matrix;
ctors[ '124' ] = matrix;
ctors[ '134' ] = matrix;
ctors[ '234' ] = matrix;
ctors[ '1234' ] = matrix;


// EXPORTS //

module.exports = ctors;
