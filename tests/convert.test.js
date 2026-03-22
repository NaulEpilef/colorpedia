const { convert } = require("..");

describe("convert.hexToRgb", () => {
  test("converts full hex to rgb", () => {
    expect(convert.hexToRgb("#6c34f2")).toEqual({ r: 108, g: 52, b: 242 });
  });
  test("converts hex without #", () => {
    expect(convert.hexToRgb("6c34f2")).toEqual({ r: 108, g: 52, b: 242 });
  });
  test("converts shorthand hex", () => {
    expect(convert.hexToRgb("#fff")).toEqual({ r: 255, g: 255, b: 255 });
  });
  test("returns null for invalid hex", () => {
    expect(convert.hexToRgb("xyz")).toBeNull();
  });
  test("converts black", () => {
    expect(convert.hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0 });
  });
  test("converts white", () => {
    expect(convert.hexToRgb("#ffffff")).toEqual({ r: 255, g: 255, b: 255 });
  });
});

describe("convert.rgbToHex", () => {
  test("converts rgb to hex", () => {
    expect(convert.rgbToHex(108, 52, 242)).toBe("#6c34f2");
  });
  test("returns null for NaN input", () => {
    expect(convert.rgbToHex(NaN, 0, 0)).toBeNull();
  });
  test("converts black", () => {
    expect(convert.rgbToHex(0, 0, 0)).toBe("#000000");
  });
  test("converts white", () => {
    expect(convert.rgbToHex(255, 255, 255)).toBe("#ffffff");
  });
  test("pads single hex digits", () => {
    expect(convert.rgbToHex(1, 2, 3)).toBe("#010203");
  });
});
