'use strict';

// MODULES //

var arrayfun = require( 'compute-typed-array-function' );


// CREATE //

/**
* FUNCTION: create( fcn )
*	Creates a typed array function.
*
* @param {Function} fcn - function to apply
* @returns {Function} typed array function
*/
function create( fcn ) {
	return arrayfun.create( fcn, 3 );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
