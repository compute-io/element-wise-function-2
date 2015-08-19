'use strict';

// MODULES //

var typedarray = require( './typedarray.js' );


// RULE //

/**
* FUNCTION: rule( types )
*	If all input arguments are only typed arrays and numbers, return a typed array by default.
*
* @param {String[]} types - argument types
* @returns {Function|False} function to create an output data structure or false
*/
function rule( types ) {
	var len = types.length,
		i;

	for ( i = 0; i < len; i++ ) {
		if ( types[ i ] !== 'typedarray' && types[ i ] !== 'number' ) {
			return false;
		}
	}
	return typedarray;
} // end FUNCTION rule()


// EXPORTS //

module.exports = rule;
