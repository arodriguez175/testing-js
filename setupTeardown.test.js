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

describe("city database", () => {
  beforeEach(() => {
    initializeCityDatabase();
    // return initializeCityDatabase(); // return if this function returned a promise
  });

  test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy();
  });

  test("city database has San Juan", () => {
    expect(isCity("San Juan")).toBeTruthy();
  });
});

describe("city database", () => {
  beforeEach(() => {
    return initializeCityDatabase(); // return if this function returns a promise
  });

  test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy();
  });

  test("city database has San Juan", () => {
    expect(isCity("San Juan")).toBeTruthy();
  });
});

// One time setup using beforeAll and afterAll for asynchronous setup
describe("one time setup", () => {
  beforeAll(() => {
    return initializeCityDatabase();
  });

  afterAll(() => {
    return clearCityDatabase();
  });

  test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy();
  });

  test("city database has San Juan", () => {
    expect(isCity("San Juan")).toBeTruthy();
  });
});

// The before* and after* hooks in a describe block only apply within the scope
// of that describe block.

// Applies to all tests in this file
beforeEach(() => {
  return initializeCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Vienna <3 veal", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});
