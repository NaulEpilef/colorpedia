const convert = require("../Convert");

function calcPercent(value, percentage) {
  return Math.max(0, Math.floor(value - value * (percentage / 100)));
}

function hex(hex, percentage) {
  if (!hex || !percentage) return null;
  let { r, g, b } = convert.hexToRgb(hex);
  return convert.rgbToHex(
    calcPercent(r, percentage),
    calcPercent(g, percentage),
    calcPercent(b, percentage)
  );
}

function rgb(r, g, b, percentage) {
  if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
    return {
      r: calcPercent(r, percentage),
      g: calcPercent(g, percentage),
      b: calcPercent(b, percentage),
    };
  }
  return null;
}

module.exports = {
  hex,
  rgb,
};
