import { describe, expect, test } from "vitest";
import add, { sumOfDigits } from "../../src/utils/math.utils.ts";

describe("testing math utility functions", () => {
  test("testing add function", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-2, 3)).toBe(1);
    expect(add(2, -3)).toBe(-1);
    expect(add(-2, -3)).toBe(-5);
  });
  test("Should Test sumofdigits function", () => {
    expect(sumOfDigits(125)).toBe(8);
  });
});
