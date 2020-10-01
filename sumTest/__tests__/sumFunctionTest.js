"use strict";

const functions = require("../sumFunction");

describe("Test if functions are defined", () => {
  test("function sum is defined", () => {
    expect(functions.sum).toBeDefined();
  });
  test("function subtract is defined", () => {
    expect(functions.subtract).toBeDefined();
  });
});

describe("test sum with integer testcases", () => {
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
    "sum(%s) throws an exception: %s",
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
    ["      ", " ", "only numbers allowed"],
    [null, 1, "parameter missing"],
    [undefined, 1, "parameter missing"],
  ];

  test.each(testCases)(
    "sum(%s,%s) throws an exception %s",
    (a, b, expected) => {
      expect(() => functions.sum(a, b)).toThrow(expected);
    }
  );
});

describe("test subtract with integer testcases", () => {
  const testCases = [
    [1, 1, 0],
    [2, 3, -1],
    [-2, -4, 2],
    [-2, 4, -6],
    [2, -4, 6],
    [0, 0, 0],
    [0, 3, -3],
    [3, 0, 3],
    [0, -3, 3],
    [-3, 0, -3],
  ];

  test.each(testCases)("subtract(%s, %s) = %s", (a, b, expected) => {
    expect(functions.subtract(a, b)).toBe(expected);
  });
});

describe("test subtract with floating point testcases", () => {
  const testCases = [
    [10, 11.5, -1.5],
    [2.5, 3, -0.5],
    [-2.5, 3, -5.5],
    [3, -2.5, 5.5],
    [-3, 2.5, -5.5],
    [-3, -2.5, -0.5],
    [-2.5, -2.5, 0],
    [2.5, 2.5, 0],
    [-2.5, 2.5, -5],
    [2.4, -2.5, 4.9],
  ];

  test.each(testCases)("subtract(%s, %s) = %s", (a, b, expected) => {
    expect(functions.subtract(a, b)).toBeCloseTo(expected);
  });
});

describe("Missing parameters in subtract", () => {
  const testCases = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];

  test.each(testCases)(
    "subtract(%s) throws an exception: %s",
    (testValue, expected) => {
      expect(() => functions.subtract(testValue)).toThrow(expected);
    }
  );
});

describe("Parameters are not numbers in subtract", () => {
  const testCases = [
    ["a", 2, "only numbers allowed"],
    [1, "a", "only numbers allowed"],
    ["a", "b", "only numbers allowed"],
    ["", "", "only numbers allowed"],
    ["      ", " ", "only numbers allowed"],
    [null, 1, "parameter missing"],
    [undefined, 1, "parameter missing"],
  ];

  test.each(testCases)(
    "subtract(%s,%s) throws an exception %s",
    (a, b, expected) => {
      expect(() => functions.subtract(a, b)).toThrow(expected);
    }
  );
});

describe("Test division common cases", () => {
  const testCases = [
    [1, 2, 0.5],
    [4, 2, 2],
    [-4, 2, -2],
    [4, -2, -2],
    [-4, -2, 2],
    [3, 3, 1],
    [2.5, 3.5, 2.5 / 3.5],
    [2.5, 3, 0.8333],
  ];

  test.each(testCases)("divide(%s,%s) = %s", (a, b, expected) => {
    expect(functions.divide(a, b)).toBeCloseTo(expected);
  });
});

describe("Test division special cases", () => {
  const testCases = [
    [0, 0, Number.NaN],
    [2, 0, Number.POSITIVE_INFINITY],
    [-2, 0, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN],
    [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
    [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN],
  ];

  test.each(testCases)("divide(%s,%s)=%s", (a, b, expected) => {
    expect(functions.divide(a, b)).toBe(expected);
  });
});

describe("Missing parameters in divide", () => {
  const testCases = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];

  test.each(testCases)(
    "divide(%s) throws an exception: %s",
    (testValue, expected) => {
      expect(() => functions.divide(testValue)).toThrow(expected);
    }
  );
});

describe("Parameters are not numbers in divide", () => {
  const testCases = [
    ["a", 2, "only numbers allowed"],
    [1, "a", "only numbers allowed"],
    ["a", "b", "only numbers allowed"],
    ["", "", "only numbers allowed"],
    ["      ", " ", "only numbers allowed"],
    [null, 1, "parameter missing"],
    [undefined, 1, "parameter missing"],
  ];

  test.each(testCases)(
    "divide(%s,%s) throws an exception %s",
    (a, b, expected) => {
      expect(() => functions.divide(a, b)).toThrow(expected);
    }
  );
});
