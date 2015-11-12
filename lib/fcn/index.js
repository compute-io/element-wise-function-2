'use strict';

// MODULES //

var fcns = require( './fcns.js' ),
	fingerprint = require( './../fingerprint' );


// CREATE FUNCTION //

/**
* FUNCTION: create( fcn, types )
*	Returns an apply function based on input argument types.
*
* @param {Function} fcn - function to apply
* @param {String[]} types - input argument types
* @returns {Function|Null} apply function or null
*/
function create( fcn, types ) {
	var f = fcns[ fingerprint( types ) ];
	if ( f === void 0 ) {
		return null;
	}
	return f( fcn, types );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
