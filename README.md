# Colorpedia

[![npm version](https://img.shields.io/npm/v/colorpedia.svg)](https://www.npmjs.com/package/colorpedia)
[![CI](https://github.com/NaulEpilef/colorpedia/actions/workflows/ci.yml/badge.svg)](https://github.com/NaulEpilef/colorpedia/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Colorpedia is a comprehensive color manipulation and conversion library for JavaScript and Node.js.
It provides utilities to convert between color formats, adjust brightness, generate lighter or darker shades.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage/Examples](#usageexamples)
  - [1. Convert Functions](#1-convert-functions)
    - [HEX and RGB](#hex-and-rgb)
    - [HEX and HSL](#hex-and-hsl)
    - [HEX and RGBA](#hex-and-rgba)
    - [RGB and HSL](#rgb-and-hsl)
    - [RGB and RGBA](#rgb-and-rgba)
    - [HSL and RGBA](#hsl-and-rgba)
  - [2. Clearer (Lighten Color)](#2-clearer-lighten-color)
  - [3. Darker (Darken Color)](#3-darker-darken-color)
  - [4. Invert Color](#4-invert-color)
  - [5. Lightness Calculation](#5-lightness-calculation)
  - [6. Mix Colors](#6-mix-colors)
- [Contributing](#contributing)
- [Support](#support)

## Installation

Install Colorpedia using npm or yarn:

```bash
npm install colorpedia
```

```bash
yarn add colorpedia
```

## Features

- Convert colors between HEX and RGB formats.
- Generate lighter or darker shades of colors.
- Invert colors and calculate lightness levels.
- Comprehensive support for color manipulation.

## Usage/Examples

### 1. Convert Functions

#### HEX and RGB

- **hexToRgb(hex: string): { r: number, g: number, b: number } | null**

```javascript
const { convert } = require("colorpedia");

const { r, g, b } = convert.hexToRgb("#6c34f2"); // { r: 108, g: 52, b: 242 }
```

Converts a hexadecimal color to an RGB object.

- **rgbToHex(r: number, g: number, b: number): string | null**

```javascript
const { convert } = require("colorpedia");

const hex = convert.rgbToHex(108, 52, 242); // "#6c34f2"
```

Converts an RGB color to a hexadecimal string.

#### HEX and HSL

- **hexToHsl(hex: string): { h: number, s: number, l: number } | null**

```javascript
const { convert } = require("colorpedia");

const { h, s, l } = convert.hexToHsl("#6c34f2"); // { h: 258, s: 88, l: 58 }
```

Converts a hexadecimal color to an HSL object (hue 0–360, saturation 0–100, lightness 0–100).

- **hslToHex(h: number, s: number, l: number): string | null**

```javascript
const { convert } = require("colorpedia");

const hex = convert.hslToHex(258, 88, 58); // "#6e36f2"
```

Converts an HSL color to a hexadecimal string.

#### HEX and RGBA

- **hexToRgba(hex: string): { r: number, g: number, b: number, a: number } | null**

```javascript
const { convert } = require("colorpedia");

const { r, g, b, a } = convert.hexToRgba("#6c34f280"); // { r: 108, g: 52, b: 242, a: 0.5 }
```

Converts an 8-digit HEX color (with alpha) to an RGBA object. Falls back to `a: 1` for standard 6-digit HEX.

- **rgbaToHex(r: number, g: number, b: number, a?: number): string | null**

```javascript
const { convert } = require("colorpedia");

const hex = convert.rgbaToHex(108, 52, 242, 0.5); // "#6c34f280"
```

Converts RGBA values to an 8-digit HEX string. Alpha defaults to `1` if omitted.

#### RGB and HSL

- **rgbToHsl(r: number, g: number, b: number): { h: number, s: number, l: number } | null**

```javascript
const { convert } = require("colorpedia");

const { h, s, l } = convert.rgbToHsl(108, 52, 242); // { h: 258, s: 88, l: 58 }
```

Converts an RGB color to an HSL object.

- **hslToRgb(h: number, s: number, l: number): { r: number, g: number, b: number } | null**

```javascript
const { convert } = require("colorpedia");

const { r, g, b } = convert.hslToRgb(258, 88, 58); // { r: 110, g: 54, b: 242 }
```

Converts an HSL color to an RGB object.

#### RGB and RGBA

- **rgbaToRgb(r: number, g: number, b: number, a?: number): { r: number, g: number, b: number } | null**

```javascript
const { convert } = require("colorpedia");

const rgb = convert.rgbaToRgb(108, 52, 242, 0.5); // { r: 108, g: 52, b: 242 }
```

Strips the alpha channel from an RGBA color, returning a plain RGB object.

#### HSL and RGBA

- **rgbaToHsl(r: number, g: number, b: number, a?: number): { h: number, s: number, l: number } | null**

```javascript
const { convert } = require("colorpedia");

const hsl = convert.rgbaToHsl(108, 52, 242, 0.5); // { h: 258, s: 88, l: 58 }
```

Converts an RGBA color to HSL, ignoring the alpha channel.

- **hslToRgba(h: number, s: number, l: number, a?: number): { r: number, g: number, b: number, a: number } | null**

```javascript
const { convert } = require("colorpedia");

const rgba = convert.hslToRgba(258, 88, 58, 0.5); // { r: 110, g: 54, b: 242, a: 0.5 }
```

Converts an HSL color to RGBA. Alpha defaults to `1` if omitted.

### 2. Clearer (Lighten Color)

- **hex(hex: string, percentage: number): string | null**

```javascript
const { clearer } = require("colorpedia");

const lighterHex = clearer.hex("#6c34f2", 20); // "#823fff"
```

Generates a lighter shade of the given HEX color by a specified percentage.

- **rgb(r: number, g: number, b: number, percentage: number): { r: number, g: number, b: number } | null**

```javascript
const { clearer } = require("colorpedia");

const lighter = clearer.rgb(108, 52, 242, 20); // { r: 130, g: 63, b: 255 }
```

Generates a lighter shade of the given RGB color by a specified percentage.

- **hsl(h: number, s: number, l: number, percentage: number): { h: number, s: number, l: number } | null**

```javascript
const { clearer } = require("colorpedia");

const lighter = clearer.hsl(258, 88, 58, 20); // { h: 258, s: 88, l: 70 }
```

Increases the lightness channel of an HSL color by a specified percentage. More perceptually accurate than the RGB approach.

- **rgba(r: number, g: number, b: number, a: number, percentage: number): { r: number, g: number, b: number, a: number } | null**

```javascript
const { clearer } = require("colorpedia");

const lighter = clearer.rgba(108, 52, 242, 0.5, 20); // { r: 130, g: 63, b: 255, a: 0.5 }
```

Lightens an RGBA color by percentage (using the RGB channels), preserving the alpha value.

### 3. Darker (Darken Color)

- **hex(hex: string, percentage: number): string | null**

```javascript
const { darker } = require("colorpedia");

const darkerHex = darker.hex("#6c34f2", 20); // "#5629c1"
```

Generates a darker shade of the given HEX color by a specified percentage.

- **rgb(r: number, g: number, b: number, percentage: number): { r: number, g: number, b: number } | null**

```javascript
const { darker } = require("colorpedia");

const darkerRgb = darker.rgb(108, 52, 242, 20); // { r: 86, g: 41, b: 193 }
```

Generates a darker shade of the given RGB color by a specified percentage.

- **hsl(h: number, s: number, l: number, percentage: number): { h: number, s: number, l: number } | null**

```javascript
const { darker } = require("colorpedia");

const darker_hsl = darker.hsl(258, 88, 58, 20); // { h: 258, s: 88, l: 46 }
```

Decreases the lightness channel of an HSL color by a specified percentage. More perceptually accurate than the RGB approach.

- **rgba(r: number, g: number, b: number, a: number, percentage: number): { r: number, g: number, b: number, a: number } | null**

```javascript
const { darker } = require("colorpedia");

const darkerRgba = darker.rgba(108, 52, 242, 0.5, 20); // { r: 86, g: 41, b: 193, a: 0.5 }
```

Darkens an RGBA color by percentage (using the RGB channels), preserving the alpha value.

### 4. Invert Color

- **hex(hex: string): string | null**

```javascript
const { invert } = require("colorpedia");

const invertedHex = invert.hex("#6c34f2"); // "#93cb0d"
```

Inverts the color to its complementary shade.

- **rgb(r: number, g: number, b: number): { r: number, g: number, b: number } | null**

```javascript
const { invert } = require("colorpedia");

const invertedRgb = invert.rgb(108, 52, 242); // { r: 147, g: 203, b: 13 }
```

Inverts the RGB color values.

- **rgba(r: number, g: number, b: number, a: number): { r: number, g: number, b: number, a: number } | null**

```javascript
const { invert } = require("colorpedia");

const invertedRgba = invert.rgba(108, 52, 242, 0.5); // { r: 147, g: 203, b: 13, a: 0.5 }
```

Inverts the RGB channels, preserving the alpha value.

### 5. Lightness Calculation

- **hex(hex: string): number | null**

```javascript
const { lightness } = require("colorpedia");

const lightnessValue = lightness.hex("#6c34f2"); // 0.58
```

Calculates the lightness level of the color (0 = darkest, 1 = lightest).

- **rgb(r: number, g: number, b: number): number | null**

```javascript
const { lightness } = require("colorpedia");

const lightnessValue = lightness.rgb(108, 52, 242); // 0.58
```

Calculates the lightness level of an RGB color (0 = darkest, 1 = lightest).

### 6. Mix Colors

- **hex(hex1: string, hex2: string, weight?: number): string | null**

```javascript
const { mix } = require("colorpedia");

const mixed = mix.hex("#000000", "#ffffff");      // "#808080" (50/50)
const mixed = mix.hex("#ff0000", "#0000ff", 0.2); // 20% towards blue
```

Blends two HEX colors. `weight` (0–1) controls the balance towards the second color. Defaults to `0.5`.

- **rgb(r1, g1, b1, r2, g2, b2, weight?: number): { r: number, g: number, b: number } | null**

```javascript
const { mix } = require("colorpedia");

const mixed = mix.rgb(255, 0, 0, 0, 0, 255, 0.5); // { r: 128, g: 0, b: 128 }
```

Blends two RGB colors. `weight` defaults to `0.5`.

## Contributing

We welcome contributions to Colorpedia! Here's how you can help:

1. Fork the repository and make your changes.
2. Open a pull request with a detailed description of your changes.

## Support

If you encounter any issues or have questions, please open an issue on our [GitHub issues page](https://github.com/naulepilef/colorpedia/issues).
