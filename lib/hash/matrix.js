'use strict';

// MODULES //

var matrix = require( './matrix.matrix.js' ),
	number = require( './matrix.number.js' );


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
		'number': number( fcn )
	};
} // end FUNCTION hash()


// EXPORTS //

module.exports = hash;
