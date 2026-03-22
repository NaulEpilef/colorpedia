const convert = require("./utils/convert");

function hex(hex) {
  if (!hex) return null;
  const result = convert.hexToRgb(hex);
  if (!result) return null;
  let { r, g, b } = result;
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;
  return convert.rgbToHex(r, g, b);
}

function rgb(r, g, b) {
  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;
  return { r, g, b };
}

module.exports = {
  hex,
  rgb,
};
