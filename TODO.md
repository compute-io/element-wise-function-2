TODO
====

1. 	matrix-number apply
	-	pending review
2. 	array-value apply
	-	how different from array-number?
3. 	typed-array-number apply
	-	needs to be reviewed
4. 	array-number
	-	pending review?
5. 	accessor apply
	-	should this be included or be something which is provided on a case-by-case basis???
		-	hard to generalize beyond 2 args
6. 	


### Rules

#### Functions

1. If provided only numbers
	[x]	use provided function
2. If provided only matrices
	[x]	use matrixfun
3. If provided only matrices and numbers
	[x]	use matrix-number fun
4. If provided matrices and a typed array
	-	return a NaN-filled matrix
	-	until support array broadcasting
5. If provided matrices and an array
	-	return a NaN-filled matrix
	-	until support array broadcasting
6. If provided matrices and anything else
	-	return a NaN-filled matrix
7. If provided only typed arrays
	[x]	use typedarrayfun
8. If provided only typed arrays and arrays
	-	use arrayfun with wrapper
9. If provided only typed arrays and numbers
	-	use typedarray-number fun
10. If provided typed arrays and anything else (not a matrix),
	-	return a NaN-filled typed array
11. If provided only arrays,
	[x]	use arrayfun
12. If provided only arrays and numbers
	-	use array-value fun with wrapper
13. If provided arrays and anything else
	-	return a NaN-filled array
14. 
