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
});
