function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    result = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1] + result[1], 16),
          g: parseInt(result[2] + result[2], 16),
          b: parseInt(result[3] + result[3], 16),
        }
      : null;
  }
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

module.exports = { hexToRgb };
