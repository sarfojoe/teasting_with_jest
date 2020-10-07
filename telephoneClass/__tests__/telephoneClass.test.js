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
  let phoneRegister;

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

    test('work numbers of Matt River return ["32121367","7635462"]', () => {
      expect(
        phoneRegister.getNumbersByType("Matt", "River", "work").sort()
      ).toEqual(["32121367", "7635462"].sort());
    });
  });

  describe("wrong type or wrong name returns an empty array", () => {
    beforeEach(() => {
      phoneRegister = new PhoneRegister(phones);
    });

    const testValues = [
      ["Leila", "Hökki", "x", []],
      ["Leila", "x", "home", []],
      ["x", "Hökki", "home", []],
      ["x", "y", "home", []],
      ["x", "y", "z", []],
    ];

    test.each(testValues)(
      'getNumbersByType("%s", "%s", "%s") returns an empty array %s',
      (firstname, lastname, type, expected) => {
        expect(
          phoneRegister.getNumbersByType(firstname, lastname, type)
        ).toEqual(expected);
      }
    );
  });

  describe('missing parameter throws an exception "missing parameter"', () => {
    beforeEach(() => {
      phoneRegister = new PhoneRegister(phones);
    });

    test("type missing", () => {
      expect(() => phoneRegister.getNumbersByType("Leila", "Hökki")).toThrow(
        "missing parameter"
      );
    });

    test("lastname and type are missing", () => {
      expect(() => phoneRegister.getNumbersByType("Leila")).toThrow(
        "missing parameter"
      );
    });

    test("all parameters missing", () => {
      expect(() => phoneRegister.getNumbersByType()).toThrow(
        "missing parameter"
      );
    });
  });
});

describe("Test getAllNumbersByType", () => {
  let phoneRegister;

  beforeEach(() => {
    phoneRegister = new PhoneRegister(phones);
  });

  test("method getAllNumbersByType is defined", () => {
    expect(phoneRegister.getAllNumbersByType).toBeDefined();
  });

  test("get all numbers of type home", () => {
    const expectedResult = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "home", tel: "12345678" },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "home", tel: "56834923" },
      },
    ];
    expect(phoneRegister.getAllNumbersByType("home")).toEqual(expectedResult);
  });

  test("get all numbers of type work", () => {
    const expectedResult = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "work", tel: "87654321" },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "work", tel: "32121367" },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "work", tel: "7635462" },
      },
    ];
    expect(phoneRegister.getAllNumbersByType("work")).toEqual(expectedResult);
  });

  test("get all numbers of type x will return an empty array []", () => {
    expect(phoneRegister.getAllNumbersByType("x")).toEqual([]);
  });

  test('missing type throws an exception "missing parameter"', () => {
    expect(() => phoneRegister.getAllNumbersByType()).toThrow(
      "missing parameter"
    );
  });
});

describe("Test getAllNumbers", () => {
  test("method getAllNumbers is defined", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.getAllNumbers).toBeDefined();
  });

  test("get all numbers from the default data", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.getAllNumbers()).toEqual(phones);
  });

  test("some phones are missing", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "12345678" },
          { type: "work", number: "87654321" },
          { type: "mobile", number: "05040302" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [],
      },
    ];

    const expectedResult = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "12345678" },
          { type: "work", number: "87654321" },
          { type: "mobile", number: "05040302" },
        ],
      },
    ];

    const phoneRegister = new PhoneRegister(testData);

    expect(phoneRegister.getAllNumbers()).toEqual(expectedResult);
  });

  test("all phones are missing", () => {
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

    const phoneRegister = new PhoneRegister(testData);

    expect(phoneRegister.getAllNumbers()).toEqual([]);
  });
});

describe("Test getName", () => {
  let phoneRegister;

  beforeEach(() => (phoneRegister = new PhoneRegister(phones)));

  test("method getName is defined", () => {
    expect(phoneRegister.getName).toBeDefined();
  });

  test('get the name of number "12345678" return {"firstname":"Leila", "lastname":"Hökki"}', () => {
    expect(phoneRegister.getName("12345678")).toEqual({
      firstname: "Leila",
      lastname: "Hökki",
    });
  });

  const testValues = [
    ["12345678", { firstname: "Leila", lastname: "Hökki" }],
    ["87654321", { firstname: "Leila", lastname: "Hökki" }],
    ["05040302", { firstname: "Leila", lastname: "Hökki" }],
    ["56834923", { firstname: "Matt", lastname: "River" }],
    ["32121367", { firstname: "Matt", lastname: "River" }],
    ["7635462", { firstname: "Matt", lastname: "River" }],
  ];

  test.each(testValues)("number %s returns %p", (number, expectedValue) => {
    expect(phoneRegister.getName(number)).toEqual(expectedValue);
  });

  test("wrong number", () => {
    expect(phoneRegister.getName("0000")).toBeNull();
  });

  test("missing parameter", () => {
    expect(phoneRegister.getName()).toBeNull();
  });
});
