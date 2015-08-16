'use strict';

/**
* FUNCTION: create( fcn )
*	Creates a matrix function.
*
* @param {Function} fcn - function to apply
* @returns {Function} matrix function
*/
function create( fcn ) {
	/**
	* FUNCTION: apply( out, x, y )
	*	Applies a function to each matrix element.
	*
	* @private
	* @param {Matrix} out - output matrix
	* @param {Matrix} x - input matrix
	* @param {Number} y - scalar
	* @returns {Matrix} output matrix
	*/
	return function apply( out, x, y ) {
		var len = x.length,
			i;

		if ( out.length !== len ) {
			throw new Error( 'invalid input arguments. Input and output matrices must be the same length.' );
		}
		for ( i = 0; i < len; i++ ) {
			out.data[ i ] = fcn( x.data[ i ], y );
		}
		return out;
	}; // end FUNCTION apply()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
