'use strict';

// MODULES //

var unique = require( 'compute-unique' ),
	mapping = require( './mapping.js' );


// FINGERPRINT //

/**
* FUNCTION: fingerprint( types )
*	Maps an array of argument types to a fingerprint string.
*
* @param {String[]} types - input argument types
* @returns {String|Null} fingerprint or null
*/
function fingerprint( types ) {
	var len = types.length,
		id,
		fp,
		i;

	fp = new Array( len );
	for ( i = 0; i < len; i++ ) {
		id = mapping[ types[ i ] ];
		if ( id === void 0 ) {
			return null;
		}
		fp[ i ] = id;
	}
	// TODO: unique should return a reference to the mutated array.
	unique( fp );

	return fp.join( '' );
} // end FUNCTION fingerprint()


// EXPORTS //

module.exports = fingerprint;
