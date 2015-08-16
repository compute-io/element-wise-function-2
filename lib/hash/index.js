'use strict';

// MODULES //

var matrix = require( './matrix.js' ),
	typedarray = require( './typedarray.js' ),
	array = require( './array.js' ),
	number = require( './number.js' );


// HASH //

/**
* FUNCTION: hash( fcn )
*	Returns a hash for handling input arguments.
*
* @param {Function} fcn - function to apply
* @returns {Object} hash
*/
function hash( fcn ) {
	return {
		'matrix': matrix( fcn ),
		'typedarray': typedarray( fcn ),
		'array': array( fcn ),
		'number': number( fcn )
	};
} // end FUNCTION hash()


// EXPORTS //

module.exports = hash;
