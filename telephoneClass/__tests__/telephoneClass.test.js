"use strict";

const PhoneRegister = require("../telephoneClass.js");
const phones = require("../phones.json");

describe("constructor", () => {
  let phoneRegister;

  test("object created", () => {
    phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.phoneRegister).toEqual(phones);
  });

  test('missing parameter throws an exception "phone info missing"', () => {
    expect(() => new PhoneRegister()).toThrow("phone info missing");
  });
});

describe("Test getTypes", () => {
  let phoneRegister;

  test("method getTypes is defined", () => {
    phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.getTypes).toBeDefined();
  });

  test('default testdata returns an array ["home","work","mobile"]', () => {
    phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.getTypes().sort()).toEqual(
      ["home", "work", "mobile"].sort()
    );
  });

  test("persons with no phones returns an empty array", () => {
    const testData = [
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
    phoneRegister = new PhoneRegister(testData);
    expect(phoneRegister.getTypes()).toEqual([]);
  });

  test("no persons in phoneRegister returns an empty array", () => {
    phoneRegister = new PhoneRegister([]);
    expect(phoneRegister.getTypes()).toEqual([]);
  });
});

describe("test getNumbersByType", () => {
  beforeEach(() => {
    phoneRegister = new PhoneRegister(phones);
  });

  test("method getNumbersByType is defined", () => {
    expect(phoneRegister.getNumbersByType).toBeDefined();
  });

  describe("these tests return an array of phone numbers", () => {
    test('home numbers of Leila Hökki return ["12345678"]', () => {
      expect(phoneRegister.getNumbersByType("Leila", "Hökki", "home")).toEqual([
        "12345678",
      ]);
    });
  });
});
