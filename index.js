const clearer = require("./src/clearer");
const convert = require("./src/utils/convert");
const darker = require("./src/darker");
const invert = require("./src/invert");
const lightness = require("./src/lightness");

const colorpedia = { clearer, convert, darker, invert, lightness };

module.exports = colorpedia;
