'use strict';

// MODULES //

var noop = require( '@kgryte/noop' ),
	fingerprint = require( './../fingerprint' ),
	matrix = require( './matrix.js' ),
	typedarray = require( './typedarray.js' ),
	array = require( './array.js' );


// OUT //

/**
* FUNCTION: out( types )
*	Returns a function to create an output data structure based on input argument types.
*
* @param {String[]} types - input argument types
* @returns {Function|Null} function to create an output data structure or null
*/
function out( types ) {
	var fp = fingerprint( types );
	switch ( fp ) {
	case '1':
		return noop;
	case '2':
		return array;
	case '3':
		return typedarray;
	case '4':
		return matrix;
	case '12':
		return array;
	case '13':
		return typedarray;
	case '14':
		return matrix;
	case '23':
		return array;
	case '24':
		return matrix;
	case '34':
		return matrix;
	case '123':
		return array;
	case '124':
		return matrix;
	case '134':
		return matrix;
	case '234':
		return matrix;
	case '1234':
		return matrix;
	}
} // end FUNCTION out()


// EXPORTS //

module.exports = out;
