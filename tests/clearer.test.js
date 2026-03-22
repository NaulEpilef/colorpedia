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

describe("clearer.hsl", () => {
  test("increases lightness by percentage", () => {
    expect(clearer.hsl(258, 88, 58, 20)).toEqual({ h: 258, s: 88, l: 70 });
  });
  test("caps lightness at 100", () => {
    expect(clearer.hsl(258, 88, 100, 20)).toEqual({ h: 258, s: 88, l: 100 });
  });
  test("preserves hue and saturation", () => {
    const result = clearer.hsl(180, 50, 40, 25);
    expect(result.h).toBe(180);
    expect(result.s).toBe(50);
  });
  test("returns null for zero percentage", () => {
    expect(clearer.hsl(258, 88, 58, 0)).toBeNull();
  });
  test("returns null for NaN input", () => {
    expect(clearer.hsl(NaN, 88, 58, 20)).toBeNull();
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

describe("clearer.rgba", () => {
  test("lightens rgba values and preserves alpha", () => {
    expect(clearer.rgba(108, 52, 242, 0.5, 20)).toEqual({ r: 130, g: 63, b: 255, a: 0.5 });
  });
  test("returns null for NaN rgb input", () => {
    expect(clearer.rgba(NaN, 0, 0, 0.5, 20)).toBeNull();
  });
  test("returns null for NaN alpha", () => {
    expect(clearer.rgba(108, 52, 242, NaN, 20)).toBeNull();
  });
});
