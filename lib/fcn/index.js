'use strict';

// MODULES //

var fcns = require( './fcns.js' ),
	fingerprint = require( './../fingerprint' );


// CREATE FUNCTION //

/**
* FUNCTION: create( types, fcn )
*	Returns an apply function based on input argument types.
*
* @param {String[]} types - input argument types
* @param {Function} fcn - function to apply
* @returns {Function|Null} apply function or null
*/
function create( types, fcn ) {
	var f = fcns[ fingerprint( types ) ];
	if ( f === void 0 ) {
		return null;
	}
	return f( fcn, types );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
