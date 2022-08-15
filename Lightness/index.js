const convert = require("../Convert");

function hex(hex) {
  let { r, g, b } = convert.hexToRgb(hex);
  const rgbIntArray = [parseInt(r), parseInt(g), parseInt(b)];

  const highest = Math.max(...rgbIntArray);
  const lowest = Math.min(...rgbIntArray);

  return (highest + lowest) / 2 / 255;
}

function rgb(r, g, b) {
  const rgbIntArray = [parseInt(r), parseInt(g), parseInt(b)];

  const highest = Math.max(...rgbIntArray);
  const lowest = Math.min(...rgbIntArray);

  return (highest + lowest) / 2 / 255;
}

module.exports = {
  hex,
  rgb,
};
