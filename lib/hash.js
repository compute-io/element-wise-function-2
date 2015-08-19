'use strict';

// MODULES //

var out = rquire( './out' );


// VARIABLES //

var argTypes,
	len,
	o, i;

argTypes = [
	[ 'matrix', 'matrix' ],
	[ 'matrix', 'number' ],
	[ 'typedarray', 'typedarray' ],
	[ 'typedarray', 'array' ],
	[ 'typedarray', 'number' ],
	[ 'array', 'typedarray' ],
	[ 'array', 'array' ],
	[ 'array', 'number' ],
	[ 'number', 'matrix' ],
	[ 'number', 'typedarray' ],
	[ 'number', 'array' ],
	[ 'number', 'number' ]
];

len = argTypes.length;
for ( i = 0; i < len; i++ ) {
	o = out( argTypes[ i ] );
	if ( o === null ) {
		throw new Error( 'invalid argument pair.' );
	}
}


