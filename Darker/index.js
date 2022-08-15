const convert = require("../Convert");

function calcPercent(value, percentage) {
  return Math.floor(value - value * (percentage / 100));
}

function hex(hex, percentage) {
  if (!hex || !percentage) return null;
  let { r, g, b } = convert.hexToRgb(hex);
  r = calcPercent(r, percentage) >= 0 ? calcPercent(r, percentage) : 0;
  g = calcPercent(g, percentage) >= 0 ? calcPercent(g, percentage) : 0;
  b = calcPercent(b, percentage) >= 0 ? calcPercent(b, percentage) : 0;
  return convert.rgbToHex(r, g, b);
}

function rgb(r, g, b, percentage) {
  if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
    r = calcPercent(r, percentage) >= 0 ? calcPercent(r, percentage) : 0;
    g = calcPercent(g, percentage) >= 0 ? calcPercent(g, percentage) : 0;
    b = calcPercent(b, percentage) >= 0 ? calcPercent(b, percentage) : 0;
    return { r, g, b };
  }
  return null;
}

module.exports = {
  hex,
  rgb,
};
