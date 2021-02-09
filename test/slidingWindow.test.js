// Run tests with MATCH=slidingWindow npm test
const assert = require("chai").assert;
const {
  minimumWindowSubstring,
} = require("../js-solutions/substring-sliding-window");

describe("Sample tests", function () {
  it("Mixed", function () {
    assert.strictEqual(tvRemote("ahnhhjh"), "ahnhhj");
  });
  it("Lower", function () {
    assert.strictEqual(tvRemote("Not sure yet"), "Not sure y");
  });
});
