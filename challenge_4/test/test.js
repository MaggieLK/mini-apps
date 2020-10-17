var assert = require('assert');
// import React from "react";
// import ReactDOM from "react-dom";
let board = require("../client/src/components/Board.jsx");

beforeEach(() => {
  //
});

afterEach(() => {
  //
});

describe("App Component Testing", () => {
  it("Renders Hello World Title", () => {
    //
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    console.log(Board.winTest)
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    console.log(Board.winTest)
  });
});