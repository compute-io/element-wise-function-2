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
	return arrayfun.create( apply, 3 );

	/**
	* FUNCTION: apply( x, y )
	*	Wraps an input function and type checks array elements. If both values are numeric, applies the provided function; otherwise, returns `NaN`.
	*
	* @private
	* @param {*} x - input value
	* @param {*} y - input value
	* @returns {Number} evaluated function
	*/
	function apply( x, y ) {
		if ( typeof x !== 'number' || typeof y !== 'number' ) {
			return NaN;
		}
		return fcn( x, y );
	} // end FUNCTION apply()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;