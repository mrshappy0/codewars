const assert = require("chai").assert;
const { tvRemote } = require("../js-solutions/tvRemote-2nd-lvl");

describe("Sample tests", function () {
  it("Mixed", function () {
    assert.strictEqual(tvRemote("Code Wars"), 69);
  });
  it("Lower", function () {
    assert.strictEqual(tvRemote("does"), 16);
    assert.strictEqual(tvRemote("your"), 23);
    assert.strictEqual(tvRemote("solution"), 33);
    assert.strictEqual(tvRemote("work"), 20);
    assert.strictEqual(tvRemote("for"), 12);
    assert.strictEqual(tvRemote("these"), 27);
    assert.strictEqual(tvRemote("words"), 25);
  });
  it("Upper", function () {
    assert.strictEqual(tvRemote("DOES"), 27);
    assert.strictEqual(tvRemote("YOUR"), 26);
    assert.strictEqual(tvRemote("SOLUTION"), 38);
    assert.strictEqual(tvRemote("WORK"), 23);
    assert.strictEqual(tvRemote("FOR"), 21);
    assert.strictEqual(tvRemote("THESE"), 32);
    assert.strictEqual(tvRemote("WORDS"), 28);
  });
  it("Capitalized", function () {
    assert.strictEqual(tvRemote("Does"), 40);
    assert.strictEqual(tvRemote("Your"), 37);
    assert.strictEqual(tvRemote("Solution"), 49);
    assert.strictEqual(tvRemote("Work"), 30);
    assert.strictEqual(tvRemote("For"), 28);
    assert.strictEqual(tvRemote("These"), 41);
    assert.strictEqual(tvRemote("Words"), 35);
  });
});
