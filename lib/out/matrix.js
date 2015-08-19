'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' );


// CREATE //

/**
* FUNCTION: create( x[, dtype] )
*	Creates a new matrix having the same shape as a provided input matrix.
*
* @param {Matrix} x - input matrix
* @param {String} [dtype="float64"] - output data type
* @returns {Matrix} new matrix
*/
function create( x, dtype ) {
	return matrix( x.shape, dtype || 'float64' );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
