const { darker } = require("..");

describe("darker.hex", () => {
  test("darkens a color by percentage", () => {
    expect(darker.hex("#6c34f2", 20)).toBe("#5629c1");
  });
  test("floors at #000000", () => {
    expect(darker.hex("#000000", 50)).toBe("#000000");
  });
  test("returns null for missing hex", () => {
    expect(darker.hex(null, 20)).toBeNull();
  });
  test("returns null for missing percentage", () => {
    expect(darker.hex("#6c34f2", 0)).toBeNull();
  });
});

describe("darker.rgb", () => {
  test("darkens rgb values", () => {
    const result = darker.rgb(108, 52, 242, 20);
    expect(result).toEqual({ r: 86, g: 41, b: 193 });
  });
  test("returns null for invalid input", () => {
    expect(darker.rgb(NaN, 0, 0, 20)).toBeNull();
  });
});
