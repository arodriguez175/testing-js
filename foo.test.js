jest.mock("../foo");
const foo = require("./foo");

// Using mockImplementation
foo.mockImplementation(() => 42);
foo();
// 42
