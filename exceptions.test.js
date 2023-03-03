// To test whether a particular function throws an error when it's called
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

describe("exception", () => {
  test("compiling android goes as expected", () => {
    // Checks if the function throws an error when called.
    // The function that throws an exception needs to be
    // wrapped in a function otherwise the
    // toThrow assertion will fail.
    expect(() => compileAndroidCode()).toThrow();

    // Checks if the function throws an error with the error class of Error
    expect(() => compileAndroidCode()).toThrow(Error);

    // Using a string in an error or regex
    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);

    // Matching an exact error message using a regex
    // First expect fails because not an exact match to message
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/);
    expect(() => compileAndroidCode()).toThrow(
      /^you are using the wrong JDK!$/ // This passes
    );
  });
});
