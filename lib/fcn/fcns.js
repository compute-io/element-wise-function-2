'use strict';

// KEY //

/**
* KEY:
*	1 => number
*	2 => generic array
*	3 => typed array
*	4 => matrix
*/


// FUNCTIONS //

var fcns = {};

/**
* Homogeneous argument types.
*/
fcns[ '1' ] = require( './fcn1.js' );
fcns[ '2' ] = require( './fcn2.js' );
fcns[ '3' ] = require( './fcn3.js' );
fcns[ '4' ] = require( './fcn4.js' );

/**
* Two different argument types.
*/
fcns[ '12' ] = require( './fcn12.js' );
fcns[ '13' ] = require( './fcn13.js' );
fcns[ '14' ] = require( './fcn14.js' );
fcns[ '23' ] = require( './fcn23.js' );
// fcns[ '24' ] = require( './fcn24.js' );
// fcns[ '34' ] = require( './fcn34.js' );

/**
* Three different argument types.
*/
// fcns[ '123' ] = require( './fcn123.js' );
// fcns[ '124' ] = require( './fcn124.js' );
// fcns[ '134' ] = require( './fcn134.js' );
// fcns[ '234' ] = require( './fcn234.js' );

/**
* Four different argument types.
*/
// fcns[ '1234' ] = require( './fcn1234.js' );


// EXPORTS //

module.exports = fcns;
