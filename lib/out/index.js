'use strict';

// MODULES //

var fs = require( 'fs' );


// VARIABLES //

var RULES = [];

(function getRules() {
	var files,
		mod,
		len,
		re,
		i;

	re = /^rule\d+\.js$/;

	files = fs.readdirSync( __dirname );
	len = files.length;
	for ( i = 0; i < len; i++ ) {
		if ( re.test( files[ i ] ) ) {
			mod = require( './' + files[ i ] );
			RULES.push( mod );
		}
	}
})();


// OUT //

/**
* FUNCTION: out( types )
*	Returns a function to create an output data structure based on input argument types.
*
* @param {String[]} types - input argument types
* @returns {Function|Null} function to create an output data structure or null
*/
function out( types ) {
	var len = RULES.length,
		o,
		i;

	for ( i = 0; i < len; i++ ) {
		o = RULES[ i ]( types );
		if ( o ) {
			return o;
		}
	}
	return null;
} // end FUNCTION out()


// EXPORTS //

module.exports = out;
