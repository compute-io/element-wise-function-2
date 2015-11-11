'use strict';

// MODULES //

var matrixfun = require( 'compute-matrix-function' );


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
	return matrixfun.create( fcn, types.length );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
