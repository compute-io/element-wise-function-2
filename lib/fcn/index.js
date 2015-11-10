'use strict';

// MODULES //

var matrixfun = require( 'compute-matrix-function' ),
	arrayfun = require( 'compute-array-function' ),
	typedarrayfun = require( 'compute-typed-array-function' ),
	matrixnumfun = require( 'compute-matrix-number-function' ),
	fingerprint = require( './../fingerprint' );


// CREATE FUNCTION //

/**
* FUNCTION: create( types, fcn )
*	Returns an apply function based on input argument types.
*
* @param {String[]} types - input argument types
* @param {Function} fcn - function to apply
* @returns {Function|Null} apply function or null
*/
function create( types, fcn ) {
	var fp = fingerprint( types );
	switch ( fp ) {
	case '1':
		return fcn;
	case '2':
		return arrayfun.create( fcn, types.length );
	case '3':
		return typedarrayfun.create( fcn, types.length );
	case '4':
		return matrixfun.create( fcn, types.length );
	case '12':
		return null;
	case '13':
		return null;
	case '14':
		return matrixnumfun.create( fcn, types );
	case '23':
		return null;
	case '24':
		return null;
	case '34':
		return null;
	case '123':
		return null;
	case '124':
		return null;
	case '134':
		return null;
	case '234':
		return null;
	case '1234':
		return null;
	}
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
