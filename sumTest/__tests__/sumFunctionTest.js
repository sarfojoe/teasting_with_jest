"use strict";

const functions = require("../sumFunction");

describe("Test if functions are defined", () => {
  test("function sum is defined", () => {
    expect(functions.sum).toBeDefined();
  });
});

describe("test sum with testcases", () => {
  const testCases = [
    [1, 1, 2],
    [2, 3, 5],
    [-2, -4, -6],
    [-2, 4, 2],
    [2, -4, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
  ];

  test.each(testCases)("sum(%s, %s) = %s", (a, b, expected) => {
    expect(functions.sum(a, b)).toBe(expected);
  });
});

describe("test sum with floating point testcases", () => {
  const testCases = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.5, 0.5],
    [-3, 2.5, -0.5],
    [-3, -2.5, -5.5],
    [-2.5, -2.5, -5],
    [2.5, 2.5, 5],
    [-2.5, 2.5, 0],
    [2.4, -2.5, -0.1],
  ];

  test.each(testCases)("sum(%s, %s) = %s", (a, b, expected) => {
    expect(functions.sum(a, b)).toBeCloseTo(expected);
  });
});

describe("Missing parameters", () => {
  const testCases = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];
  test.each(testCases)(
    "sum(%s) throws exception: %s",
    (testValue, expected) => {
      expect(() => functions.sum(testValue)).toThrow(expected);
    }
  );
});
describe("Parameters are not numbers", () => {
  const testCases = [
    ["a", 2, "only numbers allowed"],
    [1, "a", "only numbers allowed"],
    ["a", "b", "only numbers allowed"],
    ["", "", "only numbers allowed"],
    [null, 1, "parameter missing"],
    [undefined, 1, "parameter missing"],
  ];
  test.each(testCases)(
    "sum(%s,%s) throws an exception %s",
    (a, b, expected) => {
      expected(() => functions.sum(a, b)).toThrow(expected);
    }
  );
});
