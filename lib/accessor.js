'use strict';

/**
* FUNCTION: create( fcn )
*	Creates an array function which uses an accessor.
*
* @param {Function} fcn - function to apply
* @returns {Function} array function
*/
function create( fcn ) {
	/**
	* FUNCTION: apply( out, x, y, accessor )
	*	Applies a function to each array element using an accessor.
	*
	* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
	* @param {Number|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} x - input value
	* @param {Number|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} y - input value
	* @param {Function} accessor - accessor function for accessing array values
	* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
	*/
	return function apply( out, x, y, clbk ) {
		var len,
			v1,
			v2,
			i;

		if ( typeof x === 'number' ) {
			len = y.length;
			for ( i = 0; i < len; i++ ) {
				v1 = clbk( x, i, 0 );
				v2 = clbk( y[ i ], i, 1 );
				if ( typeof v1 === 'number' && typeof v2 === 'number' ) {
					out[ i ] = fcn( v1, v2 );
				} else {
					out[ i ] = NaN;
				}
			}
			return out;
		}
		len = x.length;
		if ( typeof y === 'number' ) {
			for ( i = 0; i < len; i++ ) {
				v1 = clbk( x[ i ], i, 0 );
				v2 = clbk( y, i, 1 );
				if ( typeof v1 === 'number' && typeof v2 === 'number' ) {
					out[ i ] = fcn( v1, v2 );
				} else {
					out[ i ] = NaN;
				}
			}
			return out;
		}
		if ( len !== y.length ) {
			throw new Error( 'invalid input argument. Inputs arrays must have the same length.' );
		}
		for ( i = 0; i < len; i++ ) {
			v1 = clbk( x[ i ], i, 0 );
			v2 = clbk( y[ i ], i, 1 );
			if ( typeof v1 === 'number' && typeof v2 === 'number' ) {
				out[ i ] = fcn( v1, v2 );
			} else {
				out[ i ] = NaN;
			}
		}
		return out;
	}; // end FUNCTION apply()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
