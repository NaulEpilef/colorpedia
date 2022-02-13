## Installation

Install colorpedia with npm

```bash
  npm i --save colorpedia
```

## Usage/Examples

- hexToRgb(hex: string): { r: number, g: number, b: number } | null

```javascript
import { hexToRgb } from "colorpedia";

const rgb = hexToRgb("#6c34f2"); // { r: 108, g: 52, b: 242 }
```

Convert hexadecimal color to rgb color
