'use strict';

// MODULES //

var fingerprint = require( './../fingerprint' ),
	ctors = require( './ctors.js' );


// OUT //

/**
* FUNCTION: out( types )
*	Returns a function to create an output data structure based on input argument types.
*
* @param {String[]} types - input argument types
* @returns {Function|Null} function to create an output data structure or null
*/
function out( types ) {
	var ctor = ctors[ fingerprint( types ) ];
	return ( ctor === void 0 ) ? null : ctor;
} // end FUNCTION out()


// EXPORTS //

module.exports = out;
