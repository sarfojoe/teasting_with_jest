## Task: Create and test PhoneRegister class

### phones.json

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "87654321" },
      { "type": "mobile", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "56834923" },
      { "type": "work", "number": "32121367" },
      { "type": "work", "number": "7635462" }
    ]
  }
]
```

Create a class PhoneRegister.

## Phone-API

## constructor

Phones json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'phone info missing'`.

### test 1: object created

```js
new PhoneRegister(jsonFile);
```

test if field phones of the object is the same as json passed as a parameter

### test 2: missing parameter throws an exception 'phone info missing'

```js
new PhoneRegister();
```

# ********************************\*********************************

## getTypes()

returns all the phone types found in all phone data. A type is added to the result array only once. If there are no phones, the function returns an empty array.

### Test 1: method getTypes is defined

### Test 2:

get types of the default json

```json
["home", "work", "mobile"]
```

### Test 3: persons have no phones

if there are no phones

```js
testdata = [
  {
    firstname: "Leila",
    lastname: "Hökki",
    phones: [],
  },
  {
    firstname: "Matt",
    lastname: "River",
    phones: [],
  },
];
```

returns an empty array

```json
[]
```

### Test 4: no persons in phoneRegister

```js
testdata = [];
```

returns an empty array

```js
testdata = [];
```

# ********************************\*********************************

## getNumbersByType(firstname, lastname, type)

Function returns an array of phone numbers of the given `type` and `firstname` and `lastname`.

- If no person with the given name is found, an empty array is returned.
- If at least one parameter is missing, the function throws an exception **'missing parameter'**

### Test 1: method getNumbersByType is defined

### Test 2: use default data get type that returns only one number

```js
getNumbersByType("Leila", "Hökki", "home");
```

returns

```json
["12345678"]
```

### Test 3: use default data get type that returns more than one number

```js
getNumbersByType("Matt", "River", "work");
```

returns

```json
["32121367", "7635462"]
```

### Test 4: wrong type or wrong name returns an empty array

These return an empty array:

```js
getNumbersByType("Leila", "Hökki", "x");
getNumbersByType("Leila", "x", "home");
getNumbersByType("x", "Hökki", "home");
getNumbersByType("x", "y", "home");
```

### Test 5: missing parameter throws an exception 'missing parameter'

These tests throw an exception 'missing parameter'

```js
getNumbersByType("Leila", "Hökki");
getNumbersByType("Leila");
getNumbersByType();
```

# ********************************\*********************************

## getAllNumbersByType(type)

Returns an array of names and numbers of given type. If no number of given type is found, returns an empty array

If a parameter type is missing, the function throws an exeption **'missing parameter'**.

## getAllNumbers()

Returns all phone numbers in an array, each as an object of form:

```json
{ "firstname": " ", "lastname": " ", "phones": [] }
```

The object in `phones` array is of form

```json
{ "type": " ", "number": "" }
```

If a person doesn't have a phone (phones-field is an empty array), then the person is not
added into the result array.

## getName(number)

The function searches the given phone number from the telephone registry. If the number is found, the function returns an json object of form

```json
{ "firstname": "", "lastname": "" }
```

If no phone with the given number is found, the function returns `null`.
