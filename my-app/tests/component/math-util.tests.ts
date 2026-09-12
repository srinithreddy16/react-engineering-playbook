import { describe, test, expect } from "vitest";
import add, { isEven, sumOfDigits } from "../../src/utils/math.utils";

describe("This is Test Suite For Math file", () => {

  test("Should Test add function", () => {
    expect(add(10, 20)).toBe(30);
    expect(add(-10, 20)).toBe(10);
    expect(add(10, -20)).toBe(-10);
    expect(add(-10, -20)).toBe(-30);
  });

  test("Should Test sumofdigits function", () => {
    expect(sumOfDigits(125)).toBe(8);
  });

  test("Should Test isEven function", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(2)).not.toBe(false);

    expect(isEven(3)).toBe(false);
    expect(isEven(3)).not.toBe(true);
  });

});