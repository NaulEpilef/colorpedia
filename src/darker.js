const convert = require("./utils/convert");

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
  if (!isNaN(r) && !isNaN(g) && !isNaN(b) && percentage) {
    return {
      r: calcPercent(r, percentage),
      g: calcPercent(g, percentage),
      b: calcPercent(b, percentage),
    };
  }
  return null;
}

function hsl(h, s, l, percentage) {
  if (isNaN(h) || isNaN(s) || isNaN(l) || !percentage) return null;
  return { h, s, l: Math.max(0, Math.floor(l - l * (percentage / 100))) };
}

module.exports = {
  hex,
  rgb,
  hsl,
};
