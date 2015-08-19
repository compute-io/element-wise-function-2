TODO
====

1. 	matrix-number apply
	-	pending review
2. 	array-value apply
	-	
3. 	typed-array-number apply
	-	needs to be reviewed
4. 	array-number
	-	pending review
5. 	accessor apply
	-	
6. 	


### Rules

#### Output

1. If provided only matrices
	-	output is a float64 matrix
2. If provided only typed arrays
	-	default output is a float64 typed array
3. If provided only typed arrays and numbers
	-	default output is a float64 typed array
4. If provided an array
	-	default output is a plain array
5. If provided only matrices and numbers
	-	default output is a float64 matrix
6. 


#### Functions

1. If provided only numbers
	-	use provided function
2. If provided only matrices
	-	use matrixfun
3. If provided only matrices and numbers
	-	use matrix-number fun
4. If provided matrices and a typed array
	-	return a NaN-filled matrix
	-	until support array broadcasting
5. If provided matrices and an array
	-	return a NaN-filled matrix
	-	until support array broadcasting
6. If provided matrices and anything else
	-	return a NaN-filled matrix
	-	until support array broadcasting
7. If provided only typed arrays
	-	use typedarrayfun
8. If provided only typed arrays and arrays
	-	use arrayfun with wrapper
9. If provided only typed arrays and numbers
	-	use typedarray-number fun
10. If provided typed arrays and anything else (not a matrix),
	-	return a NaN-filled typed array
11. If provided only arrays,
	-	use arrayfun
12. If provided only arrays and numbers
	-	use array-value fun with wrapper
13. If provided arrays and anything else
	-	return a NaN-filed array
14. 
