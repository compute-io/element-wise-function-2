'use strict';

// MODULES //

var arrayfun = require( 'compute-array-function' );


// CREATE //

/**
* FUNCTION: create( fcn, types )
*	Creates an array function.
*
* @param {Function} fcn - function to apply
* @param {String[]} types - argument types
* @returns {Function} array function
*/
function create( fcn, types ) {
	return arrayfun.create( apply, types.length );

	/**
	* FUNCTION: apply( ...x )
	*	Wraps an input function and type checks input arguments. If all values are numeric, applies the provided function; otherwise, returns `NaN`.
	*
	* @private
	* @param {...*} x - input values
	* @returns {Number} evaluated function
	*/
	function apply() {
		var len = arguments.length,
			args = new Array( len ),
			i;

		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
			if ( typeof args[ i ] !== 'number' ) {
				return NaN;
			}
		}
		return fcn.apply( null, args );
	} // end FUNCTION apply()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
