# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [1.1.0] - 2026-03-22

### Added
- **New convert functions** — complete HEX/RGB/HSL/RGBA conversion matrix:
  - `hexToHsl`, `hslToHex`, `rgbToHsl`, `hslToRgb`
  - `hexToRgba`, `rgbaToHex` (8-digit hex with alpha)
  - `rgbaToRgb`, `rgbaToHsl`, `hslToRgba`
- **`clearer.hsl`** — lighten a color by adjusting the HSL lightness channel directly (more perceptually accurate)
- **`clearer.rgba`** — lighten an RGBA color, preserving alpha
- **`darker.hsl`** — darken a color via HSL lightness channel
- **`darker.rgba`** — darken an RGBA color, preserving alpha
- **`invert.rgba`** — invert an RGBA color, preserving alpha
- **`mix` module** — blend two colors: `mix.hex`, `mix.rgb`
- TypeScript type declarations (`index.d.ts`)
- Jest test suite (99 tests across all modules)
- GitHub Actions CI pipeline (Node.js 18, 20, 22)
- ESLint and Prettier configuration
- MIT LICENSE file
- `engines` field (Node.js >=18)
- `exports` field for modern module resolution
- `files` field for lean npm publishes
- README badges (npm version, CI status, license)
- Documented `rgb()` variants for all modules

### Fixed
- Null guard crashes in `Invert` and `Lightness` modules on invalid input
- `Clearer` and `Darker` `rgb()` functions now validate the `percentage` argument
- README examples corrected from ES module `import` to CommonJS `require`
- Removed self-referencing `"colorpedia": "file:"` dependency from `package.json`

### Changed
- Reorganized source files into `src/` with `src/utils/` for shared utilities
- Pre-compiled regex patterns in `convert` for better performance
- License changed from ISC to MIT

## [1.0.5] - 2024-10-12

### Added
- Initial release with `convert`, `clearer`, `darker`, `invert`, and `lightness` modules
