describe("callback", () => {
  test("the data is peanut butter", (done) => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe("peanut butter");
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchData(callback);
  });
});

function fetchData(callback) {
  setTimeout(() => {
    callback(null, "peanut butter");
  }, 1000);
}
