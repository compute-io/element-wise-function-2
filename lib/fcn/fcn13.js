'use strict';

// MODULES //

var arrayfun = require( 'compute-typed-array-number-function' );


// CREATE //

/**
* FUNCTION: create( fcn, types )
*	Creates a typed array function.
*
* @param {Function} fcn - function to apply
* @param {String[]} types - argument types
* @returns {Function} typed array function
*/
function create( fcn, types ) {
	return arrayfun.create( fcn, types );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
