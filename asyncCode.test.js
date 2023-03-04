describe("asynchronous code", () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      resolve("peanut butter");
    });
  }

  // Tests if the promise from fetchData function resolves with the string
  test("the data is peanut butter", () => {
    return fetchData().then((data) => expect(data).toBe("peanut butter"));
  });
});
