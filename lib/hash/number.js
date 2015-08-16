'use strict';

// MODULES //

var matrix = require( './number.matrix.js' ),
	typedarray = require( './number.typedarray.js' ),
	array = require( './number.array.js' );


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
		'number': fcn
	};
} // end FUNCTION hash()


// EXPORTS //

module.exports = hash;
