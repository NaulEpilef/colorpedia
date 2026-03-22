var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
var fullMatchRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

function hexToRgb(hex) {
  hex = String(hex);
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = fullMatchRegex.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function decimalToHex(decimal) {
  var hexadecimal = decimal.toString(16);
  return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
}

function rgbToHex(r, g, b) {
  if (!isNaN(r) && !isNaN(g) && !isNaN(b))
    return "#" + decimalToHex(r) + decimalToHex(g) + decimalToHex(b);

  return null;
}

module.exports = {
  hexToRgb,
  rgbToHex,
};
