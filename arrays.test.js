// For testing arrays or iterables
describe("arrays", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  test("the shopping list has milk in it", () => {
    expect(shoppingList).toContain("milk");

    // Another way to check for milk in the shoppingList, and also remove duplicates
    expect(new Set(shoppingList)).toContain("milk");
  });
});
