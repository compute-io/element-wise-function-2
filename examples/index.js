'use strict';

var matrix = require( 'dstructs-matrix' ),
	array = require( 'dstructs-array' ),
	ewise2 = require( './../lib' );

var adder,
	out;

function add( x, y ) {
	return x + y;
}

// Create an element-wise API:
adder = ewise2( add );

// Add numbers:
out = adder( 3, 5 );
console.log( 'Number-Number:' );
console.log( out );
console.log( '\n' );

// Add a number and an array:
out = adder( 3, [1,2,3] );
console.log( 'Number-Array:' );
console.log( out );
console.log( '\n' );

// Add a number and a typed array:
out = adder( array(3,'int8'), 5 );
console.log( 'Number-Typed Array:' );
console.log( out );
console.log( '\n' );

// Add a number and a matrix:
out = adder( matrix( [2,2], 'int16' ), 5 );
console.log( 'Number-Matrix:' );
console.log( out.toString() );
console.log( '\n' );

// Add array elements:
out = adder( [1,2,3], array([4,5,6],'float32') );
console.log( 'Array-Array:' );
console.log( out );
console.log( '\n' );

// Add matrix elements:
out = adder( matrix([1,2,3,4],[2,2]), matrix([5,6,7,8],[2,2]) );
console.log( 'Matrix-Matrix:' );
console.log( out );
console.log( '\n' );
