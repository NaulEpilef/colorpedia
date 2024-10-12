# Colorpedia

Colorpedia is a comprehensive color manipulation and conversion library for JavaScript and Node.js.
It provides utilities to convert between color formats, adjust brightness, generate lighter or darker shades.

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

- **hexToRgb(hex: string): { r: number, g: number, b: number } | null**

```javascript
import { convert } from "colorpedia";

const { r, g, b } = convert.hexToRgb("#6c34f2"); // { r: 108, g: 52, b: 242 }
```

Converts a hexadecimal color to an RGB object.

- **rgbToHex(r: number, g: number, b: number): string | null**

```javascript
import { convert } from "colorpedia";

const hex = convert.rgbToHex(108, 52, 242); // "#6c34f2"
```

Converts an RGB color to a hexadecimal string.

### 2. Clearer (Lighten Color)

- **hex(hex: string, percentage: number): string | null**

```javascript
import { clearer } from "colorpedia";

const lighterHex = clearer.hex("#6c34f2", 20); // "#823fff"
```

Generates a lighter shade of the given color by a specified percentage.

### 3. Darker (Darken Color)

- **hex(hex: string, percentage: number): string | null**

```javascript
import { darker } from "colorpedia";

const darkerHex = darker.hex("#6c34f2", 20); // "#5629c1"
```

Generates a darker shade of the given color by a specified percentage.

### 4. Invert Color

- **hex(hex: string): string | null**

```javascript
import { invert } from "colorpedia";

const invertedHex = invert.hex("#6c34f2"); // "#93cb0d"
```

Inverts the color to its complementary shade.

### 5. Lightness Calculation

- **hex(hex: string): number | null**

```javascript
import { lightness } from "colorpedia";

const lightnessValue = lightness.hex("#6c34f2"); // 0.58
```

Calculates the lightness level of the color.

## Contributing

We welcome contributions to Colorpedia! Here's how you can help:

1. Fork the repository and make your changes.
2. Open a pull request with a detailed description of your changes.

## Support

If you encounter any issues or have questions, please open an issue on our [GitHub issues page](https://github.com/naulepilef/colorpedia/issues).
