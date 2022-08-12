const foo = require("../src/index");

describe("foo", () => {
  it('is expected to return "bar"', () => {
    expect(foo()).to.equal("bar");
  });
});
