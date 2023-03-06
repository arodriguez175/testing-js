describe("setup and tear down", () => {
  // For work you need to do repeatedly for many tests,
  // you can use beforeEach and afterEach hooks.
  let count = 0;

  beforeEach(() => {
    count++;
  });

  afterEach(() => {
    count = 0; // resets to 0 assure next test expects count to be 1.
  });

  test("increment count", () => {
    expect(count).toBe(1);
  });

  test("increment count again", () => {
    expect(count).toBe(1);
  });

  test("increment count one more time", () => {
    expect(count).toBe(1);
  });
});
