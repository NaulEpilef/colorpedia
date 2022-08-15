const convert = require("../Convert");

function hex(hex) {
  let { r, g, b } = convert.hexToRgb(hex);
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;
  return convert.rgbToHex(r, g, b);
}

function rgb(r, g, b) {
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;
  return { r, g, b };
}

module.exports = {
  hex,
  rgb,
};
