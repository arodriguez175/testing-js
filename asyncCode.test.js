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

  // Combine async and await with .resolves or .rejects
  test("the data is peanut butter", async () => {
    expect.assertions(1);
    await expect(fetchData()).resolves.toBe("peanut butter");
  });

  test("the fetch fails with an error", async () => {
    function fetchData() {
      return new Promise((resolve, reject) => {
        reject("error");
      });
    }

    expect.assertions(1);
    await expect(fetchData()).rejects.toMatch("error");
  });

  test("the fetch fails with an error", () => {
    return fetchData().catch((e) => expect(e).toMatch("error"));
  });

  test("the data is peanut butter", () => {
    expect.assertions(1);
    return expect(fetchData()).resolves.toBe("peanut butter");
  });

  test("the fetch fails with an error", () => {
    function fetchData() {
      return new Promise((resolve, reject) => {
        reject("error");
      });
    }

    expect.assertions(1);
    return expect(fetchData()).rejects.toMatch("error");
  });
});
