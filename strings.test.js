// Matching strings against regular expressions
describe("strings", () => {
  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  test('but there is a "stoph" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });
});
