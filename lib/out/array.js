'use strict';

// MODULES //

var array = require( 'dstructs-array' );


// CREATE //

/**
* FUNCTION: create( len[, dtype] )
*	Creates a new array.
*
* @param {Number} len - array length
* @param {String} [dtype="generic"] - output data type
* @returns {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} new array
*/
function create( len, dtype ) {
	return array( len, dtype || 'generic' );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
