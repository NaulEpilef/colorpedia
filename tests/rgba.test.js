const { convert } = require("..");

describe("convert.hexToRgba", () => {
  test("parses 8-digit hex with alpha", () => {
    expect(convert.hexToRgba("#6c34f2ff")).toEqual({ r: 108, g: 52, b: 242, a: 1 });
  });
  test("parses 8-digit hex with 50% alpha", () => {
    const result = convert.hexToRgba("#6c34f280");
    expect(result.r).toBe(108);
    expect(result.g).toBe(52);
    expect(result.b).toBe(242);
    expect(result.a).toBeCloseTo(0.5, 1);
  });
  test("falls back to 6-digit hex with a=1", () => {
    expect(convert.hexToRgba("#6c34f2")).toEqual({ r: 108, g: 52, b: 242, a: 1 });
  });
  test("returns null for invalid hex", () => {
    expect(convert.hexToRgba("xyz")).toBeNull();
  });
});

describe("convert.rgbaToHex", () => {
  test("converts rgba to 8-digit hex", () => {
    expect(convert.rgbaToHex(108, 52, 242, 1)).toBe("#6c34f2ff");
  });
  test("converts with 0 alpha", () => {
    expect(convert.rgbaToHex(108, 52, 242, 0)).toBe("#6c34f200");
  });
  test("defaults alpha to 1 when omitted", () => {
    expect(convert.rgbaToHex(108, 52, 242)).toBe("#6c34f2ff");
  });
  test("returns null for NaN input", () => {
    expect(convert.rgbaToHex(NaN, 0, 0, 1)).toBeNull();
  });
  test("returns null for NaN alpha", () => {
    expect(convert.rgbaToHex(108, 52, 242, NaN)).toBeNull();
  });
});
