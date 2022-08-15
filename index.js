const clearer = require("./Clearer");
const convert = require("./Convert");
const darker = require("./Darker");
const invert = require("./Invert");
const lightness = require("./Lightness");

const colorpedia = { clearer, convert, darker, invert, lightness };

module.exports = colorpedia;
