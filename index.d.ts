export declare const convert: {
  hexToRgb(hex: string): { r: number; g: number; b: number } | null;
  rgbToHex(r: number, g: number, b: number): string | null;
  rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } | null;
  hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } | null;
  hexToHsl(hex: string): { h: number; s: number; l: number } | null;
  hslToHex(h: number, s: number, l: number): string | null;
  hexToRgba(hex: string): { r: number; g: number; b: number; a: number } | null;
  rgbaToHex(r: number, g: number, b: number, a?: number): string | null;
};

export declare const clearer: {
  hex(hex: string, percentage: number): string | null;
  rgb(r: number, g: number, b: number, percentage: number): { r: number; g: number; b: number } | null;
};

export declare const darker: {
  hex(hex: string, percentage: number): string | null;
  rgb(r: number, g: number, b: number, percentage: number): { r: number; g: number; b: number } | null;
};

export declare const invert: {
  hex(hex: string): string | null;
  rgb(r: number, g: number, b: number): { r: number; g: number; b: number };
};

export declare const lightness: {
  hex(hex: string): number | null;
  rgb(r: number, g: number, b: number): number | null;
};

export declare const mix: {
  hex(hex1: string, hex2: string, weight?: number): string | null;
  rgb(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, weight?: number): { r: number; g: number; b: number } | null;
};
