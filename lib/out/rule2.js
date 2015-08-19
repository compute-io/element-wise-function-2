'use strict';

// MODULES //

var matrix = require( './matrix.js' );


// RULE //

/**
* FUNCTION: rule( types )
*	If all input arguments are only matrices and numbers, return a matrix.
*
* @param {String[]} types - argument types
* @returns {Function|Boolean} function to create an output data structure or false
*/
function rule( types ) {
	var len = types.length,
		i;

	for ( i = 0; i < len; i++ ) {
		if ( types[ i ] !== 'matrix' && types[ i ] !== 'number' ) {
			return false;
		}
	}
	return matrix;
} // end FUNCTION rule()


// EXPORTS //

module.exports = rule;
