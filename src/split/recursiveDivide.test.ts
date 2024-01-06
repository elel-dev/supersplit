import recursiveDivide from "./recursiveDivide";

describe("Recursive split", () => {
  test("it should split right", () => {
    const result = recursiveDivide("nope.nope.this", [".", "."], [1, 1]);
    expect(result).toBe("this");
  });
});
