'use strict';

// MODULES //

var fingerprint = require( './fingerprint' ),
	getType = require( './getType.js' ),
	create = require( './create.js' );


// MAIN //

/**
* FUNCTION: main( cache )
*	Returns a function for interfacing with implementations tailored to specific input argument types.
*
* @param {Object} cache - function cache
* @returns {Function} main function
*/
function main( cache ) {
	/**
	* FUNCTION: main( ...x )
	*	Main function.
	*
	* @param {...*} x - input arguments
	* @returns {*} function output
	*/
	return function main() {
		var types,
			args,
			len,
			fcn,
			fp,
			t,
			i;

		len = arguments.length;
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}
		// Determine argument types...
		types = new Array( len );
		for ( i = 0; i < len; i++ ) {
			t = getType( args[ i ] );
			if ( t === null ) {
				// TODO: if 1 is matrix, matrix
				// TODO: else if 1 is array, array
				// TODO: else if typedarray, typedarray
				// TODO: else NaN
			}
			types[ i ] = t;
		}
		fp = fingerprint( types );
		fcn = cache[ fp ];
		if ( fcn === void 0 ) {
			throw new Error( 'invalid input arguments. Unsupported argument combination: [' + types.join( ',' ) + '].' );
		}
		// TODO: create output data structure
		// TODO: shift onto args as first arg
		return fcn.apply( null, args );
	}; // end FUNCTION main()
} // end FUNCTION cache()


// EXPORTS //

module.exports = main;
