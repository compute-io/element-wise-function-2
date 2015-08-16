'use strict';

// MODULES //

var typedarray = require( './typedarray.typedarray.js' ),
	array = require( './typedarray.array.js' ),
	number = require( './typedarray.number.js' );


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
		'typedarray': typedarray( fcn ),
		'array': array( fcn ),
		'number': number( fcn )
	};
} // end FUNCTION hash()


// EXPORTS //

module.exports = hash;
