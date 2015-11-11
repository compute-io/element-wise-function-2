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
	var len = types.length,
		idx = [],
		i;

	for ( i = 0; i < len; i++ ) {
		if ( types[ i ] === 'array' ) {
			idx.push( i );
		}
	}
	return arrayfun.create( apply, types );

	/**
	* FUNCTION: apply( ...x )
	*	Wraps an input function and type checks input arguments. If all values are numeric, applies the provided function; otherwise, returns `NaN`.
	*
	* @private
	* @param {...Number|...*} x - input values
	* @returns {Number} evaluated function
	*/
	function apply() {
		var len = arguments.length,
			args = new Array( len ),
			i;

		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}
		len = idx.length;
		for ( i = 0; i < len; i++ ) {
			if ( typeof args[ idx[i] ] !== 'number' ) {
				return NaN;
			}
		}
		return fcn.apply( null, args );
	} // end FUNCTION apply()
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
