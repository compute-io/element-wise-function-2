'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' ),
	isArray = require( 'validate.io-array' ),
	isStringArray = require( 'validate.io-string-array' ),
	product = require( 'compute-cartesian-product' ),
	fingerprint = require( './fingerprint' ),
	createFcn = require( './fcn' );


// CREATE ELEMENT-WISE INTERFACE //

/**
* FUNCTION: ewise( fcn, types )
*	Creates an element-wise API for a numeric function.
*
* @param {Function} fcn - numeric function
* @param {String[]} types - input argument types
* @returns {Function} element-wise API
*/
function ewise( fcn, types ) {
	var cache,
		len,
		fp,
		i;

	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( !isArray( types ) ) {
		throw new TypeError( 'invalid input argument. Second argument must be an array. Value: `' + types + '`.' );
	}
	len = types.length;
	for ( i = 0; i < len; i++ ) {
		if ( !isStringArray( types[ i ] ) ) {
			throw new TypeError( 'invalid input argument. Second argument must be an array of string arrays. Value: `' + types + '`.' );
		}
	}
	// Compute a Cartesian product from the input argument types:
	types = product( types );

	// For each argument set, create an element-wise function which accepts the respective input argument types...
	len = types.length;
	cache = {};
	for ( i = 0; i < len; i++ ) {
		fp = fingerprint( types[ i ] );
		if ( cache[ fp ] === void 0 ) {
			cache[ fp ] = createFcn( fcn, types[ i ] );
		}
	}


} // end FUNCTION ewise()


// EXPORTS //

module.exports = ewise;
