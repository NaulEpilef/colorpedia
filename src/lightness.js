const convert = require("./utils/convert");

function hex(hex) {
  if (!hex) return null;
  const result = convert.hexToRgb(hex);
  if (!result) return null;
  let { r, g, b } = result;
  const rgbIntArray = [parseInt(r), parseInt(g), parseInt(b)];

  const highest = Math.max(...rgbIntArray);
  const lowest = Math.min(...rgbIntArray);

  return (highest + lowest) / 2 / 255;
}

function rgb(r, g, b) {
  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  const rgbIntArray = [parseInt(r), parseInt(g), parseInt(b)];

  const highest = Math.max(...rgbIntArray);
  const lowest = Math.min(...rgbIntArray);

  return (highest + lowest) / 2 / 255;
}

module.exports = {
  hex,
  rgb,
};
