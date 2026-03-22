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

describe("darker.hsl", () => {
  test("decreases lightness by percentage", () => {
    expect(darker.hsl(258, 88, 58, 20)).toEqual({ h: 258, s: 88, l: 46 });
  });
  test("floors lightness at 0", () => {
    expect(darker.hsl(258, 88, 0, 20)).toEqual({ h: 258, s: 88, l: 0 });
  });
  test("preserves hue and saturation", () => {
    const result = darker.hsl(180, 50, 60, 25);
    expect(result.h).toBe(180);
    expect(result.s).toBe(50);
  });
  test("returns null for zero percentage", () => {
    expect(darker.hsl(258, 88, 58, 0)).toBeNull();
  });
  test("returns null for NaN input", () => {
    expect(darker.hsl(NaN, 88, 58, 20)).toBeNull();
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

describe("darker.rgba", () => {
  test("darkens rgba values and preserves alpha", () => {
    expect(darker.rgba(108, 52, 242, 0.5, 20)).toEqual({ r: 86, g: 41, b: 193, a: 0.5 });
  });
  test("returns null for NaN rgb input", () => {
    expect(darker.rgba(NaN, 0, 0, 0.5, 20)).toBeNull();
  });
  test("returns null for NaN alpha", () => {
    expect(darker.rgba(108, 52, 242, NaN, 20)).toBeNull();
  });
});
