const assert = require("chai").assert;
const { tvRemote } = require("../js-solutions/tvRemote-first-lvl");

describe("Sample Tests", function () {
  it("example", function () {
    assert.strictEqual(tvRemote("codewars"), 36);
  });

  it("misc", function () {
    assert.strictEqual(tvRemote("does"), 16);
    assert.strictEqual(tvRemote("your"), 23);
    assert.strictEqual(tvRemote("solution"), 33);
    assert.strictEqual(tvRemote("work"), 20);
    assert.strictEqual(tvRemote("for"), 12);
    assert.strictEqual(tvRemote("these"), 27);
    assert.strictEqual(tvRemote("words"), 25);
  });
});
