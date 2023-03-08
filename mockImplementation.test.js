describe("mocking implementation", () => {
  const myMockFn = jest.fn((cb) => cb(null, true));
  myMockFn((err, val) => console.log(val));
  // true
});

describe("mocking multiple function calls", () => {
  // To recreate a complex behavior of a mock function such that multiple
  // function calls produce different results, use the mockImplementationOnce method
  const myMockFn = jest
    .fn()
    .mockImplementationOnce((cb) => cb(null, true))
    .mockImplementationOnce((cb) => cb(null, false));

  myMockFn((err, val) => console.log(val));
  // true

  myMockFn((err, val) => console.log(val));
  // false
});

describe("mocking multiple function calls with a default implementation", () => {
  const myMockFn = jest
    .fn(() => "default") // Executes this after running out of mock implementations
    .mockImplementationOnce(() => "first call")
    .mockImplementationOnce(() => "second call");

  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
  // first call, second call, default, default
});

describe(".mockReturnThis()", () => {
  // For cases where we have methods that are typically chained
  //   (and thus always need to return this) use .mockReturnThis API
  const myObj = {
    myMethod: jest.fn().mockReturnThis(),
  };

  // is the same as
  const otherObj = {
    myMethod: jest.fn(function () {
      return this;
    }),
  };
});
