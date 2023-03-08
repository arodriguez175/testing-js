// To provide a name for a mock function, instead of it showing up as jest.fn()
// in the test error output

const myMockFn = jest
  .fn()
  .mockReturnValue("default")
  .mockImplementation((scarlar) => 42 + scarlar)
  .mockName("add42");
