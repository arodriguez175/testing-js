describe("numbers", () => {
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are the same thing for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  // For floating point equality, use toBeCloseTo,
  // to avoid rounding errors
  test("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); Won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works
  });
});
