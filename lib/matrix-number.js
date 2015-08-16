'use strict';

// MODULES //

var matrixfun = require( 'compute-matrix-number-function' );


// CREATE //

/**
* FUNCTION: create( fcn )
*	Creates a matrix function.
*
* @param {Function} fcn - function to apply
* @returns {Function} matrix function
*/
function create( fcn ) {
	return matrixfun.create( fcn, ['matrix','number'] );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
