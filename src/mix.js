const convert = require("./utils/convert");

function hex(hex1, hex2, weight) {
  if (weight === undefined) weight = 0.5;
  if (!hex1 || !hex2) return null;
  if (isNaN(weight)) return null;
  const c1 = convert.hexToRgb(hex1);
  const c2 = convert.hexToRgb(hex2);
  if (!c1 || !c2) return null;
  const w = Math.max(0, Math.min(1, weight));
  return convert.rgbToHex(
    Math.round(c1.r * (1 - w) + c2.r * w),
    Math.round(c1.g * (1 - w) + c2.g * w),
    Math.round(c1.b * (1 - w) + c2.b * w)
  );
}

function rgb(r1, g1, b1, r2, g2, b2, weight) {
  if (weight === undefined) weight = 0.5;
  if (isNaN(r1) || isNaN(g1) || isNaN(b1)) return null;
  if (isNaN(r2) || isNaN(g2) || isNaN(b2)) return null;
  if (isNaN(weight)) return null;
  const w = Math.max(0, Math.min(1, weight));
  return {
    r: Math.round(r1 * (1 - w) + r2 * w),
    g: Math.round(g1 * (1 - w) + g2 * w),
    b: Math.round(b1 * (1 - w) + b2 * w),
  };
}

module.exports = { hex, rgb };
