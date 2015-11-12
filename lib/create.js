'use strict';

// MODULES //

var isStringArray = require( 'validate.io-string-array' ),
	fingerprint = require( './fingerprint' ),
	createFcn = require( './fcn' );


// CREATE //

/**
* FUNCTION: create( fcn, cache )
*	Wraps a numeric function in a closure and returns a function to create an element-wise function based on provided argument types.
*
* @param {Function} fcn - numeric function
* @param {Object} cache - function cache
* @returns {Function} function to create an element-wise function
*/
function create( fcn, cache ) {
	/**
	* FUNCTION: create( types )
	*	Creates an element-wise function based on provided argument types.
	*
	* @param {String[]} types - argument types
	* @returns {Function|Null} element-wise function or null
	*/
	return function create( types ) {
		var fp, f;
		if ( !isStringArray( types ) ) {
			throw new TypeError( 'invalid input argument. Must provide a string array. Value: `' + types + '`.' );
		}
		fp = fingerprint( types );
		f = cache[ fp ];
		if ( f ) {
			return f;
		}
		return createFcn( fcn, types );
	}; // end FUNCTION create()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
