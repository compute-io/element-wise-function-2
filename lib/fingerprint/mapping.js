'use strict';

// NOTES //

/**
* Notes:
*	-	mapping values (encodings) should always be a single character
*	-	once [0-9] exhausted, proceed to [a-z], then [A-Z], then [!@#$%^&*()-_+=[]{}|\:;'"<>,./?~`]
*	-	if all one character symbols have been exhausted, rethink the problem, as there exists far too many argument types
*/


// MAPPING //

var mapping = {
	'number': '1',
	'array': '2',
	'typedarray': '3',
	'matrix': '4'
};


// EXPORTS //

module.exports = mapping;
