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
};
