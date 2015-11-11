'use strict';

// MODULES //

var arrayfun = require( 'compute-array-function' );


// CREATE //

/**
* FUNCTION: create( fcn, types )
*	Creates an apply function provided a function and specified argument types.
*
* @param {Function} fcn - function to apply
* @param {String[]} types - argument types
* @returns {Function} apply function
*/
function create( fcn, types ) {
	return arrayfun.create( fcn, types.length );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
