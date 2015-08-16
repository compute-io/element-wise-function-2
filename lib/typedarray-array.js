'use strict';

/**
* FUNCTION: create( fcn )
*	Creates an array function.
*
* @param {Function} fcn - function to apply
* @returns {Function} array function
*/
function create( fcn ) {
	/**
	* FUNCTION: apply( out, x, y )
	*	Applies a function to each array element.
	*
	* @private
	* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
	* @param {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} x - input array
	* @param {Array} y - input array
	* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
	*/
	return function apply( out, x, y ) {
		var len = x.length,
			i;

		if ( y.length !== len ) {
			throw new Error( 'invalid input arguments. Input arrays must have the same length.' );
		}
		for ( i = 0; i < len; i++ ) {
			if ( typeof y[ i ] === 'number' ) {
				out[ i ] = fcn( x[ i ], y[ i ] );
			} else {
				out[ i ] = NaN;
			}
		}
		return out;
	}; // end FUNCTION apply()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
