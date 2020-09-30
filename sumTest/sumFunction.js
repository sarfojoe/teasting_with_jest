"use strict";
const onlySpaces = /^[ ]

exports.sum = (a, b) => {
  if (a == undefined || b == undefined) {
    throw new Error("parameter missing");
  }

  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    throw new Error("only numbers allowed");
  }
  return a + b;
};
