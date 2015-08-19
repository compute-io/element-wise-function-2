'use strict';

// MODULES //

var noop = require( '@kgryte/noop' );


// RULE //

/**
* FUNCTION: rule( types )
*	If all input arguments are numbers, return a number.
*
* @param {String[]} types - argument types
* @returns {Function|Boolean} function to create an output data structure or false
*/
function rule( types ) {
	var len = types.length,
		i;

	for ( i = 0; i < len; i++ ) {
		if ( types[ i ] !== 'number' ) {
			return false;
		}
	}
	return noop;
} // end FUNCTION rule()


// EXPORTS //

module.exports = rule;
