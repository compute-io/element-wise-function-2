'use strict';

/**
* FUNCTION: create( fcn )
*	Creates a typed array function.
*
* @param {Function} fcn - function to apply
* @returns {Function} typed array function
*/
function create( fcn ) {
	/**
	* FUNCTION: apply( out, x, y )
	*	Applies a function to each typed array element.
	*
	* @private
	* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
	* @param {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} x - input array
	* @param {Number} y - scalar
	* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
	*/
	return function apply( out, x, y ) {
		var len = x.length,
			i;

		for ( i = 0; i < len; i++ ) {
			out[ i ] = fcn( x[ i ], y );
		}
		return out;
	}; // end FUNCTION apply()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
