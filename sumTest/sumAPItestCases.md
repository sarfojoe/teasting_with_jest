# Sum API

## **sum(a,b)**

Returns the sum of two numbers. Numbers are passed to the function as parameters.

- if parameter is missing, throws an exception: `'parameter missing'`
- if parameters are not numbers, throws an exception: `'only numbers allowed'`

## Test cases

### 1. function sum defined

### 2. sums

#### 2.1. integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(-2,-4) return -6
- sum(-2, 4) return 2
- sum(2, -4) return -2
- sum(0,0) returns 0
- sum(0,3) return 3
- sum(3,0) return 3
- sum(0,-3) return -3
- sum(-3,0) return -3

#### 2.2. floating points

- sum(10, 11.5) return 21.5
- sum(2.5, 3) retuns 5.5
- sum(-2.5, 3) returns 0.5
- sum(3, -2.5) returns 0.5
- sum(-3, 2.5) returns -0.5
- sum(-3,-2.5) returns -5.5
- sum(-2.5, -2.5) return -5
- sum(2.5,2.5) return 5
- sum(-2.5, 2.5) return 0
- sum(2.4, -2.5) return -0.1

### 3. Missing parameters

- sum() throws an exception `'parameter missing'`
- sum(1) throws an exception `'parameter missing'`
- sum('a') throws an exception `'parameter missing'`
- sum('') throws an exception `'parameter missing'`

### 4. Parameters are not numbers

- sum('a',2) throws an exception `'only numbers allowed'`
- sum(1,'a') throws an exception `'only numbers allowed'`
- sum('a','b') throws an exception `'only numbers allowed'`
- sum('','') throws an exception `'only numbers allowed'`
- sum(null, 1) throws an exception `'parameter missing'`
- sum(undefined, 1) throws an exception `'parameter missing'`

## **subtract(a,b)**

Returns the difference a-b of two numbers. Numbers are passed to the function as parameters.

- if parameter is missing, throws an exception: `'parameter missing'`
- if parameters are not numbers, throws an exception: `'only numbers allowed'`

### 2 subtract

#### 2.1. integers

    [
        [1,1,0],
        [2,3,-1],
        [-2,-4, 2],
        [-2, 4, -6],
        [2, -4, 6],
        [0,0, 0],
        [0,3,-3],
        [3,0,3],
        [0,-3, 3],
        [-3,0,-3]
    ]

#### 2.2. floating points

    [
        [10, 11.5, -1.5],
        [2.5, 3, -0.5],
        [-2.5, 3, -5.5],
        [3, -2.5, 5.5],
        [-3, 2.5, -5.5],
        [-3, -2.5, -0.5],
        [-2.5, -2.5, 0],
        [2.5, 2.5, 0],
        [-2.5, 2.5, -5],
        [2.4, -2.5, 4.9]
    ]

### 3. Missing parameters

- subtract() throws an exception `'parameter missing'`
- subtract(1) throws an exception `'parameter missing'`
- subtract('a') throws an exception `'parameter missing'`
- subtract('') throws an exception `'parameter missing'`

### 4. Parameters are not numbers

- subtract('a',2) throws an exception `'only numbers allowed'`
- subtract(1,'a') throws an exception `'only numbers allowed'`
- subtract('a','b') throws an exception `'only numbers allowed'`
- subtract('','') throws an exception `'only numbers allowed'`
- subtract(null, 1) throws an exception `'parameter missing'`
- subtract(undefined, 1) throws an exception `'parameter missing'`
