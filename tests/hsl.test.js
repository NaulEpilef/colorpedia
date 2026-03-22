const { convert } = require("..");

describe("convert.rgbToHsl", () => {
  test("converts rgb to hsl", () => {
    expect(convert.rgbToHsl(108, 52, 242)).toEqual({ h: 258, s: 88, l: 58 });
  });
  test("converts black", () => {
    expect(convert.rgbToHsl(0, 0, 0)).toEqual({ h: 0, s: 0, l: 0 });
  });
  test("converts white", () => {
    expect(convert.rgbToHsl(255, 255, 255)).toEqual({ h: 0, s: 0, l: 100 });
  });
  test("returns null for NaN input", () => {
    expect(convert.rgbToHsl(NaN, 0, 0)).toBeNull();
  });
});

describe("convert.hslToRgb", () => {
  test("converts hsl to rgb", () => {
    expect(convert.hslToRgb(258, 88, 58)).toEqual({ r: 110, g: 54, b: 242 });
  });
  test("converts black", () => {
    expect(convert.hslToRgb(0, 0, 0)).toEqual({ r: 0, g: 0, b: 0 });
  });
  test("converts white", () => {
    expect(convert.hslToRgb(0, 0, 100)).toEqual({ r: 255, g: 255, b: 255 });
  });
  test("returns null for NaN input", () => {
    expect(convert.hslToRgb(NaN, 0, 0)).toBeNull();
  });
});

describe("convert.hexToHsl", () => {
  test("converts hex to hsl", () => {
    expect(convert.hexToHsl("#6c34f2")).toEqual({ h: 258, s: 88, l: 58 });
  });
  test("returns null for invalid hex", () => {
    expect(convert.hexToHsl("xyz")).toBeNull();
  });
});

describe("convert.hslToHex", () => {
  test("converts hsl to hex", () => {
    expect(convert.hslToHex(259, 89, 58)).toBeTruthy();
    expect(convert.hslToHex(0, 0, 0)).toBe("#000000");
    expect(convert.hslToHex(0, 0, 100)).toBe("#ffffff");
  });
  test("returns null for NaN input", () => {
    expect(convert.hslToHex(NaN, 0, 0)).toBeNull();
  });
});
