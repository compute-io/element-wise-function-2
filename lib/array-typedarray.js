'use strict';

// MODULES //

var arrayfun = require( 'compute-array-function' );


// CREATE //

/**
* FUNCTION: create( fcn )
*	Creates an array function.
*
* @param {Function} fcn - function to apply
* @returns {Function} array function
*/
function create( fcn ) {
	return arrayfun.create( apply, 2 );

	/**
	* FUNCTION: apply( x, y )
	*	Wraps an input function and type checks array elements. If the first value is numeric, applies the provided function; otherwise, returns `NaN`.
	*
	* @private
	* @param {*} x - input value
	* @param {Number} y - input value
	* @returns {Number} evaluated function
	*/
	function apply( x, y ) {
		if ( typeof x !== 'number' ) {
			return NaN;
		}
		return fcn( x, y );
	} // end FUNCTION apply()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
