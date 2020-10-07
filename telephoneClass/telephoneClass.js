"use strict";

module.exports = class PhoneRegister {
  constructor(phoneRegister) {
    if (phoneRegister) {
      this.phoneRegister = phoneRegister;
    } else {
      throw new Error("phone info missing");
    }

    // if (!phoneRegister) throw new Error('phone info missing');
    // this.phoneRegister = phoneRegister;
  }

  getTypes() {
    let types = [];
    for (let person of this.phoneRegister) {
      for (let phone of person.phones) {
        if (!types.includes(phone.type)) {
          types.push(phone.type);
        }
      }
    }
    return types;
  }

  getNumbersByType(firstname, lastname, type) {
    if (firstname && lastname && type) {
      const numbersFound = [];
      for (let person of this.phoneRegister) {
        if (person.firstname === firstname && person.lastname === lastname) {
          for (let phone of person.phones) {
            if (phone.type === type) {
              numbersFound.push(phone.number);
            }
          }
        }
      }
      return numbersFound;
    } else {
      throw new Error("missing parameter");
    }
  }

  getAllNumbersByType(type) {
    if (!type) throw new Error("missing parameter");
    const numbersFound = [];

    for (let person of this.phoneRegister) {
      for (let phone of person.phones) {
        if (phone.type === type) {
          numbersFound.push({
            firstname: person.firstname,
            lastname: person.lastname,
            number: {
              type: phone.type,
              tel: phone.number,
            },
          });
        }
      }
    }
    return numbersFound;
  }

  getAllNumbers() {
    const found = [];
    for (let person of this.phoneRegister) {
      if (person.phones && person.phones.length > 0) {
        found.push(person);
      }
    }
    return found;
  }

  getName(number) {
    for (let person of this.phoneRegister) {
      for (let phone of person.phones) {
        if (phone.number === number) {
          return {
            firstname: person.firstname,
            lastname: person.lastname,
          };
        }
      }
    }
    return null;
  }
}; //end of class
