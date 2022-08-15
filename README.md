## Installation

#### Install colorpedia with npm

```bash
  npm i --save colorpedia
```

#### Install colorpedia with yarn

```bash
  yarn add colorpedia
```

## Usage/Examples

### Convert

- hexToRgb(hex: string): { r: number, g: number, b: number } | null

```javascript
import { convert } from "colorpedia";

const { r, g, b } = convert.hexToRgb("#6c34f2"); // { r: 108, g: 52, b: 242 }
```

**Convert** *hexadecimal* to *rgb*

- rgbToHex(r: number, g: number, b: number): hex: string | null

```javascript
import { convert } from "colorpedia";

const hex = convert.rgbToHex(108, 52, 242); // hex: "#6c34f2"
```

**Convert** *rgb* color to *hexadecimal* color

### Clearer

- hex(hex: string, percentage: number): hex: string | null

```javascript
import { clearer } from "colorpedia";

const hexClearer     = clearer.hex("#6c34f2", 20); // hex: "#823fff"
const hexMoreClearer = clearer.hex("#6c34f2", 40); // hex: "#9849ff"
const hexEvenClearer = clearer.hex("#6c34f2", 60); // hex: "#ad54ff"
```

**Cleared** *hex* in 20, 40 and 60 percent

- rgb(r: number, g: number, b: number): { r: number, g: number, b: number} | null

```javascript
import { clearer } from "colorpedia";

const rgbClearer     = clearer.rgb(108, 52, 242, 20); // { r: 130, g: 63, b: 255 }
const rgbMoreClearer = clearer.rgb(108, 52, 242, 40); // { r: 152, g: 73, b: 255 }
const rgbEvenClearer = clearer.rgb(108, 52, 242, 60); // { r: 173, g: 84, b: 255 }

const { r, g, b } = rgbClearer;
```

**Cleared** *rgb* in 20, 40 and 60 percent

### Darker

- hex(hex: string, percentage: number): hex: string | null

```javascript
import { darker } from "colorpedia";

const hexDarker     = darker.hex("#6c34f2", 20); // hex: "#5629c1"
const hexMoreDarker = darker.hex("#6c34f2", 40); // hex: "#401f91"
const hexEvenDarker = darker.hex("#6c34f2", 60); // hex: "#2b1460"
```

**Darker** *hex* in 20, 40 and 60 percent

- rgb(r: number, g: number, b: number): { r: number, g: number, b: number} | null

```javascript
import { darker } from "colorpedia";

const rgbDarker     = darker.rgb(108, 52, 242, 20); // { r: 86, g: 41, b: 193 }
const rgbMoreDarker = darker.rgb(108, 52, 242, 40); // { r: 64, g: 31, b: 145 }
const rgbEvenDarker = darker.rgb(108, 52, 242, 60); // { r: 43, g: 20, b: 96 }

const { r, g, b} = rgbDarker;
```

**Darker** *rgb* in 20, 40 and 60 percent

### Invert

- hex(hex: string): hex: string | null

```javascript
import { invert } from "colorpedia";

const hexInverted = invert.hex("#6c34f2"); // hex: "#93cb0d"
```

*hex* has been **Inverted**

- rgb(r: number, g: number, b: number): { r: number, g: number, b: number} | null

```javascript
import { invert } from "colorpedia";

const rgbInverted = invert.rgb(108, 52, 242, 20); // { r: 147, g: 203, b: 13 }

const { r, g, b} = rgbInverted;
```

*rgb* has been **Inverted**

### Lightness

- hex(hex: string): lightness: number | null

```javascript
import { lightness } from "colorpedia";

const hexLightness = lightness.hex("#6c34f2"); // lightness: 0.5764705882352941
```

Function has returned the **lighness** of *hex*

- rgb(r: number, g: number, b: number): { r: number, g: number, b: number} | null

```javascript
import { lightness } from "colorpedia";

const rgbLightness = lightness.rgb(108, 52, 242, 20); // lightness: 0.5764705882352941
```

Function has returned the **lighness** of *rgb*