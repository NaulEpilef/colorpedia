const convert = require("../Convert");

function calcPercent(value, percentage) {
  return Math.ceil(value + value * (percentage / 100));
}

function hex(hex, percentage) {
  if (!hex || !percentage) return null;
  let { r, g, b } = convert.hexToRgb(hex);
  r = calcPercent(r, percentage) <= 255 ? calcPercent(r, percentage) : 255;
  g = calcPercent(g, percentage) <= 255 ? calcPercent(g, percentage) : 255;
  b = calcPercent(b, percentage) <= 255 ? calcPercent(b, percentage) : 255;
  return convert.rgbToHex(r, g, b);
}

function rgb(r, g, b, percentage) {
  if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
    r = calcPercent(r, percentage) <= 255 ? calcPercent(r, percentage) : 255;
    g = calcPercent(g, percentage) <= 255 ? calcPercent(g, percentage) : 255;
    b = calcPercent(b, percentage) <= 255 ? calcPercent(b, percentage) : 255;
    return { r, g, b };
  }
  return null;
}

module.exports = {
  hex,
  rgb,
};
