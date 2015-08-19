'use strict';

// MODULES //

var array = require( './array.js' );


// RULE //

/**
* FUNCTION: rule( types )
*	If any input arguments are generic arrays, return a generic array by default.
*
* @param {String[]} types - argument types
* @returns {Function|Boolean} function to create an output data structure or false
*/
function rule( types ) {
	var len = types.length,
		i;

	for ( i = 0; i < len; i++ ) {
		if ( types[ i ] === 'array' ) {
			return array;
		}
	}
	return false;
} // end FUNCTION rule()


// EXPORTS //

module.exports = rule;
