const { lightness } = require("..");

describe("lightness.hex", () => {
  test("calculates lightness", () => {
    expect(lightness.hex("#6c34f2")).toBeCloseTo(0.58, 2);
  });
  test("black has lightness 0", () => {
    expect(lightness.hex("#000000")).toBe(0);
  });
  test("white has lightness 1", () => {
    expect(lightness.hex("#ffffff")).toBe(1);
  });
  test("returns null for invalid hex", () => {
    expect(lightness.hex(null)).toBeNull();
  });
});

describe("lightness.rgb", () => {
  test("calculates lightness from rgb", () => {
    expect(lightness.rgb(108, 52, 242)).toBeCloseTo(0.58, 2);
  });
  test("returns null for invalid input", () => {
    expect(lightness.rgb(NaN, 0, 0)).toBeNull();
  });
});
