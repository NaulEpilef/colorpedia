const { invert } = require("..");

describe("invert.hex", () => {
  test("inverts a color", () => {
    expect(invert.hex("#6c34f2")).toBe("#93cb0d");
  });
  test("inverts black to white", () => {
    expect(invert.hex("#000000")).toBe("#ffffff");
  });
  test("inverts white to black", () => {
    expect(invert.hex("#ffffff")).toBe("#000000");
  });
  test("returns null for invalid hex", () => {
    expect(invert.hex(null)).toBeNull();
  });
});

describe("invert.rgb", () => {
  test("inverts rgb values", () => {
    expect(invert.rgb(108, 52, 242)).toEqual({ r: 147, g: 203, b: 13 });
  });
  test("returns null for NaN input", () => {
    expect(invert.rgb(NaN, 0, 0)).toBeNull();
  });
});

describe("invert.rgba", () => {
  test("inverts rgb and preserves alpha", () => {
    expect(invert.rgba(108, 52, 242, 0.5)).toEqual({ r: 147, g: 203, b: 13, a: 0.5 });
  });
  test("returns null for NaN rgb input", () => {
    expect(invert.rgba(NaN, 0, 0, 0.5)).toBeNull();
  });
  test("returns null for NaN alpha", () => {
    expect(invert.rgba(108, 52, 242, NaN)).toBeNull();
  });
});
