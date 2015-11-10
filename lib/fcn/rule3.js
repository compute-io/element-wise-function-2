'use strict';

// MODULES //

var nans = require( './nans.js' );


// APPLY //

/**
* FUNCTION: apply( types )
*	Creates an apply function based on the input types.
*
* @private
* @param {String[]} types - argument types
* @returns {Function} apply function
*/
function apply( types ) {
	/**
	* FUNCTION: apply()
	*
	*/
	return function apply() {
		var nargs = arguments.length,
			out,
			x,
			M, N,
			i;

		x = arguments[ 0 ];
		M = x.shape[ 0 ];
		N = x.shape[ 1 ];
		for ( i = 1; i < nargs; i++ ) {
			if ( types[ i-1 ] === 'matrix' ) {
				x = arguments[ i ];
				if (
					x.shape[ 0 ] !== M ||
					x.shape[ 1 ] !== N
				) {
					throw new Error( 'invalid input argument. All input matrices must have the same dimensions.' );
				}
			}
			// TODO: check dims of typed arrays
		}
		out.data = nans( out.data );
		return out;
	};
} // end FUNCTION apply()


// RULE //

/**
* FUNCTION: rule( types, fcn )
*	If all input arguments are only matrices and typed arrays, return a NaN-filled matrix.
*
* @param {String[]} types - argument types
* @param {Function} fcn - function to apply
* @returns {Function|Boolean} function or false
*/
function rule( types, fcn ) {
	var len = types.length,
		i;

	for ( i = 0; i < len; i++ ) {
		if ( types[ i ] !== 'matrix' && types[ i ] !== 'typedarray' ) {
			return false;
		}
	}
	return matrixfun.create( fcn, types );
} // end FUNCTION rule()


// EXPORTS //

module.exports = rule;
