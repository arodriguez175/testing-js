const myObject = require("./myObject");

describe("myObject", () => {
  test("object assignment", () => {
    myObject["two"] = 2;
    expect(myObject).toStrictEqual({
      one: 1,
      two: 2,
    });
  });

  test("object assignment is not equal", () => {
    expect(myObject).not.toStrictEqual({
      one: 1,
      two: 3,
    });
  });
});
