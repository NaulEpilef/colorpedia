const { mix } = require("..");

describe("mix.hex", () => {
  test("mixes two colors at 50%", () => {
    expect(mix.hex("#000000", "#ffffff")).toBe("#808080");
  });
  test("weight 0 returns first color", () => {
    expect(mix.hex("#ff0000", "#0000ff", 0)).toBe("#ff0000");
  });
  test("weight 1 returns second color", () => {
    expect(mix.hex("#ff0000", "#0000ff", 1)).toBe("#0000ff");
  });
  test("clamps weight below 0", () => {
    expect(mix.hex("#ff0000", "#0000ff", -1)).toBe("#ff0000");
  });
  test("clamps weight above 1", () => {
    expect(mix.hex("#ff0000", "#0000ff", 2)).toBe("#0000ff");
  });
  test("returns null for missing first color", () => {
    expect(mix.hex(null, "#ffffff")).toBeNull();
  });
  test("returns null for missing second color", () => {
    expect(mix.hex("#000000", null)).toBeNull();
  });
  test("returns null for NaN weight", () => {
    expect(mix.hex("#000000", "#ffffff", NaN)).toBeNull();
  });
});

describe("mix.rgb", () => {
  test("mixes two rgb colors at 50%", () => {
    expect(mix.rgb(0, 0, 0, 255, 255, 255)).toEqual({ r: 128, g: 128, b: 128 });
  });
  test("weight 0 returns first color", () => {
    expect(mix.rgb(255, 0, 0, 0, 0, 255, 0)).toEqual({ r: 255, g: 0, b: 0 });
  });
  test("weight 1 returns second color", () => {
    expect(mix.rgb(255, 0, 0, 0, 0, 255, 1)).toEqual({ r: 0, g: 0, b: 255 });
  });
  test("returns null for NaN first color", () => {
    expect(mix.rgb(NaN, 0, 0, 0, 0, 0)).toBeNull();
  });
  test("returns null for NaN second color", () => {
    expect(mix.rgb(0, 0, 0, NaN, 0, 0)).toBeNull();
  });
});
