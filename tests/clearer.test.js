const { clearer } = require("..");

describe("clearer.hex", () => {
  test("lightens a color by percentage", () => {
    expect(clearer.hex("#6c34f2", 20)).toBe("#823fff");
  });
  test("caps at #ffffff", () => {
    expect(clearer.hex("#ffffff", 50)).toBe("#ffffff");
  });
  test("returns null for missing hex", () => {
    expect(clearer.hex(null, 20)).toBeNull();
  });
  test("returns null for missing percentage", () => {
    expect(clearer.hex("#6c34f2", 0)).toBeNull();
  });
});

describe("clearer.rgb", () => {
  test("lightens rgb values", () => {
    const result = clearer.rgb(108, 52, 242, 20);
    expect(result).toEqual({ r: 130, g: 63, b: 255 });
  });
  test("returns null for invalid input", () => {
    expect(clearer.rgb(NaN, 0, 0, 20)).toBeNull();
  });
});
