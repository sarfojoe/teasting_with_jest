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

## getTypes()

returns all the phone types found in all phone data. A type is added to the result array only once. If there are no phones, the function returns an empty array.

## getNumbersByType(firstname, lastname, type)

Function returns an array of phone numbers of the given `type` and `firstname` and `lastname`.

- If no person with the given name is found, an empty array is returned.
- If at least one parameter is missing, the function throws an exception **'missing parameter'**

<div style="page-break-after:always"></div>

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
