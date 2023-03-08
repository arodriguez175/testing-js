const myFunc = require("./myFunc");

describe("myFunc", () => {
  // Define a mock callback function
  const mockCallback = jest.fn((arg1, arg2) => {
    return arg1 + " " + arg2;
  });

  // Call my function with the mock callback
  myFunc(mockCallback);

  test("has the correct arguments", () => {
    // Check that the mock callback was called with the correct arguments
    expect(mockCallback).toHaveBeenCalledWith("hello", "world");

    // Check that the mock callback returned the expected value
    expect(mockCallback).toHaveReturnedWith("hello world");
  });
});

describe(".mock properties", () => {
  test("myMock1 has 1 instance", () => {
    const myMock1 = jest.fn(); // Create a mock function
    const a = new myMock1(); // Create a new instance of myMock
    console.log(myMock1.mock.instances); // console.log() all the instances from myMock1
    // [ <a> ]

    expect(myMock1.mock.instances.length).toBe(1);
  });

  test("myMock2 contexts is b", () => {
    const myMock2 = jest.fn();
    const b = {};
    const bound = myMock2.bind(b);
    bound();
    console.log(myMock2.mock.contexts); // Logs the value of "this" from b in an array
    // [ <b> ]

    expect(myMock2.mock.contexts[0]).toBe(b);
  });
});

describe("mock return values", () => {
  const myMock = jest.fn();
  console.log(myMock());
  // undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);
  console.log(myMock(), myMock(), myMock(), myMock());
  // 10, x, true, true

  const filterTestFn = jest.fn();

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
  const result = [11, 12].filter((num) => filterTestFn(num));
  console.log(result);
  // [11]

  console.log(filterTestFn.mock.calls[0][0]); // 11
  console.log(filterTestFn.mock.calls[1][0]); // 12
});
