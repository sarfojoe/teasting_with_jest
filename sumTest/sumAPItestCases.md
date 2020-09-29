# Sum API

## **sum(a,b)**

Returns the sum of two numbers. Numbers are passed to the function a parameters.

- if parameter is missing, throws an exception: `'parameter missing'`
- if parameters are not numbers, throws an exception: `'only numbers allowed'`

## Test cases

### function sum defined

### sums

- sum(1,1) returns 2
- sum(2,3) returns 5
- sum(-2,-4) returns -6
- sum(-2,4) returns 2
- sum(2, -4) returns -2
- sum(0,0) returns 0
- sum(0,3) returns 3
- sum(3, 0) returns 3
- sum(0,-3) returns -3
- sum(-3,0) returns -3
- sum(10, 11.5) returns 21.5
- sum(2.5,3) returns 5.5
- sum(-2.5, -2.5) returns -5
- sum(2.5,2.5) returns 5
- sum (-2.5, 2.5) returns 0
- sum(2.4, -2.5) returns -0.1

### missing parameters

- sum() throws an exception `'parameter missing'`
- sum(1) throws an exception `'parameter missing'`
- sum('a') throws an exception `'parameter missing'`
- sum('') throws an exception `'parameter missing'`

### Parameters are not numbers

- sum('a',2) throws an exception `'only numbers allowed'`
- sum(1, 'a') throws an exception `'only numbers allowed'`
- sum('a','b') throws an exception `'only numbers allowed'`
- sum('','') throws an exception `'only numbers allowed'`
