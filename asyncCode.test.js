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

  // Using Async/Await
  test("the data is peanut butter", async () => {
    const data = await fetchData();
    expect(data).toBe("peanut butter");
  });

  test("the fetch fails with an error", async () => {
    function fetchData() {
      throw "error";
    }
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch("error");
    }
  });
});
